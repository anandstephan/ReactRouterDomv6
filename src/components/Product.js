import { Link, Outlet } from "react-router-dom"

const Product = () =>{
return <>
<div>
    <input type="text" placeholder="Enter the Search Product"/>
</div>
<nav style={{padding:10}}>
    <Link to="new" style={{padding:10}}>New Products</Link>
    <Link to="featured">Featured Products</Link>
</nav>
<Outlet/>
</>
}

export default Product