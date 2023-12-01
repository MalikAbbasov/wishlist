import React, { useEffect, useState } from "react";
import "./favori.css";
function Favori() {
  const [product, setProduct] = useState([]);
  const [favori, setFavori] = useState(
    localStorage.getItem("favori")
      ? JSON.parse(localStorage.getItem("favori"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("favori", JSON.stringify(favori));
  }, [favori]);



  useEffect(() => {
    productData();
  }, []);

  const productData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  productData();

  const addFavori = (item) => {
    const filtered = favori.find((x) => x.id === item.id);
    if (filtered) {
      setFavori(favori.filter((x) => x.id !== item.id));
    } else {
      setFavori([...favori, item]);
    }
  };

  return (
    <div>
      <div className="product_card">
        {favori.map((item) => (
          <ul className="products" key={item.id}>
            <div className="icon">
              <i className="fa-solid fa-heart"></i>
            </div>
            <img className="image" src={item.image} alt="" />
            <li className="name">Name: {item.title}</li>
            <li className="price">Price: {item.price}$</li>
            <li className="description">
              Description: {item.description.slice(0, 55)}
            </li>
            <li className="category">Category: {item.category}</li>
          </ul>
        ))}
      </div>

      {
        <div className="product_card">
          {product.map((x) => (
            <ul className="products" key={x.id}>
              <div className="icon">
                <i
                  onClick={() => addFavori(x)}
                  className="fa-solid fa-heart"
                ></i>
              </div>
              <img className="image" src={x.image} alt="" />
              <li className="name">Name: {x.title}</li>
              <li className="price">Price: {x.price}$</li>
              <li className="description">
                Description: {x.description.slice(0, 55)}
              </li>
              <li className="category">Category: {x.category}</li>
            </ul>
          ))}
        </div>
      }
    </div>
  );
}

export default Favori;
