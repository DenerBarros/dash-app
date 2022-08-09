import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr='4' textAlign='right'>
                <Text>Dener Marcos Tolentino Barros</Text>
                <Text color='gray.300' fontSize="small"> 
                    denerbarros.eng@gmail.com 
                </Text>
            </Box>
            <Avatar size='md' name='Dener Barros' src='https://github.com/denerbarros.png' />

        </Flex>
    );
}