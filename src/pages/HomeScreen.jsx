import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CardsList from "../components/CardsList";
import SkeletonCard from "../components/ui/SkeletonCard";
import SkeletonCardList from "../components/SkeletonCardList";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const[loading,setLoading]=useState(true);

  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();

  });

  return (
    <>
      <Navbar />
     {products.length>0 && <CardsList products={products}/>}
     {loading && <SkeletonCardList/>}
    </>
  );
}
