import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Google from "../shared/svg/Google"
import Mail from "../shared/svg/Mail"
import Chain from "../shared/svg/Chain"
import axios from "axios"
import "./Authentification.scss"

export default function Authentification() {
    const navigate = useNavigate();
    const [authData, setAuthdata] = useState({
        mail: '',
        password: ''
    })
    
    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            const data = authData;
            const res = await axios.post("http://localhost:3000/api/auth", { data });
            if(res.data.exists) {
                navigate("/home")
            }

        } catch (err) {
            console.error("Erreur lors de l'ajout :", err);
        }
    };

    const handleChangeAuth = (e) => {
        const { name, value } = e.target;

        setAuthdata(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <form className="app-authentification" onSubmit={handleAuth}>
            <div className="app-authentification-form">
                <div className="app-authentification-form-container">
                    <div className="app-authentification-form-container-ring">
                        <img className="app-authentification-form-container-ring_img" src="logo.png" alt="" />
                    </div>
                    <h1 className="app-authentification-form-container_title">Welcome to FindMyjob</h1>
                    <p className="app-authentification-form-container_subtitle">Sign in to continue</p>
                    <button className="app-authentification-form-container_google" type="button"><Google /> Continue with Google</button>
                    <div className="app-authentification-form-container-separate">
                        <span className="app-authentification-form-container-separate_line"></span>
                        OR
                        <span className="app-authentification-form-container-separate_line"></span>
                    </div>
                    <label className="app-authentification-form-container_label" htmlFor="">Email</label>
                    <div className="app-authentification-form-container-content">
                        <span className="app-authentification-form-container-content_svg"><Mail size="16" /></span>
                        <input className="app-authentification-form-container-content_input" type="text" name="mail" value={authData.mail} onChange={handleChangeAuth} placeholder="you@example.com" />
                    </div>

                    <label className="app-authentification-form-container_label" htmlFor="">Password</label>
                    <div className="app-authentification-form-container-content">
                        <span className="app-authentification-form-container-content_svg"><Chain size="16" /></span>
                        <input className="app-authentification-form-container-content_input" type="password" name="password" value={authData.password} onChange={handleChangeAuth} placeholder="••••••••" />
                    </div>

                    <input className="app-authentification-form-container_send" type="submit" value="Sign in"/>
                    <div className="app-authentification-form-container-help">
                        <span className="app-authentification-form-container-help_forgot">Forgot password?</span>
                        <span className="app-authentification-form-container-help-need">Need and account? <Link to="/register" className="app-authentification-form-container-help-need_up">Sign up</Link></span>
                    </div>
                </div>
            </div>
        </form>
    )
}