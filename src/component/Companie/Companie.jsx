import MagnifyingGlass from "../shared/svg/MagnifyingGlass";
import Location from "../shared/svg/Location";
import Arrow from "../shared/svg/Arrow";
import CompanieCard from "../shared/companieCard/CompanieCard";
import "./Companie.scss";

export default function Companie() {
    return ( 
        <div className="app-companie">
            <header className="app-companie-header">
                <h1 className="app-companie-header_title">Découvrez les entreprises</h1>
                <span className="app-companie-header_subtitle">Explorez les entreprises qui recrutent et trouvez celle qui correspond à vos aspirations</span>
            </header>

            <div className="app-companie-research">
                <div className="app-companie-research-companie">
                    <span className="app-companie-research-companie_svg"><MagnifyingGlass /></span>
                    <input type="text" className="app-companie-research-companie_input" placeholder="Rechercher une entreprise..." />
                </div>
                <div className="app-companie-research-location">
                    <span className="app-companie-research-location_svg"><Location /></span>
                    <input type="text" className="app-companie-research-location_input" placeholder="Localisation..." />
                </div>
                <div className="app-companie-research-sector">
                    <span className="app-companie-research-sector_secsvg"><Arrow /></span>
                    <input type="text" className="app-companie-research-sector_secinput" placeholder="Tous les secteurs" name="" id="" />
                </div>
            </div>
            
            <div className="app-companie-result">
                <p className="app-companie-result-text">
                    <span className="app-companie-result-text_digit">0 </span>
                    entreprise trouvée
                </p>

                <div className="app-companie-result-cards">
                    <div className="app-companie-result-cards_element">
                        <CompanieCard />
                    </div>
                    <div className="app-companie-result-cards_element">
                        <CompanieCard />
                    </div>
                    <div className="app-companie-result-cards_element">
                        <CompanieCard />
                    </div>
                    <div className="app-companie-result-cards_element">
                        <CompanieCard />
                    </div>
                    <div className="app-companie-result-cards_element">
                        <CompanieCard />
                    </div>
                    <div className="app-companie-result-cards_element">
                        <CompanieCard />
                    </div>
                </div>
            </div>

        </div>
    )
}