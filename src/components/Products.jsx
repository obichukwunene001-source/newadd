import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
    <div>
        <input type="search" placeholder="Search products..."/>
    </div>
    <nav className="under">
        <Link to="featured">Featured</Link>
        <Link to="new">New Products</Link>
    </nav>
    <Outlet />
    </>
  )
}
export default Products;