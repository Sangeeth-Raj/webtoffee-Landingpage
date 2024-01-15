import styled from "styled-components";
import Heading from "../Heading";
import Button from "../Button";
import Elements from "../Elements";

export default function Spotlight() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="left">
                    <Heading
                        lefttitle="The Fastest Growing WordPress "
                        midtitle="GDPR Cookie Consent"
                        righttitle="Plugin"
                        fontSize="55px"
                        lineheight="82px"
                    />
                    <p className="content">
                        Join the <span>1 Million+ </span>
                        WordPress websites that use the GDPR Cookie Consent
                        plugin to create a cookie consent banner and manage
                        cookie consent
                    </p>
                    <Button text="Get plugin now" />
                    <div className="elements">
                        <Elements
                            icon="/icons/starIcon.svg"
                            altenate="Star Icon"
                            title="GDPR"
                            minititle="Ready"
                        />
                        <Elements
                            icon="/icons/lockIcon.svg"
                            altenate="Lock Icon"
                            title="CCPA"
                            minititle="Ready"
                        />
                        <Elements
                            icon="/icons/shieldIcon.svg"
                            altenate="Shield Icon"
                            title="Trusted by "
                            minititle="1.5 Million Developers"
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="spotlightFrame">
                        <img
                            src="/images/spotlightImage.png"
                            alt="Spotlight Image"
                        />
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}

const Container = styled.section`
    background-color: #f0f7fd;
    overflow: hidden;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        background: url("/images/backgroundCorner.svg") no-repeat;
        background-size: contain;
        transform: translate(8%, -8%);
        width: 80px;
        height: 80px;
        @media all and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: url("/images/backgroundCorner.svg") no-repeat;
        background-size: contain;
        transform: rotate(180deg) translate(8%, -8%);
        width: 80px;
        height: 80px;
        @media all and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    @media all and (max-width: 980px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 480px) {
        padding: 40px 0;
    }
    .left {
        width: 50%;
        z-index: 1;
        @media all and (max-width: 980px) {
            width: 100%;
            justify-content: center;
        }
        div.headline {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 40px;
                    line-height: 60px;
                }
                @media all and (max-width: 1080px) {
                    font-size: 36px;
                    line-height: 50px;
                }
                @media all and (max-width: 640px) {
                    font-size: 30px;
                    line-height: 40px;
                }
                @media all and (max-width: 480px) {
                    font-size: 27px;
                    line-height: 32px;
                }
                span {
                    @media all and (max-width: 1280px) {
                        font-size: 40px;
                        line-height: 60px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 36px;
                        line-height: 50px;
                    }
                    @media all and (max-width: 640px) {
                        font-size: 30px;
                        line-height: 40px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 27px;
                        line-height: 32px;
                    }
                }
            }
        }
        .content {
            margin-top: 24px;
            margin-bottom: 48px;
            font-size: 19px;
            color: #747474;
            letter-spacing: 0.24px;
            @media all and (max-width: 1280px) {
                font-size: 18px;
            }
            @media all and (max-width: 1080px) {
                font-size: 17px;
            }
            @media all and (max-width: 640px) {
                font-size: 15px;
                margin-bottom: 26px;
            }
            @media all and (max-width: 480px) {
                font-size: 14px;
                margin-top: 20px;
            }

            span {
                font-family: "nunito-medium";
            }
        }
        .elements {
            display: flex;
            gap: 45px;
            margin-top: 96px;
            @media all and (max-width: 1280px) {
                margin-top: 50px;
                gap: 35px;
            }
            @media all and (max-width: 1080px) {
                margin-top: 40px;
            }
            @media all and (max-width: 640px) {
                gap: 28px;
            }
            @media all and (max-width: 480px) {
                flex-direction: column;
                margin-top: 30px;
            }
        }
    }
    .right {
        width: 45%;
        z-index: 1;
        @media all and (max-width: 980px) {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .spotlightFrame {
            width: 800px;
            transform: rotate(-7deg);
            @media all and (max-width: 1280px) {
                width: 600px;
            }
            @media all and (max-width: 980px) {
                transform: rotate(0deg);
                width: 500px;
            }
            @media all and (max-width: 768px) {
                width: 400px;
            }
            @media all and (max-width: 640px) {
                display: flex;
                width: 380px;
            }
            @media all and (max-width: 480px) {
                width: 270px;
            }

            img {
                /* width: 100%; */
            }
        }
    }
`;
