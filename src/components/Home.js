import React from 'react';
import Header from "../components/Header";
import Product from "../components/Product";
import Container from "../components/Container";
import Input from "../components/Input";
import ProductsDel from "../components/ProductsDel";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "./Home.css"

const Home = () => {
  return (
    <> 
    <Header/>
        <Product/>
       <div className="homePage">
       
        <Container/>
        <div className="homeInputProductDel">
        <Input/>
        <ProductsDel/>
        </div>
        <div className="homeButton">
        <Button/>
        </div>
       </div>
       <Footer/>
        </>

  )
}

export default Home