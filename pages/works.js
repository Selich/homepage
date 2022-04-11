import React, { useState, useEffect } from 'react'
import { Container, Button, Heading, SimpleGrid } from '@chakra-ui/react'
// import thumb from '../public/image/works/'
import Layout from '../components/layouts/article'
import { motion, AnimatePresence } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const items = [{ id: 0 }, { id: 1 }, { id: 2 }]
const Works = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    console.log(selectedItem)

  }, [selectedItem])
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {items.map(item => (
            <Section item={item} setSelectedItem={setSelectedItem} key={item.id}>
              {item.id}
            </Section>
          ))}
        </SimpleGrid>
        <AnimatePresence>
          {selectedItem && (
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <SectionMain selectedItem={selectedItem} setSelectedItem={setSelectedItem}  layoutId={selectedItem.id}>
              <motion.h5>test</motion.h5>
              <Button onClick={() => setItem(null)} />
            </SectionMain>
        </SimpleGrid>
          )}
        </AnimatePresence>
      </Container>
    </Layout>
  )
}
const SectionMain = ({ selectedItem, setSelectedItem, children, delay = 0 }) => 
{
  useEffect(() => {},[selectedItem])
  return (
  <StyledDiv
    onClick={() => setSelectedItem(undefined)}
    initial={{ opacity: 0, y: 10 }}
    animate={{ y: 0, opacity: 1 }}
  pos={'absolute'}
  width={580}
  marginRight={'20%'}
  top={0}
    transition={{ duration: 0.2, delay }}
    cursor={'pointer'}
    backdropBlur={10}
    backgroundColor={'white'}
    height={400}
    borderRadius={20}
    boxShadow="0 1rem 1rem rgb(0 0 0 / 20%)"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Container
      style={{
        backgroundColor: '#7928ca36',
        height: '310px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
      }}
    >
      {children}
    </Container>
  </StyledDiv>
)
}
const Section = ({ selectedItem, item, setSelectedItem, children, delay = 0 }) => {

  useEffect(() => {
    console.log(selectedItem)

  },[selectedItem])
  return (

  <StyledDiv
    onClick={() => setSelectedItem(item.id)}
    initial={{ opacity: 0, y: 10 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, delay }}
    cursor={'pointer'}
    mb={6}
    backdropBlur={(selectedItem !== undefined) ? 40: 10}
    backgroundColor={(selectedItem !== undefined) ? 'gray' : 'white'}
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

export default Works
