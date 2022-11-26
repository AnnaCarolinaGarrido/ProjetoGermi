import { styled } from "@mui/material";
import Box from "@mui/material"
import HeaderImg from './Assets/HeaderImg.svg'
import WavyBackground from './Assets/WavyBackground.svg';

export const MainDiv = styled('div')({
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
    '& .maintitle': {
        marginTop: '26.6px',
        fontSize: '55px',
        marginBottom: '0',
        lineHeight: '58px',
    },
    '& .description': {
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: '400',
        marginBottom: '0px',
    },
    '& .btnWhite': {
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
    '& .numberInfo': {
        fontSize: '60px',
        marginBottom: '10px',
        fontWeight: '700',
    },
    '& .infoContainer': {
        display: 'flex',
        flesDirection: 'row',
        marginBottom: '20px',
        height: '75px'
    },
    '& .plusIcon': {
        fontSize: '60px',
        fontFamily: 'Varela Round, sans-serif'
    },
    '& .generalInfo': {
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
    '& .dcpInfo': {
        fontSize: '25px',
        fontWeight: '700'
    },
    '& .line': {
        width: '400px',
        height: '3px',
        backgroundColor: '#CFCFCF',
        margin: '0 auto',
    },
    '& .content': {
        margin: '0 9vw 0 9vw',
    },
    '& .pageTitle': {
        marginTop: '61px',
        width: 'fit-content',
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#1C1D52'
    },
    '& .pagep': {
        margin: '0',
        fontSize: '18px'
    },
    '& .pagep2': {
        color: 'white',
    },
    '& .pageText': {
        color: '#323232',
        fontWeight: '600',
        fontSize: '16px',
        width: '100%',
        marginBottom: '40px',
        textAlign: 'left'
    },
    '& .paget2': {
        color: 'white',
        width: '502px',
        marginTop: '25px',
        lineHeight: '21px',
        fontSize: '18px'
    },
    '& .contentIcon': {
        width: '48px',
        height: '48px',
    },
    '& .card': {
        backgroundColor: '#191A4B',
        color: '#ffffff',
        fontWeight: '500',
        borderRadius: '8px',
        width: '16vw',
        height: '190px',
        textAlign: 'left',
        padding: '25px'
    },
    '& .cardContainer': {
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '40px',
    },
    '& .cardText': {
        fontWeight: '300',
        fontSize: '14px',
        marginTop: '8px'
    },
    '& .cardTitle': {
        fontSize: '18px',
        margin: '10px 0'
    },
    '& .cultureText': {
        maxWidth: '490px',
        textAlign: 'left',
        fontSize: '17px',
        height: '241px',
        fontWeight: '600',
        color: '#323232'
    },
    '& .cltImg': {
        zIndex: '0',
        borderRadius: '8px',
        width: '539px',
        height: 'fit-content',
        marginTop: '-40px'
    },
    '& .cultureCircle': {
        width: '301px',
        height: '301px',
        background: '#191A4B',
        borderRadius: '50%',
        zIndex: '1'
    },
    '& .cultureCnt': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '38px',
    },
    '& .videoCnt': {
        backgroundImage: `url(${WavyBackground})`,
        height: '100vh',
        margin: 0,
        height: '603px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginTop: '200px',
        display: 'flex',
        flexDirection: 'column'
    },
    '& .videoContent': {
        height: '100%',
        width: '82vw',
        marginTop: '-75px',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row'
    },
    '& .ytvideo': {
        borderRadius: '8px',
        minWidth: '580px'
    },
    '& .retroText': {
        marginLeft: '80px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '276px',
    },
    '& .mediaCircle': {
        width: '65px',
        height: '65px',
        borderRadius: '50%',
        backgroundColor: 'white',
    },
    '& .mediaCnt': {
        display: 'flex',
        flexDirection: 'row',
        width: '230px',
        justifyContent: 'space-around',
        marginRight: 'auto'
    },
    '& .mediaIcon': {
        width: '42px',
        height: '32px',
        marginTop: '17.5px'
    },
    '& .companiesCnt': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '280px'
    },
    '& .companyLogo': {
        width: '95px',
        height: '95px'
    },
    '& .logoCnt': {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '45px'
    },
    '& .rowLogo': {
        width: '580px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    '& .highlightedInfo': {
        display: 'flex',
        justifySelf: 'center',
        alingSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: '350px',
        margin: '110px auto',
        borderRadius: '8px',
        width: '1184px',
        height: '350px',
        maxWidth: '95%',
        height: 'auto',
        padding: '40px',
        backgroundImage: 'linear-gradient(to right, #191A4B, #4446B6)',

        '& .highlightedInfoText': {
            height: 'auto',

            'h1': {
                font: '700 22px Montserrat, sans-serif',
                textAlign: 'left',
                color: 'white',
                width: '500px',
            },

            'p': {
                font: '500 18px Montserrat, sans-serif',
                marginTop: '30px',
                wordWrap: 'break-word',
                height: 'auto',
                color: 'white',
                width: '95%',
                maxWidth: '550px',
                lineHeight: '21px',
                textAlign: 'left'
            }
        },

        '& .donationComponent': {
            display: 'flex',
            justifySelf: 'center',
            alingSelf: 'center',
            flexDirection: 'row',
            borderRadius: '8px',
            width: '400px',
            maxHeight: '200px',
            maxWidth: '95%',
            backgroundColor: '#fff',

            '& .donationButtonContainer': {
                display: 'flex',
                justifySelf: 'center',
                alingSelf: 'center',
                flexDirection: 'column',

                '& .donationText': {
                    width: '240px',
                    font: ' 700 20px Montserrat, sans-serif',
                    color: '#1C1D52',
                },
            },
            'img': {
                position: 'relative',
                width: '150px',
                height: '150px',
                left: '80px',
                top: '29px',
            }
        }
    }
})