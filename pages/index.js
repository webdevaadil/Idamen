import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar' 
import { About } from '../components/About'
import Faq from '../components/Accordion'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import { Contact } from '../components/Contact'
import Service from '../components/Service'
import bg from '../components/image/hero-banners.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Idamen Systems</title>
￼
￼

        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
      </Head>

      <div className='bg-no-repeat	bg-center	bg-cover' style={{ backgroundImage: `url(${bg.src})`, width: '100%', height: '100%',}}> 
      <Navbar/> 
      <Carousel/>
      </div>
<About />
<Service/> 
<Faq/>
<Contact/>

 <Footer/> 


    </div>
  )
}
