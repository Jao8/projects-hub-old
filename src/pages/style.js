import styled from "styled-components/native";
import LinearGradient from 'react-native-web-linear-gradient';

var GlobalFontColor = '#E5E5E5';
var BackgroundColor = '#1C2A34';
var ButtonBorderColor = '#7CC9FF';
var ForegroundColor = '#26363E';

export const Container = styled.View`
  height: 100%;
  min-height: 100%;

  flex: 1;
  background-color: ${BackgroundColor};
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
  color: ${GlobalFontColor};
  
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
  color: ${GlobalFontColor};
  font-size: 16px;
`;

export const AboutLink = styled.Text`
  margin-right: 0.75em;
  color: ${GlobalFontColor};
  font-size: 16px;
`;

export const ContactButtonContainer = styled.View`
  border: 0.2em solid ${ButtonBorderColor};
  border-radius: 6px;
  padding: 0.2em;
  font-size: 17px;
`;

export const ContactButtonLabel = styled.Text`
  color: ${GlobalFontColor};
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
  color: ${GlobalFontColor};

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
  color: ${GlobalFontColor};
  font-size: 18px;
`;

export const More = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MoreText = styled.Text`
  color: ${GlobalFontColor};
  font-size: 14px;
  font-weight: 600;
`;

export const ProjectsContainerHighlights = styled.View`
  text-align: justify;
  justify-content: space-around;

`;

export const HighlightBox = styled.View`
  background-color: ${ForegroundColor};
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
  margin-left: 0.9em;
  padding-bottom: 2.75em;
  margin-right: 5em;
`;

export const HighlightTitle = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${GlobalFontColor};
`;

export const HighlightDescripton = styled.Text`
  color: ${GlobalFontColor};
  padding-left: 0.75em;
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
`;

export const HighlightButton = styled.View`
  border: 0.2em solid ${ButtonBorderColor};
  border-radius: 6px;
  padding: 0.2em;
  margin-right: 87%;
  margin-left: 0.9em;
 margin-bottom: 1em;
`;

export const HighlightButtonLabel = styled.Text`
  text-align: center;
  font-weight: 500;
  color: ${GlobalFontColor};
`;

export const Footer = styled.View`
  
  margin-top: 3rem;
`;