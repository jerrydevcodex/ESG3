import logo from '../static/002.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="header">
                <ul className="nav">
                    <Link to='/'><img className = "logo" 
                    src={logo} alt="logo"/></Link>
                    
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/notice'>NOTICE</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/service'>SERVICE</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </div>
    )
}

export default Nav;

