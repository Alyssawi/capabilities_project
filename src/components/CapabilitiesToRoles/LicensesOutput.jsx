import { useState, useEffect } from "react"

function LicensesOutput(props) {
    const licenses = [
        "Discover",
        "Engage: Digital",
        "Engage: Direct",
        "Engage: Email",
        "Engage: Email Testing",
        "Plan",
        "Engage: Optimize",
    ];

    const [outputLicenses, setOutputLicenses] = useState([]);
    
    return (
        <>
            <h3>Licenses</h3>
            <p>{props.roleIndexes.toString()}</p>
        </>
    );
}

export default LicensesOutput;