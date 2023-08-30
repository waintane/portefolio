import {useRef} from "react";
import {useInView} from "framer-motion";

interface IPROPS{
    id: number
    icon: string,
    titre: string,
    liste: string[]
}

const CarteCompetence = ({icon, titre, liste, id}: IPROPS) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <section ref={ref}>
            <div className="carte" style={{
                transform: isInView ? "none" : "translateY(100px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                <img src={icon} alt="" />
                <h3> {titre} </h3>
                <div className="liste">
                    {liste.map(e =>
                    <p key = {id++}> {e} </p>)}
                </div>
            </div>
        </section>
    )
}

export default CarteCompetence;