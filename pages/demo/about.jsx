
// Page "Static génération" sans données
// -> pre-render lors du build du serveur

import Image from "next/image";
import Link from "next/link";

// Un composant React => 
export default function About() {

    return (
        <main className="p-5">
            
            <h1>À propos</h1>

            <h2>Della duck</h2>

            
            <Image src='/images/della.jpg' alt='Della Duck'
                height={150} width={150}
                className='img-2'  />
            
            {/* <div className='img-1'>
                <Image src='/images/della.jpg' alt='Della Duck'
                    height={700} width={80} />
            </div> */}

            {/* <Image src='/images/della.jpg' alt='Della Duck'
                height={150} width={150} 
                className="block mx-auto" /> */}
            
            {/* <Image src='/images/della.jpg' alt='Della Duck'
                height={50} width={280} /> */}


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni mollitia qui ad eos voluptatibus deserunt beatae. Delectus totam minima vel voluptates qui inventore impedit, quod blanditiis similique eveniet consequatur.</p>

            <Link href='/'><button className="btn">Accueil</button></Link>
            {/* <Link href='/'><button className="btn" disabled>Accueil</button></Link> */}
        </main>
    )

}