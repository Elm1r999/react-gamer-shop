import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: red;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  top: 0;
  width: 100%;
  margin:0px;
  padding: 0px;
`;

const Announcement = () => {
  return <Container>USE CODE 'ELMIR' FOR 50% OFF!</Container>;
};

export default Announcement;
