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
        content: url("/images/backgroundCorner.svg");
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(8%, -8%);
    }
    &::before {
        content: url("/images/backgroundCorner.svg");
        position: absolute;
        bottom: 0;
        left: 0;
        transform: rotate(180deg) translate(8%, -8%);
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    .left {
        width: 50%;
        .content {
            margin-top: 24px;
            margin-bottom: 48px;
            font-size: 19px;
            color: #747474;
            letter-spacing: 0.24px;

            span {
                font-family: "nunito-medium";
            }
        }
        .elements {
            display: flex;
            gap: 45px;
            margin-top: 96px;
        }
    }
    .right {
        width: 45%;
        z-index: 1;

        .spotlightFrame {
            width: 800px;
            transform: rotate(-7deg);

            img {
                /* width: 100%; */
            }
        }
    }
`;
