import CarteCompetence from "../components/CarteCompetence";
import data from "../data/competence.json";

const Competences = () => {
    return(
        <div className="competence" id="competence">
            <div className="titre">
                <h2>
                    Mes compétences
                </h2>
                <div className="line"></div>
            </div>
            <div className="tabs">            
                    {data.map(data => <CarteCompetence
                    key = {data.id}
                    id = {data.id}
                    icon = {data.icon}
                    titre = {data.titre}
                    liste = {data.liste}
                    />)}
            </div>
        </div>
    )
}

export default Competences;