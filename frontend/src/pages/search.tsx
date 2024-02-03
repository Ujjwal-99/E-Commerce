import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addToCartHandler = () => {};
  const isNextPage = page < 4;
  const isPrevPage = page > 1;

  return (
    <div className="flex flex-row items-stretch justify-start gap-8 p-8 min-h-[calc(100vh-6.5vh)]">
      <aside className="min-w-80 shadow-[2px_5px_10px_rgba(0,0,0,0.384)] p-8 flex flex-col justify-start items-stretch gap-2 ">
        <h2 className="tracking-[3px] font-light uppercase text-xl ">
          Filters
        </h2>
        <div className="">
          <h4>Sorts</h4>
          <select
            value={sort}
            className="w-full p-4 bg-white border border-solid border-[rgba(154,154,154,0.38)] rounded-xl m-2]"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            className="w-full p-4 bg-white border accent-red-600 border-solid border-[rgba(154,154,154,0.38)] rounded-xl m-2]"
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            className="w-full p-4 bg-white border border-solid border-[rgba(154,154,154,0.38)] rounded-xl m-2]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample1</option>
            <option value="">Sample2</option>
          </select>
        </div>
      </aside>
      <main className="w-full p-1 ">
        <h1 className="font-light uppercase tracking-[3px] text-xl">
          Products
        </h1>
        <input
          className="block w-1/2 p-4 m-4 text-xl border rounded-md bg-inherit"
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4 h-[calc(100% - 10rem)] overflow-y-auto">
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
          </div>
          <article className="flex flex-row items-center justify-center gap-4 ">
            <button
              className="flex  justify-center items-center gap-4 cursor-pointer px-4 py-4 font-sans text-white rounded-xl disabled:cursor-not-allowed disabled:opacity-[0.5] disabled:text-[rgb(46,46,46)]  bg-[rgb(0,104,136)]"
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of {4}
            </span>
            <button
              className="flex flex-row justify-center items-center gap-4 cursor-pointer px-4 font-sans py-4 text-white rounded-xl disabled:cursor-not-allowed disabled:opacity-[0.5] disabled:text-[rgb(46,46,46)]  bg-[rgb(0,104,136)]"
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Search;
