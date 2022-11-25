import { styled } from "@mui/material";
export const Slider = styled('div')({
    fontFamily: 'Montserrat, sans-serif',
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    '& .slider': {
        backgroundColor: '#D2D2D2',
        backgroundImage: `linear-gradient(to right,rgb(25, 26, 75, 1), rgb(25, 26, 75, 0)), url(${HeaderImg})`,
        backgroundSize: 'cover',
        height: '603px',
        color: '#ffffff',
        lineHeight: '55px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    '& .sliderContent': {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        marginLeft: '9vw',
        paddingTop: '130px',
        maxWidth: '31%',
    },
    '& .subtitle': {
        textTransform: 'uppercase',
        fontSize: '20px',
        fontWeight: '400',
        letterSpacing: '7px',
        margin: '0',
    },
})