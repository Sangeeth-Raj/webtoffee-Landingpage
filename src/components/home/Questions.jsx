import styled from "styled-components";
import Heading from "../Heading";
import {QuestionKey} from "../../utils/QuestionKey";
import {useState} from "react";

export default function Questions() {
    const [activeQuestion, setActiveQuestion] = useState();

    const handleClick = (index) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="top">
                    <Heading lefttitle="Frequently Ask " midtitle="Questions" />
                    <p className="questionContent">
                        Do you have a question about the ‘GDPR Cookie Consent?
                        See the list below for our most frequently asked
                        questions.
                    </p>
                </div>
                <div className="bottom">
                    {QuestionKey.map((item, i) => (
                        <div
                            className={`eachQuestion ${
                                i === activeQuestion ? "active" : null
                            }`}
                            key={i}
                            onClick={() => handleClick(i)}>
                            <div className="head">
                                <div className="title">{item.title}</div>
                                <div className="arrow">
                                    <img
                                        src="/icons/showMoreArrow.svg"
                                        alt="Show More"
                                    />
                                </div>
                            </div>
                            <div className="description">
                                <p className="first">{item.first}</p>
                                <p className="second">{item.second}</p>
                                <p className="third">{item.third}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}

const Container = styled.section`
    padding-bottom: 400px;
    position: relative;
    &::after {
        content: "";
        background-image: url("/images/questionLap.svg");
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        width: 1229px;
        height: 782px;
        left: 50%;
        transform: translate(-50%);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 60px;

        .questionContent {
            width: 49%;
            font-size: 18px;
            color: #747474;
            /* line-height: 32px; */
            margin-top: 24px;
        }
    }
    .bottom {
        width: 75%;
        .eachQuestion {
            border-bottom: 1px solid #d4d4d4;
            padding: 24px 0;
            .head {
                display: flex;
                align-items: center;
                justify-content: space-between;

                cursor: pointer;
                .title {
                    color: #0a0a0a;
                    font-family: "nunito-semibold";
                    font-size: 22px;
                }
                .arrow {
                    width: 28px;
                    transition: 0.5s;
                }
            }

            .description {
                visibility: hidden;
                height: 0;
                /* overflow: hidden; */
                transition: visibility 0s, height 0.3s ease-in-out;
                p {
                    color: #747474;
                    line-height: 30px;
                    font-size: 18px;
                }
            }
        }
        .active {
            .head {
                margin-bottom: 16px;
                .arrow {
                    transform: rotate(180deg);
                }
                .title {
                    color: #3182ff;
                    font-family: "nunito-semibold";
                    font-size: 22px;
                }
            }
            .description {
                visibility: visible;
                height: 200px;
            }
        }
        .eachQuestion:nth-child(2).active .description {
            height: 100px; /* Set different height for the second question */
        }
    }
`;
