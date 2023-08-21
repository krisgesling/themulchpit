export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/carousel/2.jpg","images/carousel/3.jpg","images/carousel/4.jpg","images/carousel/5.jpg","images/flowbite-svelte-icon-logo.svg","images/uca-logo.png","images/uca-logo_no-bg.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.9050d5fc.js","app":"_app/immutable/entry/app.c2a870ce.js","imports":["_app/immutable/entry/start.9050d5fc.js","_app/immutable/chunks/scheduler.6e2fb2d0.js","_app/immutable/chunks/singletons.30860393.js","_app/immutable/chunks/index.2c1499ec.js","_app/immutable/entry/app.c2a870ce.js","_app/immutable/chunks/scheduler.6e2fb2d0.js","_app/immutable/chunks/index.724ff9e6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/imageData",
				pattern: /^\/imageData\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/imageData/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
