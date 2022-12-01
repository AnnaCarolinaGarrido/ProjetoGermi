import { styled } from "@mui/material";
import Box from "@mui/material"
import HeaderImg from './Assets/HeaderImg.svg'
import WavyBackground from './Assets/WavyBackground.svg';

export const MainDiv = styled('div')({
    fontFamily: 'Montserrat, sans-serif',
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    backgroundColor: 'white',
    '& .slider': {
        backgroundColor: '#D2D2D2',
        backgroundImage: `linear-gradient(to right,rgb(25, 26, 75, 1), rgb(25, 26, 75, 0)), url(${HeaderImg})`,
        backgroundSize: 'cover',
        height: '603px',
        color: '#ffffff',
        marginBottom: '20px',
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
        lineHeight: '25px',
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
        margin: '0 8vw 0 8vw',
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
        fontWeight: '500',
        lineHeight: '25px',
        fontSize: '16px',
        width: '100%',
        marginBottom: '40px',
        textAlign: 'left'
    },
    '& .paget2': {
        color: 'white',
        width: '502px',
        marginTop: '25px',
        lineHeight: '25px',
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
        width: '16.5vw',
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
        fontSize: '16px',
        height: '241px',
        lineHeight: '25px',
        fontWeight: '500',
        color: '#323232'
    },
    '& .cltImg': {
        zIndex: '0',
        borderRadius: '8px',
        width: '585px',
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
        margin: 0,
        height: '451.1px',
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
        marginTop: '-17vh',
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
        width: '250px',
        justifyContent: 'space-around',
        marginRight: 'auto'
    },
    '& .mediaIcon': {
        width: '34.53px',
        height: '34.53px',
        marginTop: '15.5px'
    },
    '& .mediaIconExt': {
        width: '44.53px',
        height: '39.53px',
        marginTop: '13.5px'
    },
    '& .companiesCnt': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& .companyLogo' : {
            width: '95px',
            height: '95px'
        }
    },
    '& .companiesExt': {
        width: '140px',
    },
    '& .companiesRest': {
        width: '58px',
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
    '& .contatoCtn': {
        width: '350px',
        height: '110px',
        borderRadius: '8px',
        marginBottom: '35px',
        display: 'flex',
        backgroundColor: '#F2F2F2',
        flexDirection: 'column'
    },
    '& .cttTitle': {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1C1D52',
        height: '10px'
    },
    '& .cttText': {
        fontSize: '18px',
        fontWeight: '500',
        color: '#1C1D52'
    },
    '& .cntCtt': {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 auto',
        marginTop: '0px',
    },   
    '& .contacts': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    '& .circle': {
        backgroundColor: '#1C1D52',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '-30px',
        zIndex: 1
    },
    '& .iconCtt': {
        marginTop: '8px'
    },
    '& .contato': {
        backgroundColor: 'white',
        width: '255px',
        height: '35px',
        borderRadius: '0 8px 8px 0',
        zIndex: 0,
        fontWeight: '600',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13px',
        boxShadow: '0.10rem 0.10rem 0.15rem rgba(0, 0, 0, 0.15)',
        marginLeft: '20px',
        marginTop: '10px',
        color: '#1C1D52'
    },
    '& .lineWhite': {
        backgroundColor: 'white',
        height: '2px',
        width: '95vw',
        marginTop: '260px',
        marginLeft: '1.75vw'
    },
    '& .slick-dots li button:before': {
        color: 'red'
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
                lineHeight: '25px',
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
            maxHeight: '220px',
            maxWidth: '95%',
            backgroundColor: '#fff',

            '& .donationButtonContainer': {
                display: 'flex',
                justifySelf: 'center',
                justifyContent: 'space-evenly',
                alingSelf: 'center',
                flexDirection: 'column',
                padding: '40px 0 40px 40px',

                '& .donationText': {
                    width: '240px',
                    margin: '0 0 10px 0',
                    font: ' 700 20px Montserrat, sans-serif',
                    color: '#1C1D52',
                },

                '& .btnDonationActive' : {
                    font: ' 700 16px Montserrat, sans-serif',
                    backgroundColor: '#26276D',
                    height: '40px',
                    margin: '5px 0'
                },
                '& .btnDonationDisabled' : {
                    font: ' 700 16px Montserrat, sans-serif',
                    color: '#26276D',
                    backgroundColor: '#fff',
                    height: '40px',
                    margin: '5px 0'
                }
            },

            '& .donationQRcodeScene' : {
                display: 'inline-block',
                perspective: '600px',
            },

            '& .flipQrCode' : {
                position: 'relative',
                transformStyle: 'preserve-3d',
                transformOrigin: 'center right',
                transition: 'transform 1s',
            },

            '& .flipQrCode.is-flipped':{
                transform: 'translateX(-100%) rotateY(-180deg)',
            },

            '& .qrCodeImg__face': {
                position: 'relative',
                width: '150px',
                height: '150px',
                left: '40px',
                top: '35px',
                backfaceVisibility: 'hidden',
            },

            '& .qrCodeImg__face--back': {
                position: 'relative',
                width: '150px',
                height: '150px',
                left: '-40px',
                top: '-115px',
                transform: 'rotateY(180deg)',
            }, 
        }
    }
})