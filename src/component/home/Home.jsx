import Star from '../shared/svg/Star'
import MagnifyingGlass from '../shared/svg/MagnifyingGlass'
import Location from '../shared/svg/Location'
import OfferAnnouncement from '../shared/offerAnnouncement/OfferAnnouncement'
import Companie from '../shared/companie/Companie'
import Target from '../shared/svg/Target'
import Fuze from '../shared/svg/Fuze'
import ArrowRight from '../shared/svg/ArrowRight'
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
                    <div className="app-home-body-header-container">
                        <h1 className="app-home-body-header-container_title">Offres récentes</h1>
                        <span className="app-home-body-header-container_subtitle">Les dernières opportunités publiées</span>
                    </div>
                    <button className="app-home-body-header_btn">Voir tout <ArrowRight /></button>
                </div>

                <div className='app-home-body-card'>
                    <div className='app-home-body-card_element'>
                        <OfferAnnouncement />
                    </div>

                    <div className='app-home-body-card_element'>
                        <OfferAnnouncement />
                    </div>
                    
                    <div className='app-home-body-card_element'>
                        <OfferAnnouncement />
                    </div>

                    <div className='app-home-body-card_element'>
                        <OfferAnnouncement />
                    </div>

                    <div className='app-home-body-card_element'>
                        <OfferAnnouncement />
                    </div>

                    <div className='app-home-body-card_element'>
                        <OfferAnnouncement />
                    </div>
                </div>

                <div className="app-home-body-recruitment">
                    <div className="app-home-body-recruitment-header">
                        <h1 className="app-home-body-recruitment-header_title">Entreprises qui recrutent</h1>
                        <span className="app-home-body-recruitment-header_subtitle">Découvrez les employeurs actifs sur notre plateforme</span>
                    </div>
                    <button className="app-home-body-recruitment-header_btn">Toutes les entreprises <ArrowRight /></button>
                </div>

                <div className="app-home-body-recruitment-companie">
                    <div className="app-home-body-recruitment-companie_element">
                        <Companie />
                    </div>
                    <div className="app-home-body-recruitment-companie_element">
                        <Companie />
                    </div>
                </div>

                <div className="app-home-body-about">
                    <div className="app-home-body-about-header">
                        <h1 className="app-home-body-about-header_title">Pourquoi FindMyJob ?</h1>
                        <span className="app-home-body-about-header_subtitle">Une plateforme pensée pour votre réussite</span>
                    </div>

                    <div className="app-home-body-about-skill">
                        <div className="app-home-body-about-skill-card">
                            <div className="app-home-body-about-skill-card_logo"><Target size="32" /></div>
                            <div className="app-home-body-about-skill-card-info">
                                <h3 className="app-home-body-about-skill-card-info_title">Ciblé</h3>
                                <span className="app-home-body-about-skill-card-info_subtitle">Des offres adaptées à votre profil</span>
                            </div>
                        </div>

                        <div className="app-home-body-about-skill-card">
                            <div className="app-home-body-about-skill-card_logo"><Fuze size="32" /></div>
                            <div className="app-home-body-about-skill-card-info">
                                <h3 className="app-home-body-about-skill-card-info_title">Rapide</h3>
                                <span className="app-home-body-about-skill-card-info_subtitle">Postulez en quelques clics</span>
                            </div>
                        </div>

                        <div className="app-home-body-about-skill-card">
                            <div className="app-home-body-about-skill-card_logo"><Star size="32" /></div>
                            <div className="app-home-body-about-skill-card-info">
                                <h3 className="app-home-body-about-skill-card-info_title">Innovant</h3>
                                <span className="app-home-body-about-skill-card-info_subtitle">Une expérience utilisateur moderne</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}