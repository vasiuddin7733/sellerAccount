import { Product } from '../types/product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onBuy?: (product: Product) => void;
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <span className="product-category">{product.category}</span>
          <span className="product-seller">Sold by: {product.seller}</span>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <span className="product-stock">{product.stock} in stock</span>
          {onBuy && (
            <button 
              className="buy-button" 
              onClick={() => onBuy(product)}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Buy Now' : 'Out of Stock'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
