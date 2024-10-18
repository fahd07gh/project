"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function page() {
  const [data, setData] = useState([]);
  async function getBooks() {
    console.log("from getBooks");
    const items = localStorage.getItem("cart");
    const supabase = createClient();
    if (!items) return;
    const { data, error } = await supabase
      .from("books")
      .select(`title,price_buy,price_rent`)
      .filter("id", "in", `(${JSON.parse(items)})`);
    console.log("data", data);
    setData(data);
  }
  useEffect(() => {
    getBooks();
  }, []);

  useLayoutEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div>
      <div>
        <table className="w-full border border-gray-200 ">
          <thead className="border-b border-gray-200">
            <tr>
              <th>Title</th>
              <th>Price for rent</th>
              <th>Price for buy</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data?.map((item) => (
              <tr
                key={item.title}
                className="
                border-b border-gray-200"
              >
                <td>{item.title}</td>
                <td>{item.price_rent}$</td>
                <td>{item.price_buy}$</td>
              </tr>
            ))}
            <tr>
              <td> total</td>
              <td>{data?.reduce((acc, item) => acc + item.price_rent, 0)}$</td>
              <td>{data?.reduce((acc, item) => acc + item.price_buy, 0)}$</td>
            </tr>
          </tbody>
        </table>
        <div>
          <form action="" className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">
              how would you like to proceed?
            </h2>
            <div className="flex gap-2">
              <input type="radio" name="type" id="rent" value="rent" />
              <label htmlFor="rent">rent</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="type" id="buy" value="buy" />
              <label htmlFor="buy">buy</label>
            </div>
            <button>Proceed</button>
          </form>
        </div>
      </div>
    </div>
  );
}
