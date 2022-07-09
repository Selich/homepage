import {
  Button,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const CallToActionButton = () => (
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
)

export default CallToActionButton
