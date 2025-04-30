function Inputs(props) {
    return (
        <>
            <label className="label" ><b style={{ color: 'white' }}>{props.label}</b></label><br />
            <input type={props.type} onChange={(event) => {
                console.log(event.target.value);
            }} className="inputs" placeholder={props.placeholder} />

        </>
    );
}

export default Inputs;