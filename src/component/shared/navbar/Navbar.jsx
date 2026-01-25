import Suitcase from '../svg/Suitcase'
import Arrow from '../svg/Arrow'
import './Navbar.scss'
import House from '../svg/House'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Companie from '../svg/Companie'

export default function Navbar() {
    const path = useLocation().pathname;
    const navbarRef = useRef(null);
    const [navHeight, setNavbHeight] = useState(0);
    
    const links = [
        { name: "Accueil", path: "/home", icon: <House /> },
        { name: "Offres", path: "/offres", icon: <Suitcase size="16" /> },
        { name: "Entreprises", path: "/entreprises", icon: <Companie size="16" /> },
    ];
    
    useEffect(() => {
        setNavbHeight(navbarRef.current.offsetHeight);

        const handleResize = () => {
            setNavbHeight(navbarRef.current.offsetHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div style={{height: navHeight}}></div>
            <nav className="extranet-navbar" ref={navbarRef}>
                <div className="extranet-navbar-logo">
                    <div className="extranet-navbar-logo_svg"><Suitcase /></div>
                    <span className="extranet-navbar-logo-title">Find<span className="extranet-navbar-logo-title_my">My</span>Job</span>
                </div>

                <div className="extranet-navbar-link">
                {links.map(link => ( 
                   <Link
                        key={link.name}
                        to={link.path}
                        className={`extranet-navbar-link-content ${path == link.path ? 'active' : ''}`}
                    >
                        {link.icon} {link.name}
                    </Link>
                ))}
                </div>

                <div className="extranet-navbar-profil">
                    <Link to="/publication">
                        <button className="extranet-navbar-publish">
                            <span className="extranet-navbar-publish_svg">+</span>
                            Publier une offre
                        </button>
                    </Link>
                    
                    <div className="extranet-navbar-profil-initial">
                        <div className="extranet-navbar-profil-initial_svg">LJ</div>
                        <Arrow />
                    </div>
                </div>
            </nav>
        </>
    )
}