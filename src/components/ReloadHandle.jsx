import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ReloadHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        // This means the page is reloaded
        navigate("/");
      }
    }
  }, [navigate]);

  return null; // This component does not render anything
}

export default ReloadHandler;