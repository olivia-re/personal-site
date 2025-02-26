import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "./components/Header/HeaderSimple.tsx";
import { TimelineTree} from "./components/Timeline/TimelineTree.tsx"
import { Name } from "./components/Name/Name.tsx";

export default function App() {
  return(
    <MantineProvider >
      <HeaderSimple />
      <Name/>
      <TimelineTree />
      
    </MantineProvider>
  )
}
