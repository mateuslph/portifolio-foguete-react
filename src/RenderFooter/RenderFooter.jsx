import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../assets/images/logo-mlp-tech-art.png';
import { MdEmail } from 'react-icons/md';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const StyledFooter = styled.footer`
    width: 100%;
    color: #E1F0FF;
`

const FooterContent = styled.div`
  background-color: #3161C0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem 3.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem 2rem;
  }
`

const FooterContactsH1 = styled.div`
    margin-bottom: 0.75rem;
`

const LogoImg = styled.img`
  padding: 4px;
  height: 35px;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding: 3px;
    height: 60px;
  }
`

const FooterSocialMedia = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
`

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
`

const Instagram = styled.div`
    background: linear-gradient(#7f37c9, #ff2992, #ff9807);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

const Facebook = styled.div`
    background-color: #4267b3;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

const Whatsapp = styled.div`
    background-color: #25d366;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    list-style: none;
`
const FooterSubscribe = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const FooterSubscribeP = styled.p`
    color: #8DB3E2;
`

const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color:#214289;
    border-radius: 4px;
`

const InputGroupInput = styled.input`
    all: unset;
    padding: 0.75rem;
    width: 100%;
`

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

const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: #214289;
    padding: 1.5rem;
    font-weight: 100;
`

function RenderFooter() {
    return (
        <div className='body'>
            <StyledFooter>
                <FooterContent>
                    <FooterContactsH1>
                        <div className="logo">
                            <LogoImg src={ImageLogo} />
                        </div>
                        <p>Conheça estratégias de contruir.</p>

                        <FooterSocialMedia>
                            <FooterLink>
                                <Instagram>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" href='https://www.google.com/' />
                                </Instagram>
                            </FooterLink>
                            <FooterLink>
                                <Facebook>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" href='https://www.google.com/' />
                                </Facebook>
                            </FooterLink>
                            <FooterLink>
                                <Whatsapp>
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" href='https://www.google.com/' />
                                </Whatsapp>
                            </FooterLink>
                        </FooterSocialMedia>
                    </FooterContactsH1>

                    <FooterList>
                        <li>
                            <h3>Blogs</h3>
                        </li>
                        <li>
                            <a href="https://umprogramax.wordpress.com/" class="footer-link">MLP Tech</a>
                        </li>
                        <li>
                            <a href="https://umprogramax.wordpress.com/" class="footer-link">Hobby</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@mateuslpy" class="footer-link">Meu Canal Youtube</a>
                        </li>
                    </FooterList>

                    <FooterList>
                        <li>
                            <h3>Produtos</h3>
                        </li>
                        <li>
                            <a href="#" class="footer-link">App</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Desktop</a>
                        </li>
                        <li>
                            <a href="#" class="footer-link">Cloud</a>
                        </li>
                    </FooterList>

                    <FooterSubscribe>
                        <h3>Inscreva-se</h3>

                        <FooterSubscribeP>
                            Informe seu e-mail sara saber sobre novos recursos.
                        </FooterSubscribeP>

                        <InputGroup>
                            <InputGroupInput type="email" id="email" />
                            <Email>
                                <MdEmail size={22} color="white" />
                            </Email>
                        </InputGroup>
                    </FooterSubscribe>
                </FooterContent>

                <FooterCopyright>
                    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                </FooterCopyright>
            </StyledFooter>
        </div>
    )
}

export default RenderFooter;
