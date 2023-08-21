

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4c9d4418.js","_app/immutable/chunks/scheduler.6e2fb2d0.js","_app/immutable/chunks/index.724ff9e6.js","_app/immutable/chunks/singletons.30860393.js","_app/immutable/chunks/index.2c1499ec.js"];
export const stylesheets = [];
export const fonts = [];
