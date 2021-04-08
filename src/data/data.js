// MEDIA
import artFunderMac from '../media/projects/artFunderMac.png';
import artFunder from '../media/projects/artFunder.png';
import telegram from '../media/projects/telegram.png';
import telegramPhone from '../media/projects/telegramPhone.png';
import tipsease from '../media/projects/tipsease.png';
import tipseaseMac from '../media/projects/tipseaseMac.png';
import socvtv from '../media/projects/socvtv.png';
import socvtvMac from '../media/projects/socvtvMac.png';
import shortener from '../media/projects/shortener.png';
import shortenerMac from '../media/projects/shortenerMac.png';
import bst from '../media/projects/bst.png';
import bstMac from '../media/projects/bstMac.png';
import fx from '../media/projects/fxConverter.png';
import fxMac from '../media/projects/fxConverterMac.png';

export const data = [
    {
        id: 7,
        name: 'Currency Converter',
        description: 'Currency converter for major global currencies.',
        stack: ['React', 'Styled-components'],
        srcMac: fxMac,
        src: fx,
        github: 'https://github.com/petrussola/fx-converter',
        link: 'https://fx-converter.netlify.app/'
    },
    {
        id: 6,
        name: 'Yet Another Binary Search Tree NPM Module',
        description:
            '(Yet another) Binary Search Tree module on NPM. Testing suite with Jest.',
        stack: ['Javascript', 'Node.js', 'Jest'],
        srcMac: bstMac,
        src: bst,
        github: 'https://github.com/petrussola/yabst',
        link: 'https://www.npmjs.com/package/yabst'
    },
    {
        id: 5,
        name: 'Url Shortener App',
        description:
            'A url shortener with signup, login features and administrator profile privilege. I built it end to end.',
        stack: ['React', 'Node.js', 'PostgreSQL', 'Material UI'],
        srcMac: shortenerMac,
        src: shortener,
        github: 'https://github.com/petrussola?tab=projects',
        link: 'https://url-fe-dev.andriy.online/'
    },
    {
        id: 4,
        name: 'SocVTV.fun',
        description:
            'Folks from my hometown are known to be very proud of their origins. This fun quizz tests their knowledge about the town in two levels of difficulty.',
        stack: ['HTML', 'CSS', 'Vanilla JS', 'Nodejs'],
        srcMac: socvtvMac,
        src: socvtv,
        github: 'https://github.com/petrussola/vtv-frontend',
        link: 'https://www.socvtv.fun/'
    },
    {
        id: 1,
        name: 'Art-Funder.com',
        description:
            'Art Funder empowers local art schools, traditionally underfunded, to sell art online worldwide in order to raise much needed funds.',
        stack: [
            'React',
            'Redux',
            'Nodejs',
            'Express',
            'MongoDB',
            'Styled-components',
            'HTML',
            'CSS',
            'Heroku'
        ],
        srcMac: artFunderMac,
        src: artFunder,
        github: 'https://github.com/LABS-EU3?q=art-collection&type=&language=',
        link: 'https://art-funder.com/'
    },
    {
        id: 2,
        name: 'COVID-19 Telegram Bot',
        description:
            'Do you want to quickly check the official COVID-19 for a given country? Just type the ISO country code and you will get it instantly. NEW: returns graph so you can check the trend in your country. For those of you who, like me, struggle to find accurate data in few clicks and mobile phone friendly.',
        stack: [
            'Nodejs',
            'Express',
            'Telegram API',
            'Heroku',
            'AWS',
            'Highcharts'
        ],
        srcMac: telegramPhone,
        src: telegram,
        github: 'https://github.com/petrussola/covid-country-data-telegram-bot',
        link: 'https://art-funder.com/'
    },
    {
        id: 3,
        name: 'Tipsease',
        description:
            'Tipsease is an app that allows you t tip service workers, so you do not have to rely on cash. Built 100% of the frontend.',
        stack: ['React', 'Redux', 'styled-components', 'HTML', 'CSS'],
        srcMac: tipseaseMac,
        src: tipsease,
        github: 'https://github.com/tipsease-webeu/tipsease-frontend',
        link: 'https://tipsease.peresolaclaver.now.sh/'
    }
];

export const skills = {
    Frontend: [
        'React',
        'Redux',
        'Javascript',
        'HTML',
        'CSS',
        'Styled-Components',
        'LESS',
        'Jest',
        'Netlify',
        'Zeit',
        'Stripe',
        'AWS'
    ],
    Backend: [
        'Nodejs',
        'Express',
        'Python',
        'PostgreSQL',
        'MongoDB',
        'SQL',
        'RESTful APIs',
        'JWT',
        'Travis-CI',
        'Continuous Integration',
        'Heroku',
        'Stripe',
        'AWS'
    ],
    'Version Control': ['Git', 'GitHub']
};

// export default data;
