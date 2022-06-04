import Layout from '../../components/layouts/article'
import { Container, Heading } from '@chakra-ui/react'
import { getAllPostIds, getPostData } from '../../libs/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {postData.title}
        </Heading>
        {postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </Layout>
  )
}
