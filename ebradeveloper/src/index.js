import { projects } from './utils/projects';
import '../src/styles/style.css'

const container = document.querySelector('[data-js="container"]');

projects.forEach(({ name, linkChallenge }, i) => {
  const markup = `
  <div class="card-project">
    <a href="../${name}/index.html" target="_blank">
      <h4>${i + 2}. ${formatName(name)}</h4>
    </a>
    <p class="card-project__description">This is a challenge to improve my frontend skills! Technical details and more informations, you can access on page: 
      <a href="${linkChallenge}" target="_blank">Page of Challenge;</a> 
      Or access the 
      <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/${name}" target="_blank">Code page - Github</a>
    </p>
  </div>
  `;
  container.innerHTML += markup;
});

function formatName(name) {
  return name
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}