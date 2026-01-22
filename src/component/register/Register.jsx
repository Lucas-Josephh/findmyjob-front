import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import ArrowLeft from "../shared/svg/ArrowLeft"
import Mail from "../shared/svg/Mail"
import Chain from "../shared/svg/Chain"
import axios from "axios"
import "./Register.scss"

export default function Register() {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        mail: '',
        password: '',
        re_password: ''
    })

    const handleSubmitRegister = async (e) => {
        e.preventDefault();

        const data = registerData;
        const res = await axios.post("http://localhost:3000/api/register", { data });
        console.log(res.data.message)
        if(res.data.exists) {
            navigate("/home")
        }
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setRegisterData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <form className="app-register" onSubmit={handleSubmitRegister}>
            <div className="app-register-form">
                <div className="app-register-form-container">
                    <Link className="app-register-form-container_back" to="/"><ArrowLeft size="16" /> Back to sign in</Link>
                    <h1 className="app-register-form-container_title">Create your account</h1>
                    <label className="app-register-form-container_label" htmlFor="">Email</label>
                    <div className="app-register-form-container-content">
                        <span className="app-register-form-container-content_svg"><Mail size="16" /></span>
                        <input className="app-register-form-container-content_input" type="text" name="mail" value={registerData.mail} onChange={handleChangeInput} placeholder="you@example.com" />
                    </div>

                    <label className="app-register-form-container_label" htmlFor="">Password</label>
                    <div className="app-register-form-container-content">
                        <span className="app-register-form-container-content_svg"><Chain size="16" /></span>
                        <input className="app-register-form-container-content_input" type="password" name="password" value={registerData.password} onChange={handleChangeInput} placeholder="Min. 8 characters" />
                    </div>

                    <label className="app-register-form-container_label" htmlFor="">Confirm Password</label>
                    <div className="app-register-form-container-content">
                        <span className="app-register-form-container-content_svg"><Chain size="16" /></span>
                        <input className="app-register-form-container-content_input" type="password" name="re_password" value={registerData.re_password} onChange={handleChangeInput} placeholder="Re-enter password" />
                    </div>

                    <input className="app-register-form-container_send" type="submit" value="Create account"/>
                </div>
            </div>
        </form>
    )
}