interface Product{
    id:number;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string;
}

interface ProductListProps{
    products: Product[];
}

function ProductList ({products}: ProductListProps){
    return(
        <section>
            <h2>Products</h2>

            {products.map((product)=>(
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <p>{product.category}</p>
                </div>
            ))}
        </section>
    );
}

export default ProductList;