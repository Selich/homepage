import {
  useColorModeValue,
  Button,
  Container,
  Box,
  Text,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import Layout from '../components/layouts/article'
import Experience from '../components/experience.js'

const Page = () => {
  return (
    <Layout>
      <Container maxW="1300px">
        <div className="shape"></div>
      </Container>
      <Container maxW="1400px">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0 }}
          drag
          cursor={'pointer'}
          backdropBlur={10}
          whileHover={{ scale: 1.02 }}
          className="blob2"
        ></motion.div>
      </Container>
      <Container maxW="800px">
        <Heading
          bgGradient={useColorModeValue(
            'linear(to-l, #7928ca, #ff0080)',
            'linear(to-l, rgba(121,39,202,0.1) , rgba(255,0,128,0.1))'
          )}
          bgClip="text"
          p={0}
          fontSize="68"
          fontWeight="extrabold"
          color="white"
          textShadow="0px 0px 10px rgba(0, 0, 0, 0.3)"
          as="h1"
          variant="page-title"
        >
          <br />
          {useColorModeValue('Nikola Selic', 'Nikola Selic')}
        </Heading>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1} fontSize="2xl">
            Full-stack Web Developer
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center"></Box>
        </Box>
        <br />
        <br />
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={2}
          mb={2}
          align="center"
          filter="drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))"
          borderColor="whiteAlpha.200"
          borderWidth="1px"
        >
          <Text fontWeight="extrabold">
            Hello, I&apos;m a full-stack developer based in Germany! Helping
            businesses create a accessibile and scalable websites.
          </Text>
        </Box>
        <br />

        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            filter="drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))"
            bgClip="text"
            fontWeight="extrabold"
            fontSize="2xl"
            color="white"
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
          <Box align="center" my={4} >
            <NextLink href="/works" passHref>
              <Button
                rightIcon={<ChevronRightIcon />}
                width="30%"
                height="40px"
                filter="drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.3))"
                bgGradient="linear(to-l, #7928ca7f, #FF0080)"
                animation="pulse 0.5s ease-in-out infinite alternate"
                _hover={{
                  bgGradient: 'linear(to-l, #7928ca7f, #FF0080)',
                  filter: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1))',
                  animation: 'pulse 0.5s ease-in-out infinite alternate'
                }}
                borderColor="whiteAlpha.200"
                borderRadius="10px"
                fontWeight="extrabold"
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
            fontSize="2xl"
            variant="section-title"
            bgClip="text"
            fontWeight="extrabold"
            filter="drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3))"
            color="white"
          >
            Associated with
          </Heading>
          <Experience/>

        </Section>
      </Container>
    </Layout>
  )
}
export default Page
