import Reseau from "../components/micro-components/Reseau";
import data from "../data/reseau.json";

const Banniere = () => {
    return(
        <div className="banniere">
            <div className="background-filter">
                <div className="content-banniere">
                    <div className="contacte-moi">
                        <h3>Contacter moi</h3>
                        <div className="line">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="presentation">  
                        <h1>Olivier Paradis-Tardif</h1>
                        <h2>Developpeur frontend et étudiant en Techniques <br/> d'intégration multimédia</h2>
                        <div className="line">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="low-banniere">
                        <div className="reseaux">
                            {/* transformer en fonctional component */}
                            {data.map(data => <Reseau
                            key = {data.id}
                            icon = {data.icon}
                            />)}
                        </div>
                        <div className="descriptif">
                                <p>
                                Salut, je suis un développeur frontend passionné et présentement un étudiant en 3eme année à 
                                temps plein en techniques d'intégration multimédia au Collège de Maisonneuve 
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banniere;