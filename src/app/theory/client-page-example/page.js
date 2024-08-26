"use client";
import { useState, useEffect } from "react";
import { fetchList } from "@/actions";

function ClientPage() {
  const [products, setProducts] = useState([]);

  async function getListOfProducts() {
    try {
      const data = await fetchList();
      console.log(data);
      if (data) setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  return (
    <div>
      <h1>Client page server actions example</h1>
      <ul>
        {products && products.length > 0 ? (
          products.map((item) => (
            <li key={item.id}>{item.title}</li> // Ensure 'id' is unique
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </ul>
    </div>
  );
}

export default ClientPage;
