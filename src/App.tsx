import "@mantine/core/styles.css";
import "./styles/global.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./components/Header/HeaderSimple.tsx";
import { TimelineTree} from "./components/Timeline/TimelineTree.tsx"
import { Name } from "./components/Name/Name.tsx";
import SplitText from "./components/TextAnimations/SplitText/SplitText";

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function App() {
  return(
    <MantineProvider >
      <HeaderSimple />
      <Name/>
      <SplitText
  text="Hello, Tailwind!"
  className="text-2xl font-semibold text-center"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
  onLetterAnimationComplete={handleAnimationComplete}
/>
      <TimelineTree />
      
    </MantineProvider>
  )
}
