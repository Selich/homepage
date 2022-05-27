import {
  useColorModeValue,
  Button,
  Image,
  Container,
  Box,
  Text,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={2}
          mb={2}
          align="center"
        >
          <Text
            // bgGradient="linear(to-l, #7928CA, #FF0080)"
            // bgClip="text"
            fontWeight="extrabold"
          >
            Hello, I&apos;m a full-stack developer based in Germany! Helping
            businesses create a accessibile and scalable websites.
          </Text>
        </Box>

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
            <Image
              style={{ filter: 'opacity(80%) grayscale(60%)' }}
              top={0}
              maxWidth="590px"
              maxHeight="340px"
              borderColor="linear(to-l, #7928cae8, #ff0080)"
              borderWidth={2}
              zIndex={-100}
              objectFit="cover"
              display="inline-block"
              src="/images/2.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

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
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
