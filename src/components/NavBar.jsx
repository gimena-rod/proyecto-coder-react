
import CartWidget from "./CartWidget";
import logo from "../../public/img/logo.png";
import { Link } from "react-router";
function NavBar(){
    return (
        <nav>
            <Link to="/">
                <h4><img src={logo} alt="logo" /></h4>
            </Link>
            <div style={{ display: "flex", gap: "10px", alignItems: "center"}}>
                <Link to="/categorias/gatos">Gatos</Link>
                <Link to="/categorias/perros">Perros</Link>
                <Link to="/">Ver todo</Link>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;