import Suitcase from "../../../svg/Suitcase"
import ActivitieEnum from "../../../../models/ActivitieEnum"
import EmployeeEnum from "../../../../models/EmployeeEnum"
import Select from "../../../select/Select"
import Option from "../../../select/option/Option"
import Cross from "../../../svg/Cross"
import "./CompanyStep2.scss"

export default function CompanyStep2({handleRemoveCompany, handleShowConnection, stepCompany, data, setData}) {
    return (
        <div className="extranet-companyStep2">
            <button className="module-connexion_leave" onClick={handleShowConnection}><Cross size="16" /></button>
            <div className="extranet-companyStep2-header">
                <span className="extranet-companyStep2-header_page">Étape {stepCompany}/2</span>
                <div className="extranet-companyStep2-header-bar">
                    <div className="extranet-companyStep2-header-bar_complete"></div>
                    <div className="extranet-companyStep2-header-bar_complete"></div>
                </div>
            </div>

            <div className="extranet-companyStep2-body">
                <div className="extranet-companyStep2-body-text">
                    <div className="extranet-companyStep2-body-text_logo"><Suitcase size="24" /></div>
                    <h1 className="extranet-companyStep2-body-text_title">Détails supplémentaires</h1>
                    <span className="extranet-companyStep2-body-text_subtitle">Aidez les candidats à mieux vous connaître</span>
                </div>

                <div className="extranet-companyStep2-body-container">
                    <label className="extranet-companyStep2-body-container_label" htmlFor="">Secteur d'activité *</label>
                    <Select 
                        className="app-publication-form-info-body-group_select" 
                        placeholder={"Sélectionnez un secteur"}
                        value={data.industry}
                        onChange={(value) => setData({...data, industry: value})}
                    >
                        {Object.values(ActivitieEnum).map((value) => {
                            return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                        })}
                    </Select>
                </div>

                <div className="extranet-companyStep2-body-container">
                    <label className="extranet-companyStep2-body-container_label" htmlFor="">Nombre d'employés *</label>
                    <Select 
                        className="app-publication-form-info-body-group_select" 
                        placeholder={"Sélectionnez"}
                        value={data.employee}
                        onChange={(value) => setData({...data, employee: value})}
                    >
                        {Object.values(EmployeeEnum).map((value) => {
                            return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                        })}
                    </Select>
                </div>

                <div className="extranet-companyStep2-body-container">
                    <label className="extranet-companyStep2-body-container_label" htmlFor="">Email de contact (optionnel)</label>
                    <input 
                        className="extranet-companyStep2-body-container_input" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="contact@entreprise.com"
                        value={data.mail}
                        onChange={(e) => setData({...data, mail: e.target.value})}
                        required
                    />
                </div>

                <div className="extranet-companyStep2-body-container">
                    <label className="extranet-companyStep2-body-container_label" htmlFor="">Téléphone (optionnel)</label>
                    <input 
                        className="extranet-companyStep2-body-container_input" 
                        type="text" 
                        name="" 
                        id="" 
                        placeholder="+33 1 23 45 67 89"
                        value={data.phone}
                        onChange={(e) => setData({...data, phone: e.target.value})}
                    />
                </div>

                <div className="extranet-companyStep2-body-btn">
                    <button className="extranet-companyStep2-body-btn_back" type="button" onClick={handleRemoveCompany}>&lt; Retour</button>
                    <div className="extranet-companyStep2-body-btn-container">
                        <button className="extranet-candidatStep3-body-btn_finish">Terminer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}