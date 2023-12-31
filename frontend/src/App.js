import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import MainScreen from "./screens/MainScreen";
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PaymentScreen from "./screens/PaymentScreen";
import ProfileScreen from './screens/ProfileScreen';
import ProfiledisplayScreen from './screens/ProfileDisplayScreen'
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import AboutScreen from './screens/AboutScreen';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import logo from './assets/MainLogo.png'
import Footer from './components/Footer';


function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  // const currentMode = "bg-light"
  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
        console.log(data)
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  // console.log(userInfo)
  // const formattedInfo = userInfo.name;
  // const formattedInfoToString = formattedInfo.toString().slice(0,8);
  // console.log(formattedInfo)
  // console.log(formattedInfoToString)
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header className=''>
          <Navbar variant="white" expand="lg">
            <Container id = "main-container">
               <Button
               id='setSidebarIsOpen'
                variant="white"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand id = "mail-logo">
                  <img src={logo} 
                  style={{height: '80px', width: '100px'}}
                  alt='logo' />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" id = "navbar-toggler">
                <i className="fas fa-bars"></i>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                  <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                    <div className='nav-options-main'>
                      <Link 
                      to = "/search?category=all&query=all&price=all&rating=all&order=newest&page=1" 
                      className='nav-link text-white bold-text'>COURSES</Link>
                      <Link to = "/" className='nav-link text-white bold-text'>CERTIFICATIONS</Link>
                      <Link to = "#" className='nav-link text-white'><div className="menu-wrap">
                          <ul className="menu">
                              <li className="menu-item ">
                                  <h6>COMPANY</h6>
                                  <ul className="drop-menu">
                                      <li className="drop-menu-item">
                                          <h6>About us</h6>
                                      </li>
                                      <li className="drop-menu-item">
                                          <h6>Certifications</h6>
                                      </li>
                                      <li className="drop-menu-item">
                                          <h6>Contact Us</h6>
                                      </li>
                                  </ul>
                              </li>
                          </ul>
                        </div>
                      </Link>
                    </div>
                  <Link to="/cart" className="nav-link text-white">
                    <i className="fas fa-shopping-cart"></i>
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/profiledisplay">
                        <NavDropdown.Item>Display Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item text-white"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link text-white" to="/signin">
                      Sign In
                    </Link>
                  )}
                   {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
             <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu >
              {categories.map((category) => (
                  <Dropdown.Item key = {category}>
                     <LinkContainer
                        to={{
                          pathname: "/search",
                          search: `?category=${category}`,
                        }}
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        <Nav.Link>{category}</Nav.Link>
                      </LinkContainer>
                  </Dropdown.Item>
              ))}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
        <main>
          <Container className="mt-3" id = "main-container">
            <Routes>
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
              />
              <Route path = "/profiledisplay"
                     element = {<ProtectedRoute>
                        <ProfiledisplayScreen />
                        </ProtectedRoute>} />           
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>              
              <Route path="/payment/:id" element = {<PaymentScreen />}></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
               <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UserListScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
              ></Route>
               <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/productcreatescreen"
                element={
                  <AdminRoute>
                    <ProductCreateScreen />
                  </AdminRoute>
                }
              ></Route>             
               <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path = "/aboutus" element = {<AboutScreen />} ></Route> 
              <Route path="/products" element={<HomeScreen />} />
              <Route path = '/' element = {<MainScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;