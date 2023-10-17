import { Nav, Navbar, NavDropdown, Container, Image, NavItem } from 'react-bootstrap';
import navIcon from '../images/nav-icon1.svg'
import navIcon2 from '../images/nav-icon2.svg'
import navIcon3 from '../images/nav-icon3.svg'
import profilepic from '../images/E8B1347B-2DD1-4738-AE85-B63C427D03B5_4_5005_c.jpeg'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

export const NavBar = () => {

  return (
    <>
      <Navbar className="bg-transparent bg-light opacity-100">
        <Container className='nav' fluid>
          <NavDropdown  className='justify-content-start'  id="nav-dropdown-dark-example"
              title="Links"
              menuVariant="dark">
            <Nav.Link href=''>hello</Nav.Link>
            <Nav.Link href=''>byebye</Nav.Link>
            <Nav.Link href=''>react is fun</Nav.Link>
          </NavDropdown>
          <Navbar.Brand className="justify-content-start" href="#home">
            <Image
              alt="hello"
              src={profilepic}
              width="50"
              height="50"
              className="d-inline-block align-top" roundedCircle fluid/>
          </Navbar.Brand>
          <p className="text-center mt-4 mb-4  text-xl ">Steven Gordon</p>
          <NavbarCollapse className='justify-content-end'>
          <Nav.Link href=''><img src={navIcon} className='social' alt=''></img></Nav.Link>
          <Nav.Link href=''><img src={navIcon2} className='social' alt=''></img></Nav.Link>
          <Nav.Link href=''><img src={navIcon3}className='social'alt=''></img></Nav.Link>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  )
}
