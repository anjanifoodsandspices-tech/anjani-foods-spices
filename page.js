import Link from 'next/link'
import '../globals.css'

export default function Products() {
  const products = [
    { name: 'Red Chili Powder', icon: '🌶️', desc: 'Premium quality pure red chili powder', price: '$12' },
    { name: 'Turmeric Powder', icon: '🟡', desc: 'High curcumin organic turmeric', price: '$15' },
    { name: 'Coriander Powder', icon: '🌿', desc: 'Fresh ground coriander seeds', price: '$10' },
    { name: 'Cumin Seeds', icon: '🟫', desc: 'Premium quality cumin seeds', price: '$14' },
    { name: 'Garam Masala', icon: '🍲', desc: 'Aromatic spice blend', price: '$18' },
    { name: 'Black Pepper', icon: '⚫', desc: 'Freshly ground black pepper', price: '$16' },
    { name: 'Fried Onions', icon: '🧅', desc: 'Crispy fried onions', price: '$11' },
    { name: 'Mustard Seeds', icon: '🟢', desc: 'Premium mustard seeds', price: '$9' },
  ]

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">🌶️ Anjani Foods & Spices</div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Our Products</h1>
            <p>Explore our wide range of premium spices</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="products-grid">
              {products.map((product, idx) => (
                <div key={idx} className="product-card">
                  <div className="product-icon">{product.icon}</div>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <p style={{ fontWeight: 'bold', color: '#D2691E', marginTop: '15px' }}>{product.price}</p>
                  <button className="btn" style={{ marginTop: '15px' }}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 Anjani Foods & Spices. All rights reserved.</p>
          <p>Email: info@anjanifoodsandspices.com | Phone: +91 XXXX XXXX XXXX</p>
        </div>
      </footer>
    </>
  )
}
