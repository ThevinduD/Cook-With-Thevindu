import { useState , useEffect } from "react";
import { ClipLoader } from "react-spinners";

export default function CustomAlert(props) {

    const [dots, setDots] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 7 ? prev + ". " : ""));
      }, 700); 
  
      return () => clearInterval(interval); 
    }, []);

    function removeClass() {
      document.getElementById("alertDiv").classList.remove("show");
    }

    return (
        <div id="alertDiv" className={`custom-alert ${props.gameWon && "show"}`}>
          <ClipLoader color="#F5F5F5" size={35} speedMultiplier={0.7} />
        </div>
    )
}