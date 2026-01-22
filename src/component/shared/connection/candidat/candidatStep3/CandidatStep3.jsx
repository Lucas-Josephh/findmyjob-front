import Hat from "../../../svg/Hat"
import LanguageEnum from "../../../../models/LanguageEnum"
import Select from "../../../select/Select"
import Option from "../../../select/option/Option"
import Cross from "../../../svg/Cross"
import "./CandidatStep3.scss"

export default function Step3({handleRemoveCandidat, handleShowConnection, stepCandidat, data, setData}) {
    return (
        <div className="extranet-candidatStep3">
            <button className="module-connexion_leave" onClick={handleShowConnection}><Cross size="16" /></button>
            <div className="extranet-candidatStep3-header">
                <span className="extranet-candidatStep3-header_page">Étape {stepCandidat}/3</span>
                <div className="extranet-candidatStep3-header-bar">
                    <div className="extranet-candidatStep3-header-bar_complete"></div>
                    <div className="extranet-candidatStep3-header-bar_complete"></div>
                    <div className="extranet-candidatStep3-header-bar_complete"></div>
                </div>
            </div>

            <div className="extranet-candidatStep3-body">
                <div className="extranet-candidatStep3-body-text">
                    <div className="extranet-candidatStep3-body-text_logo"><Hat size="24" /></div>
                    <h1 className="extranet-candidatStep3-body-text_title">Compétences & Langues</h1>
                    <span className="extranet-candidatStep3-body-text_subtitle">Mettez en avant vos atouts</span>
                </div>

                <div className="extranet-candidatStep3-body-container">
                    <label className="extranet-candidatStep3-body-container_label" htmlFor="">Compétences</label>
                    <div className="extranet-candidatStep3-body-container-content">
                        <input 
                            className="extranet-candidatStep3-body-container_input" 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Ex: React, Python, Gestion de projet..."
                            value={data.skill}
                            onChange={(e) => setData({...data, skill: e.target.value})}
                        />
                        <input type="submit" value="+"  className="extranet-candidatStep3-body-container_submit" name="" id="" />
                    </div>
                </div>

                <div className="extranet-candidatStep3-body-container">
                    <label className="extranet-candidatStep3-body-container_label" htmlFor="">Langues</label>
                    <div className="extranet-candidatStep3-body-container-content">
                        <input 
                            className="extranet-candidatStep3-body-container_input" 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Langue"
                            value={data.language}
                            onChange={(e) => setData({...data, language: e.target.value})}
                        />
                        <Select 
                            className="app-publication-form-info-body-group_select" 
                            placeholder={"Niveau"}
                            value={data.language}
                        >
                            {Object.values(LanguageEnum).map((value) => {
                                return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                            })}
                        </Select>
                        <input type="submit" value="+"  className="extranet-candidatStep3-body-container_submit" name="" id="" />
                    </div>
                </div>

                <div className="extranet-candidatStep3-body-container">
                    <label className="extranet-candidatStep3-body-container_label" htmlFor="">Renseignez votre email * (temporaire)</label>
                    <div className="extranet-candidatStep3-body-container-content">
                        <input 
                            className="extranet-candidatStep3-body-container_input" 
                            type="text" 
                            name="" 
                            id="" 
                            placeholder="Ex: contact@email.com"
                            value={data.mail}
                            onChange={(e) => setData({...data, mail: e.target.value})}
                            required
                        />
                        <input type="submit" value="+"  className="extranet-candidatStep3-body-container_submit" name="" id="" />
                    </div>
                </div>

                <div className="extranet-candidatStep3-body-btn">
                    <button className="extranet-candidatStep3-body-btn_back" onClick={handleRemoveCandidat}>&lt; Retour</button>
                    <button className="extranet-candidatStep3-body-btn_finish">Terminer</button>
                </div>
            </div>
        </div>
    )
}