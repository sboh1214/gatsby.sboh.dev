import { ReactElement, JSXElementConstructor } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'

export default function renderWithProvider(element: ReactElement<any, string | JSXElementConstructor<any>>) {
  return render(element, { wrapper: ChakraProvider })
}
