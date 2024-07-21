import './style.css';
import { button } from './js/button';
import { Tooltip } from './js/tooltip';

const tooltip = new Tooltip();

let activeTooltip = false;

button.addEventListener('click', () => {
    if (!activeTooltip) {
        tooltip.showTooltip(button.title, button.dataset.content, button);
        activeTooltip = true;
     } else {
       tooltip.removeTooltip();
       activeTooltip = false;
    }
});





