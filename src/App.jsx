import "./App.css";
import FilterableProductTable from "./pages/FilterableProductTable";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const PRODUCT = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
function App() {
  return (
    <>
      <div>
        <nav>
          <ul>

            <li><a href="./filterableproducttable.html">技術領域①　Reacの流儀</a></li>
            <li><a href="./player_profile_card.html">技術領域①　Reacの流儀 オリジナルページ作成</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./tictactoe.html">Tic-Tac-Toe</a></li>
            <li><a href="./router.html">ルーター</a></li>
            <li><a href="#">Git ブランチ間依存でコンフリクト発生テスト feature/Bで修正を追加しました</a></li>
            <li><a href="#">Git feature/Dブランチで修正しました。</a></li>
          </ul>

        </nav>
      </div>

    </>
  );
}
export default App;
