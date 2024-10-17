import Image from "next/image";

export default function Home() {
  return (
    <section className="flex-1 flex flex-col gap-6 px-4">
      <h2 className="font-medium text-xl mb-4">Next steps</h2>
      <div>
        {books && books.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.title}
                className="bg-accent p-4 rounded-md shadow-md"
              >
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p className="text-sm text-foreground">
                  Authors: {book.authors.name}
                </p>
                <p className="text-sm text-foreground">
                  Publishers: {book.publishers.name}
                </p>
                <p className="text-sm text-foreground">
                  Publication Date: {book.publication_date}
                </p>
                <p className="text-sm text-foreground">Genre: {book.genre}</p>
                <p className="text-sm text-foreground">Pages: {book.pages} </p>
              </div>
            ))}
          </div>
        ) : (
          "no data"
        )}
      </div>
    </section>
  );
}
