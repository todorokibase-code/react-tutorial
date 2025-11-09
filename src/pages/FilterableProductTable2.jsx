import { useState } from 'react';

const PRODUCT = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
// #region テーブルの行
function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>{product.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
// #endregion

// #region テーブルカテゴリー行
function ProductCategoryRow({ category }) {

    return (
        <tr key={category}>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}
// #endregion

// #region プロダクトテーブル
function ProductTable({ products, inStockOnly, searchText }) {
    let category = ''
    let rows = []

    products.map(r => {
        if (r.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !r.stocked) {
            return;
        }
        if (category !== r.category) {
            rows.push(<ProductCategoryRow category={r.category} />);

        }

        rows.push(<ProductRow product={r} />)

        category = r.category;

    })

    return (
        <>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    );
}
// #endregion

// #region サーチバー
function SearchBar({ searchText, inStockOnly, setSearchText, setInStockOnly }) {

    return (
        <>
            <form>
                <input type="text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} placeholder="Search..." />
                <label>
                    <input type="checkbox" checked={inStockOnly} onChange={(e) => { setInStockOnly(e.target.checked) }} />
                    {' '}
                    Only show products in stock

                </label>

            </form>
        </>
    )
}
function FilterableProductTable2() {
    const [searchText, setSearchText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <>
            <h1>テーブル２</h1>
            <SearchBar searchText={searchText} inStockOnly={inStockOnly} setSearchText={setSearchText} setInStockOnly={setInStockOnly}></SearchBar>
            <ProductTable products={PRODUCT} inStockOnly={inStockOnly} searchText={searchText} />
        </>
    )
}

export default FilterableProductTable2;