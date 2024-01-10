import styled from "styled-components";
import Background from "./assets/background.svg"


export const Container = styled.div`
    background: url('${Background}');
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItens = styled.div`
    width: 414px;
    height: 645px;
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(
    157deg, rgba(255, 255, 255, 0.60) 
    0.84%, rgba(255, 255, 255, 0.60) 
    0.85%, rgba(255, 255, 255, 0.15) 100%);
    height: 100vh;
   
`;

export const H1 = styled.h1`
    padding: 50px;
    display: flex;
    justify-content: center;
`;

export const InputLabel = styled.p`
    color: #EEE;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    padding-left: 60px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    margin-bottom:34px;
    margin-left: 35px;
    

    color: #ffffff;
    font-size: 25px;
    font-style: normal;
    font-weight: normal;
    line-height: 28PX;

`;

export const Button = styled.button`
    color: #FFF;
    font-size: 17px;
    line-height: 28px;
    margin: 60px 35px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    width: 342px;
    height: 74px;
    border-radius: 14px;
    background: var(--Templates-5-Color-1, rgba(0, 0, 0, 0.80));

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.9;
    }
`;

export const User = styled.li`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    margin-bottom:34px;
    margin-left: 35px;
    

    color: #ffffff;
    font-size: 25px;
    font-style: normal;
    font-weight: normal;
    line-height: 28PX;
    display: flex;
    justify-content: space-around;
    align-items: center;

button{
    background: none;
    border: none;
    cursor: pointer;
}

`