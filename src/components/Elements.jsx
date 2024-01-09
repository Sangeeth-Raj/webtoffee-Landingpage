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
    gap: 16px;

    .elementleft {
        display: flex;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #007fff;
        padding: 10px;

        .iconFrame {
            width: 20px;

            img {
                width: 100%;
            }
        }
    }
    .elementright {
        font-size: 16px;
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
