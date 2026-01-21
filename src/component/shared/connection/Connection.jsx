import { useState } from "react"
import Human from "../svg/Human"
import Companie from "../svg/Companie"
import Cross from "../svg/Cross"
import CandidatStep1 from "./candidat/candidatStep1/CandidatStep1";
import CandidatStep2 from "./candidat/candidatStep2/CandidatStep2";
import CandidatStep3 from "./candidat/candidatStep3/CandidatStep3";
import CompanyStep1 from "./company/companyStep1/CompanyStep1"
import CompanyStep2 from "./company/companyStep2/CompanyStep2";
import "./Connection.scss"

export default function Connection({handleShowConnection}) {
    const [stepCandidat, setStepCandidat] = useState(0);
    const [stepCompany, setStepCompany] = useState(0);

    const handleAddCandidat = () => {
        setStepCompany(0);
        setStepCandidat(stepCandidat+1);
    }

    const handleAddCompany = () => {
        setStepCandidat(0);
        setStepCompany(stepCompany+1);
    }

    const handleRemoveCandidat = () => {
        setStepCompany(0);
        setStepCandidat(stepCandidat-1);
    }

    const handleRemoveCompany = () => {
        setStepCandidat(0);
        setStepCompany(stepCompany-1);
    }

    return (
        <>
            <div className="module-connexion_filtre" onClick={handleShowConnection}></div>
            
            {stepCandidat == 1 ?
                <CandidatStep1 stepCandidat={stepCandidat} handleShowConnection={handleShowConnection} handleAddCandidat={handleAddCandidat} handleRemoveCandidat={handleRemoveCandidat} />
            : stepCandidat == 2 ?
                <CandidatStep2 stepCandidat={stepCandidat} handleShowConnection={handleShowConnection} handleAddCandidat={handleAddCandidat} handleRemoveCandidat={handleRemoveCandidat} />
            : stepCandidat == 3 ?
                <CandidatStep3 stepCandidat={stepCandidat} handleShowConnection={handleShowConnection} handleAddCandidat={handleAddCandidat} handleRemoveCandidat={handleRemoveCandidat} />
            : stepCompany == 1 ?
                <CompanyStep1 stepCompany={stepCompany} handleShowConnection={handleShowConnection} handleAddCompany={handleAddCompany} handleRemoveCompany={handleRemoveCompany}  />
            : stepCompany == 2 ?
                <CompanyStep2 stepCompany={stepCompany} handleShowConnection={handleShowConnection} handleRemoveCompany={handleRemoveCompany}  />
            :
                <div className="module-connexion">
                    <button className="module-connexion_leave" onClick={handleShowConnection}><Cross size="16" /></button>
                    <h1 className="module-connexion_title">Bienvenue sur FindMyJob</h1>
                    <span className="module-connexion_subtitle">Commencez par choisir votre profil</span>

                    <div className="module-connexion-container">
                        <div className="module-connexion-container-candidat" onClick={handleAddCandidat}>
                            <div className="module-connexion-container-candidat_logo"><Human size="32" /></div>
                            <h3 className="module-connexion-container-candidat_title">Candidat</h3>
                            <span className="module-connexion-container-candidat_subtitle">Je cherche un emploi</span>
                        </div>

                        <div className="module-connexion-container-companie" onClick={handleAddCompany}>
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