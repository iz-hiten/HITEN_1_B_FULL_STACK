const svg = document.getElementById('canvas');
const colorPicker = document.getElementById('colorPicker');
let drawings = [];
let drawing = false;

// When mouse is pressed down → draw a circle
svg.addEventListener('mousedown', (e) => {
  drawing = true;
  drawCircle(e);
});

// While moving mouse → continuously draw circles (optional)
svg.addEventListener('mousemove', (e) => {
  if (drawing) drawCircle(e);
});

// When mouse is released → stop drawing
svg.addEventListener('mouseup', () => {
  drawing = false;
});

// Function to draw a circle dynamically
function drawCircle(e) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', e.offsetX);
  circle.setAttribute('cy', e.offsetY);
  circle.setAttribute('r', '8');
  circle.setAttribute('fill', colorPicker.value);
  svg.appendChild(circle);
  drawings.push(circle);
}

// Undo the last drawn circle
function undo() {
  const last = drawings.pop();
  if (last) svg.removeChild(last);
}

// Clear the entire canvas
function clearCanvas() {
  drawings.forEach(circle => svg.removeChild(circle));
  drawings = [];
}
