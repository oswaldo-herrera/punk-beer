import logo from './logo.svg';
import './App.css';
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledButtonDropdown,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons';

function App() {
  const brand = 'We Love Beer';

  return (
    <div className="App">
      <Navbar color="success" >
        <NavbarBrand href="/">
          <FontAwesomeIcon icon={faBeer} className='me-2 text-warning' />
          {brand}</NavbarBrand>
        <Nav>
          <UncontrolledButtonDropdown nav inNavbar>
            <DropdownToggle nav caret>My account</DropdownToggle>
            <DropdownMenu >
              <DropdownItem>Gift Table</DropdownItem>
              <DropdownItem>Wish List</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Create List</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
