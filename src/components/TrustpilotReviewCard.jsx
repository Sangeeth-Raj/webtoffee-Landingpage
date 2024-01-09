import styled from "styled-components";
import Star from "./Star";

export default function TrustpilotReviewCard({
    title,
    description,
    image,
    name,
    date,
}) {
    return (
        <Container>
            <div className="icon">
                <img src="/icons/quote.svg" alt="Quote" />
            </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
            <div className="user">
                <div className="userDetails">
                    <div className="userImage">
                        <img src={image} alt={name} />
                    </div>
                    <div className="nameDate">
                        <p className="name">{name}</p>
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div className="navyBlueStar">
                    <Star star="/icons/navyblueStar.svg" width="20px" />
                </div>
                <div className="whiteStar">
                    <Star star="/icons/whiteStar.svg " width="20px" />
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    border-radius: 4px;
    width: 420px;
    border: 1px solid #010e25;
    background: #fcfeff;
    padding: 34px;
    position: relative;
    margin-right: 30px;
    transition: 0.25s;
    &::after {
        content: url("/images/trustpilot-righttop.svg");
        position: absolute;
        top: 4%;
        right: 3%;
    }

    &:hover {
        background: #061632;
        border: 1px solid #ececec;
        .user {
            .userDetails {
                .nameDate {
                    .name {
                        color: #eee;
                    }
                }
            }
            .navyBlueStar {
                display: none;
            }
            .whiteStar {
                display: block;
            }
        }
        .icon {
            border: 1px solid #ececec;
        }
        .title {
            color: #fbfbfb;
        }
        .description {
            color: #e1e1e1;
        }
    }
    .icon {
        width: 50px;
        padding: 13px;
        border-radius: 2px;
        border: 1px solid #3283ff;
        margin-bottom: 32px;
    }
    .title {
        font-family: "nunito-semibold";
        font-size: 18px;
        color: #747474;
        margin-bottom: 8px;
    }
    .description {
        font-size: 16px;
        color: #747474;
        margin-bottom: 14px;
    }
    .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #d4d4d4;
        padding-top: 14px;
        .userDetails {
            display: flex;
            align-items: center;
            gap: 16px;

            .userImage {
                width: 50px;
                img {
                    border-radius: 40px;
                }
            }
            .nameDate {
                .name {
                    color: #0a0a0a;
                    font-family: "nunito-medium";
                    font-size: 18px;
                }
                .date {
                    color: #747474;
                    font-size: 16px;
                }
            }
        }
        .navyBlueStar {
        }
        .whiteStar {
            display: none;
        }
    }
`;
