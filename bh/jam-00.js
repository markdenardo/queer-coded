//queer-coded bh jam-00.js
s0.initImage("https://raw.githubusercontent.com/markdenardo/queer-coded/main/bh/bh(0)_0.png")
s1.initVideo("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGE1ZjI3MjVhYjlhN2IyNjQ3ZDI5MDZjM2U3NDhlYWNkNDgzZWY3YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/fdd85RxytnbqU58hwP/giphy.mp4")
const pi = () => Math.PI
const f = () => a.fft[0]
src(s0)
	.blend(s1)
	.out(o0)
src(s1)
	.scale(pi, time)
	.pixelate(100, 100)
	.blend(solid(-10, -1, 0), 0.1)
	.mask(src(s0)
		.add(s1))
	.out(o1)
render()
