import './styles.css';

function component() {
  const element = document.querySelector('h1');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());