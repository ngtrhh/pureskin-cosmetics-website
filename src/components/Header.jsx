import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import { COLORS } from '../constants.jsx'

const Container = styled.div`
    height: 60px;
    background-color: ${COLORS.navbar};
`

const Wrapper = styled.div`
    padding: 10px;
    display: flex;
`

const Left = styled.div`
    flex: 1;
`

const SearchContainer = styled.div`
    border: 1px solid ${COLORS.lightgray};
    display: flex;
    align-items: center;
    padding: 3px 3px 1px 5px;
`

const SearchInput = styled.input`
    border: none;
    margin-right: 3px;
    flex: 10;
`

const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`

// const Logo = styled.image`
//     background-image: url('${IMGSRCS.logo}')
//     cursor: pointer;
// `

const Logo = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: violet;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 30px;
`


const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <SearchInput/>
                        <Search style={{ color:"gray", fontSize:"20px", flex:"1", cursor: "pointer" }}/>
                   </SearchContainer>
                </Left>
                <Center>
                    <Logo>PureSKIN</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                        <Badge 
                            badgeContent={4} 
                            color="primary"
                            sx={{ "& .MuiBadge-badge": { fontSize: 9, height: 15, minWidth: 15 } }}
                        >
                            <ShoppingBagOutlined color="action"/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar