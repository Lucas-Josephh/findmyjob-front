import Location from '../svg/Location'
import People from '../svg/People'
import './Companie.scss'

export default function Companie() {
    return (
        <div className="extranet-companie">
            <div className="extranet-companie-container">
                <div className="extranet-companie-container_img"></div>
                <div className="extranet-companie-container-card">
                    <h3 className="extranet-companie-container-card_title">SuperHost</h3>
                    <div className="extranet-companie-container-card-info">
                        <span className="extranet-companie-container-card-info_svg"><Location size="16" /> Paris</span>
                        <span className="extranet-companie-container-card-info_svg"><People size="15" /> Petite</span>
                    </div>
                    <span className="extranet-companie-container-card_activitie">Technologie</span>
                </div>
            </div>
            <p className="extranet-companie-container-card_description">C'est une entreprise familial</p>
        </div>
    )
}