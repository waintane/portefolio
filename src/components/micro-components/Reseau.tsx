interface IPROPS{
    icon: string,
}

const Reseau = ({icon}: IPROPS) => {

    return(
        <div className="container-icon">
            <div>
                <a href="">
                    <img src={icon} alt="github" />
                </a>
            </div>
        </div>
    )
}

export default Reseau;