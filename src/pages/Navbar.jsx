import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./css/navbar.css"
import { CartContext } from "../context/Context";

const Navbar = () => {
    const CartState = useContext(CartContext);
    const state = CartState.state
    
    return (
        <div>
            <header>
                <section className="header-content">
                    <h1 className="brand-logo">
                        <a href="#" className="logo">
                            DAXXY
                        </a>
                    </h1>
                    <nav role="navigation">
                        <ul className="navigation-list-container" data-visible="true">
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart[{state.length}]</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </header>
        </div>
    )
}

export default Navbar