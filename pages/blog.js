import React from 'react'
import {
  useColorModeValue,
  Container,
  Box,
  Text,
  Heading
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import { getSortedPostsData } from '../libs/posts'
import { Typer } from '../components/typing'
import Link from "next/link";



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Blog = ({allPostsData}) => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
      <Typer
        heading="This"
        messages={[
          "is my blg",
          "is my blog",
          "are the things I struggled with",
          "is something I do in my free time",
          "is something I do IF I have some time",
        ]}
      />
        </Heading>

          {allPostsData.map(({ id, date, title }, index) => (
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={2}
          mb={2}
          align="left"
          key={index}
        >
              <Link href={`/posts/${id}`}>
          <Text
            // bgGradient="linear(to-l, #7928CA, #FF0080)"
            // bgClip="text"
            fontWeight="extrabold"
          >
            {title}
          </Text>
              </Link>
              <span>
                {date}
              </span>
        </Box>
          ))}
      </Container>
    </Layout>
  )
}

export default Blog
