import Google from "../shared/svg/Google"
import Mail from "../shared/svg/Mail"
import Chain from "../shared/svg/Chain"
import "./Authentification.scss"

export default function Authentification() {
    return (
        <div className="app-authentification">
            <div className="app-authentification-form">
                <div className="app-authentification-form-container">
                    <div className="app-authentification-form-container-ring">
                        <img className="app-authentification-form-container-ring_img" src="logo.png" alt="" />
                    </div>
                    <h1 className="app-authentification-form-container_title">Welcome to FindMyjob</h1>
                    <p className="app-authentification-form-container_subtitle">Sign in to continue</p>
                    <button className="app-authentification-form-container_google"><Google /> Continue with Google</button>
                    <div className="app-authentification-form-container-separate">
                        <span className="app-authentification-form-container-separate_line"></span>
                        OR
                        <span className="app-authentification-form-container-separate_line"></span>
                    </div>
                    <label className="app-authentification-form-container_label" htmlFor="">Email</label>
                    <div className="app-authentification-form-container-content">
                        <span className="app-authentification-form-container-content_svg"><Mail size="16" /></span>
                        <input className="app-authentification-form-container-content_input" type="text" placeholder="you@example.com" />
                    </div>

                    <label className="app-authentification-form-container_label" htmlFor="">Password</label>
                    <div className="app-authentification-form-container-content">
                        <span className="app-authentification-form-container-content_svg"><Chain size="16" /></span>
                        <input className="app-authentification-form-container-content_input" type="password" placeholder="••••••••" />
                    </div>

                    <button className="app-authentification-form-container_send">Sign in</button>
                    <div className="app-authentification-form-container-help">
                        <span className="app-authentification-form-container-help_forgot">Forgot password?</span>
                        <span className="app-authentification-form-container-help-need">Need and account? <span className="app-authentification-form-container-help-need_up">Sign up</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}