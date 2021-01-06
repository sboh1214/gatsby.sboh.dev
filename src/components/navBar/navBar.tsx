import * as React from 'react'
import {
  Box,
  Heading,
  HStack,
  useColorMode,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  IconButton,
  CloseButton,
} from '@chakra-ui/react'
import {} from '@chakra-ui/react'
import { Link } from 'gatsby'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  children: JSX.Element
}

export default function NavBar({ children }: Props): JSX.Element {
  const { colorMode } = useColorMode()
  const [isLarge] = useMediaQuery('(min-width: 560px)')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(29, 29, 29, 0.7)'}
      borderBottomColor={colorMode === 'light' ? 'rgba(200, 200, 200, 0.7)' : 'rgba(255, 255, 255, 0.2)'}
      borderBottomWidth="1px"
      style={{ backdropFilter: 'blur(10px)' }}
      w="100%"
      h="54px"
      top="0"
      left="0"
      position="sticky"
      zIndex={10}
    >
      <HStack padding="6px" h="100%" maxWidth="1024px" width="100%" marginStart="auto" marginEnd="auto" alignContent="space-between">
        <Heading size="md" marginX="6px" flex={1}>
          <Link to="/">오승빈 | Seungbin Oh</Link>
        </Heading>
        {isLarge ? (
          <>{children}</>
        ) : (
          <>
            {isOpen ? (
              <CloseButton onClick={onClose} />
            ) : (
              <IconButton variant="ghost" aria-label="hamburger" icon={<HamburgerIcon />} onClick={onOpen} />
            )}
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay zIndex={5}>
                <DrawerContent>
                  <DrawerBody marginTop="54px">{children}</DrawerBody>
                </DrawerContent>
              </DrawerOverlay>
            </Drawer>
          </>
        )}
      </HStack>
    </Box>
  )
}
