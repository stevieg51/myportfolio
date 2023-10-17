import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSpringRef, animated, useTransition, useSpring} from '@react-spring/web'
import { useState, useLayoutEffect } from "react";
import { ScrolTro } from "./ScrollTro";

export const MyCard = () => {

    const IMAGES = [
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png',
        'https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg',
        'https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg',];

    const [activeIndex, setActiveIndex] = useState(0);
    const springApi = useSpringRef();

    const transitions = useTransition(activeIndex, {
        from: {
            clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
        },
        enter: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        },
        leave: {
            clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
        },
        onRest: (_springs, _ctrl, item) => {
            if (activeIndex === item) {
                setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1)
            }
        },
        exitBeforeEnter: true,
        config: {
            duration: 4000,
        },
        delay: 1000,
        ref: springApi,
    });

    const springs = useSpring({
        from: {
            strokeDashoffset: 120,
        },
        to: {
            strokeDashoffset: 0,
        },
        config: {
            duration: 11000,
        },
        loop: true,
        ref: springApi,
    });

    useLayoutEffect(() => {
        springApi.start()
    }, [activeIndex])

    return (
        <>
            <Card id='myCard' style={{ width: '40rem' } } >
                        
                <div className=" ">
                    <div className=" max-h-1 ">
                        {transitions((springs, item) => (
                            <animated.div className=" " style={springs}>
                                <img className=" max-h-2"src={IMAGES[item]} />
                            </animated.div>
                        ))}
                        <div className=" ">
                            <div />
                 
                        </div>
                    </div>
                </div>
                <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                <ScrolTro />
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card >
        </>
    )
}