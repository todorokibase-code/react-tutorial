import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

export default function Tictactoe() {
  return (
    <div>
      <h1>Tictactoe pageです。</h1>
      <nav>
        <a href="./index.html">TOP</a> |{" "}
        <a href="./home.html">Home</a> |{" "}
        <a href="./contact.html">Contact</a>
      </nav>
    </div>
  );
}

const root:HTMLElement|null = document.getElementById("root");
ReactDOM.createRoot(root!).render(
    <StrictMode>
        <Tictactoe/>
    </StrictMode>
);