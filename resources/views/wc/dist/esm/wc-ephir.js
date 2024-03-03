import { p as promiseResolve, b as bootstrapLazy } from './index-c81f2062.js';
export { s as setNonce } from './index-c81f2062.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.12.4 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["mark-creator_3",[[1,"mark-creator"],[1,"mark-editor"],[1,"mark-photos",{"images":[32],"getImages":[64],"load":[64]}]]]], options);
});

//# sourceMappingURL=wc-ephir.js.map