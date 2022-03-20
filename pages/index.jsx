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
    <Layout
    >
      <Container
      >
        <Box
          borderRadius="lg"
          bgGradient="linear(to-l, #7928ca76, #ff008065)"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Hello, I&apos;m a full-stack developer based in Germany!
          </Text>
        </Box>
        <Heading
          color="teal"
          bgGradient={
            useColorModeValue(
              "linear(to-l, #7928cae8, #ff0080)",
              "linear(to-l, #7928ca, #ff0080)"
            )
          }
          bgClip="text"
          p={0}
          fontSize="5xl"
          fontWeight="extrabold"
          as="h2"
          variant="page-title"
        >
          {useColorModeValue('Nikola Selic', 'Nikola Selic')}
        </Heading>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <p>Web Developer and Machine Learning Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            align="center"
          >
            <Image
              borderWidth={2}
              zIndex={-100}
              maxWidth="300p"
              maxHeight="300px"
              borderRadius="full"
              borderColor="linear(to-l, #7928cae8, #ff0080)"
              borderStyle="solid"
              display="inline-block"
              src="/images/1.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            bgGradient="linear(to-l, #7928ca4e, #FF0080)"
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
            bgGradient="linear(to-l, #7928ca4e, #FF0080)"
            fontWeight="extrabold"
            as="h3"
            variant="section-title"
          >
            Work
          </Heading>
          <BioSection>
            <BioYear>Amazon</BioYear>
          </BioSection>
          <BioSection>
                Lorem ipsum dolor sit amet, consectetur adipiscing
          </BioSection>
          <BioSection>
            <BioYear>IdeaCompiler</BioYear>
          </BioSection>
          <BioSection>
            University of Munich
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
