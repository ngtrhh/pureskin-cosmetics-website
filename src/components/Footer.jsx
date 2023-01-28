import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import background from '../images/footer-background.png'
import logoSale from '../images/logoSaleNoti.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { GitHub, Instagram } from '@mui/icons-material'
const Container = styled.div`
    width:100%;
    height:650px;
    margin:60px auto;
    background-image: url(${background});
    background-repeat:no-repeat;
    background-position:bottom left;
`
const Wrapper = styled.div`
    padding:60px 140px;
    color:black;
    font-size:15px;
`
const Line = styled.hr`
    margin-top:60px;
    background-color:#B1B5BB;
    box-shadow: 0px 2px 6px #18274b3d;
`
const Content = styled.div`
    margin-top:60px;
    display:flex;
    justify-content:space-between;
`
const Left = styled.div`
    flex:2;
`
const Right = styled.div`
    flex:1;
    text-align:right;
`
const Columns = styled.div`
    display:flex;
`
const Column = styled.div`
    margin-right:160px;
`
const Row = styled.div`
    margin-top:60px;
`
const Title = styled.h3`
    font-weight:bold;
    font-size:18px;
    margin-bottom:28px;
`
const List = styled.ul`
    font-size:15px;
    list-style-type:none;
    padding-inline-start:0px;
`

const Item = styled.li`
    margin-top:12px;
`
const SocialContainer = styled.div`
    display:flex;
    justify-content:right;
    margin-bottom:32px;
`
const SocialIcon = styled.div`
    margin-left:32px;
    width:40px;
    height:40px;
    justify-content:center;
    align-items:center;
    display:flex;
    border-radius:50%;
    box-shadow: 0px 4px 4px #00000040, 0px 8px 24px 0px #18274B14;
    cursor: pointer;
`
const Link = styled.a`
    text-decoration:none;
    color:black;
`

const Copyright = styled.div`
    font-size:12px;
    font-weight:300;
    margin:0px 0px 60px 120px;
`

function Logo() {
    return (
        <img src={logo} />
    );
}
  
function LogoSaleNoti() {
    return (
        <img src={logoSale} style={{width:'40%', marginTop:'28px'} } />
    );
  }

function BoldText({ children }) {
    return (
      <span style={{ fontWeight: '600' }}>{children}</span>
    );
  }

const Footer = () => {
  return (
      <Container>
          <Wrapper>
              <Logo></Logo>
              <Line></Line>
              <Content>
                  <Left>
                      <Columns>
                        <Column>
                            <Title>VỀ PURESKIN</Title>
                            <List>
                                <Item><Link href=''>Giới thiệu</Link></Item>
                                <Item><Link href=''>Liên hệ</Link></Item>
                                <Item><Link href=''>Tuyển dụng</Link></Item>
                                <Item><Link href=''>Tin tức</Link></Item>
                            </List>
                        </Column>
                        <Column Column>
                            <Title>CHÍNH SÁCH</Title>
                            <List>
                                <Item><Link href=''>Chính sách & quy định chung</Link></Item>
                                <Item><Link href=''>Chính sách giao hàng & thanh toán</Link></Item>
                                <Item><Link href=''>Chính sách mua hàng</Link></Item>
                                <Item><Link href=''>Chính sách trả hàng</Link></Item>
                            </List>
                          </Column>
                      </Columns>
                      <Row>
                          <List>
                              <Item><BoldText>Thời gian làm việc:</BoldText> Thứ 2 ~ Thứ 6 09:00 ~ 17:00 (trừ Thứ 7, Chủ Nhật và ngày lễ)</Item>
                              <Item><BoldText>Tư vấn và chăm sóc khách hàng:</BoldText> 012345678</Item>
                              <Item><BoldText>Email:</BoldText> <Link href=''>pureskin_cskh@gmail.com</Link></Item>
                              </List>
                          </Row>
                  </Left>
                  <Right>
                      <Title>THEO DÕI PURESKIN TRÊN</Title>
                      <SocialContainer>
                          <SocialIcon>
                              <FacebookRoundedIcon color='primary' sx={{ fontSize: 48 }} />
                          </SocialIcon>      
                          <SocialIcon style={{color:'white',backgroundColor:'#F00073'}}>
                              <Instagram sx={{ fontSize: 28}}/>
                          </SocialIcon>                               
                          <SocialIcon style={{backgroundColor: 'white' }}>
                                <GitHub sx={{ fontSize: 44 }}/>
                          </SocialIcon>
                      </SocialContainer>
                      <p><BoldText>CÔNG TY TNHH PURESKIN VIỆT NAM </BoldText></p>
                      <p style={{marginTop:'12px'}}>123, Đường số 6, Khu phố Linh Trung, Tp.Thủ Đức, 
                          <br />Tp.Hồ Chí Minh, Việt Nam.</p>
                      <LogoSaleNoti></LogoSaleNoti>
                  </Right>
              </Content>
          </Wrapper>
          <Copyright>&#169; 2022 All Rights Reserved</Copyright>
    </Container>
  )
}

export default Footer