import Network from "../../../svg/Network"
import Cross from "../../../svg/Cross"
import "./CandidatStep2.scss"

export default function CandidatStep2({handleAddCandidat, handleRemoveCandidat, handleShowConnection, stepCandidat, data, setData}) {
    return (
        <div className="extranet-candidatStep2">
            <button className="module-connexion_leave" onClick={handleShowConnection}><Cross size="16" /></button>
            <div className="extranet-candidatStep2-header">
                <span className="extranet-candidatStep2-header_page">Étape {stepCandidat}/3</span>
                <div className="extranet-candidatStep2-header-bar">
                    <div className="extranet-candidatStep2-header-bar_complete"></div>
                    <div className="extranet-candidatStep2-header-bar_complete"></div>
                    <div className="extranet-candidatStep2-header-bar_nocomplete"></div>
                </div>
            </div>

            <div className="extranet-candidatStep2-body">
                <div className="extranet-candidatStep2-body-text">
                    <div className="extranet-candidatStep2-body-text_logo"><Network size="24" /></div>
                    <h1 className="extranet-candidatStep2-body-text_title">Liens & Réseaux</h1>
                    <span className="extranet-candidatStep2-body-text_subtitle">Partagez vos profils en ligne</span>
                </div>

                <div className="extranet-candidatStep2-body-container">
                    <label className="extranet-candidatStep2-body-container_label" htmlFor="">LinkedIn</label>
                    <input 
                        className="extranet-candidatStep2-body-container_input" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="https://linkedin.com/in/votre-profil"
                        value={data.linkedin}
                        onChange={(e) => setData({...data, linkedin: e.target.value})}
                    />
                </div>

                <div className="extranet-candidatStep2-body-container">
                    <label className="extranet-candidatStep2-body-container_label" htmlFor="">GitHub</label>
                    <input 
                        className="extranet-candidatStep2-body-container_input" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="https://github.com/votre-profil"
                        value={data.github}
                        onChange={(e) => setData({...data, github: e.target.value})}
                    />
                </div>

                <div className="extranet-candidatStep2-body-container">
                    <label className="extranet-candidatStep2-body-container_label" htmlFor="">Portfolio</label>
                    <input 
                        className="extranet-candidatStep2-body-container_input" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="https://votre-portfolio.com"
                        value={data.portfolio}
                        onChange={(e) => setData({...data, portfolio: e.target.value})}
                    />
                </div>

                <div className="extranet-candidatStep2-body-btn">
                    <button className="extranet-candidatStep2-body-btn_back" onClick={handleRemoveCandidat}>&lt; Retour</button>
                    <div className="extranet-candidatStep2-body-btn-container">
                        <button className="extranet-candidatStep2-body-btn-container_skip">Passer</button>
                        <button className="extranet-candidatStep2-body-btn-container_continue" onClick={handleAddCandidat} >Continuer &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}