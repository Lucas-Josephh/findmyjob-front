import { Link } from "react-router-dom";
import Suitcase from "../shared/svg/Suitcase";
import Info from "../shared/svg/Info";
import Location from "../shared/svg/Location"
import Select from "../shared/select/Select";
import Option from "../shared/select/option/Option"
import Salary from "../shared/svg/Salary"
import Present from "../shared/svg/Present"
import Medal from "../shared/svg/Medal"
import Send from "../shared/svg/Send"
import People from "../shared/svg/People"
import Register from "../shared/svg/register";
import ArrowLeft from "../shared/svg/ArrowLeft";
import ContractEnum from "../models/ContractEnum"
import WorkEnum from "../models/WorkEnum"
import ActivitieEnum from "../models/ActivitieEnum"
import FonctionEnum from "../models/FonctionEnum"
import LevelEnum from "../models/LevelEnum"
import "./Publication.scss";

export default function Publication() {
    return (
        <div className="app-publication">
            
            <div className='app-publication-back'>
                <Link to="/offres">
                    <span className='app-publication-back_span'>
                        <ArrowLeft size="16" />Retour à mes offres
                    </span>
                </Link>
                
            </div>
    
            <div className="app-publication-form">
                <div className="app-publication-form-header">
                    <div className="app-publication-form-header_svg"><Suitcase /></div>
                    <h2 className="app-publication-form-header_title">Nouvelle offre d'emploi</h2>
                </div>

                <div className="app-publication-form-info">
                    <div className="app-publication-form-info-header">
                        <span className="app-publication-form-info-header_svg"><Info /></span>
                        <h1 className="app-publication-form-info-header_title">Informations de base</h1>
                    </div>

                    <div className="app-publication-form-info-body">
                        <div className="app-publication-form-info-body-group">
                            <label className="app-publication-form-info-body-group_label" htmlFor="title">Titre du poste *</label>
                            <input className="app-publication-form-info-body-group_input" type="text" id="title" placeholder="Ex: Développeur Full Stack" />
                        </div>

                        <div className="app-publication-form-info-body-group">
                            <label className="app-publication-form-info-body-group_label" htmlFor="description">Description du poste *</label>
                            <textarea className="app-publication-form-info-body-group_textarea" type="text" id="description" placeholder="Décrivez les missions et responsabilités..."></textarea>
                        </div>
                        
                        <div className="app-publication-form-info-body-megagroup">
                            <div className="app-publication-form-info-body-group">
                                <label className="app-publication-form-info-body-group_label" htmlFor="localisation"><Location size="16" /> Localisation</label>
                                <input className="app-publication-form-info-body-group_input" type="text" id="localisation" placeholder="Ex: Paris, France" />
                            </div>

                            <div className="app-publication-form-info-body-group">
                                <label className="app-publication-form-info-body-group_label" htmlFor="contract">Type de contrat</label>

                                <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez"}>
                                    {Object.values(ContractEnum).map((value) => {
                                        return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                                    })}
                                </Select>

                            </div>
                        </div>

                        <div className="app-publication-form-info-body-megagroup">
                            <div className="app-publication-form-info-body-group">
                                <label className="app-publication-form-info-body-group_label" htmlFor="localisation">Mode de travail</label>
                                <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez"}>
                                    {Object.values(WorkEnum).map((value) => {
                                        return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                                    })}
                                </Select>
                            </div>

                            <div className="app-publication-form-info-body-group">
                                <label className="app-publication-form-info-body-group_label" htmlFor="contract">Secteur d'activité</label>
                                <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez"}>
                                    {Object.values(ActivitieEnum).map((value) => {
                                        return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                                    })}
                                </Select>
                            </div>
                        </div>

                        <div className="app-publication-form-info-body-megagroup">
                            <div className="app-publication-form-info-body-group">
                                <label className="app-publication-form-info-body-group_label" htmlFor="localisation"><Salary size="16" />Fourchette de salaire (annuel brut)</label>
                                <input className="app-publication-form-info-body-group_input" type="number" placeholder="Minimum (€)" />
                            </div>

                            <div className="app-publication-form-info-body-group">
                                <label className="app-publication-form-info-body-group_label" htmlFor="contract">Maximum</label>
                                <input className="app-publication-form-info-body-group_input" type="number" placeholder="Maximum (€)" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-publication-form-profil">
                    <div className="app-publication-form-profil-header">
                        <div className="app-publication-form-profil-header_svg"><People /></div>
                        <h1 className="app-publication-form-profil-header_title">Profil recherché (optionel)</h1>
                    </div>

                    <div className="app-publication-form-info-body-megagroup">
                        <div className="app-publication-form-info-body-group">
                            <label className="app-publication-form-info-body-group_label" htmlFor="localisation">Années d'expérience</label>
                            <input className="app-publication-form-info-body-group_input" type="text" placeholder="Ex: 3" />
                        </div>

                        <div className="app-publication-form-info-body-group">
                            <label className="app-publication-form-info-body-group_label" htmlFor="contract">Niveau d'étude</label>
                            <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez"}>
                                {Object.values(LevelEnum).map((value) => {
                                    return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                                })}
                            </Select>
                        </div>
                    </div>
                    
                    <div className="app-publication-form-info-body-group">
                        <label className="app-publication-form-info-body-group_label" htmlFor="localisation">Niveau d'expérience</label>
                        <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez"}>
                            {Object.values(LevelEnum).map((value) => {
                                return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                            })}
                        </Select>
                    </div>

                    <div className="app-publication-form-profil-techno">
                        <label className="app-publication-form-info-body-group_label" htmlFor="">Technologies</label>
                        <div className="app-publication-form-profil-techno-group">
                            <input className="app-publication-form-info-body-group_input app-publication-form-profil-techno-group_input" type="text" name="" id="" placeholder="Nom de la techno..." />
                        
                            <Select value="Maîtrise" className="app-publication-form-info-body-group_select app-publication-form-profil-techno-group_select">
                                <Option className="app-publication-form-info-body-group_option">Maîtrise</Option>
                                <Option className="app-publication-form-info-body-group_option">Connaît</Option>
                                <Option className="app-publication-form-info-body-group_option">Optionnel</Option>
                            </Select>
                            <button className="app-publication-form-info-body-group_input app-publication-form-profil-techno-group_btn">+</button>
                        </div>
                    </div>
                </div>

                <div className="app-publication-form-advantage">
                    <div className="app-publication-form-advantage-header">
                        <div className="app-publication-form-advantage-header_svg"><Present size="20" /></div>
                        <h1 className="app-publication-form-advantage-header_title">Avantages du poste (optionnel)</h1>
                    </div>
                    
                    <div className="app-publication-form-advantage-box">
                        <div className="app-publication-form-advantage-box-group">
                            <span className="app-publication-form-advantage-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-advantage-box-group_label" htmlFor="">Tickets restaurant</label>
                        </div>
                        <div className="app-publication-form-advantage-box-group">
                            <span className="app-publication-form-advantage-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-advantage-box-group_label" htmlFor="">Remboursement transport</label>
                        </div>
                        <div className="app-publication-form-advantage-box-group">
                            <span className="app-publication-form-advantage-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-advantage-box-group_label" htmlFor="">RTT</label>
                        </div>
                        <div className="app-publication-form-advantage-box-group">
                            <span className="app-publication-form-advantage-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-advantage-box-group_label" htmlFor="">Télétravail</label>
                        </div>
                        <div className="app-publication-form-advantage-box-group">
                            <span className="app-publication-form-advantage-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-advantage-box-group_label" htmlFor="">Mutuelle</label>
                        </div>
                        <div className="app-publication-form-advantage-box-group">
                            <span className="app-publication-form-advantage-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-advantage-box-group_label" htmlFor="">Formation</label>
                        </div>
                    </div>

                    <div className="app-publication-form-info-body-group">
                        <label className="app-publication-form-info-body-group_label" htmlFor="localisation">Autres avantages</label>
                        <input className="app-publication-form-info-body-group_input" type="text" id="localisation" placeholder="Ex: Paris, France" />
                    </div>
                </div>

                <div className="app-publication-form-complementary">
                    <div className="app-publication-form-complementary-header">
                        <div className="app-publication-form-complementary-header_svg"><Medal size="20"/></div>
                        <h1 className="app-publication-form-complementary-header_title">Informations complémentaires</h1>
                    </div>

                    <div className="app-publication-form-info-body-megagroup">
                        <div className="app-publication-form-info-body-group">
                            <label className="app-publication-form-info-body-group_label" htmlFor="localisation">Mode de travail</label>
                            <input className="app-publication-form-info-body-group_input" type="date" />
                        </div>

                        <div className="app-publication-form-info-body-group">
                            <label className="app-publication-form-info-body-group_label" htmlFor="contract">Secteur d'activité</label>
                            <Select className="app-publication-form-info-body-group_select" placeholder={"Sélectionnez"}>
                                {Object.values(FonctionEnum).map((value) => {
                                    return <Option className="app-publication-form-info-body-group_option" key={value}>{value}</Option>
                                })}
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="app-publication-form-apply">
                    <div className="app-publication-form-apply-header">
                        <div className="app-publication-form-apply-header_svg"><Send /></div>
                        <div className="app-publication-form-apply-header_title">Comment postuler ?</div>
                    </div>

                    <div className="app-publication-form-apply-box">
                        <div className="app-publication-form-apply-box-group">
                            <span className="app-publication-form-apply-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-apply-box-group_label" htmlFor="">Candidature simplifiée (CV + message court)</label>
                        </div>

                        <div className="app-publication-form-apply-box-group">
                            <span className="app-publication-form-apply-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-apply-box-group_label" htmlFor="">Candidature complète (CV + lettre de motivation)</label>
                        </div>

                        <div className="app-publication-form-apply-box-group">
                            <span className="app-publication-form-apply-box-group_input">
                                <input type="checkbox" />
                            </span>
                            <label className="app-publication-form-apply-box-group_label" htmlFor="">Redirection vers site externe</label>
                        </div>
                    </div>
                </div>

                <div className="app-publication-form-save">
                    <button className="app-publication-form-save_cancel">Annuler</button>
                    <button className="app-publication-form-save_publish"><Register size={16} /> Publier l'offre</button>
                </div>
            </div>
        </div>
    )
}