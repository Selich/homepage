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

const Logo = () => {

  return (
    <Link href="/">
      <a>
        <LogoBox
          width="30"
          height="30"
          style={{ marginRight: '10px' }}
          className="logo"
          onClick={() => {
            console.log('clicked')
          }}
        >
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="Inter"
            fontWeight="extrabold"
            ml={3}
          >
            Nikola Selic
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
