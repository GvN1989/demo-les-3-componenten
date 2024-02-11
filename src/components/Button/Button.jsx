import './button.css';
function Button({children, icon, handleClick, variant}) {
    return (
        <button
            className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`}
            onClick={handleClick}
            type="">
            {children} {icon}
        </button>
    );
}

export default Button;