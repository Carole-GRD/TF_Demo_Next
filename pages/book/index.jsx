
// import books from './../../../mockups/books.json'
// OU BIEN
import books from '@/mockups/books.json'
import Link from 'next/link';


const BookTableHead = () => (
    <thead>
        <tr>
            <th>Titre</th>
            <th>Catégorie</th>
        </tr>
    </thead>
)

export default function BookList() {
    console.log(books.map(book => book.title));
    return (
        <main className="p-5">
            <h2>Nos livres ...</h2>

            <table>
                <BookTableHead />
                <tbody>
                    {
                        books.map(book => ( 
                            <tr key={book.id}>
                                <td><Link href={`/book/${book.id}`}>{book.title}</Link></td>
                                <td><Link href={`/book/${book.id}`}>{book.category}</Link></td>
                            </tr>  
                        ))
                    }
                </tbody>
            
            </table>


        </main>

    )
}