import StarEmpty from "../images/Star-Empty.png"
import StarFilled from "../images/Star-Filled.png"


export default function Star(props) {

    let starIcon = props.isFilled ? StarFilled : StarEmpty
    let state = props.isFilled ? "Remove from Fav" : "Add to Fav"
    let imgAlt = props.isFilled ? "Filled Star Icon" : "Empty Star Icon"

    return (
        <button 
           onClick={props.handleClick}
           aria-pressed={props.isFilled}
           aria-label={state}
           className="fav-btn"
        >
            <img src={starIcon} alt={imgAlt} className="img-btn" />
        </button>    
    )
}









