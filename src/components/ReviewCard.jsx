import styled from "styled-components";
export default function ReviewCard({image, title, description, name, job}) {
    return (
        <Container>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="personalReview">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="name">{name}</p>
                <p className="job">{job}</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    background-color: #fcfeff;
    padding: 40px;
    border-radius: 16px;
    gap: 32px;
    align-items: center;
    width: 743px;
    height: 312px;
    margin-right: 32px;
    .image {
        width: 220px;
        height: 220px;
        display: flex;
        align-items: center;
        img {
            width: 100%;
            border-radius: 16px;
        }
    }
    .personalReview {
        flex: 1;
        .title {
            font-size: 22px;
            font-family: "nunito-semibold";
            color: #0a0a0a;
            margin-bottom: 24px;
        }
        .description {
            font-size: 14px;
            color: #747474;
            margin-bottom: 24px;
        }
        .name {
            font-size: 20px;
            font-family: "nunito-medium";
            color: #0a0a0a;
        }
        .job {
            color: #747474;
            font-size: 14px;
        }
    }
`;
