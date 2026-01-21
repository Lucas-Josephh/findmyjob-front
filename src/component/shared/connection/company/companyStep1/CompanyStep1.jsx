import Companie from "../../../svg/Companie"
import "./CompanyStep1.scss"

export default function CompanyStep1({handleAddCompany, handleRemoveCompany, stepCompany}) {
    return (
        <div className="extranet-companyStep1">
            <div className="extranet-companyStep1-header">
                <span className="extranet-companyStep1-header_page">Étape {stepCompany}/2</span>
                <div className="extranet-companyStep1-header-bar">
                    <div className="extranet-companyStep1-header-bar_complete"></div>
                    <div className="extranet-companyStep1-header-bar_nocomplete"></div>
                </div>
            </div>

            <div className="extranet-companyStep1-body">
                <div className="extranet-companyStep1-body-text">
                    <div className="extranet-companyStep1-body-text_logo"><Companie size="24" /></div>
                    <h1 className="extranet-companyStep1-body-text_title">Informations entreprise</h1>
                    <span className="extranet-companyStep1-body-text_subtitle">Présentez votre entreprise aux candidats</span>
                </div>

                <div className="extranet-companyStep1-body-container">
                    <label className="extranet-companyStep1-body-container_label" htmlFor="">Nom de l'entreprise *</label>
                    <input className="extranet-companyStep1-body-container_input" type="text" name="" id="" placeholder="Ex: TechCorp France" />
                </div>

                <div className="extranet-companyStep1-body-container">
                    <label className="extranet-companyStep1-body-container_label" htmlFor="">Description</label>
                    <textarea className="extranet-companyStep1-body-container_textarea" name="" id="" placeholder="Décrivez votre entreprise, sa mission, sa culture..."></textarea>
                </div>

                <div className="extranet-companyStep1-body-container">
                    <label className="extranet-companyStep1-body-container_label" htmlFor="">Siège social *</label>
                    <input className="extranet-companyStep1-body-container_input" type="text" name="" id="" placeholder="Ex: Paris, France" />
                </div>

                <div className="extranet-companyStep1-body-btn">
                    <button className="extranet-companyStep1-body-btn_back" onClick={handleRemoveCompany}>&lt; Retour</button>
                    <div className="extranet-companyStep1-body-btn-container">
                        <button className="extranet-companyStep1-body-btn-container_continue" onClick={handleAddCompany} >Continuer &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}