import React, { useState, useEffect } from 'react'
import {
  Grid,
  useColorModeValue,
  GridItem,
  Box,
  Container,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
// import thumb from '../public/image/works/'
import Layout from '../components/layouts/article'
import { motion, AnimatePresence } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Works = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    console.log(selectedItem)
  }, [selectedItem])
  return (
    <Layout>
      <Container maxW="1300px">
        <div className="shape-works"></div>
      </Container>
      <Container maxW="800px">
        <Heading
          bgGradient={useColorModeValue(
            'linear(to-l, #7928ca, #ff0080)',
            'linear(to-l, rgba(121,39,202,0.1) , rgba(255,0,128,0.1))'
          )}
          bgClip="text"
          pt={50}
          pb={20}
          fontSize="68"
          fontWeight="extrabold"
          color="white"
          textShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
          as="h1"
          variant="page-title"
        >
          {useColorModeValue('Works', 'Works')}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {data.map(item => (
            <Section
              item={item}
              setSelectedItem={setSelectedItem}
              key={item.id}
            ></Section>
          ))}
        </SimpleGrid>
      </Container>
      <AnimatePresence>
        <Box align="left" width="100%">
          {selectedItem && (
            <SectionMain
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              layoutId={selectedItem.id}
            ></SectionMain>
          )}
        </Box>
      </AnimatePresence>
    </Layout>
  )
}

// TODO: Add as sticky
// TODO: Black transparent background
const SectionMain = ({ selectedItem, setSelectedItem, delay = 0 }) => {
  useEffect(() => {}, [selectedItem])
  return (
    <StyledDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ y: 0, opacity: 1 }}
      pos={'absolute'}
      top={0}
      transition={{ duration: 0.2, delay }}
      cursor={'pointer'}
      backdropBlur={10}
      backgroundColor={'rgba(0,0,0,0.6)'}
      minH="800px"
      width="100%"
      borderRadius={20}
      boxShadow="0 1rem 1rem rgb(0 0 0 / 20%)"
      whileTap={{ scale: 0.9 }}
      onClick={() => setSelectedItem(null)}
    >
      <Container maxW="1500px">
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'550px 1fr'}
          gap="3"
          color="white.700"
          fontWeight="bold"
          m={4}
          p={3}
        >
          <GridItem pl="2" area={'header'}>
            <Heading as="h1">{selectedItem.name}</Heading>
          </GridItem>
          <GridItem pl="2" area={'nav'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </GridItem>
          <GridItem pl="2" area={'main'}>
            Project Screenshot
          </GridItem>
        </Grid>
      </Container>
    </StyledDiv>
  )
}
const Section = ({
  selectedItem,
  item,
  setSelectedItem,
  children,
  delay = 0
}) => {
  useEffect(() => {}, [selectedItem])
  return (
    <StyledDiv
      onClick={() => setSelectedItem(item.id)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      cursor={'pointer'}
      mb={6}
      backdropBlur={selectedItem !== undefined ? 40 : 10}
      backgroundColor={selectedItem !== undefined ? 'gray' : 'white'}
      height={300}
      borderRadius={20}
      boxShadow="0 1rem 1rem rgb(0 0 0 / 20%)"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Container
        style={{
          backgroundColor: '#7928ca36',
          height: '210px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px'
        }}
      >
        {children}
      </Container>
    </StyledDiv>
  )
}

const data = [
  {
    "id": 1,
    "name": "Project 1",
    "description": "Test",
    "image": "https://via.placeholder.com/300x200",
  },
  {
    "id": 2,
    "name": "Project 2",
    "description": "Test",
    "image": "https://via.placeholder.com/300x200",
  },
]

export default Works
