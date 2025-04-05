import { ClipLoader } from "react-spinners";

export default function CustomAlert(props) {

    return (
        <div id="alertDiv" className="custom-alert">
          <ClipLoader color="#F5F5F5" size={35} speedMultiplier={0.7} />
        </div>
    )
}