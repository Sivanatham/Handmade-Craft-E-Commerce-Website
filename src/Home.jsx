import { useState } from "react";
import Swal from "sweetalert2";
import allover from "./assets/allover.jpg";
import allover2 from "./assets/allover2.jpg";
import bag from "./assets/bag.jpg";
import clock from "./assets/clock.jpg";
import cartoy from "./assets/cartoy.jpg";
import flowerpot from "./assets/flowerpot.jpg";
import egg from "./assets/egg.jpg";
import keychain from "./assets/keychain.png";
import pot from "./assets/pot.png";
import penstand from "./assets/penstand.png";
import babytoy from "./assets/babytoy.jpg";

function Home() {
  const products = [
    {
      name: "Bag",
      img: bag,
      desc: "Handmade craft bag crafted with care, perfect for daily use and travel. Durable, stylish, and designed to complement your lifestyle. A must-have accessory for those who love unique creations.",
      price: 200,
    },
    {
      name: "Baby Toy",
      img: babytoy,
      desc: "Soft and colorful handmade toy to keep your baby safe and entertained. Made from child-friendly materials, this toy stimulates creativity and sensory skills. Perfect for playtime or gifting.",
      price: 150,
    },
    {
      name: "Clock",
      img: clock,
      desc: "Elegant handcrafted clock that enhances any room décor. Designed with precision and care, it blends traditional artistry with modern style. A perfect gift or addition to your home.",
      price: 250,
    },
    {
      name: "Car Toy",
      img: cartoy,
      desc: "Durable handmade car toy designed for hours of imaginative play. Its vibrant colors and safe materials make it ideal for kids of all ages. A fun and engaging gift choice.",
      price: 300,
    },
    {
      name: "Decorative Egg",
      img: egg,
      desc: "Decorative handmade egg crafted with care, perfect for home décor or gifting. Each piece is unique, blending traditional skills with artistic flair. Adds elegance and charm wherever placed.",
      price: 250,
    },
    {
      name: "Flower Pot",
      img: flowerpot,
      desc: "Beautifully handcrafted flower pot to showcase your plants in style. Made with care, it combines functionality with aesthetic appeal. Perfect for indoor and outdoor décor.",
      price: 350,
    },
    {
      name: "Key Chain",
      img: keychain,
      desc: "Handmade key chain that is both stylish and durable. Unique designs make it a charming accessory or gift. Keeps your keys organized while reflecting your personality.",
      price: 100,
    },
    {
      name: "Pen Stand",
      img: penstand,
      desc: "Elegant handcrafted pen stand to organize your desk beautifully. Designed with attention to detail, it adds a touch of sophistication to any workspace. Ideal for gifting or personal use.",
      price: 200,
    },
    {
      name: "Hanger Bag",
      img: pot,
      desc: "Unique handmade hanger bag to store items neatly and stylishly. Combines practicality with aesthetic appeal, making it perfect for everyday use. A functional and attractive storage solution.",
      price: 350,
    },
  ];

  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const showAlert = () => {
    Swal.fire({
      title: "Login Successful 🎉",
      text: "Welcome back to Kaivinai!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };



// cart total calculate
const total = cart.reduce((sum, item) => sum + item.price, 0);

const handlePayment = (totalAmount) => {
  Swal.fire({
    title: "Proceed to Payment?",
    text: `Your total is ₹${totalAmount}`,
    icon: "question",
    confirmButtonText: "Pay Now",
    buttonsStyling: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "✅ Payment Successful!",
        text: `Payment of ₹${totalAmount} received. Thank you 🎉`,
        icon: "success",
      });
    }
  });
};




  // add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    Swal.fire({
      title: "Added to Cart 🛒",
      text: `${product.name} has been added!`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
  <body className="bg-orange-200">
      
    <div>
      <h1 className=" relative left-5 text-6xl text-gray-700 m-auto">KAIVINAI</h1>
      <h2 className=" ml-5 text-2xl text-gray-700 m-auto">Hand made craft</h2>

      {/* login button */}
      <button onClick={() => setShowLogin(!showLogin)} className="border-2 border-gray-800 rounded-xl w-20 py-1 font-sans text-xl relative left-240 pointer ">Login</button>
      {showLogin && (
        <div className="login">
          <form>
            <input type="text" placeholder="Enter your username" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit" onClick={showAlert}>
              Submit
            </button>
          </form>
        </div>
      )}

      {/* cart button */}
      <button className="b2" onClick={() => setShowCart(!showCart)}>
        <i className="fas fa-cart-plus"></i> Cart ({cart.length})
      </button>

      {/* cart div toggle */}
      {showCart && (
        <div className="cart-box">
          <h2>🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p>No items yet</p>
          ) : (
            <ul>
              {cart.map((item, i) => (
                <li key={i}>
                  {item.name} - Rs {item.price}
                </li>
              ))}
            </ul>
          )}
          <h3>
            Total: Rs {cart.reduce((total, item) => total + item.price, 0)}
          </h3>
          {cart.length > 0 &&  <button onClick={() => handlePayment(total)}>Proceed to Payment</button>}
        </div>
      )}

      {/* main image */}
      <img src={allover} width="800px" height="500px" />

      <div className="div2">
        <img src={allover2} className="img2" />
        <p>
          Discover unique handmade crafts crafted with love and care.
          Each product reflects traditional skills and modern creativity.
          Our mission is to support local artisans and their talent.
          Bring home a touch of authentic art with every purchase.
          Every piece tells a story of culture, passion, and dedication.
          By choosing handmade, you encourage sustainable living and eco-friendly choices.
        </p>
      </div>

      <h3>Our Product</h3>
      <div className="container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <h2>Price Rs : {product.price}</h2>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>

      <div className="footer">
        <h1>Contact</h1>
          <h3>KAIVINAI</h3>
          <p>Handmade with ❤️ | Supporting Local Artisans</p>
      
            <div className="">
                <p>📞 Phone: +91 98765 43210</p>
                <p>📧 Email: support@kaivinai.com</p>
                <p>📍 Location: Trichy, Tamil Nadu</p>
            </div>

      <p>&copy; {new Date().getFullYear()} Kaivinai Crafts. All Rights Reserved.</p>

      </div>
    </div>
  
    </body>
  );
}

export default Home;
