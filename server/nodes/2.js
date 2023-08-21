

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.af31bd40.js","_app/immutable/chunks/scheduler.6e2fb2d0.js","_app/immutable/chunks/index.724ff9e6.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.06e2aad0.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
