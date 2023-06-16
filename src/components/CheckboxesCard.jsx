// Styling for the checkbox containers

import "./CheckboxesCard.css";

function CheckboxesCard(props) {
  return <div className={`checkboxesCard ${props.className}`}>{props.children}</div>;
}

export default CheckboxesCard;
