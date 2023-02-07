import Logo from "../Logo";
import categoryList from "../../assets/data/category";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import { Badge, Menu, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import { Dropdown } from "antd";
import {
  CartIcon,
  SearchIcon,
  MenuIcon,
  AccountIcon,
  CloseIcon,
  DownIcon,
  UpIcon,
} from "../Icons/index";
import Category from "../ProductList/Category";

//item in dropbox of antd
const items = [
  {
    key: "1",
    label: (
      <Link to="/login" className="navBar__menu__item__mobile__dropdown">
        Đăng nhập
      </Link>
    ),
  },
  {
    key: "1",
    label: (
      <Link to="/register" className="navBar__menu__item__mobile__dropdown">
        Đăng ký
      </Link>
    ),
  },
];

const category = [
  {
    key: "3",
    label: (
      <Link to="/login" className="navBar__menu__item__mobile__dropdown">
        Đăng nhập
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link to="/register" className="navBar__menu__item__mobile__dropdown">
        Đăng ký
      </Link>
    ),
  },
];

const NavBar = () => {
  //open menu in mobile serivce and tablet portant
  const menuRef = useRef();
  const menuToggle = () => {
    menuRef.current.classList.toggle("active");
  };

  //open sub menu
  const subRef = useRef(null);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  //set header fixed when scroll
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const [mobile, setMobile] = useState(false);
  const windowWidth = useRef(window.innerWidth);
  useEffect(() => {
    if (windowWidth.current <= 1180) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  //style for bagde of mui
  const shapeStyles = { bgcolor: "transparent", width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: "50%" };
  const circle = (
    <Box
      component="span"
      sx={{ ...shapeStyles, ...shapeCircleStyles }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div style={{ color: "#5A4C9F", padding: "4px" }}>
        <CartIcon />
      </div>
    </Box>
  );

  return (
    <>
      {navBar && !mobile ? (
        <div className="scroll">
          <div className="scroll__container">
            <div className="scroll__logo">
              <Logo />
            </div>
            <div className="scroll__menu">
              <div className="scroll__menu__search">
                <div className="scroll__menu__search__container">
                  <input
                    className="scroll__menu__search__container__input"
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <div className="scroll__menu__search__container__icon">
                    <SearchIcon size={20} />
                  </div>
                </div>
                <hr className="line" style={{ margin: "0 0 0 12px" }} />
              </div>
              <div className="scroll__menu__item">
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottom"
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <AccountIcon />
                  </a>
                </Dropdown>
              </div>
              <div className="scroll__menu__item">
                <Link to="/cart">
                  <Badge
                    badgeContent={0}
                    color="primary"
                    overlap="circular"
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: 9,
                        height: 15,
                        minWidth: 15,
                      },
                    }}
                  >
                    {circle}
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navBar">
          <div className="container">
            <div className="navBar__mobile-toggle" onClick={menuToggle}>
              <MenuIcon />
            </div>
            <div className="navBar__logo">
              <Logo />
            </div>
            <div className="navBar__search">
              <div className="navBar__search__container">
                <input
                  className="navBar__search__container__input"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <div className="navBar__search__container__icon">
                  <SearchIcon size={20} />
                </div>
              </div>
            </div>
            <div className="navBar__menu">
              <Link to="/about">
                <div className="navBar__menu__item">
                  <span>VỀ PURESKIN</span>
                </div>
              </Link>
              <Link to="/contact">
                <div className="navBar__menu__item">
                  <span>LIÊN HỆ</span>
                </div>
              </Link>
              <Link to="/register">
                <div className="navBar__menu__item">
                  <span>Đăng ký</span>
                </div>
              </Link>
              <Link to="/login">
                <div className="navBar__menu__item">
                  <span>Đăng nhập</span>
                </div>
              </Link>
              <div className="navBar__menu__item__mobile">
                <SearchIcon size={28} />
              </div>
              <div className="navBar__menu__item__mobile">
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <AccountIcon />
                  </a>
                </Dropdown>
              </div>
              <Link to="/cart">
                <div className="navBar__menu__item__cart">
                  <Badge
                    badgeContent={0}
                    color="primary"
                    overlap="circular"
                    sx={{
                      "& .MuiBadge-badge": {
                        fontSize: 9,
                        height: 15,
                        minWidth: 15,
                      },
                    }}
                  >
                    {circle}
                  </Badge>
                </div>
              </Link>
              <div className="navBar__left" ref={menuRef}>
                <div className="navBar__left__top">
                  <div
                    className="navBar__left__top__close"
                    onClick={menuToggle}
                  >
                    <CloseIcon />
                  </div>
                </div>
                <div className="navBar__left__logo">
                  <Logo />
                </div>
                <ul className="navBar__left__menu">
                  <li className="navBar__left__menu__item">
                    <hr className="line" />
                    <span>Trang chủ</span>
                  </li>
                  <li className="navBar__left__menu__item">
                    <hr className="line" />
                    <span>Sản phẩm </span>
                    <div
                      className="navBar__left__menu__item__down"
                      onClick={() => {
                        subRef.current.classList.toggle("active");
                        setOpenSubMenu(!openSubMenu);
                      }}
                    >
                      {openSubMenu ? <UpIcon color="#79747e" /> : <DownIcon />}
                    </div>
                  </li>
                  <ul className="navBar__left__menu__sub" ref={subRef}>
                    {categoryList.getAllCategories().map((item, index) => (
                      <li className="navBar__left__menu__item" key={index}>
                        <span>{item.display}</span>
                      </li>
                    ))}
                  </ul>
                  <li className="navBar__left__menu__item">
                    <hr className="line" />
                    <span>Về Pureskin</span>
                  </li>
                  <li className="navBar__left__menu__item">
                    <hr className="line" />
                    <span>Liên hệ</span>
                  </li>
                  <li className="navBar__left__menu__item">
                    <hr className="line" />
                    <span>Tài khoản</span>
                  </li>
                  <li className="navBar__left__menu__item">
                    <hr className="line" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
