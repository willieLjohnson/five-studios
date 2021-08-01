// create a new div element
const newDiv = document.createElement('div');
newDiv.id = 'hover-div';

newDiv.style.position = 'absolute';
newDiv.style.backgroundColor = 'var(--blue-4)';
newDiv.style.fontSize = '2em';
newDiv.style.padding = '0.1em';
newDiv.style.display = 'none';

// and give it some content
const newContent = document.createTextNode('OPEN');

// add the text node to the newly created div
newDiv.appendChild(newContent);

document.body.appendChild(newDiv);

const onMouseMove = (e) => {
  newDiv.style.left = e.pageX + 'px';
  newDiv.style.top = e.pageY + 'px';
  if (e.target.id == 'clickable-blog-card') {
    newDiv.style.display = 'block';
  } else {
    newDiv.style.display = 'none';
  }
};
document.addEventListener('mousemove', onMouseMove);
