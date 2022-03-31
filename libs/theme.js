import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const styles = {
  global: props => ({
    body: {
      bgGradient:
        mode(
          "linear(to-l, #7928ca36, #ff008035)",
          "linear(to-l, #7928ca36, #ff008035)",
          // "linear(to-b, #6B51FF 0%,#6B51FF 20%, #6B51FF 40%, #BD67F9 100%)",
          // "radial-gradient(circle, #5c0067 0%, #ff008055 40%, #000 100%);",
        )(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Inter'"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme;