import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();
  const { data: books } = await supabase
    .from("books")
    .select(
      `
    id,
    title,
    publication_date,
    genre,
    pages,
    authors(*),
    publishers(*)
    `
    )
    .order("id");
  return (
    <section className="flex-1 flex flex-col gap-6 px-4">
      <h2 className="font-medium text-xl mb-4">All Books</h2>
      <div>
        {books && books.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <Link href={`/book/${book.id}`}>
                <div
                  key={book.id}
                  className="bg-accent p-4 rounded-md shadow-md border hover:bg-slate-400/10"
                >
                  <h3 className="font-bold text-lg line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-foreground">
                    Authors: {book.authors.name}
                  </p>
                  <p className="text-sm text-foreground">Genre: {book.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          "no data"
        )}
      </div>
    </section>
  );
}
