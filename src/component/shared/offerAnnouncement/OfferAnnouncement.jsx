import Clock from '../svg/Clock'
import Companie from '../svg/Companie'
import Location from '../svg/Location'
import Salary from '../svg/Salary'
import Suitcase from '../svg/Suitcase'
import Tag from '../Tag/Tag'
import './OfferAnnouncement.scss'

export default function OfferAnnouncement() {
    return (
        <>
            <div className='extranet-offerAnnouncement'>
                <div className='extranet-offerAnnouncement-title'>
                    <h3 className='extranet-offerAnnouncement-title_h3'>Test</h3>
                    <span className='extranet-offerAnnouncement-title_date'><Clock size="12" />7 janv.</span>
                </div>
                <span className='extranet-offerAnnouncement_companie'><Companie />SuperHost</span>
                <div className='extranet-offerAnnouncement-info'>
                    <span className='extranet-offerAnnouncement-info_location'><Location size="16" />Location</span>
                    <span><Tag tag="interim" /></span>
                    <span><Tag tag="sur site" /></span>
                    <span className='extranet-offerAnnouncement-info_level'><Suitcase size="12" /> Junior</span>
                </div>
                <div className='extranet-offerAnnouncement_salary'><Salary />455€ - 4557€</div>
            </div>
        </>
    )
}