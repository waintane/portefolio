import CarteProjet from "../components/CarteProjet";
import data from "../data/projetsListe.json";
import dataDesign from "../data/projetsDesign.json";

const Projets = () => {
    return(
        <div className="page-projet" id="projet">

            <div className="titre">
                <h2>Projets programmation</h2>
                <div className="line"></div>
            </div>


            <div className="projets">

                {data.map(data => <CarteProjet
                id= {data.id}
                key= {data.id}
                titre = {data.titre}
                img = {data.img}
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