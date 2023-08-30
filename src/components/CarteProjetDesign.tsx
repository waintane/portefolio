import {useRef} from "react";
import {useInView} from "framer-motion";

interface IPROPS{
    id:number,
    titre: string,
    img: string,
    description: string,
    projet: string,
    outil: string[];
}

const CarteProjetDesign = ({id, titre, img, description, projet, outil}: IPROPS) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <section ref={ref}>
            <div className="carte" style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s 0.5s"
            }}
            >
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
                        <div><a href={projet} target="_blank" rel="noopener noreferrer">Projet</a></div>
                    </div>
                    <div className="outil">
                        {outil.map(e =>
                            <div key = {id++}> {e} </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarteProjetDesign;