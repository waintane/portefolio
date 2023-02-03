import activeBurger from "../../module/menuFonction";

const MenuBurger = () => {

    return(
        <div className="burger-button" onClick={activeBurger}>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuBurger;