import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <img src="" alt="Logo"  />
        <nav className='navHeader'>
            <Link to = {'/'}>Home</Link>
            <Link to ={'/usuarios'}>Usuarios</Link>
        </nav>
    </header>
  )
}

export default Header