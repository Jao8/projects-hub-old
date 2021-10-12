import styled from "styled-components/native";
import LinearGradient from 'react-native-web-linear-gradient';




export const Container = styled.View`
  height: 100%;
  min-height: 100%;

  flex: 1;
  background-color: #1c2a34;
`;

export const Header = styled.View`
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-around;

  margin-top: 3rem;
`;

export const HeaderGreetings = styled.View`
  flex-direction: row-reverse;
  justify-content: space-evenly;
  
`;

export const Name = styled.Text`
  margin-top: 2.15em;
  margin-left: 1.85em;
  color: #E5E5E5;
  
  font-size: 16px;
  font-weight: bold;
`;

export const HeaderPages = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProjectsLink = styled.Text`
  margin-right: 0.75em;
  color: #E5E5E5;
  font-size: 16px;
`;

export const AboutLink = styled.Text`
  margin-right: 0.75em;
  color: #E5E5E5;
  font-size: 16px;
`;

export const ContactButtonContainer = styled.View`
  border: 0.2em solid #7CC9FF;
  border-radius: 6px;
  padding: 0.2em;
  font-size: 17px;
`;

export const ContactButtonLabel = styled.Text`
  color: #E5E5E5;
`;

export const IntroContainer = styled.View`
  text-align: justify;
  justify-content: space-around;

  margin-left: 10em;
  margin-right: 17.5em;
`;

export const IntroTitle = styled.Text`
  font-size: 28px;
`;

export const GradIntroTitle = styled(LinearGradient).attrs({
  colors: ['#7385FE','#AB9BF9'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 5 },
 })`

  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  display: inline-block;
 `; 

export const IntroText = styled.Text`
  color: #E5E5E5;

  margin-top: 1.65em;
  font-size: 18px;
  font-weight: 600;

`;

export const ProjectsContainer = styled.View`
  text-align: justify;
  justify-content: space-around;

  /* background-color: ${props => props.bgColor}; */

  margin-left: 10em;
  margin-right: 10em;
  
  margin-top: 3em;
`;

export const ProjectsContainerHeader = styled.View`
  text-align: justify;
  justify-content: space-between;

  flex-direction: row;
`;

export const ProjectsTitle = styled.Text`
  color: #E5E5E5;
  font-size: 18px;
`;

export const More = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MoreText = styled.Text`
  color: #E5E5E5;
  font-size: 14px;
  font-weight: 600;
`;

export const ProjectsContainerHighlights = styled.View`
  text-align: justify;
  justify-content: space-around;

`;

export const HighlightBox = styled.View`
  background-color: #26363e;
  margin: 0.7em 0.75em 0.7em 0.32em;

  border-left-color: ${props => props.barColor};
  border-left-width: 7px;
  border-radius: 0.3em;
  
  
`;

export const HighlightBar = styled.View`
  background-color: ${props => props.barColor};
  align-items: flex-start;
`;

export const HighlightTextsContainer = styled.View`

`;

export const HighlightTitle = styled.Text`

`;

export const HighlightDescripton = styled.Text`

`;

export const HighlightButton = styled.View`

`;

export const HighlightButtonLabel = styled.Text`

`;
