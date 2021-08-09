import router from './routes';
import {getContent} from './actions';

window.addEventListener('load', () => {
    router();
    getContent();
});


window.addEventListener('hashchange', () => {
    console.log(12312312312312);
    router();
    getContent();
});
