interface IPROPS{
    id: number
    icon: string,
    titre: string,
    liste: string[]
}

const CarteCompetence = ({icon, titre, liste, id}: IPROPS) => {
    return(
        <div className="carte">
            <img src={icon} alt="" />
            <h3> {titre} </h3>
            <div className="liste">
                {liste.map(e =>
                <p key = {id++}> {e} </p>)}
            </div>
        </div>
    )
}

export default CarteCompetence;