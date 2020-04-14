const functions = require('../src/functions');

describe('Test Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toEqual(3);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
  });

  test('adds 3 + 2 to equal 5', () => {
    expect(functions.sum(3, 2)).toEqual(5);
  });

  test('should return Ebraim de França Carvalho Filho when call formatName("ebraim-de-frança-carvalho-filho")', () => {
    expect(functions.formatName("ebraim-de-frança-carvalho-filho")).toBe('Ebraim De França Carvalho Filho');
  });

  test('should return correct markup when call createMarkup(arrayObject)', () => {
    expect(functions.createMarkup(functions.projects)).toBe(`<div class="card-project">
        <a href="../intro-component-with-signup-form-master/index.html" target="_blank">
          <h4>2. Intro Component With Signup Form Master</h4>
        </a>
        <p class="card-project__description">This is a challenge to improve my frontend skills! Technical details and more informations, you can access on page: 
          <a href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1" target="_blank">Page of Challenge;</a> 
          Or access the 
          <a href="https://github.com/ebraimcarvalho/frontend-challenges/tree/master/intro-component-with-signup-form-master" target="_blank">Code page - Github</a>
        </p>
      </div>`);
  });
});
