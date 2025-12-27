import ReactDOM from "react-dom/client";
import Routertest from "./pages/Routertest";

const root: HTMLElement | null = document.getElementById('root');
if (root) {

    ReactDOM.createRoot(root).render(<Routertest />);
}