import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 px-4 lg:px-42 my-14 sm:px-20 md:px-32'>
        <Head>
          <title>Zomer Gregorio</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta
            name='description'
            content='Zomer Gregorio | A simple portfolio I made with Next.js and Tailwind CSS.'
          />

          <meta property='og:title' content='Zomer Gregorio' />
          <meta
            property='og:description'
            content='Zomer Gregorio | A simple portfolio I made with Next.js and Tailwind CSS.'
          />
          <meta
            property='og:image'
            content='https://raw.githubusercontent.com/zomeru/portfolio-next-ts/main/public/images/screenshot.png'
          />
          <meta property='og:url' content='https://zomeru.vercel.app/' />

          <meta name='twitter:title' content='Zomer Gregorio' />
          <meta
            name='twitter:description'
            content='Zomer Gregorio | A simple portfolio I made with Next.js and Tailwind CSS.'
          />
          <meta
            name='twitter:image'
            content='https://raw.githubusercontent.com/zomeru/portfolio-next-ts/main/public/images/screenshot.png'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='Zomer Gregorio' />
          <meta
            name='google-site-verification'
            content='vIm46RcPpRP4YQjS20F6RUACLwKggpLpEwLKn3rMXVw'
          />
        </Head>
        <div className='col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
          <Sidebar />
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
