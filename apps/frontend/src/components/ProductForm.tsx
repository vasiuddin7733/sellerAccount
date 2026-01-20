import { useState, FormEvent } from 'react';
import { CreateProductDto } from '../types/product';
import './ProductForm.css';

interface ProductFormProps {
  onSubmit: (product: CreateProductDto) => void;
  isLoading?: boolean;
}

export function ProductForm({ onSubmit, isLoading }: ProductFormProps) {
  const [formData, setFormData] = useState<CreateProductDto>({
    name: '',
    description: '',
    price: 0,
    category: '',
    image: '',
    seller: '',
    stock: 0,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      name: '',
      description: '',
      price: 0,
      category: '',
      image: '',
      seller: '',
      stock: 0,
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Sell Your Product</h2>
      
      <div className="form-group">
        <label htmlFor="name">Product Name *</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description *</label>
        <textarea
          id="description"
          required
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Price ($) *</label>
          <input
            type="number"
            id="price"
            required
            min="0"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock *</label>
          <input
            type="number"
            id="stock"
            required
            min="0"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) || 0 })}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category *</label>
        <select
          id="category"
          required
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="">Select a category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Garden">Home & Garden</option>
          <option value="Appliances">Appliances</option>
          <option value="Books">Books</option>
          <option value="Sports">Sports</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL *</label>
        <input
          type="url"
          id="image"
          required
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="form-group">
        <label htmlFor="seller">Seller Name *</label>
        <input
          type="text"
          id="seller"
          required
          value={formData.seller}
          onChange={(e) => setFormData({ ...formData, seller: e.target.value })}
        />
      </div>

      <button type="submit" className="submit-button" disabled={isLoading}>
        {isLoading ? 'Listing Product...' : 'List Product'}
      </button>
    </form>
  );
}
