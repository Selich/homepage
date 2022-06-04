import React from 'react'

import Layout from '../components/layouts/article'
import { Container, Heading } from '@chakra-ui/react'
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
