import styled from "styled-components";
import Star from "./Star";

export default function WordpressCard({
    image,
    title,
    description,
    other = false,
}) {
    return (
        <Container other={other}>
            <div className="iconFrame">
                <div className="icon">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="ratingAndPrice">
                <div className="star">
                    <Star star="/icons/blueStar.svg" />
                </div>
                <p className="price">$69 - $199</p>
            </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </Container>
    );
}

const Container = styled.div`
    border-radius: 8px;
    border: 1px solid #ececec;
    background: #fff;
    position: relative;
    padding: ${(props) => (props.other ? "32px" : "90px")} 30px 40px 30px;
    height: 100%;
    transition: all 0.3s ease-in-out;
    position: relative;

    &::after {
        content: url("/images/featuresCardCorner.svg");
        bottom: 2%;
        right: 2%;
        position: absolute;
    }

    &:hover {
        /* border: 1px solid #eee; */
        background: linear-gradient(103deg, #01112d 0.55%, #071e45 100.85%);
        transition: all 0.3s ease-in-out;

        .iconFrame {
            border: 1px solid #eee;
            background: linear-gradient(103deg, #01112d 0.55%, #071e45 100.85%);
            transition: all 0.3s ease-in-out;

            .icon {
                img {
                    filter: ${(props) =>
                        props.other ? "none" : "brightness(0) invert(1)"};
                }
            }
        }
        .title {
            color: #eee;
        }
        .description {
            color: #d9d9d9;
        }
        .ratingAndPrice {
            .price {
                background-color: #b3d9f6;
            }
        }
    }
    .iconFrame {
        position: absolute;
        top: 0;
        padding: 20px;
        border-radius: 8px;
        background: #e6edfa;
        transform: translateY(-40%);

        .icon {
            width: 40px;

            img {
                width: 100%;
            }
        }
    }
    .ratingAndPrice {
        display: ${(props) => (props.other ? "flex" : "none")};
        align-items: center;
        gap: 24px;
        justify-content: end;
        margin-bottom: 34px;
        .price {
            background-color: #e6edfa;
            border-radius: 4px;
            padding: 12px 24px;
            font-family: "nunito-medium";
            font-size: 16px;
            transition: 0.25s;
        }
    }
    .title {
        font-size: 26px;
        font-family: "nunito-semibold";
        color: var(--Neutral-400-Heading, #0a0a0a);
        margin-bottom: 16px;
        cursor: default;
    }
    .description {
        color: #747474;
        font-size: 15px;
        line-height: 28px;
        cursor: default;
    }
`;
