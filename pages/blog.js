import React from 'react'

import Layout from '../components/layouts/article'
import { Container, Heading } from '@chakra-ui/react'
import { getSortedPostsData } from '../libs/posts'
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
          Blog
        </Heading>

        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <li key={index}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <span>
                {date}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default Blog
