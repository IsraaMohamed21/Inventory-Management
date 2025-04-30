function Searchinputs(props) {
    return (
        <>
            <div className="box">
                <form className="search">
                    <input type={props.type} onChange={(event) => {
                        console.log(event.target.value);
                    }} className="input" placeholder="Search by ID" />
                </form>
            </div>
        </>
    );
}

export default Searchinputs;