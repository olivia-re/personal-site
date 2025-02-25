import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./components/Header/HeaderSimple.tsx";
import { TimelineTree} from "./components/Timeline/TimelineTree.tsx"

export default function App() {
  return(
    <MantineProvider >
      <HeaderSimple />
      <TimelineTree />
      
    </MantineProvider>
  )
}
