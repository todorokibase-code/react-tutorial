import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FilterableProductTable from "./pages/FilterableProductTable";
const PRODUCT = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilterableProductTable products={PRODUCT} />
  </StrictMode>
);