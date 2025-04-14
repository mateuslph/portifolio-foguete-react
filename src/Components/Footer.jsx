/**
 * Importa as bibliotecas e componentes necessários.
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  fab,
} from "@fortawesome/free-brands-svg-icons"; // Importa ícones de redes sociais.
import React from "react";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import ImageLogo from "../assets/images/logo-mlp-tech-art.png";

// Adiciona os ícones da biblioteca do Font Awesome.
library.add(fab);

// Estilização do componente principal do rodapé.
const StyledFooterContainer = styled.footer`
    width: 100%;
    color: #e1f0ff;
`;

// Estilização do conteúdo do rodapé.
const StyledFooterContent = styled.div`
  background-color: #3161c0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 3rem 3.5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 2rem;
  }
`;

// Estilização da seção de contatos no rodapé.
const StyledFooterContacts = styled.div`
  margin-bottom: 0.75rem;
  margin-right: 1.8rem;
`;

// Estilização do texto do logo.
const StyledLogoText = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledLogoImage = styled.img`
  // Estilização da imagem do logo.
  padding: 4px;
  height: 35px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding: 3px;
    height: 60px;
  }
`;

// Estilização do título do rodapé.
const StyledFooterTitle = styled.h3`
    color: #fff;
    font-size: large;
    font-weight: 500;
    width: 100%;

    @media screen and (min-width: 1024px) {
      &.social-media {
        display: none;
      }
    }
`;

// Estilização da área de mídias sociais.
const FooterSocialMedia = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
        margin-top: 0;
    }
`;

// Estilização dos links do rodapé.
const FooterLink = styled.div`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    color: #E1F0FF;
    border-radius: 50%;
    transition: all 0.4s;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

// Estilização dos ícones de redes sociais.
const IconSocial = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    color: #FFF;
    border: solid #4253d3 1px;
    box-shadow: 2px 2px 2px #2c4cce;  
    &.instagram {    
      background: linear-gradient(#7f37c9, #ff2992, #ff9807);
    }  
    &.facebook {
      background-color: #4267b3;
    }  
    &.whatsapp {
      background-color: #25d366;
    }  
    &.linkedin {
      background-color: #0270ad;
    }
    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
`

// Estilização da lista de links.
const FooterList = styled.ul`
    display: flex;
    margin-right: 1.8rem;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
`;

// Estilização da área de inscrição.
const StyledFooterSubscribe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

// Estilização do parágrafo da área de inscrição.
const StyledFooterSubscribeP = styled.p`
    color: #8db3e2;
`;

// Estilização do grupo de entrada.
const StyledInputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: #214289;\n    border-radius: 4px;\n`;

    const StyledInputGroupInput = styled.input`
    all: unset;
    padding: 0.75rem;
    width: 100%;
`

// Estilização da área de e-mail.
const Email = styled.div`
    display: flex;
    align-items: center;    
    height: 100%;
    justify-content: center;
    width: 65px;
    background-color: #7F37C9;

    &:hover {
        cursor: pointer;
    }
`

// Estilização do copyright.
const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: #214289;
    padding: 1.5rem;
    font-weight: 100;
`

// Componente funcional que renderiza o rodapé.
function RenderFooter() {
    return (
        // Div principal que envolve todo o conteúdo do rodapé.
        <StyledFooterContainer>
            <div className='body'>
                <StyledFooterContent>
                    {/* Seção de contatos. */}
                    <StyledFooterContacts>
                        {/* Logo e texto. */}
                        <StyledLogoText>
                            <div className="logo">
                                <StyledLogoImage src={ImageLogo} />
                            </div>
                            <p>Conheça estratégias de contruir.</p>
                        </StyledLogoText>

                        {/* Mídias sociais. */}
                        <FooterSocialMedia >
                            <StyledFooterTitle className='social-media'>Redes Sociais</StyledFooterTitle>
                           {/* Link para o Instagram. */}
                            <FooterLink >
                                <IconSocial className='instagram' href='https://www.instagram.com/lunkespereira/?next=%2F' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </IconSocial>
                             </FooterLink>

                             {/* Link para o Facebook. */}
                            <FooterLink >
                                <IconSocial className='facebook' href='https://www.facebook.com/mateus.lunkespereira' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </IconSocial>
                            </FooterLink>
                             {/* Link para o WhatsApp. */}
                            <FooterLink >
                                <IconSocial className='whatsapp'  href='https://wa.me/5555999480809' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                </IconSocial>
                            </FooterLink>
                             {/* Link para o LinkedIn. */}
                            <FooterLink >
                                <IconSocial className='linkedin' href='https://www.linkedin.com/in/mateus-lunkes-pereira-dev/' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </IconSocial>
                            </FooterLink>
                        </FooterSocialMedia>
                    </StyledFooterContacts>

                    {/* Lista de links para blogs. */}
                    <div>
                        <FooterList >
                            <li>
                                <StyledFooterTitle >Blogs</StyledFooterTitle>
                            </li>
                            <li>
                                <a href="https://umprogramax.wordpress.com/" className="footer-link" target="_blank" rel="noopener noreferrer">MLP Tech</a>
                            </li>
                            <li>
                                <a href="https://umprogramax.wordpress.com/" className="footer-link" target="_blank" rel="noopener noreferrer">Hobby</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@mateuslpy" className="footer-link" target="_blank" rel="noopener noreferrer">Meu Canal Youtube</a>
                            </li>
                        </FooterList>
                    </div>

                    {/* Lista de links para produtos. */}
                   <div>
                        <FooterList>
                        <li>
                            <StyledFooterTitle>Produtos</StyledFooterTitle>
                         </li>
                        <li> <button className="footer-link">App</button>
                        </li>
                        <li>
                            <button className="footer-link">Desktop</button>
                        </li>
                        <li>
                            <button className="footer-link">Cloud</button>
                        </li>
                    </FooterList>
                    </div>

                    {/* Área de inscrição. */}
                    <StyledFooterSubscribe >
                        <StyledFooterTitle >Inscreva-se</StyledFooterTitle>

                        <StyledFooterSubscribeP >
                            Informe seu e-mail sara saber sobre novos recursos.
                        </StyledFooterSubscribeP >

                        <StyledInputGroup >
                            <StyledInputGroupInput type="email" id="email" />
                            <Email>
                                <MdEmail size={22} color="white" />
                            </Email>
                        </StyledInputGroup>
                    </StyledFooterSubscribe>
                </StyledFooterContent>

                <FooterCopyright>
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p> {/* Copyright. */}
                </FooterCopyright>
               
            </div>
        </StyledFooterContainer>
    )
}

// Exporta o componente RenderFooter.
export default RenderFooter;
