export class Tooltip {
    constructor() {
    }

    showTooltip(title, message, element) {
        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip-message');
        document.body.appendChild(tooltipElement);

        const tooltipTitle = document.createElement('div');
        tooltipTitle.classList.add('tooltip-title');
        tooltipTitle.textContent = title;
        tooltipElement.appendChild(tooltipTitle);

        const tooltipText = document.createElement('div');
        tooltipText.classList.add('tooltip-text');
        tooltipText.textContent = message;
        tooltipElement.appendChild(tooltipText);

        const { left, height, width, bottom } = element.getBoundingClientRect();
        tooltipElement.style.left = left - (width / 2) + 94 + 'px'; 
        //tooltipElement.style.left = left - (width / 2) + (tooltipElement.offsetWidth / 2) + 'px'; 
        tooltipElement.style.bottom = bottom + height - 10 + 'px';
    }

    removeTooltip() {
        const tooltipToDelete = document.querySelector('.tooltip-message');
        tooltipToDelete.remove();
    }
}

