/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const DuckSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DuckContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const DuckLoader = () => {
  return (
    <DuckContainer>
      <DuckSpinner />
    </DuckContainer>
  )
}

export default DuckLoader
