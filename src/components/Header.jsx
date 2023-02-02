import styled from "styled-components";
import categoryList from "../assets/categories";
import Logo from "./Logo";
import { COLORS } from "../constants.jsx";
import { BsCart2 } from "react-icons/bs";
import { Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";

const NavBar = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px 0px;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
`;
const Center = styled.div`
  flex: 2;
  margin-left: 30px;
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const SearchContainer = styled.div`
  border: 1px solid ${COLORS.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 6px 6px 6px 12px;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-right: 4px;
  width: 100%;
  font-size: 14px;
`;
const shapeStyles = { bgcolor: "white", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const circle = (
  <Box
    component="span"
    sx={{ ...shapeStyles, ...shapeCircleStyles }}
    style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      border: "1px solid #5A4C9F",
    }}
  >
    <div style={{ color: COLORS.primary }}>
      <BsCart2 size={28} style={{ margin: "4px" }} />
    </div>
  </Box>
);
const menu = {
  fontSize: 15,
  fontWeight: 500,
  cursor: "pointer",
  marginRight: 30,
  color: COLORS.primary,
  position: "relative",
  transition: "0.4s all",

  "&:focus": { outline: "none" },

  "&:hove": {
    color: COLORS.highlight,
  },
};

//Categories
const Categories = styled.div`
  width: 100%;
  background-color: ${COLORS.second};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const Spacing = styled.div`
  flex: 1;
`;
const Category = styled.div`
  padding: 12px 15px 10px 15px;
  font-size: 13px;
  font-weight: 600;
  margin: 0px 24px;
  cursor: pointer;

  border-radius: 20px;
  background-color: ${COLORS.primary};
  position: relative;
  transition: 0.4s all;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.navSelectedText};
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${COLORS.pink};
    color: ${COLORS.primary};
    box-shadow: 2px 2px 8px 0px #00000040;
    text-decoration: none;
  }
`;
const items = [
  {
    label: (
      <div style={menu}>
        <Link to="/login">Đăng nhập</Link>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div style={menu}>
        <Link to="/signup">Đăng ký</Link>
      </div>
    ),
    key: "1",
  },
];

const Header = () => {
  return (
    <div>
      <NavBar>
        <Left>
          <Logo />
        </Left>

        <Center>
          <SearchContainer>
            <SearchInput placeholder="Tìm tên sản phẩm..." />
            <Search
              style={{
                color: "gray",
                fontSize: "20px",
                cursor: "pointer",
                marginRight: "4px",
              }}
            />
          </SearchContainer>
        </Center>

        <Right>
          <div style={menu}>VỀ PURESKIN</div>
          <Link style={{ textDecoration: "none" }} to="/product-list">
            <div style={menu}>LIÊN HỆ</div>
          </Link>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space style={menu}>TRANG CỦA TÔI</Space>
            </a>
          </Dropdown>
          <div style={(menu, { marginRight: "0", cursor: "pointer" })}>
            <Badge
              badgeContent={4}
              color="primary"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 },
              }}
            >
              {circle}
            </Badge>
          </div>
        </Right>
      </NavBar>

      <Categories>
        <Wrapper>
          <Spacing />
          {categoryList.getAllCategories().map((item) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/product-list/${item.categorySlug}}`}
            >
              <Category key={item.id}>{item.display}</Category>
            </Link>
          ))}
          <Spacing />
        </Wrapper>
      </Categories>
    </div>
  );
};

export default Header;
