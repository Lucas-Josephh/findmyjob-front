import React, {useEffect, useRef, useState } from "react";
import Arrow from '../svg/Arrow'
import "./Select.scss"

export default function Select({id, children, value="", placeholder, className, style}) {
    const [isActive, setIsActive] = useState(false);
    const [props, setProps] = useState([]);
    const buttonRef = useRef(null);
    const [buttonHeight, setNavHeightButton] = useState(0);
    const [buttonWidth, setNavWidthButton] = useState(0);
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        if (!buttonRef.current) return;

        const updateSize = () => {
            setNavHeightButton(buttonRef.current.offsetHeight);
            setNavWidthButton(buttonRef.current.offsetWidth);
        };

        const observer = new ResizeObserver(() => {
            updateSize();
        });

        observer.observe(buttonRef.current);

        updateSize();

        return () => {
            observer.disconnect();
        };
    }, [isActive]);
    
    const handleClick = () => {
        setProps([]);
        React.Children.forEach(children, child => {
            if (React.isValidElement(child) && child.type.isOption) {
                setProps(prev => [...prev, child.props]);
            }
        });
        setIsActive(!isActive);
    }

    const handleValue = (optionValue) => {
        setCurrentValue(optionValue);
        setIsActive(!isActive);
    }
    
    return (
        <>
            <div className="extranet-select">
                <button className={`extranet-select_btn ${className} ${currentValue === "" ? "extranet-select_placeholder" : ""}`} style={style} id={id} ref={buttonRef} onClick={handleClick}>{children} {currentValue == "" ? placeholder : currentValue}<Arrow /></button>
                <div className={isActive ? "extranet-select_enable" : "extranet-select_disable"} style={{top: buttonHeight+4, width: buttonWidth}} >
                    <u className="extranet-select-ul">
                        {props.map((optionProps, index) => (
                            <li
                                key={index}
                                className={`extranet-select-ul_li ${optionProps.className || ""}`}
                                style={optionProps.style}
                                id={optionProps.id}
                                onClick={() => handleValue(optionProps.children)}
                            >
                                {optionProps.children}
                            </li>
                        ))}
                    </u>
                </div>
            </div>
            <input type="hidden" value={currentValue} />
        </>
    )
}