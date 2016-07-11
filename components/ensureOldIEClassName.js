if (global.document) {
  let classes = '';

  const div = document.createElement('div');
  div.innerHTML = '<!--[if IE 8]>8<![endif]--><!--[if IE 9]>9<![endif]-->';
  const ieVerison = parseInt(div.innerHTML, 10);
  if (ieVerison) {
    classes += ' rt-ie' + ieVerison;
  }

  const ua = global.navigator.userAgent;
  const isIE = ieVerison || ua.includes('MSIE ') || ua.includes('Trident/');
  if (isIE) {
    classes += ' rt-ie-any';
  }

  if (classes) {
    document.documentElement.className += classes;
  }
}
