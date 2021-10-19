
import { createElement } from 'lwc';
<<<<<<< Updated upstream
import MyEventParent from 'my/eventParent';

const app = createElement('my-event-parent', { is: MyEventParent });
=======
import MyApp from 'my/app';

const app = createElement('my-app', { is: MyApp });
>>>>>>> Stashed changes
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
