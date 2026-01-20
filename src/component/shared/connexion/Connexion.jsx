import Human from "../svg/Human"
import Companie from "../svg/Companie"
import "./Connexion.scss"

export default function Connexion() {
    return (
        <>
            <div className="module-connexion_filtre"></div>
            <div className="module-connexion">
                <h1 className="module-connexion_title">Bienvenue sur FindMyJob</h1>
                <span className="module-connexion_subtitle">Commencez par choisir votre profil</span>

                <div className="module-connexion-container">
                    <div className="module-connexion-container-candidat">
                        <div className="module-connexion-container-candidat_logo"><Human size="32" /></div>
                        <h3 className="module-connexion-container-candidat_title">Candidat</h3>
                        <span className="module-connexion-container-candidat_subtitle">Je cherche un emploi</span>
                    </div>

                    <div className="module-connexion-container-companie">
                        <div className="module-connexion-container-companie_logo"><Companie size="32" /></div>
                        <h3 className="module-connexion-container-companie_title">Entreprise</h3>
                        <span className="module-connexion-container-companie_subtitle">Je recrute des talents</span>
                    </div>
                </div>
            </div>
        </>
    )
}