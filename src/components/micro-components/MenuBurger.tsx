const MenuBurger = () => {
    let menuActif: boolean = false;
    function activeBurger(){
        const burgerButton = document.querySelector(".burger-button");
        const nav = document.querySelector("header nav");
        console.log(burgerButton);
        if(burgerButton && !menuActif && nav){
            burgerButton.classList.add("menu-burger-actif");
            nav.classList.add("nav-actif");
            menuActif = true;
        }
        else if(burgerButton && menuActif && nav){
            burgerButton.classList.remove("menu-burger-actif")
            nav.classList.remove("nav-actif");
            menuActif = false
        }
    }

    return(
        <div className="burger-button" onClick={activeBurger}>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuBurger;