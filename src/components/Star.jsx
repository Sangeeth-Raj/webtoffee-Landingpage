import styled from "styled-components";

export default function Star({star, width}) {
    return (
        <Container width={width} className="starWidth">
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

    .starFrame {
        width: ${(props) => (props.width ? props.width : "24px")};
    }
`;
