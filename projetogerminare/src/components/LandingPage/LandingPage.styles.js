import styled from 'styled-components';

export const Slider = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    > div {
        background-color: #D2D2D2;
        background-size: cover;
        height: 570px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(to right, rgb(25, 26, 75, 1), rgb(25, 26, 75, 0)), url(${props => props.backgroundImage});
    };
    > div > div {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 9vw;
        max-width: 30%;
    };
    > div > div > h3 {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 8px;
        margin: 0 0 40px 0;
    };
    > div > div > h1 {
        font-size: 50px;
        line-height: 1;
        width: 95%;
        margin: 0 0 20px 0;
    };
    > div > div > p {
        font-size: 18px;
        margin: 0 0 40px 0;
    };
})
`;
