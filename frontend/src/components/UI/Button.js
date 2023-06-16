const Button = (props) => {

    return (
        <div className={props.className}>
            <button {...props.buttonAtr}>{props.children}</button>
        </div>
    );
};

export default Button;