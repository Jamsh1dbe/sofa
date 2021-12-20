import styled from "styled-components";
import { ReactComponent as Logo} from '../../assets/icon/lion.svg'
import { ReactComponent as Search} from '../../assets/icon/search.svg'
import { ReactComponent as Packet} from '../../assets/icon/packet.svg'
import { ReactComponent as Bang} from '../../assets/icon/bang.svg'
import { ReactComponent as Contact} from '../../assets/icon/contact.svg'
export const Box = styled.div`
/* width: 100vw; */
height: 92px;
background-color: #fff;
display: flex;
align-items: center;
margin:0px 135px 0px 135px;




`
Box.Logo=styled.div`
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #555555;
display: flex;
align-items: center;
`
Box.Logolion=styled(Logo)`
width: 31px;
height: 38px;
padding-right: 5px;
`
Box.Input= styled.input`
/* border: none; */
margin-left: 120px;
padding-left: 25px;
width: 490px;
height: 46px;
border: 2px solid #7AC751;
box-sizing: border-box;
border-radius: 8px;
border-right: none ;
border-bottom-right-radius: 0px;
border-top-right-radius: 0px;
`
Box.Select= styled.select`
width: 140px;
height: 46px;
border: 2px solid #7AC751;
box-sizing: border-box;
border-left-color: #E3E3E3C7;

`
Box.Searchbutton= styled.button`
width: 55px;
margin-right: 190px;
height: 46px;
background-color: #7AC751;
border-radius: 8px;
border-bottom-left-radius: 0px;
border-top-left-radius: 0px;
border-style: none;
cursor: pointer;
`
Box.Search=styled(Search)`
height: 16.100000381469727px;
width: 16px;
left: 0px;
top: 0px;
border-radius: 0px;
`
Box.Packet=styled(Packet)`
/* padding-left: 201px; */
width: 24px;
height: 24px;
left: 1184px;
top: 82px;
`
Box.Bang=styled(Bang)`
padding-left: 31.79px;
left: 14.58%;
right: 14.58%;
top: 8.33%;
bottom: 25.63%;
`
Box.Contact=styled(Contact)`
padding-left: 26.64px;
/* margin-right: auto; */
margin-right: 135px;
left: 7.69%;
right: 7.69%;
top: 0%;
bottom: 0%;

`