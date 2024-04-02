import { Box, Img, Heading, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"


const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: "4",
    //size: ""
}

const Home = () => {
  return (
    <Box >
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={"16"}>
            <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={"2px solid"} m={"auto"}>
                Services
            </Heading>

            <Stack
                h={"full"}
                p={"4"}
                alignItems={"center"}
                direction={["column", "row"]}
            >
                <Img src={img5} h={['40', '400']}  filter={"hue-rotate(-130deg) "}></Img>
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint unde nesciunt eos, corrupti officiis dicta animi illum possimus illo ipsam quam aut, minima distinctio saepe. Iure, officiis excepturi laudantium quod optio iusto vero saepe voluptas. Cupiditate voluptate sunt quasi, ipsa non maiores modi mollitia accusamus ipsum, eaque repudiandae reiciendis sequi omnis possimus minus delectus amet esse fugit tenetur magnam eveniet dolores cumque illum? Nisi magni quis recusandae veniam nam porro quidem harum commodi, ratione odio dolore iure quae dolorem aspernatur placeat ipsam, eaque tenetur temporibus! Enim, itaque quo! Reprehenderit cupiditate quidem nihil impedit ex adipisci, similique sapiente eaque cum.
                </Text>
            </Stack>
        </Container>



    </Box>
  )
};

const MyCarousel = () => (
    <Carousel autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false}
    showThumbs={false}
    showArrows={false}>

        <Box w="full" h={"100vh"}>
            <Img src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>

        <Box w="full" h={"100vh"}>
            <Img src={img2} />
            <Heading bgColor={"whiteAlpha.800"} color={"black"} {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={"100vh"}>
            <Img src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w="full" h={"100vh"}>
            <Img src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Night Life is Cool
            </Heading>
        </Box>

    </Carousel>


)

export default Home