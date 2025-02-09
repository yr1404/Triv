import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          Triv
        </div>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <div className="button">
          <button className="sign-up">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar;