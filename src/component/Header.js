import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { authenticateAction } from "../redux/actions/authenticateAction";

const Header = () => {
  const MENU_LIST = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H*M Home', 'Sale', '지속가능성'];
  
  const dispatch = useDispatch();
  const authenticate = useSelector((state) => state.auth.authenticate);
  // 로그인
  const navigate = useNavigate();

  const goToLogin = () => {
    console.log(authenticate)
    navigate("/login");
  }

  // 로그아웃
  const goToLogout = () => {
    // setAuthenticate(false);
    dispatch(authenticateAction.logout(authenticate));
    alert('로그아웃 되었습니다!')
  }

  // 검색
  const itemSearch = (event) => {
    if(event.keyCode === 13){
      console.log("we click this key", event.key)
      // 입력한 검색어를 읽어와서 
      let keyword = event.target.value;
      // url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <header className='headerWrap'>
      <section className="wrapper">
        <h1 className='logo'>
          <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png" alt="H&M" />
          </Link>
        </h1>
        <aside className='utils'>
          <button className="btn_login" onClick={ authenticate ? goToLogout : goToLogin }>
            <FontAwesomeIcon icon={ faUser } />
            <span>{ authenticate ? '로그아웃' : '로그인' }</span>
          </button>
          <div className='searchBox'>
            <FontAwesomeIcon icon={ faMagnifyingGlass } />
            <input type="text" placeholder='드레스를 찾으시나요?' onKeyDown={(event) => itemSearch(event)} />
          </div>
        </aside>
        <Navbar expand='lg'>
          <Container>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='menuArea'>
                <Nav className='menuList'>
                  { MENU_LIST && MENU_LIST.map((menu) => 
                    <Nav.Link href="#" key={menu}>{menu}</Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* <div className='menuArea'>
          <ul className='menuList'>
            { MENU_LIST && MENU_LIST.map((menu) => 
              <li key={menu}>{menu}</li>
            )}
          </ul>
        </div>   */}
      </section>
      <>

        
    </>
    </header>
  )
}

export default Header