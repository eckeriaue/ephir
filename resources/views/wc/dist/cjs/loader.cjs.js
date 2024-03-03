'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c55dc7f7.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["mark-creator_3.cjs",[[1,"mark-creator"],[1,"mark-editor"],[1,"mark-photos",{"images":[32],"getImages":[64],"load":[64]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map