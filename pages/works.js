import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// import thumb from '../public/image/works/'
import Layout from '../components/layouts/article'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            Test
          </Section>
          <Section>
            Test
          </Section>
          <Section>
            Test
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ opacity: 0, y: 10 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    cursor={'pointer'}
    mb={6}
    backdropBlur={10}
    backgroundColor={'#7928ca36'}
    height={300}
    borderRadius={20}
    boxShadow="0 1rem 1rem rgb(0 0 0 / 20%)"
  >
    <Container
      style={{
        backgroundColor: 'white',
        marginTop: "70%",
        height: "110px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {children}
    </Container>
  </StyledDiv>
)

export default Works
