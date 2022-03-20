import {
  useColorModeValue,
  Button,
  Image,
  Container,
  Box,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio';
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import Layout from '../components/layouts/article';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Germany!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {useColorModeValue('Nikola Selic', 'Nikola Selic')}
            </Heading>
            <p>Web Developer and Machine Learning Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              boarderRadius="full"
              src=""
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
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
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Paracin, Serbia
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Enroled in the Master of Science in Computer Science at Technical
            University of Munich
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page