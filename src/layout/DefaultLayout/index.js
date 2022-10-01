import Header from './Header';
import PlayerControls from './PlayerControls';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
            <PlayerControls />
        </div>
    );
}

export default DefaultLayout;
