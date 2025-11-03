import "./App.css";
import FilterableProductTable from "./pages/FilterableProductTable";
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
          <a href="./filterableproducttable.html">技術領域①　Reacの流儀</a>
        </nav>
      </div>
    </>
  );
}
export default App;
