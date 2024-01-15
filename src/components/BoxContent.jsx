import styled from "styled-components";

export default function BoxContent({
    boxtext,
    boxtextcolor,
    boxtextfont,
    boxtextsize,
}) {
    return (
        <Container
            className="boxMatter"
            $boxtextcolor={boxtextcolor}
            $boxtextfont={boxtextfont}
            $boxtextsize={boxtextsize}>
            <p>{boxtext}</p>
        </Container>
    );
}

const Container = styled.div`
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px dashed #b3d9f6;
    /* border-spacing: 600px; */
    /* border-width: 3px; */
    position: relative;

    &::before {
        content: "";
        height: 60%;
        width: 3px;
        background-color: #007fff;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-75%, -50%);
        border-radius: 4px;
    }
    p {
        color: ${(prop) =>
            prop.$boxtextcolor ? prop.$boxtextcolor : "#747474"};
        font-family: ${(prop) =>
            prop.$boxtextfont ? prop.$boxtextfont : "nunito-medium"};
        font-size: ${(prop) =>
            prop.$boxtextsize ? prop.$boxtextsize : "17px"};
        @media all and (max-width: 1080px) {
            font-size: ${(prop) =>
                prop.$boxtextsize ? prop.$boxtextsize : "15px"};
        }
    }
`;
