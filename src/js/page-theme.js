const inputCheckboxEl = document.querySelector('#theme-switch-toggle');

const bodyEl = document.querySelector('body');
bodyEl.classList.add('light-theme');

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
      bodyEl.classList.replace('light-theme', 'dark-theme');
      inputCheckboxEl.checked = true;
    }
  }
}

function onInputChange(event) {
  if (event.target.checked) {
    bodyEl.classList.replace('light-theme', 'dark-theme');
    localStorage.setItem(STORAGE_KEY, Theme.DARK);
  } else {
    bodyEl.classList.replace('dark-theme', 'light-theme');
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
}
