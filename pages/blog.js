import React from 'react'

import Layout from '../components/layouts/article'
import { Container, Button, Heading, SimpleGrid } from '@chakra-ui/react'

const Blog = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Blog
        </Heading>
      </Container>
    </Layout>
  )
}

export default Blog
