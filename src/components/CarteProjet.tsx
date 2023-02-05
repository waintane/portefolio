interface IPROPS{
    id:number,
    titre: string,
    img: string,
    description: string,
    github: string,
    projet: string,
    outil: string[];
}

const CarteProjet = ({id, titre, img, description, github, projet, outil}: IPROPS) => {
    return(
        <div className="carte">
            <div className="container1">
                <h3>{titre}</h3>
                <img src={img} alt="" />
            </div>
            <div className="container2">
                <div className="description">
                    <p>
                        {description}
                    </p>
                </div>
                <div className="bouton">
                    <div><a href={github}>GitHub</a></div>
                    <div><a href={projet}>Projet</a></div>
                </div>
                <div className="outil">
                    {outil.map(e =>
                        <div key = {id++}> {e} </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CarteProjet;