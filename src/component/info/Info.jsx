import './Info.scss';
import Location from '../shared/svg/Location';
import People from '../shared/svg/People';
import Date from '../shared/svg/Date';
import OfferAnnouncement from '../shared/offerAnnouncement/OfferAnnouncement';
import { useState } from 'react';

export default function Info() {
    const [select, setSelect] = useState(false);

    const handleSelect = (value) => {
        setSelect(value);
    }
    
    return (
        <div className="app-info">
            <header className="app-info-container">
                <div className="app-info-container-content">
                    <div className="app-info-container-content_img"></div>
                    <div className="app-info-container-content-card">
                        <h3 className="app-info-container-content-card_title">SuperHost</h3>
                        <div className="app-info-container-content-card-info">
                            <span className="app-info-container-content-card-info_svg"><Location size="16" /> Paris</span>
                            <span className="app-info-container-content-card-info_svg"><People size="15" /> 6 - 20 employés</span>
                            <span className="app-info-container-content-card-info_svg"><Date size="15" /> 2023</span>
                        </div>
                        <span className="app-info-container-content-card_activitie">Technologie</span>
                    </div>
                </div>
            </header>

            <div className="app-info-description">
                <div className="app-info-description-nav">
                    <button className={`${!select ? "app-info-description-nav_active" : "app-info-description-nav_passif"}`} onClick={() => handleSelect(false)}>À propos</button>
                    <button className={`${select ? "app-info-description-nav_active" : "app-info-description-nav_passif"}`} onClick={() => handleSelect(true)}>Offres (1)</button>
                </div>
                {!select ?
                    <div className="app-info-description-company">
                        <h1 className="app-info-description-company_title">À propos de SuperHost</h1>
                        <p className="app-info-description-company_text">C'est une entreprise familiale</p>
                    </div>
                : 
                    <OfferAnnouncement />
                }
                
            </div>
        </div>
    )
}