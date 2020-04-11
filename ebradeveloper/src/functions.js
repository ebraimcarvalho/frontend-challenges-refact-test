const functions = {
  projects: [
    {
      name: 'intro-component-with-signup-form-master',
      linkChallenge: 'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1'
    }
  ],
  markup: '',
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  formatName: function formatName(name) {
    return name
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  },
  createMarkup: function createMarkup() {
    this.projects.forEach(({ name, linkChallenge }, i) => {
      this.markup += `<div class="card-project">
        <a href="../${name}/index.html" target="_blank">
          <h4>${i + 2}. ${this.formatName(name)}</h4>
        </a>
        <p class="card-project__description">This is a challenge to improve my frontend skills! Technical details and more informations, you can access on page: 
          <a href="${linkChallenge}" target="_blank">Page of Challenge;</a> 
          Or access the 
          <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/${name}" target="_blank">Code page - Github</a>
        </p>
      </div>`;
    });
    return this.markup;
  }
}

module.exports = functions