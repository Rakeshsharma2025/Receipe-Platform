import React from 'react';
import './Home.css'; // Importing the Home.css for styling

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "Spaghetti Carbonara is a classic Italian dish made with eggs, Pecorino Romano cheese, pancetta, and black pepper. The creamy sauce is created without cream, using eggs and cheese for a rich texture. Crispy pancetta adds a savory touch, while black pepper enhances the flavor. Served with spaghetti, it's a simple yet delicious meal.",
    image: "https://www.recipetineats.com/tachyon/2023/01/Carbonara_6a.jpg"
  },
  {
    title: "Chicken Tikka Masala",
    description: "Chicken Tikka Masala is a popular Indian dish featuring marinated, grilled chicken simmered in a rich, creamy tomato-based sauce. Flavored with aromatic spices like cumin, coriander, and garam masala, it has a perfect balance of heat and creaminess.",
    image: "https://th.bing.com/th/id/OIP.n0vbj6Fc7vx5uLkEPALRCAHaJr?rs=1&pid=ImgDetMain"
  },
  {
    title: "Beef Tacos",
    description: "Beef tacos are a Mexican favorite made with seasoned, spiced ground or shredded beef, served in soft or hard taco shells. Topped with lettuce, cheese, salsa, and other fresh ingredients, they offer a perfect mix of flavors and textures. ",
    image: "https://th.bing.com/th/id/OIP.ejtD_kyW8y_G0VwousWhuQHaLG?rs=1&pid=ImgDetMain"
  },
  {
    title: "Vegetable Stir Fry",
    description: "Vegetable Stir Fry is a quick and healthy dish made with fresh vegetables like bell peppers, broccoli, and carrots, sautéed in a flavorful sauce with soy sauce, garlic, and ginger. It offers a perfect balance of crunch and savory taste. ",
    image: "https://th.bing.com/th/id/OIP.MwazWhKS4ywVTleV0KCkaQHaLH?rs=1&pid=ImgDetMain"
  },
  {
    title: "Chocolate Cake",
    description: "Chocolate cake is a rich, moist dessert made with cocoa or melted chocolate, offering a deep, indulgent flavor. Often layered with creamy chocolate frosting, it’s a favorite for celebrations.",
    image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-premium-chocolate-delight-cake-361085-m.jpg"
  },
  {
    title: "Caesar Salad",
    description: "Caesar Salad is a fresh and crunchy dish made with romaine lettuce, crispy croutons, Parmesan cheese, and a creamy, tangy Caesar dressing. Often topped with grilled chicken or shrimp, it combines bold flavors with a satisfying texture. ",
    image: "https://th.bing.com/th/id/OIP.w4r5rpVWHIRAdJ4u1skaIgHaLH?rs=1&pid=ImgDetMain"
  }
];

const Home = () => {
  return (
    <div className="container">
      <h1>Recipe Sharing Platform</h1>
      
      {/* First Row - First 3 Recipes */}
      <div className="row">
        {recipes.slice(0, 3).map((recipe, index) => (
          <div className="col-md-4" key={index}>
            <div className="recipe-card">
              <img src={recipe.image} className="recipe-img" alt={recipe.title} />
              <div className="recipe-description">
                <p>{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Next 3 Recipes */}
      <div className="row">
        {recipes.slice(3, 6).map((recipe, index) => (
          <div className="col-md-4" key={index}>
            <div className="recipe-card">
              <img src={recipe.image} className="recipe-img" alt={recipe.title} />
              <div className="recipe-description">
                <p>{recipe.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
