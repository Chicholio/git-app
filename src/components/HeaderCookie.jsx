import React from 'react'
import { Flex, Box, Heading, Text, Spacer } from '@chakra-ui/react'

const HeaderCookie = ({ read }) => {

    const names = read('nombres');
    const lastName = read('apellidos');
    const cc = read('cedula');
    const date = read('fechaNacimiento');
    const email = read('email');
    const gitHub = read('gitHub');

    return (
        <Flex m={5} justifyContent='center' alignItems='center'>
            <Box p="2">
                <Heading size="md">{gitHub}</Heading>
            </Box>
            <Spacer />
            <Box>
                <Text>Nombre: {names} {lastName}</Text>
            </Box>
            <Spacer />
            <Box>
                <Text>Cedula: {cc}</Text>
            </Box>
            <Spacer />
            <Box>
                <Text>F. Nacimiento: {date}</Text>
            </Box>
            <Spacer />
            <Box>
                <Text>Email: {email}</Text>
            </Box>
        </Flex>
    )
}

export default HeaderCookie

