const hoverTarget = document.querySelector('.hover-target');
const hoverText = document.querySelector('.hover-text');

hoverTarget.addEventListener('mousemove', (event) => {
  // Get cursor position relative to the document
  const x = event.clientX;
  const y = event.clientY;

  // Set the position of the hover text
  hoverText.style.left = `${x + 10}px`; // Adjust offset as needed
  hoverText.style.top = `${y + 10}px`;  // Adjust offset as needed
  hoverText.textContent = "This is hover text!"; // Customize text
});