'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c55dc7f7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.12.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('wc-ephir.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mark-creator_3.cjs",[[1,"mark-creator"],[1,"mark-editor"],[1,"mark-photos",{"images":[32],"getImages":[64],"load":[64]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=wc-ephir.cjs.js.map