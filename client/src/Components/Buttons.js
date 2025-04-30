function Button(props) {
    return (
        <>
            <button className="btn2" onClick={props.onclik}>{props.label}</button>
        </>
    );
}
export default Button;