import styled from "styled-components";
import Star from "../Star";

export default function Footer() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="logoSection">
                    <div className="logoAndMedia">
                        <a href="#" className="logo">
                            <img
                                src="/icons/FooterLogo.svg"
                                alt="Footer Logo"
                            />
                        </a>
                        <ul className="socialMedia">
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/instagram-icon.svg"
                                        alt="Instagram"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/facebook-icon.svg"
                                        alt="Facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/linkedin-icon.svg"
                                        alt="X"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/linkedin-icon.svg"
                                        alt="LinkedIn"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="public/icons/linkedin-icon.svg"
                                        alt="Youtube"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="trustpolitRating">
                        <div className="trustpolit">
                            <img
                                src="/icons/trustpilotLogo.svg"
                                alt="Trust Polit"
                            />
                        </div>
                        <Star star="/icons/footerStar.svg" width="20px" />
                    </div>
                </div>
                <ul className="linkSection">
                    <li>
                        <ul>
                            <li>
                                <a href="#">Our plugins</a>
                            </li>
                            <li>
                                <a href="#">GDPR Cookie Consent</a>
                            </li>
                            <li>
                                <a href="#">PDF Invoices & Packings Slips</a>
                            </li>
                            <li>
                                <a href="#">PDF Invoices & Packings Slips</a>
                            </li>
                            <li>
                                <a href="#">User & Customer Import Expor</a>
                            </li>
                            <li>
                                <a href="#">Import Export Suite</a>
                            </li>
                            <li>
                                <a href="#">Sequential Order Numbers</a>
                            </li>
                            <li>
                                <a href="#">Smart Coupons for WooCommerce</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="#">Get Started</a>
                            </li>
                            <li>
                                <a href="#">Plugins</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">Affiliates</a>
                            </li>
                            <li>
                                <a href="#">We're hiring</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="#">Help & Support</a>
                            </li>
                            <li>
                                <a href="#">Documentation</a>
                            </li>
                            <li>
                                <a href="#">Documentation (Basic)</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                            <li>
                                <a href="#">Support Policy</a>
                            </li>
                            <li>
                                <a href="#">License Activation</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Wrapper>
            <p className="copyright wrapper">
                © 2023 WebToffee. All rights reserved.
            </p>
        </Container>
    );
}

const Container = styled.footer`
    background: #031126;
    padding: 320px 0 0 0;
    .copyright {
        text-align: center;
        color: #aaa;
        font-size: 14px;
        padding: 40px 0;
        border-top: 1px solid #aaa;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    .logoSection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .logoAndMedia {
            a.logo {
                display: block;
                width: 151px;
                margin-bottom: 40px;
            }
            .socialMedia {
                display: flex;
                gap: 8px;
                li {
                    a {
                        display: block;
                        width: 35px;
                    }
                }
            }
        }
        .trustpolitRating {
            .trustpolit {
                width: 102px;
                margin-bottom: 10px;
            }
        }
    }
    .linkSection {
        display: flex;
        gap: 90px;
        align-items: start;
        li {
            ul {
                li {
                    margin-bottom: 10px;
                    a {
                        color: #aaa;
                        font-size: 16px;
                    }
                }
                :nth-child(1) {
                    margin-bottom: 24px;
                    a {
                        font-size: 25px;
                        font-family: "nunito-medium";
                        color: #fff;
                    }
                }
            }
        }
    }
`;
