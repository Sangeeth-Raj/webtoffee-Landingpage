import styled from "styled-components";

export default function Elements({icon, altenate, title, minititle}) {
    return (
        <Container>
            <div className="elementleft">
                <div className="iconFrame">
                    <img src={icon} alt={altenate} />
                </div>
            </div>
            <div className="elementright">
                <p className="title">{title}</p>
                <p className="minititle">{minititle}</p>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    @media all and (max-width: 640px) {
        gap: 10px;
    }

    .elementleft {
        display: flex;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #007fff;
        padding: 10px;
        justify-self: center;

        .iconFrame {
            width: 20px;
            @media all and (max-width: 1280px) {
                width: 15px;
            }

            img {
                width: 100%;
            }
        }
    }
    .elementright {
        font-size: 16px;
        @media all and (max-width: 1280px) {
            font-size: 14px;
        }
        .title {
            color: #747474;
            font-family: "nunito-bold";
        }
        .minititle {
            color: #747474;
            font-family: "nunito-medium";
        }
    }
`;
