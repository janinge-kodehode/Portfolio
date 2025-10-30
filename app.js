const switchInput = document.getElementById('theme-switch');
const body = document.body;
switchInput.addEventListener('change', () => {
  body.dataset.theme = switchInput.checked ? 'dark' : 'light';
});
