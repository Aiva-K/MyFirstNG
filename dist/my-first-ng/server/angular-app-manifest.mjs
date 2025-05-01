
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 918, hash: '33be7e9228205cc591715a4bc27a30ae1e44fedc8c0267eebe93fa81f680b22d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1431, hash: '15a115dfd00ddb8edc06d046a3e5db36f0d420b0b3498198f00fa6bfccb515e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
