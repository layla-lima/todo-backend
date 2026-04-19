
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 602, hash: 'd2b7ac881869098b653915e162c32ef8fddbc4627794a1bb465895897525b799', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '69a30b858c13424254bba86574a9a46b648fccf0e5d774014ce0dd7055fd9aac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2884, hash: '82e13ecfc5690f0c41ef3cd58b9fa0c26a9efea570229e2297c6d51cc2eef1bf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZLRHFWXW.css': {size: 648, hash: 'MU9y+2UZ7ig', text: () => import('./assets-chunks/styles-ZLRHFWXW_css.mjs').then(m => m.default)}
  },
};
