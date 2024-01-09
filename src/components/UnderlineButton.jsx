import styled from "styled-components";

export default function UnderlineButton() {
    return (
        <Container href="#">
            <p>View all reviews</p>
            <div className="arrow">
                <img src="/icons/arrow-right.svg" alt="arrow" />
            </div>
        </Container>
    );
}

const Container = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    &::after {
        position: absolute;
        content: "";
        width: 13%;
        height: 1px;
        background-color: #eee;
        bottom: -8px;
        transition: 0.5s;
    }
    &:hover {
        &::after {
            width: 100%;
        }
    }
    p {
        color: #fff;
        font-family: "nunito-semibold";
        font-size: 20px;
    }
`;
