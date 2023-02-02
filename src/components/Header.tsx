import MenuBurger from "./micro-components/MenuBurger";

const Header = () => {
    return(
        <div className="header">
            <header>
                <div className="burger"><MenuBurger/></div>
                <nav>
                    <a href="">PROJET</a>
                    <a href="">À PROPOS</a>
                    <a href="">CONTACT</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;