const dynamicChunks = {
 ['components/common-section-block.js']: () => import('./common-section-block.mjs').then(function (n) { return n.c; }),
 ['components/hero-intro.js']: () => import('./hero-intro.mjs').then(function (n) { return n.h; }),
 ['components/hero.js']: () => import('./hero.mjs').then(function (n) { return n.h; }),
 ['components/navigation-navbar.js']: () => import('./navigation-navbar.mjs').then(function (n) { return n.n; }),
 ['components/services.js']: () => import('./services.mjs').then(function (n) { return n.s; }),
 ['pages/index.js']: () => import('./index.mjs').then(function (n) { return n.i; })
};

function dynamicRequire(id) {
  return dynamicChunks[id]();
}

export { dynamicRequire as default };
