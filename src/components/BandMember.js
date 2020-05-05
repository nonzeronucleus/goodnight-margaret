import React from "react"
import Img from "gatsby-image";
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const BandMember = styled.div`
    display:grid;
    font-family: 'Poppins';
    grid-template-rows: auto auto auto;
    padding-bottom:40px;
    padding-left:80px;
    padding-right:80px;
    max-width:1024px;
`;

const BandMemberOdd = styled(BandMember)`
    grid-template-columns: 200px minmax(200px, 600px) auto;
    grid-template-areas:
        ". header ."
        "image  main  ."
        ".      main  .";
`;

const BandMemberEven = styled(BandMember)`
    grid-template-columns: auto minmax(200px, 600px) 200px;
    grid-template-areas:
        ". header header"
        ". main   image"
        ". main   .";
`;




const TitleSection = styled.div`
    grid-area: header;

    > h2 {
        font-size:40px;
        font-weight:400;
        margin-bottom:20px;
    }
`;

const MainText = styled.div`

    font-size:20px;
    grid-area: main;

    /* background-color:blue; */
    padding:10px;
    font-size:14px;

    > p {
        margin-bottom:10px;
    }
`;

const HeadshotSection = styled.div`
    grid-area: image;

    /* background-color:yellow; */
    align-self: center;
    justify-self:center;
`;


const Headshot = styled(Img)`
    :hover {
        filter: hue-rotate(1deg) blur(5px);
    }
    box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    /* opacity:0.8; */
    /* width:00px; */
    /* height:100%; */
    /* border:0px; */
    height:128px;
    width:128px;
    /* position: absolute; */

`;


const BandContent =  ({name, img, description,}) => (
    <>
        <TitleSection>
        <h2>{name}</h2>
        </TitleSection>

        <HeadshotSection>
            <Headshot fluid={img}/>
        </HeadshotSection>
        <MainText>
            {documentToReactComponents(description.json)}
        </MainText>
    </>
)


export default ({name, img, description,row}) => {
    if (row % 2 === 0) {
        return (
            <BandMemberEven>
                <BandContent {...{name, img, description, row}}/>
            </BandMemberEven>
        )
    }
    else {
        return (
            <BandMemberOdd>
                <BandContent {...{name, img, description, row}}/>
            </BandMemberOdd>
        )
    }
}
