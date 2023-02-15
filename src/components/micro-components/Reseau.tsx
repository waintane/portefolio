interface IPROPS{
    icon: string,
    lien: string,
}

const Reseau = ({icon, lien}: IPROPS) => {

    return(
        <div className="container-icon">
            <div>
                <a href={lien} target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt="github" />
                </a>
            </div>
        </div>
    )
}

export default Reseau;