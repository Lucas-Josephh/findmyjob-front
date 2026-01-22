import Suitcase from '../../../svg/Suitcase'
import Select from '../../../select/Select'
import Option from '../../../select/option/Option'
import StudyEnum from '../../../../models/StudyEnum'
import Cross from "../../../svg/Cross"
import "./CandidatStep1.scss"

export default function CandidatStep1({handleAddCandidat, handleRemoveCandidat, handleShowConnection, stepCandidat, data, setData}) {
    return (
        <div className="extranet-candidatStep1">
            <button className="module-connexion_leave" onClick={handleShowConnection}><Cross size="16" /></button>
            <div className="extranet-candidatStep1-header">
                <span className="extranet-candidatStep1-header_page">Étape {stepCandidat}/3</span>
                <div className="extranet-candidatStep1-header-bar">
                    <div className="extranet-candidatStep1-header-bar_complete"></div>
                    <div className="extranet-candidatStep1-header-bar_nocomplete"></div>
                    <div className="extranet-candidatStep1-header-bar_nocomplete"></div>
                </div>
            </div>

            <div className="extranet-candidatStep1-body">
                <div className="extranet-candidatStep1-body-text">
                    <div className="extranet-candidatStep1-body-text_logo"><Suitcase size="24" /></div>
                    <h1 className="extranet-candidatStep1-body-text_title">Votre profil</h1>
                    <span className="extranet-candidatStep1-body-text_subtitle">Présentez-vous aux recruteurs</span>
                </div>
                
                <div className="extranet-candidatStep1-body-container">
                    <label className="extranet-candidatStep1-body-container_label" htmlFor="">CV / Résumé</label>
                    <textarea 
                        className="extranet-candidatStep1-body-container_textarea" 
                        name="" 
                        id=""
                        value={data.cv}
                        onChange={(e) => setData({...data, cv: e.target.value})}
                    ></textarea>
                </div>

                <div className="extranet-candidatStep1-body-container">
                    <label className="extranet-candidatStep1-body-container_label" htmlFor="">Lettre de motivation type</label>
                    <textarea 
                        className="extranet-candidatStep1-body-container_textarea" 
                        name="" 
                        id=""
                        value={data.cover_letter}
                        onChange={(e) => setData({...data, cover_letter: e.target.value})}
                    ></textarea>
                </div>

                <div className="extranet-candidatStep1-body-container">
                    <label className="extranet-candidatStep1-body-container_label" htmlFor="">Niveau d'étude</label>
                    <Select 
                        className="app-publication-form-info-body-group_select" 
                        placeholder={"Sélectionnez votre niveau"}
                        value={data.study}
                        onChange={(value) => setData({...data, study: value})}
                    >
                        {Object.values(StudyEnum).map((value) => {
                            return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                        })}
                    </Select>
                </div>

                <div>
                    <label className="extranet-candidatStep1-body-container_label" htmlFor=""><Suitcase size="16" /> Expérience</label>
                    <div className="extranet-candidatStep1-body-cellule">
                        <div className="extranet-candidatStep1-body-container-content">
                            <input 
                                className="extranet-candidatStep1-body-container_input" 
                                type="text" 
                                placeholder='Poste'
                                value={data.experience}
                                onChange={(e) => setData({...data, experience: e.target.value})}
                            />
                            <input 
                                className="extranet-candidatStep1-body-container_input" 
                                type="text" 
                                placeholder='Entreprise'
                                value={data.experience}
                                onChange={(e) => setData({...data, experience: e.target.value})}
                            />
                        </div>
                        <button className="extranet-candidatStep1-body-container_btn">+ Ajouter</button>
                    </div>
                </div>

                <div className="extranet-candidatStep1-body-btn">
                    <button className="extranet-candidatStep1-body-btn_back" onClick={handleRemoveCandidat}>&lt; Retour</button>
                    <div className="extranet-candidatStep1-body-btn-container">
                        <button className="extranet-candidatStep1-body-btn-container_skip">Passer</button>
                        <button className="extranet-candidatStep1-body-btn-container_continue" onClick={handleAddCandidat} >Continuer &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}