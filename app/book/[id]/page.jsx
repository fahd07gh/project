// @ts-nocheck
import React from "react";

import { createClient } from "@/utils/supabase/server";
import AddToCartButton from "@/components/add-to-cart-button";
export default async function page({ params }) {
  // console.log(params);

  const supabase = createClient();
  const { data: book } = await supabase
    .from("books")
    .select(
      `
    id,
    title,
    publication_date,
    genre,
    pages,
    authors("*"),
    publishers("*")
    `
    )
    .eq("id", params.id)
    .single();
  console.log(book);
  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div className="w-full p-2">
      <div className="flex flex-col gap-2  border p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-extrabold">{book.title}</h1>
        <p>Published on {book.publication_date}</p>
        <p>Genre: {book.genre}</p>
        <p>Pages: {book.pages}</p>
        <p>Authors: {book.authors.name}</p>
        <p>Publishers: {book.publishers.name}</p>
      </div>
      <div>
        <AddToCartButton id={book.id} />
      </div>
    </div>
  );
}
