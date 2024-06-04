import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "By- Rishav Singh",
      message: "SapId: 500105685, RollNo: R2132220149, Batch: 1 (FSAI)Non-Honors.",
      timestamp: new Date(),
    },
  ]);

  return (
    <div>
      <Navbar />
      <center>
        <h1>Invoice Generation Software</h1>
      </center>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            message={post.message}
            timestamp={post.timestamp}
          />
        ))}
      </div>
      <img
        src="logo512.png" // Replace with the actual path to your image
        alt="Secure and Reliable Image"
        style={{ maxWidth: '40%', borderRadius: '8px', float: 'right' }} // Adjust styles as needed
      />
      <section className="features">
        <div className="feature">
          <h2>Easy to Use</h2>
          <p>Intuitive and user-friendly interface for quick invoicing.</p>
        </div>
        <div className="feature">
          <h2>Customizable Templates</h2>
          <p>Create professional invoices with customizable templates.</p>
        </div>
        <div className="feature text-with-image">
          <div style={{ float: 'left', marginRight: '20px' }}>
            <h2>Secure and Reliable</h2>
            <p>Your data is safe and transactions are securely processed.</p>
          </div>
          {/* Add an image here if needed */}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <p>"The invoice generation software has streamlined our billing process. It's a game-changer!"</p>
      </section>

      <section className="cta">
        <h2>Start Invoicing Today</h2>
        <p>Experience the convenience of our invoice generation software. Get started now!</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
