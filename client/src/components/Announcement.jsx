import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #99ffcc;
  color: #004d66;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Above Rs 499</Container>;
};

export default Announcement;
