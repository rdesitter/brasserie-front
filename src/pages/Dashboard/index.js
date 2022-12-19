import { useSelector } from 'react-redux';
import AdminHeader from '../../components/AdminHeader';
import './style.scss';

function Dashboard({ children }) {
    const overlay = useSelector((state) => state.admin.overlay);
  return (
    <div className="dashboard">
        <AdminHeader />
        <div className="container">
            { children }
        </div>
        { overlay && <div className="overlay"></div> }
    </div>
  )
}

export default Dashboard;
