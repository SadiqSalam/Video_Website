import { Box, Stack, VStack, Heading, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={'16'} color={"white"}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size='md' textTransform={'uppercase'} textAlign={['center','left']}>
                    Subscribe to get Updates
                </Heading>

                <HStack
                    borderBottom={'2px solid white'}
                    py={'2'}
                >
                    <Input placeholder='Enter Email Here...' 
                        border={'none'} 
                        borderRadius={'none'} 
                        outline={'none'}
                        focusBorderColor='none'>
                    
                    
                    </Input>
                    <Button
                        p={"0"}
                        colorScheme='purple'
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
                
            </VStack>

            <VStack w={'full'} 
                borderLeft={['none', '1px solid']} 
                borderRight={['none', '1px solid']}>

                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                        Video Center
                    </Heading>
                    <Text>All rights reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}> 
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a href="https://instagram.com/sad_iq.04">Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a href="https://www.linkedin.com/in/sadiq-salam-04052a252/">Linkedn</a>
                </Button>
                <Button variant={'link'} colorScheme='whiteAlpha'>
                    <a href="https://github.com/SadiqSalam">Github</a>
                </Button>
                

            </VStack>

        </Stack>

    </Box>
  )
}

export default Footer