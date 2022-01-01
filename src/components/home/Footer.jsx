import {
    GrFacebook as Facebook,
    GrInstagram as Instagram,
    GrTwitter as Twitter,
    GrLocation as Location, GrPhone as Phone, GrMailOption as MailOutline
  } from "react-icons/gr";
  import styled from "styled-components";
  import { mobile } from "../../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
    justify-content: flex-start;
    text-align: justify;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>ProGamerShop</Logo>
          <Desc>
            Your <b>#1 marketplace</b> for all gaming accessories trusted by professional e-sports players.
            Get the best deals on each purchase and achieve your competitive gaming success.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>            
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Store</ListItem>
            <ListItem>Collections</ListItem>
            <ListItem>Featured</ListItem>
            <ListItem>Reviews</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>FAQ</ListItem>
            <ListItem>Terms and Conditions</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Location style={{marginRight:"10px"}}/> 123 Street, City State 56128
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> <a href="tel:+1-234-56-78-90">+1-234-56-78-90</a>
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> <a href="mailto:elmir.ahadov@yahoo.com">elmir.ahadov@yahoo.com</a>
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;