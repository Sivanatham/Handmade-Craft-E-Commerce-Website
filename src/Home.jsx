  import { useState } from "react";
  import Swal from "sweetalert2";
  import allover from "./assets/allover.jpg";
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
          
    <>
      
        <div className="  overflow-x-hidden  bg-amber-200   sm:bg-amber-950 md:bg-amber-800 lg:bg-orange-100 ">
        <h1 className=" ms-6 pt-6 m-auto text-amber-900  text-5xl sm:text-4xl sm:text-red-700 md:text-5xl lg:text-8xl  lg:text-red-950  ">KAIVINAI</h1>
        <h2 className=" ms-6 m-auto  text-amber-900 text-2xl lg:text-4xl lg:text-red-950 sm:text-2xl sm:text-amber-50 ">Hand made craft</h2>

        {/* login button */}
        <button onClick={() => setShowLogin(!showLogin)} className="ring-2 ring-gray-800/80  m-auto rounded-xl mt-5 w-10 h-3 text-sm pb-7 top-2 left-60 lg:w-20 py-1 font-sans  lg:text-xl absolute lg:top-5 lg:pb-8 lg:left-220 cursor-pointer text-gray-800 text-serif font-bold hover:shadow-xl/30 ">Login</button>
        {showLogin && (
          <div className="h-31 ms-5 right-20 top-15" >
            <form className="ring-3 rounded-xl ring-gray-800/80 w-35 h-30 ms-5 right-3 top-20.5  lg:w-50 lg:h-45 lg:text-3xl lg:p-4 lg:pb-10 absolute lg:right-60 lg:top-6 lg:mt-15  shadow-2xl shadow-amber-800 ">
              <input type="text" placeholder="Enter your username"  className="text-sm w-33 ms-1 mt-2 ps-1 pt-2 lg:p-2 lg:w-40 lg:mt-0"/>
              <br />
              <br />
              <input type="password" placeholder="Enter your password"  className="text-sm w-33 ms-1 mt-2 ps-1 pt-2 lg:p-2 lg:w-40 lg:mt-0 lg:absolute lg:top-20"/>
              <button type="submit" onClick={showAlert} className="ring-2 ring-gray-800/80 m-auto rounded-xl text-sm mt-2 h-5.5 ms-9  lg:w-20 lg:h-10 lg:py-1 font-sans lg:text-lg lg:mt-8.5 cursor-pointer text-gray-800 text-serif font-bold hover:shadow-xl/30 ">
                Submit
              </button>
            </form>
          </div>
        )}

        {/* cart button */}
        <button  onClick={() => setShowCart(!showCart)} className="ring-2 ring-gray-800/80  m-auto rounded-xl mt-5 w-10 h-3 text-sm pb-7 top-2 left-60 lg:w-20 py-1 font-sans  lg:text-xl absolute lg:top-5 lg:pb-8 lg:left-260 cursor-pointer text-gray-800 text-serif font-bold hover:shadow-xl/30 ">
          Cart ({cart.length})
        </button>

        {/* cart div toggle */}
        {showCart && (
          <div className="ring-3 rounded-xl ring-gray-800/80 w-35 h-30 ms-5 right-3 top-20.5  lg:w-40 lg:h-25 lg:pt-2  lg:text-lg ps-6.5 lg:pb-10 absolute lg:right-15 lg:top-6 lg:mt-15  shadow-2xl shadow-amber-800 ">
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
            {cart.length > 0 &&  <button onClick={() => handlePayment(total)} className="ring-2 ring-gray-800/80 m-auto rounded-xl text-sm mt-4 h-10 ms-1 me-5   lg:w-45 lg:mt-5 lg:ms-1 lg:absolute lg:left-0  font-sans lg:text-lg  cursor-pointer text-gray-800 text-serif font-bold hover:shadow-xl/30 ">Proceed to Payment</button>}
          </div>
        )}

        {/* main image */}
      

        <div className=" w-290  h-110 my-5 ms-1 p-0 lg:grid lg:grid-cols-2 lg:gap-10 ">
          <img src={allover} className="w-80 ms-6  lg:ms-20 lg:w-120 lg:me-10 lg:mt-25 mx-20 my-15 rounded-sm border-3 border-red-950 shadow-2xl shadow-amber-800 " />
          <p className=" text-red-950 ms-2.5 me-3  w-85 text-xl font-serif text-justify lg:w-150 lg:mt-40 lg:pr-2 ">
            Discover unique handmade crafts crafted with love and care.
            Each product reflects traditional skills and modern creativity.
            Our mission is to support local artisans and their talent.
            Bring home a touch of authentic art with every purchase.
            Every piece tells a story of culture, passion, and dedication.
            By choosing handmade, you encourage sustainable living and eco-friendly choices.
          </p>
        </div>

        <h3 className=" text-center m-auto text-4xl text-red-950 mt-45 lg:text-center lg:mt-10">Our Product</h3> 
        <div >
          {products.map((product, index) => (
            <div className="  ms-2.5 me-2.5 h-160 my-10 rounded-2xl lg:h-60 border-2 border-amber-800 lg:my-4" key={index} >
              <img src={product.img} alt={product.name} className="w-50 mx-20 m-auto my-7 rounded-2xl border-3 lg:w-60 lg:ms-15 border-red-950 shadow-2xl shadow-amber-800" />
              <h1 className="text-3xl  text-red-950 font-serif  text-center mt-0 lg:mt-10 ">{product.name}</h1>
              <p className="text-xl/8 text-justify mt-2 ms-2.5 me-2.5 text-red-950  font-serif lg:w-200 lg:ms-100 lg:my-2 lg:mt-10 ">{product.desc}</p>
              <h2 className="text-2xl  text-red-950 font-serif  mt-3 text-center font-bold lg:mt-10">Price Rs : {product.price}</h2>
              <button onClick={() => addToCart(product)} className="ring-2 ring-gray-800/80 mt-10 ms-25  m-auto rounded-xl w-40 h-12 font-extrabold px-3 font-sans text-lg   cursor-pointer text-gray-800 text-serif shadow-xl/30 hover:shadow-xl/30 ">Add to cart</button>
            </div>
          ))}
        </div>

        <div className="footer">
          <h1 className="  m-auto text-6xl text-red-950 text-center ">Contact</h1>
            <h3 className="m-auto text-red-950 mt-10 ms-5 text-4xl text-left">KAIVINAI</h3>
            <p  className="m-auto text-red-950 mt-6 ms-5 me-2 text-2xl">Handmade with ❤️ | Supporting Local Artisans</p>
        
              <div className=" m-auto mt-10 me-2 ms-3 text-xl/10 text-red-950  font-light">
                  <p>📞 Phone: +91 98765 43210</p>
                  <p>📧 Email: support@kaivinai.com</p>
                  <p>📍 Location: Trichy, Tamil Nadu</p>
              </div>

        <p className=" m-auto mt-10 ms-3 me-2 text-lg text-center pb-3 text-red-950 ">&copy; {new Date().getFullYear()} Kaivinai Crafts. All Rights Reserved.</p>

        </div> 
      </div>
      
    </>
    
      
    );
  }

  export default Home;
