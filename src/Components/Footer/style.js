import styled from "styled-components";
import { ReactComponent as Free} from '../../assets/icon/free.svg'
import { ReactComponent as Prize} from '../../assets/icon/prize.svg'
import { ReactComponent as Wellet} from '../../assets/icon/wellet.svg'
import { ReactComponent as Earphone} from '../../assets/icon/earphone.svg'

export const Box =styled.div` 
width: 100% ;
margin: 65px 135px 0px 134px;
/* background-color: blue; */
display: flex;
height: 58px;
`
Box.All =styled.div` 
margin-left: 145px; 
display: flex;
`
Box.All1 =styled.div` 
/* margin-left: 107px;  */
display: flex;
`
Box.Free =styled(Free)`
width: 58px;
height: 50px;
`
Box.Prize =styled(Prize)`
width: 58px;
height: 58px;
`
Box.Wellet =styled(Wellet)`
width: 58px;
height: 58px;
`
Box.Earphone =styled(Earphone)`
width: 53px;
height: 58px;
`
Box.Divv=styled.div` 
/* display: flex;
flex-direction: column; */
 /* height: 40px; */
/* box-sizing: border-box; */
`
Box.P= styled.p`
/* width: 0px; */
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 25px;
margin: 0;
padding: 0;
padding-top: 2px;
color: #555555;
`
Box.P2=styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
margin: 0;
padding: 0;
padding-top: 5px;
color: rgba(81, 81, 81, 0.71);
`