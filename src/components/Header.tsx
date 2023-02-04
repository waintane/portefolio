import MenuBurger from "./micro-components/MenuBurger";
import activeBurger from "../module/menuFonction";

const Header = () => {  

    return(
        <div className="header">
            <header>
                <div className="burger"><MenuBurger/></div>
                <nav>
                    <div className="header-element" onClick={activeBurger}>
                        <a href="#competence">COMPÉTENCE</a>
                        <div className="line"></div>
                    </div>
                    <div className="header-element" onClick={activeBurger}>
                        <a href="#projet">PROJET</a>
                        <div className="line"></div>
                    </div>
                    <div className="header-element" onClick={activeBurger}>
                        <a href="">CONTACT</a>
                        <div className="line"></div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;