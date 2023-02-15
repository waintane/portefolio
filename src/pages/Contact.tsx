import Reseau from "../components/micro-components/Reseau";
import data from "../data/reseau.json"

const Contact = () => {
    return(
        <div className="page-contact" id="contact">
            <div className="titre">
                <h2>Me contacter</h2>
                <div className="line"></div>
            </div>

            <div className="information">
                <p>Numéro de téléphone: (579)-421-9840</p>
                <p>Courriel : olitarpar@hotmail.com</p>
            </div>
            <div className="reseaux">
                {/* transformer en fonctional component */}
                {data.map(data => <Reseau
                key = {data.id}
                icon = {data.icon}
                lien = {data.lien}
                />)}
            </div>
        </div>
    )
}

export default Contact;