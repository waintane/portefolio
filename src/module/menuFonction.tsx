let menuActif: boolean = false;
const activeBurger = () => {

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
export default activeBurger;