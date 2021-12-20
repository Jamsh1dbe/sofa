import styled from "styled-components";
import { ReactComponent as Furniture} from '../../assets/img/furniture.svg'
import { ReactComponent as Big} from '../../assets/img/big1.svg'
import { ReactComponent as Madium} from '../../assets/img/madium.svg'
import { ReactComponent as Fat} from '../../assets/img/fat.svg'
export const Div =styled.div`
width: 100vw;
height: 454px;
display: flex;
/* margin: 0px 135px 0px 135px; */

`
Div.Left =styled.div` 
width: 260px;
height: 454px;
/* background-color: #F7F8FA; */
margin-left: 135px;
`
Div.Manu = styled.div`
width: 260px;
height: 41px;
border-bottom: 0.8px solid #E3E3E3;
box-sizing: border-box;
padding: 10px 0px 14px 29px;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
background-color: #F7F8FA;
letter-spacing: 0.02em;
color: #555555;
`
Div.Bottom =styled.div`   
border-bottom: none;
width: 260px;
height: 41px;
/* border-bottom: 0.8px solid #E3E3E3; */
box-sizing: border-box;
padding: 10px 0px 14px 29px;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
background-color: #F7F8FA;
letter-spacing: 0.02em;
color: #555555;
`

Div.Right = styled.div`
display: flex;
/* width: 899px; */
/* margin-right: 135; */
height: 439px;
margin: 12px 135px 3px 11px;
background: linear-gradient(103.4deg, rgba(241, 250, 255, 0.88) 0.89%, #F1FAFF 101.61%);
backdrop-filter: blur(155px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 1px;
`
Div.First =styled.div`
/* width: 324px; */
height: 254px;
margin: 7px 0px 112px 47px;
`
Div.P1 =styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
margin: 73px 0px 0px 47px;
/* or 118% */
letter-spacing: 0.05em;
/* Main Color */
color: #7AC751;
`
Div.P2 =styled.p`
margin: 6px 0px 0px 47px;
font-family: Rubik;
font-style: normal;
font-weight: 900;
font-size: 37px;
line-height: 47px;
color: #2F2F2F;
`
Div.P3 =styled.p`
margin: 29px 0px 0px 47px;
font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 26px;
/* or 96% */
color: rgba(81, 81, 81, 0.71);
`
Div.P4 =styled.button`
background: #7AC751;
width: 129px;
height: 40px;
border-radius: 5px;
border-style: none;
cursor: pointer;
margin: 35px 0px 0px 47px;
color: white;

`
Div.Furniture =styled(Furniture)`
/* width: 374px; */
height: 374px;
margin: 36px 0px 29px 10px;
/* transform: matrix(-1, 0, 0, 1, 0, 0); */
`
Div.Third =styled.div`
display: flex;
flex-direction: column;
`

Div.Third1 =styled.div`
display: flex;
flex-direction: column;
padding: 0px;
width: 98px;
height: 92px;
margin: 58px 39px 0px 7px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.56) 100%);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
`
Div.Big = styled(Big)`
margin: 5px 0px 0px 25px;
width: 49px;
height: 100%;
`
Div.Cost =styled.p`
margin: 0px 1px 0px 37px;
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 10px;
color: #7AC751;
`
Div.Name = styled.p`
margin: 0px 0px 6px 22px;
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 7px;
`

Div.Third2 =styled.div`
display: flex;
flex-direction: column;
width: 98px;
height: 92px;
margin: 25px 39px 0px 7px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.56) 100%);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
`
Div.Madium = styled(Madium)`
margin: 5px 0px 0px 10px;
width: 79px;
height:53px; 
`
Div.Third3 =styled.div`
display: flex;
flex-direction: column;
/* width: 98px; */
height: 92px;
margin: 25px 39px 59px 7px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.56) 100%);
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
`
Div.Fat = styled(Fat)`
margin: 5px 0px 0px 24px;
/* width: 51px; */
height:57px; 
`

