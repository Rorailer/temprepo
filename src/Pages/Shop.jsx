import React, { useState, useMemo, useEffect } from 'react';
import Card from '../Components/Card';
import Title from '../Components/Title';
import allProducts from '../data/products.json';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    // In a real app, you might fetch this data.
    // For now, we're just setting it from the imported JSON.
    setProducts(allProducts);
  }, []);

  const categories = ['All', 'Cosplay', 'Wallets', 'Purses', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let prods = [...products];

    // Filter by category
    if (category !== 'All') {
      prods = prods.filter(p => p.category === category);
    }

    // Filter by search term
    if (searchTerm) {
      prods = prods.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort products
    if (sortBy === 'price-asc') {
      prods.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      prods.sort((a, b) => b.price - a.price);
    }

    return prods;
  }, [products, searchTerm, category, sortBy]);

  return (
    <div id='Main' className="flex flex-col w-[85vw] min-h-screen mx-auto gap-8 py-8">
      <Title text="Our Collection" />

      {/* Filters Section */}
      <div id="filters" className='flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-lg shadow'>
        {/* Search Input */}
        <div className="relative grow w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="font-medium">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="font-medium">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div id="grid" className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              oldPrice={product.oldPrice}
              newPrice={product.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;

