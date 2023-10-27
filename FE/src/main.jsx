/* SKRIV FORST npm install!!!!!!!!!!!!!! for att ha node_modules*/ 

import{createRoot} from "react-dom/client"
import { App } from "./components/App";

const root = createRoot(document.querySelector("#root"))
root.render(<App/>);