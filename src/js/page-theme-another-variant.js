const inputCheckboxEl = document.querySelector('#theme-switch-toggle');

const bodyEl = document.querySelector('body');

const STORAGE_KEY = 'theme';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

chooseTheme();

inputCheckboxEl.addEventListener('change', onInputChange);

function chooseTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    if (savedTheme === Theme.DARK) {
      bodyEl.classList.add('dark-theme');
      inputCheckboxEl.checked = true;
    } else if (savedTheme === Theme.LIGHT) {
      bodyEl.classList.add('light-theme');
    }
  }
}

function onInputChange(event) {
  if (event.target.checked) {
    bodyEl.classList.remove('light-theme');

    bodyEl.classList.add('dark-theme');
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    bodyEl.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
}
