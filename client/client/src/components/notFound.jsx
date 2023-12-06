import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Notfound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return <h1>Error 404: Page Not Found</h1>;
}
export default Notfound;
