import books from '@/mockups/books.json'
import Link from 'next/link';



export default function BookDetail() {

    const book = books[0];

    return (
        <main className="p-5">

            <section>
                <h2>{book.title} - {book.author}</h2>
                <p>ISBN : {book.ISBN}</p>
                <p>Catégorie : {book.category}</p>
                <p>Prix : {book.price}</p>
                <p>Disponibilité : {book.inStock ? 'en stock' : 'rupture de stock'}</p>
            </section>

            <Link href='/book'><button className="btn">Retour à la liste des livres</button></Link>
            
        </main>

    )
}