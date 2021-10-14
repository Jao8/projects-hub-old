import React, { useState, useEffect } from 'react'

import { 
  AboutLink,
  ContactButtonContainer,
  ContactButtonLabel,
  Container, 
  GradIntroTitle, 
  Header, 
  HeaderGreetings, 
  HeaderPages, 
  HighlightBar, 
  HighlightBox, 
  HighlightButton, 
  HighlightButtonLabel, 
  HighlightDescripton, 
  HighlightTextsContainer, 
  HighlightTitle, 
  IntroContainer, 
  IntroText, 
  IntroTitle, 
  More, 
  MoreText, 
  Name, 
  ProjectsContainer, 
  ProjectsContainerHeader, 
  ProjectsContainerHighlights, 
  ProjectsLink, 
  ProjectsTitle
} from './style';

import myPhoto from '../assets/myPic.svg'
import moreIcon from '../assets/more_icon.svg'



function App() {

  
  return (
    <Container>
      <Header>
        <HeaderGreetings>
          <Name >João Victor Oliveira Costa</Name>
          <img src={myPhoto} width={88} height={88} alt="João Victor" />
        </HeaderGreetings>
        <HeaderPages>
          <ProjectsLink>Projetos</ProjectsLink>
          <AboutLink>Sobre</AboutLink>
          <ContactButtonContainer>
            <ContactButtonLabel>Contato</ContactButtonLabel>
          </ContactButtonContainer>
        </HeaderPages>
      </Header>
      <IntroContainer>
        <GradIntroTitle><IntroTitle><h1>Prazer, João!</h1></IntroTitle></GradIntroTitle>
        <IntroText>Eu sou um programador FrontEnd, apredendo sobre ReactJS e NextJS. Tambem brinco um pouco com Django e Node, apesar não ser nada avançado(Talvez seja o começo de um FullStack???).</IntroText>
      </IntroContainer>
      <ProjectsContainer>
        <ProjectsContainerHeader>
          <ProjectsTitle><h3>Projetos</h3></ProjectsTitle>
          <More>
            <MoreText>Mais Projetos</MoreText>
            <img src={moreIcon} width={18} height={18} alt="More Projects Icon" />
          </More>
        </ProjectsContainerHeader>
        <ProjectsContainerHighlights>
          <HighlightBox barColor='#f42ebc'>
            <HighlightTextsContainer>
              <HighlightTitle><h4>Proj One</h4></HighlightTitle>
              <HighlightDescripton>Bacon ipsum dolor amet beef ribs tenderloin buffalo sirloin burgdoggen frankfurter filet mignon pancetta kevin beef, tail brisket ribeye ball tip. Short loin chislic sausage, biltong fatback pancetta jerky cow beef ribs t-bone swine pork loin. Chicken boudin shankle</HighlightDescripton>
            </HighlightTextsContainer>
            <HighlightButton>
                <HighlightButtonLabel>Saiba Mais</HighlightButtonLabel>
            </HighlightButton>
          </HighlightBox>
          <HighlightBox barColor='#bcf42e'>
            <HighlightTextsContainer>
              <HighlightTitle><h4>Proj Two</h4></HighlightTitle>
              <HighlightDescripton>Bacon ipsum dolor amet beef ribs tenderloin buffalo sirloin burgdoggen frankfurter filet mignon pancetta kevin beef, tail brisket ribeye ball tip. Short loin chislic sausage, biltong fatback pancetta jerky cow beef ribs t-bone swine pork loin. Chicken boudin shankle</HighlightDescripton>
            </HighlightTextsContainer>
            <HighlightButton>
                <HighlightButtonLabel>Saiba Mais</HighlightButtonLabel>
            </HighlightButton>
          </HighlightBox>
          <HighlightBox barColor='#2ef466'>
            <HighlightTextsContainer>
              <HighlightTitle><h4>Proj Three</h4></HighlightTitle>
              <HighlightDescripton>Bacon ipsum dolor amet beef ribs tenderloin buffalo sirloin burgdoggen frankfurter filet mignon pancetta kevin beef, tail brisket ribeye ball tip. Short loin chislic sausage, biltong fatback pancetta jerky cow beef ribs t-bone swine pork loin. Chicken boudin shankle</HighlightDescripton>
            </HighlightTextsContainer>
            <HighlightButton>
              <HighlightButtonLabel>Saiba Mais</HighlightButtonLabel>
            </HighlightButton>
          </HighlightBox>
        </ProjectsContainerHighlights>
      </ProjectsContainer>
      
    </Container>
  );
}


export default App;
