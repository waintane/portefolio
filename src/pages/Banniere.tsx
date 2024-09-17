import Reseau from "../components/micro-components/Reseau";
import data from "../data/reseau.json";

const Banniere = () => {
    return(
        <div className="banniere">
            <div className="background-filter">
                <div className="content-banniere">
                    <div className="contacte-moi">
                        <h3><a href="#contact">Contacter moi</a></h3>
                        <div className="line">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="presentation">  
                        <h1>Olivier Paradis-Tardif</h1>
                        <h2>Développeur frontend et diplômé en Techniques <br/> d'intégration multimédia</h2>
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
                            lien = {data.lien}
                            />)}
                        </div>
                        <div className="descriptif">
                                <p>
                                Je suis un développeur frontend passionné présentement diplômé en techniques d'intégration multimédia au Collège de Maisonneuve et étudiant au bac en génie logiciel 
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banniere;