import "./OutputBox.css"

function OutputBox(props) {
    return (
        <div className="output" id="text-output">
            {props.roleCheckedState.toString()}
        </div>
    );
}

export default OutputBox;