interface ICard {
  id: number,
  paragraph: string,
  details: string
}

import {
  Center,
  Input,
  Box,
  Container,
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import { MyButton } from '../Button/Button';

import { welcomeMsg } from '../../services/WelcomeMessage/welcomemsg';


export const Card = () => {
  return (
    <Container maxW='100%' minHeight='100vh' bg='#9413dc' padding='25px' centerContent>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' w='50%' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="Email" type='email' marginY={5} />
        <Input placeholder="Password" type='password' marginY={5} />
        <Center>
          <MyButton onClick={welcomeMsg} colorScheme='orange'>
            Acessar
          </MyButton>
        </Center>
      </Box>
    </Container>
  )
}