import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
function NavBar(){
    return (
        <nav>
            <a href="#"><img src={logo} alt="" /></a>
            <ul>
                <a href="">Collares</a>
                <a href="">Correas</a>
                <a href="">Pecheras</a>
                <a href="">Chalecos</a>
                <a href="">Juguetes</a>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;