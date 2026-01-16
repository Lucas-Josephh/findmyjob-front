import Location from "../shared/svg/Location"
import Clock from "../shared/svg/Clock"
import Tag from "../shared/tag/Tag"
import People from "../shared/svg/People"
import Switch from "../shared/switch/Switch"
import Point from "../shared/svg/Point"
import "./MyOffers.scss"

export default function MyOffers() {
    return (
        <div className="app-myoffers">
            <div className="app-myoffers-body">
                <div className="app-myoffers-body-header">
                    <h1 className="app-myoffers-body-header_title">Mes offres d'emploi</h1>
                    <span className="app-myoffers-body-header_subtitle">Gérez vos offres publiées (3 offres)</span>
                </div>

                <div className="app-myoffers-body-cards">
                    <div className="app-myoffers-body-cards-element">
                        <span className="app-myoffers-body-cards-element-number app-myoffers-body-cards-element-number_total">3</span>
                        <span className="app-myoffers-body-cards-element_text">Total</span>
                    </div>

                    <div className="app-myoffers-body-cards-element">
                        <span className="app-myoffers-body-cards-element-number app-myoffers-body-cards-element-number_active">3</span>
                        <span className="app-myoffers-body-cards-element_text">Actives</span>
                    </div>

                    <div className="app-myoffers-body-cards-element">
                        <span className="app-myoffers-body-cards-element-number app-myoffers-body-cards-element-number_inactive">0</span>
                        <span className="app-myoffers-body-cards-element_text">Inactives</span>
                    </div>

                    <div className="app-myoffers-body-cards-element">
                        <span className="app-myoffers-body-cards-element-number app-myoffers-body-cards-element-number_week">2</span>
                        <span className="app-myoffers-body-cards-element_text">Cette semaine</span>
                    </div>
                </div>

                <div className="app-myoffers-body-offer">
                    <div className="app-myoffers-body-offer-element">
                        <div className="app-myoffers-body-offer-element-header">
                            <h1 className="app-myoffers-body-offer-element-header_title">Kj</h1>
                            <span className="app-myoffers-body-offer-element-header-active">
                                Active
                                <Switch />
                                <span className="app-myoffers-body-offer-element-header-active_point"><Point size="18" /></span>
                            </span>
                        </div>
                        <div className="app-myoffers-body-offer-element-info">
                            <span className="app-myoffers-body-offer-element-info_location"><Location size="16" /> Kj</span>
                            <span className="app-myoffers-body-offer-element-info_date"><Clock size="16" /> 7 janv. 2026</span>
                        </div>

                        <div className="app-myoffers-body-offer-element_tag">
                            <Tag tag="interim" />
                            <Tag tag="sur site" />
                            <Tag tag="junior" icon={<People size="12" />} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}