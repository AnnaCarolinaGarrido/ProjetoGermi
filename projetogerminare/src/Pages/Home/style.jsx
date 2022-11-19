import { styled } from "@mui/material";
import Box from "@mui/material"
import HeaderImg from './Assets/HeaderImg.svg'
export const MainDiv = styled('div')({
    fontFamily: 'Montserrat, sans-serif',
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
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
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        marginLeft: '9vw',
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
        marginTop: '43px',
        padding: '0 10px',
        textTransform: 'uppercase',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        fontSize: '20px',
        border: 'none',
        borderRadius: '12px',
        color: '#331A42',
        fontWeight: '700',
        cursor: 'pointer',
    },
    '& .numberInfo' : {
        fontSize: '60px',
        marginBottom: '10px',
        fontWeight: '700',
    },
    '& .infoContainer' : {
        display: 'flex',
        flesDirection: 'row',
        marginBottom: '20px',
        height: '75px'
    },
    '& .plusIcon' : {
        fontSize: '60px',
        fontFamily: 'Varela Round, sans-serif'
    },
    '& .generalInfo' : {
        background: '-webkit-linear-gradient(#4446B6, #191A4B)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundColor: '#A8A8A8',
        height: '259px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },  
    '& .dcpInfo' : {
        fontSize: '25px',
        fontWeight: '700'
    },
    '& .line' : {
        width: '400px',
        height: '3px',
        backgroundColor: '#CFCFCF',
        margin: '0 auto',
    },
    '& .content' : {
        margin: '0 9vw 0 9vw',
    },
    '& .pageTitle' : {
        marginTop: '61px',
        width: 'fit-content',
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#1C1D52'
    },
    '& .pageText' : {
        color: '#323232',
        fontWeight: '600',
        fontSize: '18px',
        width: '100%',
        marginBottom: '40px',
        textAlign: 'left'
    },
    '& .contentIcon' : {
        width: '48px',
        height: '48px',
    },
    '& .card' : {
        backgroundColor: '#191A4B',
        color: '#ffffff',
        fontWeight: '500',
        borderRadius: '8px',
        width: '16vw',
        height: '190px',
        textAlign: 'left',
        padding: '25px'
    },
    '& .cardContainer' : {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    '& .cardText' : {
        fontWeight: '300',
        fontSize: '14px',
        marginTop: '8px'
    },
    '& .cardTitle' : {
        fontSize: '18px',
        margin: '10px 0'
    },
})