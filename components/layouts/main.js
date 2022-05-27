import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import DuckLoader from '../duck-loader'

const LazyDuck = dynamic(() => import('../duck'), {
  ssr: false,
  loading: () => <DuckLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nikola Selic's homepage" />
        <meta name="author" content="Nikola Selic" />
        <meta name="author" content="zlover" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_selich_" />
        <meta name="twitter:creator" content="@_selich_" />
        {/* <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Nikola Selic's Homepage" />
         <meta property="og:type" content="website" />
         <meta property="og:image" content="/card.png" /> */}
        <title>Nikola Selic - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
    <Container maxW="container.jd"  pt={102} >
        {children}
      </Container>
    </Box>
  )
}

export default Main
