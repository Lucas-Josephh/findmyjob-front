import Suitcase from '../../../svg/Suitcase'
import Select from '../../../select/Select'
import Option from '../../../select/option/Option'
import StudyEnum from '../../../../models/StudyEnum'
import "./Step1.scss"

export default function Step1({handleAddCandidat, handleRemoveCandidat, stepCandidat}) {
    return (
        <div className="extranet-step1">
            <div className="extranet-step1-header">
                <span className="extranet-step1-header_page">Étape {stepCandidat}/3</span>
                <div className="extranet-step1-header-bar">
                    <div className="extranet-step1-header-bar_complete"></div>
                    <div className="extranet-step1-header-bar_nocomplete"></div>
                    <div className="extranet-step1-header-bar_nocomplete"></div>
                </div>
            </div>

            <div className="extranet-step1-body">
                <div className="extranet-step1-body-text">
                    <div className="extranet-step1-body-text_logo"><Suitcase size="24" /></div>
                    <h1 className="extranet-step1-body-text_title">Votre profil</h1>
                    <span className="extranet-step1-body-text_subtitle">Présentez-vous aux recruteurs</span>
                </div>
                
                <div className="extranet-step1-body-container">
                    <label className="extranet-step1-body-container_label" htmlFor="">CV / Résumé</label>
                    <textarea className="extranet-step1-body-container_textarea" name="" id=""></textarea>
                </div>

                <div className="extranet-step1-body-container">
                    <label className="extranet-step1-body-container_label" htmlFor="">Lettre de motivation type</label>
                    <textarea className="extranet-step1-body-container_textarea" name="" id=""></textarea>
                </div>

                <div className="extranet-step1-body-container">
                    <label className="extranet-step1-body-container_label" htmlFor="">Niveau d'étude</label>
                    <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez votre niveau"}>
                        {Object.values(StudyEnum).map((value) => {
                            return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                        })}
                    </Select>
                </div>

                <div>
                    <div className="extranet-step1-body-cellule">
                        <div className="extranet-step1-body-container-content">
                            <input className="extranet-step1-body-container_input" type="text" placeholder='Poste' />
                            <input className="extranet-step1-body-container_input" type="text" placeholder='Entreprise' />
                        </div>
                        <button className="extranet-step1-body-container_btn">+ Ajouter</button>
                    </div>
                </div>

                <div className="extranet-step1-body-btn">
                    <button className="extranet-step1-body-btn_back" onClick={handleRemoveCandidat}>&lt; Retour</button>
                    <div className="extranet-step1-body-btn-container">
                        <button className="extranet-step1-body-btn-container_skip">Passer</button>
                        <button className="extranet-step1-body-btn-container_continue" onClick={handleAddCandidat} >Continuer &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}