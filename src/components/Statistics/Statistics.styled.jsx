import styled from "styled-components";


export const Section = styled.section`
top: 50%;
left: 6%;
position: absolute;
background-color: #e5ecee;
border: 1px solid black;
box-shadow: -3px 2px 14px -5px rgb(0 0 0 / 95%);
width: 240px;

`

export const Title = styled.h2`
text-align: center;
font-size: 24px;
margin: 0px auto;
padding-top: 20px;
padding-bottom: 20px;
font-weight: normal;
`

export const StatList = styled.ul`
width: 100%;
display: flex;
-webkit-box-align: center;
align-items: center;
padding: 0px;
margin: 0px;
list-style: none;
font-size: 12px;
`

export const ItemList = styled.li`
display: flex;
flex-direction: column;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
flex: 1 1 auto;
padding: 8px;
width: 100%;
height: 100%;
text-shadow: rgb(0 0 0) 0px 0px 1px;
border: 0.5px solid black;
background-color: ${({index}) => {

    if(index === 0){
        return '#62cadf';
    }
    if(index === 1){
        return '#ab29ad';
    }
    if(index === 2){
        return '#ad2941';
    }
    if(index === 3){
        return '#14f9dd';
    }
    if(index === 4){
        return '#c8f914';
    }
  }};
`
export const Label = styled.span`
text-align: center;
font-size: 12px;
margin-bottom: 4px;
`

export const Percentage = styled.span`
text-align: center;
font-size: 8px;
`