import CarteProjet from "../components/CarteProjet";
import data from "../data/projetsListe.json";

const Projets = () => {
    return(
        <div className="page-projet">
            <div className="titre">
                <h2>Mes projets</h2>
                <div className="line"></div>
            </div>

            <div className="filtre">
                <div>
                    <h3>Filtre:</h3>
                </div>
                <div>
                    <h3>Date</h3>
                </div>
                <div>
                    <h3>Programmation</h3>
                </div>
                <div>
                    <h3>Design</h3>
                </div>
            </div>

            <div className="projets">

                {data.map(data => <CarteProjet
                id= {data.id}
                key= {data.id}
                titre= {data.titre}
                description = {data.description}
                github  = {data.github}
                projet = {data.projet}
                outil = {data.outil}
                />)}
            </div>
        </div>
    )
}

export default Projets;