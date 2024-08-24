import React from 'react';
import styled from 'styled-components';

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

const FooterSocialMedia = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
`

const FooterLink = styled.a`
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    color: #E1F0FF;
    border-radius: 50%;
    transition: all 0.4s;

    color: #8DB3E2;
    transition: all 0.4s;

    &:hover {
        opacity: 0.8;
    }
`

const FooterLinkI = styled.i`

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

const InputGroupButton = styled.button`
    background-color: #7f37c9;
    border: none;
    color: #E1F0FF;
    padding: 0px 1.25rem;
    height: 100%;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
        opacity: 0.8;
    }
`

const FooterCopyright = styled.div`
    display: flex;
    justify-content: center;
    background-color: #214289;
    padding: 1.5rem;
    font-weight: 100;
`

const Instagram = styled.div`
    background: linear-gradient(#7f37c9, #ff2992, #ff9807);
`

const Facebook = styled.div`
    background-color: #4267b3;
`

const Whatsapp = styled.div`
    background-color: #25d366;
`

function RenderFooter() {
  return (
    <div className='body'>
    <StyledFooter>
        <FooterContent>
            <FooterContactsH1>
                <h1>Logo</h1>
                <p>It's all about your dreams.</p>

                <FooterSocialMedia>
                    <FooterLink>
                        <Instagram>
                            <a href="#" id="instagram">
                                <FooterLinkI>
                                    <i className="fa-brands fa-instagram"></i>
                                </FooterLinkI>
                            </a>
                        </Instagram>
                    </FooterLink>
                    <FooterLink>
                        <Facebook>
                            <a href="#" id="facebook">
                                <FooterLinkI>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </FooterLinkI>
                            </a>
                        </Facebook>
                    </FooterLink>
                    <FooterLink>
                        <Whatsapp>
                            <a href="#" id="whatsapp">
                                <FooterLinkI>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </FooterLinkI>
                            </a>
                        </Whatsapp>
                    </FooterLink>
                </FooterSocialMedia>
            </FooterContactsH1>

            <FooterList>
                <li>
                    <h3>Blog</h3>
                </li>
                <li>
                    <a href="#" class="footer-link">Tech</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Adventures</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Music</a>
                </li>
            </FooterList>

            <FooterList>
                <li>
                    <h3>Products</h3>
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
                <h3>Subscribe</h3>

                <FooterSubscribeP>
                    Enter your e-mail to get notified about
                    our news solutions
                </FooterSubscribeP>

                <InputGroup>
                    <InputGroupInput type="email" id="email" />
                    <InputGroupButton>
                        <i class="fa-regular fa-envelope"></i>
                    </InputGroupButton>
                </InputGroup>
            </FooterSubscribe>
        </FooterContent>

        <FooterCopyright>
            &#169
            2023 all rights reserved
        </FooterCopyright>
    </StyledFooter>
    </div>
  )
}

export default RenderFooter;
