const MenuBurger = () => {
    let menuActif: boolean = false;
    function activeBurger(){
        const burgerButton = document.querySelector(".burger-button");
        console.log(burgerButton);
        if(burgerButton && !menuActif){
            burgerButton.classList.add("menu-burger-actif");
            menuActif = true;
        }
        else if(burgerButton && menuActif){
            burgerButton.classList.remove("menu-burger-actif");
            menuActif = false
        }
    }

    return(
        <div className="burger-button" onClick={activeBurger}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#000"><path d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
        </div>
    )
}

export default MenuBurger;