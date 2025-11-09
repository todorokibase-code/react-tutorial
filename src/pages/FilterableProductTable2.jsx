import { useState } from 'react';


// #region テーブルの行
function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        (<>
            <span style={{ color: 'red' }}>{product.name}</span>
        </>)
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
function ProductTable({ products, inStockOnly, filterText }) {
    let lastCategory = null;
    const rows = []

    products.forEach((r) => {
        if (r.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if (inStockOnly && !r.stocked) {
            return;
        }
        if (lastCategory !== r.category) {
            rows.push(<ProductCategoryRow category={r.category} key={r.category} />);

        }

        rows.push(<ProductRow product={r} />)

        lastCategory = r.category;

    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
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
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {

    return (
        <>
            <form>
                <input type="text" value={filterText} onChange={(e) => { onFilterTextChange(e.target.value) }} placeholder="Search..." />
                <label>
                    <input type="checkbox" checked={inStockOnly} onChange={(e) => { onInStockOnlyChange(e.target.checked) }} />
                    {' '}
                    Only show products in stock

                </label>

            </form>
        </>
    )
}
// #endregion

function FilterableProductTable2({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return (
        <div>
            <h1>テーブル２</h1>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly}></SearchBar>
            <ProductTable products={products} inStockOnly={inStockOnly} filterText={filterText} />
        </div>
    )
}

export default FilterableProductTable2;