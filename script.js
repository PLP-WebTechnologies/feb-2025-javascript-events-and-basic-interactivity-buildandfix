

const clickBtn = document.getElementById('clickBtn');
const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

// Click event for button
clickBtn.addEventListener('click', () => {
    output.textContent = 'Button was clicked!';
});

// Input event for text field
inputField.addEventListener('input', (event) => {
    const text = event.target.value;
    output.textContent = text ? `You typed: ${text}` : 'Waiting for interaction...';
});

// Mouseover event for button
clickBtn.addEventListener('mouseover', () => {
    clickBtn.style.backgroundColor = '#ff9800';
});

// Mouseout event for button
clickBtn.addEventListener('mouseout', () => {
    clickBtn.style.backgroundColor = '#4CAF50';
});