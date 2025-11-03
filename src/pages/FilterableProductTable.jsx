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
function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;
    let cnt = 0;

    products.forEach((product) => {
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
function SearchBar() {
    return (
        <form action="">
            <input type="text" placeholder="Searc..." />
            <label >

                <input type="checkbox" />
                Only show products in stock
            </label>
        </form>
    )
}

function FilterableProductTable({ products }) {
    return (
        <div>
            <nav>
                <a href="./index.html">TOP</a>
            </nav>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
}
export default FilterableProductTable;