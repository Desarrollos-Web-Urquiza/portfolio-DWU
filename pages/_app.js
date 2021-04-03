import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress'; 
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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

        <script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-58D8E0QPWP">

        </script>
        <script
          dangerouslySetInnerHTML={
            { __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag("js", new Date());
                gtag("config", "UA-193155479-1");
            `}
        }>
        </script>

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@300&family=Mukta+Malar:wght@300&family=Mukta:wght@300&family=Ruda:wght@500&family=Sintony&display=swap" rel="stylesheet" />
                        
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

      <style global jsx>
        {`
          :root {
            --fontPersonalized:  Blinker ;
          }
          html { 
            height: 100%
          }
          body { 
            height: 100% 
          }
        `}
      </style>
            
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