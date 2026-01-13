import Send from '../shared/svg/Send/';
import Companie from '../shared/svg/Companie/';
import Location from '../shared/svg/Location/';
import Tag from '../shared/Tag/Tag';
import Suitcase from '../shared/svg/Suitcase';
import Salary from '../shared/svg/Salary/';
import Clock from '../shared/svg/Clock/';
import Info from '../shared/svg/Info/';
import Date from '../shared/svg/Date/';
import ArrowLeft from '../shared/svg/ArrowLeft/';
import { Link } from 'react-router-dom';
import './Description.scss';


export default function Description() {
    return (
        <div className='app-description'>
            <Link to="/offres"><span className='app-description_back'><ArrowLeft size="16" />Retour aux offres</span></Link>
            <div className='app-description-info'>
                <div className='app-description-info-head'>
                    <h1 className='app-description-info-head_title'>Développeur web F/H</h1>
                    <button className='app-description-info-head_btn'><Send size="18" /> Postuler</button>
                </div>
                <div className='app-description-info-company'><Companie size="20" /> TechnoLead</div>
                <div className='app-description-info-detail'>
                    <div className='app-description-info-detail_city'><Location size="16" /> Marseille</div>
                    <Tag tag="alternance" />
                    <Tag tag="Full remote" />
                    <div className='app-description-info-detail_level'><Suitcase size="12" /> Junior</div>
                </div>
                <div className='app-description-info-detail_salary'><Salary /> 100€ - 200€ par an</div>
                <div className='app-description-info-detail_clock'><Clock size="16" /> Publié le 7 janvier 2026</div>
            </div>

            <div className='app-description-job'>
                <h3 className='app-description-job_title'>Description du poste</h3>
                <p className='app-description-job_paragraphe'>C'est un super poste</p>
            </div>

            <div className='app-description-complementary'>
                <h3 className='app-description-complementary-title'>
                    <span className='app-description-complementary-title_svg'><Info /></span>
                    Informations complémentaires
                </h3>

                <div className='app-description-complementary-date'>
                    <div className='app-description-complementary-date-container'>
                        <Date size="20" />
                        <div className='app-description-complementary-date-container-content'>
                            <p className='app-description-complementary-date-container-content_title'>Date limite de candidature</p>
                            <p className='app-description-complementary-date-container-content_subtitle'>Tant que l'offre est en ligne</p>
                        </div>
                    </div>

                    <div className='app-description-complementary-date-container'>
                        <Companie size="20" />
                        <div className='app-description-complementary-date-container-content'>
                            <p className='app-description-complementary-date-container-content_title'>Secteur</p>
                            <p className='app-description-complementary-date-container-content_subtitle'>Technologie</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='app-description-interested'>
                <h3 className='app-description-interested_title'>Intéressé par cette offre ?</h3>
                <span className='app-description-interested_subtitle'>Postulez dès maintenant et rejoignez TechnoLead</span>
                <button className='app-description-interested_btn'><Send size="18" /> Envoyer ma candidature</button>
            </div>
        </div>
    )
}