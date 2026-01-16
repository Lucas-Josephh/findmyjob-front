import { useState } from "react"
import "./Switch.scss"

export default function Switch() {
    const [stateSwitch, setStateSwitch] = useState(true);

    const handleSwitch = () => {
        setStateSwitch(!stateSwitch);
    }

    return (
        <button className={`extranet-switch ${stateSwitch ? "" : "extranet-switch_change"}`} onClick={handleSwitch}>
            <span className={`extranet-switch_span ${stateSwitch ? "" : "extranet-switch_transition"}`}>dd</span>
        </button>
    )
}