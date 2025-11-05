import { useState } from 'react';

function ProductCategoryRow({ category }) {

    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>


    )
}
function ProductRow({ product }) {

    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
    let cnt = 0;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase())
            === -1) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category}
                    key={product.category + cnt} />
            );
        }

        rows.push(
            <ProductRow product={product}
                key={product.name + cnt} />
        )

        cnt++;
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )

}
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInputOnlyStockChange }) {
    return (
        <form action="">
            <input type="text" value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} placeholder="Searc..." />
            <label >

                <input type="checkbox" checked={inStockOnly} onChange={(e) => onInputOnlyStockChange(e.target.checked)} />
                Only show products in stock
            </label>
        </form>
    )
}

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <nav>
                <a href="./index.html">TOP</a>
            </nav>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInputOnlyStockChange={setInStockOnly} />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    )
}
export default FilterableProductTable;