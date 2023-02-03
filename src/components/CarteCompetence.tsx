interface IPROPS{
    icon: string,
    titre: string,
    liste: string[]
}

const CarteCompetence = ({icon, titre, liste}: IPROPS) => {
    return(
        <div className="carte">
            <img src={icon} alt="" />
            <h3> {titre} </h3>
            <div>
                {liste.map(e => 
                <p> {e} </p>)}
            </div>
        </div>
    )
}

export default CarteCompetence;