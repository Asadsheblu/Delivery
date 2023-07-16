import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Header from './api/Main/Header/Header'
import Banner from './api/Main/Banner/Banner'
import Movers from './api/Main/Banner/Movers/Movers'
import PromiseSin from './api/Main/Promise/PromiseSin'


import Navbar from './Navbar'
import Checklist from './api/Checklist'
import Review from './api/Review'
import Contact from './Contact'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Promise-ALL POINTS MOVERS LLC</title>
        <meta name="description" content="Delivery Website " />
 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
       
        <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
     
      <main className={styles.main}>
       {/* <Header/> */}
   
       <Banner/>
       <Movers/>
       <PromiseSin/>
       <Checklist/>
       <Review/>
       <Contact/>

        </main>
    </div>
  )
}
