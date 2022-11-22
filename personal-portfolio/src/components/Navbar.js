import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
        <Link to='/'><button>Home</button></Link>
        <Link to='/project'><button>Projects</button></Link>
        <Link to='/about'><button>About</button></Link>
    </nav>
  )
}

export default Navbar
