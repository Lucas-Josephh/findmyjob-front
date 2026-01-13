import MagnifyingGlass from "../shared/svg/MagnifyingGlass"
import Location from "../shared/svg/Location"
import OfferAnnouncement from "../shared/offerAnnouncement/OfferAnnouncement"
import Arrow from "../shared/svg/Arrow"
import './Offer.scss'

export default function Offer() {
    return (
        <div className="app-offer">
            <div className="app-offer-research">
                <div className="app-offer-research-container">
                    <span className="app-offer-research-container_svg"><MagnifyingGlass /></span>
                    <input className="app-offer-research-container_input" type="text" placeholder='Poste, compétences, entreprise...' />
                </div>

                <div className="app-offer-research-container">
                    <span className="app-offer-research-container_svg"><Location /></span>
                    <input className="app-offer-research-container_input" type="text" placeholder='Ville, région...' />
                </div>
            </div>

            <div className="app-offer-body">
                <div className="app-offer-body-container">
                    <div className="app-offer-body-container-filter">
                        <h2 className="app-offer-body-container-filter_title">Filtres</h2>
                        <h3 className="app-offer-body-container-filter_category">Type de contrat</h3>
                        <ul className="app-offer-body-container-filter-list">
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />CDI</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />CDD</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Stage</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Alternance</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Freelance</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Intérim</li>
                        </ul>

                        <h3 className="app-offer-body-container-filter_category">Mode de travail</h3>
                        <ul className="app-offer-body-container-filter-list">
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Sur site</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Hybride</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Full remote</li>
                        </ul>

                        <h3 className="app-offer-body-container-filter_category">Niveau d'expérience</h3>
                        <ul className="app-offer-body-container-filter-list">
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Junior</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Intermédiaire</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Sénior</li>
                            <li className="app-offer-body-container-filter-list_li"><input type="checkbox" name="" id="" />Expert</li>
                        </ul>
                    </div>

                    <div className="app-offer-body-container-results">
                        <div className="app-offer-body-container-results-header">
                            <div className="app-offer-body-container-results-header-container">
                                <h1 className="app-offer-body-container-results-header-container_title">Offres d'emploi</h1>
                                <span className="app-offer-body-container-results-header-container_subtitle">10 résultats</span>
                            </div>
                            <button className="app-offer-body-container-results-header_btn">Plus récent <Arrow /></button>
                        </div>

                        <div className="app-offer-body-container-results-card">
                            <div className="app-offer-body-container-results-card_element">
                                <OfferAnnouncement />
                            </div>

                            <div className="app-offer-body-container-results-card_element">
                                <OfferAnnouncement />
                            </div>

                            <div className="app-offer-body-container-results-card_element">
                                <OfferAnnouncement />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}