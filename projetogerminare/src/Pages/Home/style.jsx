import { styled } from "@mui/material";
import Box from "@mui/material"
import HeaderImg from './Assets/HeaderImg.svg'
export const MainDiv = styled('div')({
    fontFamily: 'Montserrat, sans-serif',
    '& .slider' : {
        backgroundColor: '#D2D2D2',
        backgroundImage: `linear-gradient(to right,rgb(25, 26, 75, 1), rgb(25, 26, 75, 0)), url(${HeaderImg})` ,
        backgroundSize: 'cover',
        height: '603px',
        color: '#ffffff',
        lineHeight: '55px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    '& .sliderContent' : {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        marginLeft: '130px',
        paddingTop: '130px',
        maxWidth: '31%',
    },
    '& .subtitle' : {
        textTransform: 'uppercase',
        fontSize: '20px',
        fontWeight: '400',
        letterSpacing: '7px',
        margin: '0',
    },
    '& .maintitle' : {
        marginTop: '26.6px',
        fontSize: '55px',
        marginBottom: '0',
        lineHeight: '58px',
    },
    '& .description' : {
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: '400',
        marginBottom: '0px',
    },
    '& .btnWhite' : {
        width: '220px',
        textAlign: 'center',
        marginTop: '43px',
        padding: '0 10px',
        textTransform: 'uppercase',
        backgroundColor: '#ffffff',
        fontSize: '20px',
        border: 'none',
        borderRadius: '12px',
        color: '#331A42',
        fontWeight: '700',
        cursor: 'pointer',
    },
    '& .mediaContainer' : {
        paddingTop: '193px',
        marginRight: '130px',
    },
    '& .circleMedia' : {
        height: '60px',
        width: '60px',
        color: '#2E3092',
        borderRadius: '50%'
    },
    '& .mediaIcon' : {
        marginTop: '12px'
    },
    '& .numberInfo' : {
        fontSize: '60px',
        fontWeight: '700',
        color: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'
    },
    '& .dcpInfo' : {
        fontSize: '25px'
    },
    '& .generalInfo' : {
        backgroundColor: '#A8A8A8',
        height: '259px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

})