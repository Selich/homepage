import {
  useColorModeValue,
  Button,
  Container,
  Box,
  Text,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>

        <Heading
          bgGradient={useColorModeValue(
            'radial-gradient(circle, #5c0067 0%, #ff008055 40%, #000 100%);',
            'linear(to-l, #7928ca, #ff0080)'
          )}
          bgClip="text"
          p={0}
          fontSize="54"
          fontWeight="extrabold"
          as="h1"
          variant="page-title"
        >
          {useColorModeValue('Nikola Selic', 'Nikola Selic')}
        </Heading>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1} fontSize="2xl">
            Full-stack Web Developer
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
          </Box>
        </Box>
        <br />
        <br />
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={2}
          mb={2}
          align="center"
        >
          <Text
            fontWeight="extrabold"
          >
            Hello, I&apos;m a full-stack developer based in Germany! Helping
            businesses create a accessibile and scalable websites.
          </Text>
        </Box>
        <br />

        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            bgGradient="linear(to-l, #7928ca4e, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            About me
          </Heading>
          <Paragraph>
            Master student of Computer Science at Technical University of
            Munich. Research interest in Federated Learning, Distributed
            Computing and Privacy-Preserving Machine Learning. Currently, I am
            mostly interested in the allocation of Multi-machine parallelism in
            large-scale model processing.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                bgGradient="linear(to-l, #7928ca7f, #FF0080)"
                animation="pulse 0.5s ease-in-out infinite alternate"
                _hover={{
                  bgGradient: 'linear(to-r, red.500, yellow.500)',
                  animationDelay: 2
                }}
                color="white"
              >
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            bgGradient="linear(to-l, #7928ca4e, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Associated with
          </Heading>

          <Box my={6}>
            <NextLink href="https://test.twinu.com/home" passHref>
              <Text>
                  Twinu
              </Text>
            </NextLink>
            <Paragraph>
              Twinu is a startup that provides a platform for the exchange of digital assets and NFTs.
            </Paragraph>
          </Box>


        </Section>

      </Container>
    </Layout>
  )
}
export default Page
