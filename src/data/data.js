// MEDIA
import artFunderMac from '../media/projects/artFunderMac.png';
import artFunder from '../media/projects/artFunder.png';
import telegram from '../media/projects/telegram.png';
import telegramPhone from '../media/projects/telegramPhone.png';
import tipsease from '../media/projects/tipsease.png';
import tipseaseMac from '../media/projects/tipseaseMac.png';

export const data = [
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
        'Javacsript',
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
