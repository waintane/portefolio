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
                <h3>Titre</h3>
                <img src="" alt="" />
            </div>
            <div className="container2">
                <div className="description">
                    <p>
                        description awdawd  awdad awdaw awdawd awdawd adwad adwada awdwadadsadlwpadl awda w
                        pdlawp lwadsef esfsef sefsfe sefsef
                    </p>
                </div>
                <div className="bouton">
                    <div>GitHub</div>
                    <div>Projet</div>
                </div>
                <div className="outil">
                    <div>php</div>
                    <div>css</div>
                </div>
            </div>
        </div>
    )
}

export default CarteProjet;