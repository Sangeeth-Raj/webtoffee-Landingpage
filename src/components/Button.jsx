import styled from "styled-components";

export default function Button({
    backgroundcolor,
    width,
    arrow,
    textcolor,
    text,
    padding,
    fontSize,
}) {
    return (
        <Container
            className="button"
            $width={width}
            $backgroundcolor={backgroundcolor}
            $textcolor={textcolor}
            $padding={padding}
            $fontSize={fontSize}
            $arrow={arrow}>
            {text}
            <span className="arrow">
                <img src="/icons/arrow-right.svg" alt="" />
            </span>
        </Container>
    );
}

const Container = styled.button`
    align-items: center;
    &:hover {
        &::after {
            opacity: 1;
            transform: translate(1%, 5%);
        }
    }
    border: 1px solid #007fff;
    border-radius: 4px;
    padding: ${(props) => (props.$padding ? props.$padding : "12px 32px")};
    display: flex;
    justify-content: center;
    gap: 6px;
    font-family: "nunito-medium";
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "16px")};
    width: ${(props) => (props.$width ? props.$width : "220px")};
    cursor: pointer;
    position: relative;
    background-color: ${(props) =>
        props.$backgroundcolor ? props.$backgroundcolor : "#007FFF"};
    color: ${(props) => (props.$textcolor ? props.$textcolor : "#fff")};
    @media all and (max-width: 1280px) {
        width: 180px;
        padding: 10px 18px;
    }
    @media all and (max-width: 1080px) {
        width: 150px;
        padding: 10px;
        font-size: 14px;
    }
    @media all and (max-width: 480px) {
        width: 140px;
        padding: 4px;
    }
    &::after {
        content: "";
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        opacity: 0;
        border: 1px solid #007fff;
        border-radius: 4px;
        transition: 0.2s ease-in-out;
    }
    span {
        display: ${(props) => (props.$arrow ? props.$arrow : "flex")};
        align-items: center;

        @media all and (max-width: 1080px) {
            width: 15px;
        }
    }
`;
