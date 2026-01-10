import Star from '../shared/svg/Star'
import MagnifyingGlass from '../shared/svg/MagnifyingGlass'
import Location from '../shared/svg/Location'
import './Home.scss'

export default function Home() {
    return (
        <div className="app-home">
            <div className="app-home-head">
                <div className="app-home-head-container">
                    <div className="app-home-head-container-content">
                        <div className="app-home-head-container-content_tag"><Star /> Trouvez votre prochain emploi</div>
                        <h1 className="app-home-head-container-content-title">Find<span className="app-home-head-container-content-title_my">My</span>Job</h1>
                        <p className="app-home-head-container-content_subtitle">La plateforme qui connecte les talents aux meilleures opportunités.</p>
                        <p className="app-home-head-container-content_subtitle">Rejoignez des milliers de professionnels qui ont trouvé leur emploi idéal.</p>
                        
                        <form className="app-home-head-container-content-form">
                            <div className="app-home-head-container-content-form-group">
                                <MagnifyingGlass /> <input className="app-home-head-container-content-form-group_input" type="text" placeholder='Poste, compétences, entreprise...' />
                            </div>
                            <div className="app-home-head-container-content-form-group">
                                <Location /> <input className="app-home-head-container-content-form-group_input" type="text" placeholder='Ville, région...' />
                            </div>
                            <input className="app-home-head-container-content-form-group_submit" type="submit" name="search" value="Rechercher" />
                        </form>

                        <div className="app-home-head-container-content-alltag">
                            <div className="app-home-head-container-content-alltag_tag">CDI</div>
                            <div className="app-home-head-container-content-alltag_tag">Stage</div>
                            <div className="app-home-head-container-content-alltag_tag">Alternance</div>
                            <div className="app-home-head-container-content-alltag_tag">Remote</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app-home-intermediary">
                <div className="app-home-intermediary-card">
                    <span className="app-home-intermediary-card_number">10K +</span>
                    <span className="app-home-intermediary-card_description">Offres d'emploi</span>
                </div>

                <div className="app-home-intermediary-card">
                    <span className="app-home-intermediary-card_number">5K +</span>
                    <span className="app-home-intermediary-card_description">Entreprises</span>
                </div>

                <div className="app-home-intermediary-card">
                    <span className="app-home-intermediary-card_number">50K +</span>
                    <span className="app-home-intermediary-card_description">Candidats</span>
                </div>

                <div className="app-home-intermediary-card">
                    <span className="app-home-intermediary-card_number">98%</span>
                    <span className="app-home-intermediary-card_description">Satisfaction</span>
                </div>
            </div>
            
            <div className="app-home-body">
                <div className="app-home-body-header">
                    <h1 className="app-home-body-header_title">Offres récentes</h1>
                    <span className="app-home-body-header_subtitle">Les dernières opportunités publiées</span>
                </div>
            </div>
        </div>
    )
}