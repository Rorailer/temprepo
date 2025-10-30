/**
 * Etsy API v3 - Fetch All Listings from a Single Seller
 * * Requirements:
 * - Etsy API Key (from https://www.etsy.com/developers/your-apps)
 * - Shop ID or Shop Name
 * * Install dependencies: bun install node-fetch
 */

import fs from 'fs';
import path from 'path';

// Configuration
const CONFIG = {
  // Recommended: Use environment variables
  API_KEY: process.env.ETSY_API_KEY || 'YOUR_ETSY_API_KEY_HERE',
  SHOP_ID: process.env.ETSY_SHOP_ID || 'YOUR_SHOP_ID_HERE', // Can be shop name or shop ID
  OUTPUT_FILE: './data/etsy-listings.json',
  BASE_URL: 'https://openapi.etsy.com/v3/application',
  LIMIT: 100, // Max items per request (Etsy allows up to 100)
};

/**
 * Fetch all active listings from an Etsy shop
 */
async function fetchShopListings(shopId, apiKey) {
  let allListings = [];
  let offset = 0;
  let hasMore = true;

  console.log(`Fetching listings for shop: ${shopId}...`);

  while (hasMore) {
    try {
      const url = `${CONFIG.BASE_URL}/shops/${shopId}/listings/active?limit=${CONFIG.LIMIT}&offset=${offset}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        allListings = allListings.concat(data.results);
        console.log(`Fetched ${data.results.length} listings (Total: ${allListings.length})`);
        
        // Check if there are more results
        offset += CONFIG.LIMIT;
        // Fix: Check if the number of results fetched equals the limit for pagination
        hasMore = data.results.length === CONFIG.LIMIT; 
      } else {
        hasMore = false;
      }

      // Rate limiting - Etsy allows 10 requests per second
      await sleep(100);

    } catch (error) {
      console.error('Error fetching listings:', error.message);
      throw error;
    }
  }

  return allListings;
}

/**
 * Fetch detailed information for each listing (optional)
 */
async function fetchListingDetails(listingId, apiKey) {
  try {
    const url = `${CONFIG.BASE_URL}/listings/${listingId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching listing ${listingId}:`, error.message);
    return null;
  }
}

/**
 * Fetch listing images
 */
async function fetchListingImages(listingId, apiKey) {
  try {
    const url = `${CONFIG.BASE_URL}/listings/${listingId}/images`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(`Error fetching images for listing ${listingId}:`, error.message);
    return [];
  }
}

/**
 * Save data to JSON file
 */
function saveToFile(data, filename) {
  const dir = path.dirname(filename);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`\n✅ Data saved to: ${filename}`);
}

/**
 * Sleep utility for rate limiting
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main execution
 */
async function main() {
  try {
    console.log('=== Etsy Listings Fetcher ===\n');

    // Validate configuration
    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_ETSY_API_KEY_HERE') {
      throw new Error('Please set your ETSY_API_KEY in environment variables or in the script');
    }

    if (!CONFIG.SHOP_ID || CONFIG.SHOP_ID === 'YOUR_SHOP_ID_HERE') {
      throw new Error('Please set your ETSY_SHOP_ID in environment variables or in the script');
    }

    // Fetch all listings
    const listings = await fetchShopListings(CONFIG.SHOP_ID, CONFIG.API_KEY);

    console.log(`\n📦 Total listings fetched: ${listings.length}`);

    // Optional: Fetch images for each listing
    console.log('\n🖼️  Fetching images for listings...');
    for (let i = 0; i < listings.length; i++) {
      const listing = listings[i];
      const images = await fetchListingImages(listing.listing_id, CONFIG.API_KEY);
      listings[i].images = images;
      
      console.log(`Progress: ${i + 1}/${listings.length}`);
      await sleep(100); // Rate limiting
    }

    // Prepare final data structure
    const output = {
      shop_id: CONFIG.SHOP_ID,
      fetched_at: new Date().toISOString(),
      total_listings: listings.length,
      listings: listings,
    };

    // Save to file
    saveToFile(output, CONFIG.OUTPUT_FILE);

    console.log('\n✨ Done!');
    console.log(`Total listings: ${listings.length}`);

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();