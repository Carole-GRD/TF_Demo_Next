import { Html, Head, Main, NextScript } from 'next/document'

// Le composant Document (=> Fichier "_document") permet de mettre 
// à jour les balises "html" et "body"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-yellow-50 min-h-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
