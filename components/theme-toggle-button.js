import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 20, opacity: 0}}
        transition={{ duration: 0.2 }}
      >

    <IconButton
      aria-label="Toggle theme"
          colorScheme={useColorModeValue(
            'radial-gradient(circle, #5c0067 0%, #7928ca76 10%, #000 100%);',
            'radial-gradient(circle, #FF6CFF 0%, #FF6CFF 100%);'
          )
          }
      icon={useColorModeValue(<MoonIcon/>, <SunIcon/>) }
      onClick={toggleColorMode}
    />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
