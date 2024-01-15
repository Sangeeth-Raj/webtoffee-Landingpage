import styled from "styled-components";

export default function ServiceScroll({icon, name}) {
    return (
        <Container>
            <div className="icon">
                <img src={icon} alt={name} />
            </div>
            <p>{name}</p>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    gap: 10px;
    padding: 12px 0;
    align-items: center;
    border-radius: 8px;
    border: 2.29px solid #112c5a;
    width: 230px;
    height: 100%;
    justify-content: center;
    margin-right: 15px;
    @media all and (max-width: 1080px) {
        padding: 6px 0;
        width: 210px;
    }

    .icon {
        width: 30px;
        display: flex;
    }
    p {
        color: #a7aebc;
        font-size: 17px;
        font-family: "nunito-medium";
    }
`;
