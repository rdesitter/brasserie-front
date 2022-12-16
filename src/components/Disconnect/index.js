import { LogOut } from "react-feather";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { initUser } from "../../reducers/userSlice";

function Disconnect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(initUser());
    localStorage.clear();
    navigate('/', { replace: true });
  }
  return (
    <li><button type="button" className="navbar__nav__item navbar__nav__item--button" onClick={handleClick}><LogOut /></button></li>
  )
}

export default Disconnect;
