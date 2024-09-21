let exp = 0;

addEventListener('change', e => {
  let _t = e.target;

  if (exp = 1 * _t.checked) _t.setAttribute('aria-expanded', true);
  _t.parentNode.style.setProperty('--exp', exp);
});

addEventListener('transitionend', e => {
  let _t = e.target;

  if (_t.tagName.toLowerCase() === 'nav' && !exp) {
    _t.parentNode.firstElementChild.setAttribute('aria-expanded', false);
  }
});