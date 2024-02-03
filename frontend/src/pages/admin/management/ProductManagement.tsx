import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);
  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="flex bg-[rgb(247,247,247)]">
      <AdminSidebar />
      <main className="flex flex-row items-center justify-center gap-8 p-16 m-auto">
        <section className="overflow-y-auto w-full h-[85vh] max-w-[500px] shadow-[0px_5px_5px_rgba(0,0,0,0.216)] bg-white p-20 relative flex flex-col gap-4 rounded-md">
          <strong className="font-light">ID-ad;sfdksjfjf</strong>
          <img
            className="object-cover w-full h-full "
            src={photo}
            alt="Product"
          />
          <p className="text-center tracking-[2px] uppercase ">{name}</p>
          {stock > 0 ? (
            <span className="absolute text-green-600 right-8 top-8 ">
              {stock} Available
            </span>
          ) : (
            <span className="text-red-600 right-8 top-8">Not Available</span>
          )}
          <h3 className="font-bold text-[2rem]  text-center">${price}</h3>
        </section>
        <article className="h-[85vh] p-8 w-full max-w-md bg-white rounded-md shadow-[5px_5px_10px_rgba(0,0,0,0.216)]">
          <form
            action=""
            onSubmit={submitHandler}
            className="flex flex-col items-center gap-8 "
          >
            <h2 className="uppercase tracking-[2px] ">Manage</h2>
            <div className="relative w-full">
              <label className="absolute left-0 top-[-1.5rem] " htmlFor="">
                Name
              </label>
              <input
                className="p-4 border border-solid border-[color:rgba(13,13,13,0.196)] w-full rounded-md  "
                required
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div className="relative w-full">
              <label className="absolute left-0 top-[-1.5rem] " htmlFor="">
                Price
              </label>
              <input
                className="p-4 border border-solid border-[color:rgba(13,13,13,0.196)] w-full rounded-md  "
                required
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div className="relative w-full">
              <label className="absolute left-0 top-[-1.5rem] " htmlFor="">
                Stock
              </label>
              <input
                className="p-4 border border-solid border-[color:rgba(13,13,13,0.196)] w-full rounded-md  "
                required
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div className="relative w-full">
              <label className="absolute left-0 top-[-1.5rem] " htmlFor="">
                Photo
              </label>
              <input
                className="p-4 border border-solid border-[color:rgba(13,13,13,0.196)] w-full rounded-md  "
                required
                type="file"
                onChange={changeImageHandler}
              />
            </div>
            {photoUpdate && (
              <img
                className="object-cover w-20 h-20 rounded-md "
                src={photoUpdate}
                alt="Your Image"
              />
            )}
            <button
              className="p-4 border-none bg-[rgb(5,107,224)] text-white w-full text-lg cursor-pointer"
              type="submit"
            >
              Update
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
