import { useState, useEffect } from "react";
import "./product.css"

const Products = () => {    
    const [count,setCount]=useState(0);
    const [products,setProducts]=useState([])
    const [isLoading, setIsLoading]=useState(true);
    const [moreProducts, setMoreProducts]=useState([]);
    const [limit, setlimit]=useState(50)
    

    async function fetchProducts(){
        try {
            const response=await fetch(`https://dummyjson.com/products?limit=10&skip=${count==0? 0: count*10}`);
            const data=await response.json();
            setIsLoading(false)
            setProducts([...moreProducts,...data.products])
            console.log(data.products)
            
        } catch (error) {
            console.log(error);
            setIsLoading(false)
            
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    function handleLoadMore(){
        setCount(count+1)
        setMoreProducts(products)

    }
    useEffect(()=>{    
        fetchProducts();
        console.log(products);
        
        
        
    },[count])
    
    return ( <>
    {isLoading?<h1>Loading data</h1>: null}
    <div className="product-container">
        {
            products.map((product,index)=><div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
            </div>)
        }
    </div>
    <div className="button-more">
        {
            limit===products.length?<h3>No More products</h3>: null

        }
        <button onClick={handleLoadMore} disabled={products.length==limit}>Load more</button>
    </div>


    </> );
}
 
export default Products;