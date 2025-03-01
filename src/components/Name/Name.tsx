import { useSpring, animated } from '@react-spring/web';

export function Name(){

    const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

    return(
        <>
<h1>Hello, my name is: </h1>
<animated.div style={props}>Olivia Rego</animated.div>;
</>
    )
}
