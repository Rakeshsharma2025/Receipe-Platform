import React from 'react';
import './About.css'; // Importing the About.css for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Foodie</h1>
      <p>Welcome to <strong>Foodie</strong>, your ultimate destination for learning and exploring recipes from around the world!</p>
      <p>At <strong>Foodie</strong>, we believe that cooking should be fun, easy, and accessible to everyone—whether you are a beginner or a seasoned chef. Our platform offers a diverse collection of recipes, cooking tips, and step-by-step tutorials to help you master the art of cooking.</p>
      <p>We bring you authentic and delicious recipes from various countries, including <strong>Italian, Indian, Mexican, Chinese, French, Thai, and Middle Eastern cuisines</strong>. Whether you want to try classic <em>Spaghetti Carbonara</em>, rich <em>Butter Chicken</em>, flavorful <em>Tacos</em>, or comforting <em>Ramen</em>, we have everything you need to create mouthwatering dishes at home.</p>
      <p>Our mission is to connect food lovers across cultures, making it easy to explore and experiment with international flavors. Join us on this culinary journey and discover the joy of cooking with <strong>Foodie</strong>!</p>
      <img src="https://th.bing.com/th/id/OIP.8vJ01I-9PMVHl8Vg9OCltAHaE8?rs=1&pid=ImgDetMain" alt="Delicious Food" className="about-image" />
    </div>
  );
}

export default About;
