import './Footer.scss'

export default function Footer() {
    return (
        <div className="extranet-footer">
            <div className="extranet-footer-container">
                <div className="extranet-footer-container-column">
                    <h1 className="extranet-footer-container-column-find">Find<span className="extranet-footer-container-column-find_my">My</span>Job</h1>
                    <span className="extranet-footer-container-column_text">La plateforme qui connecte les talents aux meilleures opportunités.</span>
                </div>

                <div className="extranet-footer-container-column">
                    <h1 className="extranet-footer-container-column_title">Candidats</h1>
                    <span className="extranet-footer-container-column_text">Rechercher un emploi</span>
                    <span className="extranet-footer-container-column_text">Entreprises</span>
                </div>

                <div className="extranet-footer-container-column">
                    <h1 className="extranet-footer-container-column_title">Entreprises</h1>
                    <span className="extranet-footer-container-column_text">Publier une offre</span>
                    <span className="extranet-footer-container-column_text">Gérer mes offres</span>
                </div>

                <div className="extranet-footer-container-column">
                    <h1 className="extranet-footer-container-column_title">Légal</h1>
                    <span className="extranet-footer-container-column_text">Conditions d'utilisation</span>
                    <span className="extranet-footer-container-column_text">Politique de confidentialité</span>
                </div>
            </div>

            <span className="extranet-footer_right">© 2026 FindMyJob. Tous droits réservés.</span>
        </div>
    )
}