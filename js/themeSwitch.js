const uncheckTheme = function () {
  const themeInputs = document.querySelectorAll('input');
  themeInputs.forEach(input => input.removeAttribute('checked'));
};

export const setTheme = function (theme) {
  uncheckTheme();

  document.body.className = theme;
};

export const toggleThumb = function (id) {
  const inputsContainer = document.querySelector('.color-theme');
  inputsContainer.className = 'color-theme';
  inputsContainer.classList.add(id);
};

const setPreference = function (input) {
  input.setAttribute('checked', '');

  toggleThumb(input.id);

  setTheme(input.value);
};

export const initTheme = function () {
  const darkInput = document.getElementById('dark');
  const lightInput = document.getElementById('light');

  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  uncheckTheme();

  if (prefersDark) setPreference(darkInput);
  else setPreference(lightInput);
};
