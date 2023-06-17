// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// a fractal explorer using rotations
// ritchse aka geisha

await import("https://hydra-extensions.glitch.me/hydra-nowrap.js")
await import("https://hydra-extensions.glitch.me/hydra-outputs.js")
await import("https://hydra-extensions.glitch.me/hydra-canvas.js")
await import("https://hydra-extensions.glitch.me/hydra-mouse.js")
await import("https://cdn.statically.io/gl/metagrowing/extra-shaders-for-hydra/main/lib/lib-noise.js")

setResolution(1440, 1440)
oS.setNearest()
oS.setClamp()
canvas.setRelativeSize(1)
canvas.setLinear()
canvas.setAlign('center')

setFunction({
	name: 'triangle',
	type: 'src',
	inputs: [],
	glsl: `
    	float l = abs(0.5-_st.x);
        float c = l <= (_st.y*0.5) ? 1.0 : 0.0;
        c *= _st.y <= 1.0 ? 1.0 : 0.0; // feisimo esto
        return vec4(c);
    `
})

const pi = () => Math.random(Math.PI)
const t = () => time
const f = () => a.fft[0]
const BRANCHES = 6
const MASK = shape(3, .9, 0) // an inverted triangle
//
input = () => src(o0)
	.mask(MASK)
dist = () => mouse.cposy
scale = () => 0.5 - (mouse.cposx / 2)
feedback = () => input()
	.scale(scale, 1, 1, .5, 0)
	.scrollY(dist)
feedbacks = (n = 3) => {
	tex = solid(0, 0, 0, 0)
	for (a = 0; a <= Math.PI * 2; a += Math.PI * 2 / n)
		tex.layer(feedback()
			.rotate(a))
	return tex;
}
//
feedbacks(BRANCHES)
	.luma(.03, .1)
	.add(colornoise(1, .2), .2)
	.hue(.1)
	.color(.92, .99, 1.01)
	.mult(gradient(), .1)
	.saturate(1.4)
	.blend(o0, .5)
	// uncomment for the DROP 🌊
	// 	.scale(pi)
	// 	.mask(solid(1, 1, 2)
	// 		.color(1, 0, 10)
	// 		.modulate(o0))
	.out(o0)
render(o0)

//ideon
// by MDN @markdenardo

// s1.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmZkNmFmMWJlZTM1NjVmODc5NjhlMGIxMGI3N2NhMjQ0NmRmNTc2NyZjdD1n/DkleR7V8RMtrim0cH5/giphy.mp4")
// s2.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzEyZDUyODk0YWYwYzc2ZjExZDQ1ZjQ5OGM5MjAzODFmZGI0MThmYiZjdD1n/fvCoIEB8YtKghURZcA/giphy.mp4")
// src(s1)
// 	.pixelate(100, 100)
// 	.add(s1, f)
// 	.add(s2, f)
// 	.out(o1)
// render(o1)
