{
  const Header = document.getElementById('js-header');
  const HeaderButton = document.getElementById('openbtn');
  const getNav = document.getElementById('g-nav');

  HeaderButton.addEventListener('click', () => {
    HeaderButton.classList.toggle('active');
    getNav.classList.toggle('panelactive');
  })
}
