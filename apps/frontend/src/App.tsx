import { useState, useEffect } from 'react';
import { Product, CreateProductDto } from './types/product';
import { productService } from './services/api';
import { ProductCard } from './components/ProductCard';
import { ProductForm } from './components/ProductForm';
import './App.css';

type View = 'browse' | 'sell';

function App() {
  const [view, setView] = useState<View>('browse');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products. Make sure the backend server is running.');
      console.error('Error loading products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateProduct = async (productData: CreateProductDto) => {
    try {
      setIsSubmitting(true);
      setError(null);
      const newProduct = await productService.createProduct(productData);
      setProducts([...products, newProduct]);
      setView('browse');
      alert('Product listed successfully!');
    } catch (err) {
      setError('Failed to create product. Please try again.');
      console.error('Error creating product:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBuy = (product: Product) => {
    alert(`Added ${product.name} to cart! (This is a demo - no actual purchase)`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="logo">🛒 SellerAccount</h1>
          <nav className="nav">
            <button
              className={`nav-button ${view === 'browse' ? 'active' : ''}`}
              onClick={() => setView('browse')}
            >
              Browse Products
            </button>
            <button
              className={`nav-button ${view === 'sell' ? 'active' : ''}`}
              onClick={() => setView('sell')}
            >
              Sell Product
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {view === 'browse' && (
            <div className="browse-view">
              <h2>Shop Products</h2>
              {isLoading ? (
                <div className="loading">Loading products...</div>
              ) : products.length === 0 ? (
                <div className="empty-state">
                  <p>No products available. Be the first to list a product!</p>
                </div>
              ) : (
                <div className="products-grid">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onBuy={handleBuy}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {view === 'sell' && (
            <div className="sell-view">
              <ProductForm onSubmit={handleCreateProduct} isLoading={isSubmitting} />
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2024 SellerAccount - Buy and Sell Products Online</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
