import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
// import thumb from '../public/image/works/'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            {/* <WorkGridItem
              id="work1"
              title="Work1"
              // thumbnail={thumb}
            >
              Project description
            </WorkGridItem> */}
          </Section>
          <Section>
            {/* <WorkGridItem
            id="work2"
            title="Work2"
            // thumbnail={thumb}
          >
            Project description
          </WorkGridItem> */}
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
