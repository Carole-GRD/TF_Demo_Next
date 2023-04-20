import Link from "next/link";


// Page home du site -> accessible via '/'
export default function Home() {
  return (
    <main className="p-5">

      <h1>Demo Next JS</h1>

      <section>
        <h2>Liens de navigation</h2>
        {/* Pour naviguer entre les pages => Link */}

        <div>
          <Link href='/demo/about'>About (SGR - No Data)</Link>
        </div>
        <div>
          <Link href='/book'>Book List (SGR - No Data)</Link>
        </div>

        

      </section>
      
    </main>
  )
}
