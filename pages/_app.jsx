
// Le composant App (=> Fichier "_App") englobe toutes les pages, ce qui permet :
// - d'utiliser un CSS global
// - de conserver des states
// - d'injecter des données


import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
