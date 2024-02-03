import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>(" ");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="flex bg-[rgb(247,247,247)]">
      <AdminSidebar />
      <main className="flex flex-row items-center justify-center gap-8 p-16 m-auto">
        <article className="h-[85vh] p-8 w-full max-w-md bg-white rounded-md shadow-[5px_5px_10px_rgba(0,0,0,0.216)]">
          <form action="" className="flex flex-col items-center gap-8 ">
            <h2 className="uppercase tracking-[2px] ">New Product</h2>
            <div className="relative w-full">
              <label className="absolute left-0 top-[-1.5rem] " htmlFor="">
                Name
              </label>
              <input
                className="p-4 border border-solid border-[color:rgba(13,13,13,0.196)] w-full rounded-md  "
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
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
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
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
            {photo && (
              <img
                className="object-cover w-20 h-20 rounded-md "
                src={photo}
                alt="Your Image"
              />
            )}
            <button
              className="p-4 border-none bg-[rgb(5,107,224)] text-white w-full text-lg cursor-pointer"
              type="submit"
            >
              Create
            </button>
          </form>
        </article>
      </main>
    </div>
  );
};
export default NewProduct;
