import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Read() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    images: [
       
    ],
  });

  const productDitail = (id) => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((resp) => resp.json())
      .then((resp) => setProduct(resp));
  };

  useEffect(() => {
    productDitail(id);
  }, []);

  return (
    <main className="container">
      <div class="card">
        <img src={product.images[0]} width={400} height={300} alt=""></img>
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card Subtitle</h6>
          <p class="card-text">
                {product.description}
          </p>
        
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
     
    </main>
  );
}
