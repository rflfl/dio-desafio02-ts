import { Box, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box bg='gray.800' w='100%' p={4}>
      <Text
        as='b'
        color='gray'>
        DIO Bank
      </Text>
    </Box>
  )
}
