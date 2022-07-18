import Logo from './logo'
import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Icon,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'

// import ThemeToggleButton from  './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = path == href

  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'rgba(221, 148, 222, 0.91)' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff90', '#10101390')}
      style={{ backpropFilter: 'blur(30px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" >
            <Logo text={"Nikola Selic"} href={'/'}/>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
          <LinkItem href="https://www.linkedin.com/in/n-selic/">
            <Icon as={AiFillLinkedin} />
          </LinkItem>
          <LinkItem href="https://twitter.com/nikola_selic">
            <Icon as={AiOutlineTwitter} />
          </LinkItem>
          <LinkItem href="https://stackoverflow.com/users/9184156/nikola-selic">
            <Icon as={BsStackOverflow} />
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Option"
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/blog" passHref>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Navbar
