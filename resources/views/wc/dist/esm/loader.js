import { b as bootstrapLazy } from './index-c81f2062.js';
export { s as setNonce } from './index-c81f2062.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["mark-creator_3",[[1,"mark-creator"],[1,"mark-editor"],[1,"mark-photos",{"images":[32],"getImages":[64],"load":[64]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map