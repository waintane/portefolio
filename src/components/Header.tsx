import MenuBurger from "./micro-components/MenuBurger";

const Header = () => {
    return(
        <div className="header">
            <header>
                <div className="burger"><MenuBurger/></div>
                <nav>
                    <a href="">Projet</a>
                    <a href="">À propos</a>
                    <a href="">Contact</a>
                </nav>
                <ul>
                    <li>En</li>
                    <li>Fr</li>
                </ul>
            </header>
        </div>
    )
}

export default Header;