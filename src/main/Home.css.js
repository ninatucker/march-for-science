import heroImage from '../assets/img/protest.jpg';

export default {
    body: {
        fontFamily: 'Raleway, sans-serif',
        textAlign: 'center'
    },

    logo: {
        height: '100px'
    },

    header: {
        backgroundColor: '#00507F',
        height: '100px',
        padding: '20px',
        color: 'white',
        fontFamily: 'Raleway, sans-serif'
    },

    hero: {
        height: '300px',
        backgroundImage: 'url(' + heroImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },

    heroOverlay: {
        height: '300px',
        backgroundColor: 'rgba(50, 50, 50, 0.50)'
    },

    heroText: {
        fontFamily: 'Raleway, sans-serif',
        margin: '0',
        paddingTop: '100px',
        color: '#FFFFFF',
        fontSize: 'xx-large'
    },
}