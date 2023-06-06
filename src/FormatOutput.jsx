import { data } from './data.jsx'

function FormatOutput(selectedRoles) {
    var selectedCapabilities = [];

    // get all capabilities object into the array
    // use json.stringify/parse to make a copy of the first object to get capabilities 
    // mega or 

    for (let i = 0; i < selectedRoles.length; i++) {
        if (selectedRoles[i]) {
            selectedCapabilities.push(selectedRoles[i])
        }
    }

    let output = "";
    if (selectedCapabilities.length > 0) {
        output = data[0].role;
    }
    return output;    

    return(Math.random());

}

export default FormatOutput;