import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    
  return (
    <div>
     
      <Head>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portfolio personal de Desarrollos Web Urquiza"
        />
        
        <title>DWU - Desarrollos Web Urquiza</title>
      
        <link
          href="/icons/icon-16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        
        <link
          href="/icons/icon-32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        
        <meta name="theme-color" content="#00a" />
      
      </Head>
      
      <Component {...pageProps} />
    
    </div>
  )

}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp