import React from 'react'
import {
  Container,
  Box,
  useColorModeValue,
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
      <Container maxW="300px">
        <div className="shape"></div>
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
      <Typer
        heading="This"
        messages={[
          "is my blg",
          "is my blog",
        ]}
      />
        </Heading>

          {allPostsData.map(({ id, date, title }, index) => (
        <Box
          borderRadius="lg"
          bg={'whiteAlpha.200'}
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
