import styled from "styled-components";
import { COLORS } from "../constants.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.highlight};
  margin-top: 40px;
`;
const Heading = styled.div`
  font-size: 28px;
  font-weight: 700;
  flex: 1;
  text-transform: uppercase;
`;
const Title = (props) => {
  return (
    <Container>
      <Heading>{props.value}</Heading>
    </Container>
  );
};

export default Title;
