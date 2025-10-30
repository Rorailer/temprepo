# Etsy Listings Fetcher

This script fetches all active listings from a single Etsy seller using the Etsy API v3 and saves them to a JSON file.

## Setup

### 1. Get Your Etsy API Key

1. Go to [Etsy Developers](https://www.etsy.com/developers/your-apps)
2. Create a new app or use an existing one
3. Copy your API Key (Keystring)

### 2. Find Your Shop ID

You can use either:
- **Shop Name**: The name in your shop URL (e.g., `MyShopName`)
- **Shop ID**: Numeric ID from Etsy (e.g., `12345678`)

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your credentials:

```env
ETSY_API_KEY=your_actual_api_key_here
ETSY_SHOP_ID=your_shop_id_or_name_here
```

## Usage

### Run the script:

```bash
bun run fetch:etsy
```

Or directly:

```bash
node scripts/etsyFetchListings.js
```

## Output

The script will:
1. Fetch all active listings from the specified shop
2. Fetch images for each listing
3. Save everything to `data/etsy-listings.json`

### Output Format:

```json
{
  "shop_id": "MyShopName",
  "fetched_at": "2025-10-29T12:00:00.000Z",
  "total_listings": 25,
  "listings": [
    {
      "listing_id": 123456789,
      "title": "Product Title",
      "description": "Product description...",
      "price": {
        "amount": 2999,
        "divisor": 100,
        "currency_code": "USD"
      },
      "quantity": 10,
      "state": "active",
      "url": "https://www.etsy.com/listing/123456789",
      "images": [
        {
          "url_75x75": "https://...",
          "url_170x135": "https://...",
          "url_570xN": "https://...",
          "url_fullxfull": "https://..."
        }
      ]
      // ... more fields
    }
    // ... more listings
  ]
}
```

## API Rate Limits

- Etsy allows **10 requests per second**
- The script includes automatic rate limiting (100ms delay between requests)
- For large shops, the script may take several minutes to complete

## Features

- ✅ Fetches all active listings (handles pagination automatically)
- ✅ Retrieves listing images
- ✅ Rate limiting built-in
- ✅ Error handling
- ✅ Progress tracking
- ✅ Saves to organized JSON file

## Customization

You can modify the script to:
- Fetch additional data (inventory, shipping profiles, etc.)
- Filter listings by specific criteria
- Export to different formats (CSV, database, etc.)

## Troubleshooting

**"Please set your ETSY_API_KEY"**
- Make sure you created a `.env` file with your API key

**"HTTP error! status: 401"**
- Your API key is invalid or expired

**"HTTP error! status: 404"**
- Shop ID not found - check the shop name/ID is correct

**"HTTP error! status: 429"**
- Rate limit exceeded - the script will retry automatically

## Additional Resources

- [Etsy API v3 Documentation](https://developers.etsy.com/documentation/)
- [Get Listings by Shop](https://developers.etsy.com/documentation/reference/#operation/getListingsByShop)
