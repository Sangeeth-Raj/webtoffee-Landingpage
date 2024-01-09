import styled from "styled-components";

export default function Star({star, width}) {
    return (
        <Container width={width}>
            <div className="starFrame">
                <img src={star} alt="star" />
            </div>
            <div className="starFrame">
                <img src={star} alt="star" />
            </div>
            <div className="starFrame">
                <img src={star} alt="star" />
            </div>
            <div className="starFrame">
                <img src={star} alt="star" />
            </div>
            <div className="starFrame">
                <img src={star} alt="star" />
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    .starframe {
        width: ${(props) => (props.width ? props.width : "24px")};
    }
`;
