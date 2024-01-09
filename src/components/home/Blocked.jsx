import styled from "styled-components";
import SectionContent from "../SectionContent";
import Heading from "../Heading";
import Services from "../Services";

export default function Blocked() {
    return (
        <Container className="background">
            <SectionContent
                marginbottom="0"
                paddingbottom="0"
                lefttitle="Have the non-necessary scripts "
                midtitle="blocked automatically"
                leftrightcolor="#EEE"
                boxtext="Automatically block all cookie script prior to the users’ consent"
                boxtextcolor="#D4D4D4"
                firstpara="The automatic script blocking feature allows you to block cookies before the consent is given with as little effort as installing and activating the plugin. GDPR Cookie Consent plugin allows you to get explicit consent with no pre-checked boxes."
                thirdpara="The plugin gives you the option to select which scripts need to be blocked automatically prior to consent and the scripts that need not be blocked."
                paragraphcolor="#D4D4D4"
                buttontext="Get Plugin Now"
                sectionimage="/images/Blocked-image.svg"
            />
            <div className="thirdParty wrapper">
                <div className="thirdPartyLabel">
                    <Heading
                        lefttitle="The list of "
                        midtitle="The list of "
                        righttitle="scripts that are "
                        leftrightcolor="#EEE"
                        fontSize="20px"
                        lineheight="30px"
                    />
                    <Heading
                        midtitle="blocked automatically "
                        righttitle="include: "
                        leftrightcolor="#EEE"
                        fontSize="20px"
                        lineheight="30px"
                    />
                </div>
                <div className="services">
                    <Services />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.section`
    border-radius: 16px;
    background: linear-gradient(117deg, #01112d -0.03%, #071d44 99.38%);
    position: relative;
    overflow: hidden;

    &::after {
        content: url("/images/backgroundCorner.svg");
        position: absolute;
        top: 0;
        right: 0;
        /* width: 50%; */
        transform: translate(8%, -8%);
    }
    &::before {
        content: url("/images/backgroundCorner.svg");
        position: absolute;
        bottom: 0;
        left: 0;
        transform: rotate(180deg) translate(8%, -8%);
    }
    .thirdParty {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 48px;
        padding-bottom: 130px;
        .thirdPartyLabel {
            padding: 10px 32px 10px 54px;
            width: 35%;
        }
        .services {
            width: 62%;
        }
    }
`;
