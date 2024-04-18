import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../redux/user-slice";

const MainNavigation = () => {
  const { isLogin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("tokenKey");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userName");
    dispatch(userActions.changeLoginState(false));
    window.location.reload();
  };

  if (localStorage.getItem("currentUser") !== null) {
    dispatch(userActions.changeLoginState(true));
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-body-tertiary ${styles["main-navigation"]}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto ${styles["nav-links"]}`}>
            <div className="d-flex">
              <Nav.Link className={`${styles["nav-link-element"]}`}>
                <NavLink className={`${styles.text}`} to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link className={`${styles["nav-link-element"]}`}>
                <NavLink className={`${styles.text}`} to="/storehouses">
                  Storehouses
                </NavLink>
              </Nav.Link>
            </div>
            <div>
              <Nav.Link className={` ${styles["nav-link-element"]}`}>
                {isLogin === false ? (
                  <NavLink className={`${styles.text}`} to="/auth">
                    Login/Signup
                  </NavLink>
                ) : (
                  <p className="m-0" onClick={() => handleLogout()}>
                    Logout
                  </p>
                )}
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
