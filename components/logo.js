import Link from 'next/link'
// import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
  transform: rotate(20deg):
  }
`

const Logo = ({text, href}) => {
  return (
    <Link href={href}>
    <a
            className="nav-link"
    >
        <LogoBox
          width="20"
          height="20"
          style={{ marginRight: '10px' }}
        >
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            ml={3}
          >
            {text}
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
