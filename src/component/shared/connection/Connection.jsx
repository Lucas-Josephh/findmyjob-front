import Human from "../svg/Human"
import Companie from "../svg/Companie"
import "./Connection.scss"
import { useState } from "react"
import CandidatStep1 from "./candidat/candidatStep1/CandidatStep1";
import CandidatStep2 from "./candidat/candidatStep2/CandidatStep2";
import CandidatStep3 from "./candidat/candidatStep3/CandidatStep3";

export default function Connection() {
    const [stepCandidat, setStepCandidat] = useState(0);

    const handleAddCandidat = () => {
        setStepCandidat(stepCandidat+1);
    }

    const handleRemoveCandidat = () => {
        setStepCandidat(stepCandidat-1);
    }

    return (
        <>
            <div className="module-connexion_filtre"></div>
            
            {stepCandidat == 1 ?
                <CandidatStep1 stepCandidat={stepCandidat} handleAddCandidat={handleAddCandidat} handleRemoveCandidat={handleRemoveCandidat} />
            : stepCandidat == 2 ?
                <CandidatStep2 stepCandidat={stepCandidat} handleAddCandidat={handleAddCandidat} handleRemoveCandidat={handleRemoveCandidat} />
            : stepCandidat == 3 ?
                <CandidatStep3 stepCandidat={stepCandidat} handleAddCandidat={handleAddCandidat} handleRemoveCandidat={handleRemoveCandidat} />
            :
                <div className="module-connexion">
                    <h1 className="module-connexion_title">Bienvenue sur FindMyJob</h1>
                    <span className="module-connexion_subtitle">Commencez par choisir votre profil</span>

                    <div className="module-connexion-container" onClick={handleAddCandidat}>
                        <div className="module-connexion-container-candidat">
                            <div className="module-connexion-container-candidat_logo"><Human size="32" /></div>
                            <h3 className="module-connexion-container-candidat_title">Candidat</h3>
                            <span className="module-connexion-container-candidat_subtitle">Je cherche un emploi</span>
                        </div>

                        <div className="module-connexion-container-companie">
                            <div className="module-connexion-container-companie_logo"><Companie size="32" /></div>
                            <h3 className="module-connexion-container-companie_title">Entreprise</h3>
                            <span className="module-connexion-container-companie_subtitle">Je recrute des talents</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}