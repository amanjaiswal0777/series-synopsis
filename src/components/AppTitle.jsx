import styled from 'styled-components';

export default function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Are You looking for a movie or an actor',
  } = props;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: #2400ff;
    letter-spacing: 10px;
    text-transform: uppercase;
    background-color: white;
    margin: auto;
    width: 25vw;
    box-shadow: 0px 2px 3px 4px white;
  }
  p {
   box-shadow: 0px 2px 3px 4px white;
    background-color: white;
    width: 25vw;
    margin: auto;
    color: #353535;
  }
`;
