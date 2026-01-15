import "./Option.scss"

const Option = ({ className = "ezez", style, id }) => {
    return (
    <span className={`extranet-option ${className}`} style={style} id={id}></span>
    );
};

Option.isOption = true;

export default Option;