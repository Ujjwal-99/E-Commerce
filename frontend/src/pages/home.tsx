import { Link } from "react-router-dom";
import image from "../assets/cover.jpg";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="p-8 py-[5%] flex flex-col h-[calc(100vh-4rem)] w-full">
      <section
        className="w-full m-auto bg-center bg-cover h-80 "
        style={{ backgroundImage: `url(${image})` }}
      ></section>
      <h1 className="flex flex-row items-center justify-between mt-12 tracking-[1px] font-light uppercase w-full">
        Latest Products
        <Link to="/search" className="font-thin">
          More
        </Link>
      </h1>
      <main className="flex flex-wrap w-full gap-6 mt-6 ">
        <ProductCard
          productId="12341234"
          name="Macbook"
          price={100000}
          stock={456}
          handler={addToCartHandler}
          photo="https://rukminim2.flixcart.com/image/128/128/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=70&crop=false"
        />
        <ProductCard
          productId="12341234"
          name="Macbook"
          price={100000}
          stock={456}
          handler={addToCartHandler}
          photo="https://rukminim2.flixcart.com/image/128/128/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=70&crop=false"
        />
        <ProductCard
          productId="12341234"
          name="Macbook"
          price={100000}
          stock={456}
          handler={addToCartHandler}
          photo="https://rukminim2.flixcart.com/image/128/128/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=70&crop=false"
        />
        <ProductCard
          productId="12341234"
          name="Macbook"
          price={100000}
          stock={456}
          handler={addToCartHandler}
          photo="https://rukminim2.flixcart.com/image/128/128/kruyw7k0/computer/v/x/v/na-thin-and-light-laptop-apple-original-imag5jt7u9fzenqb.jpeg?q=70&crop=false"
        />
      </main>
    </div>
  );
};

export default Home;
