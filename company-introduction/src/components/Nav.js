import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div class="header">
                <ul class="nav">
                    <img class = "logo" src={logo} alt="logo"/>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/notice'>NOTICE</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link>SERVICE</Link></li>
                    <li><Link>CONTACT</Link></li>
                </ul>
            </div>
    )
}

export default Nav;

