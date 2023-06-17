//welcome to queer coded 🏳️‍⚧️ 🌈 💕
//we're MDN (they/them)
//we're going to try and livecode some hydra from nothing. :)_
const pi = () => Math.random(Math.PI)
const t = () => time
const f = () => a.fft[0]
//const osc1 = () => (osc(1, 1, 1))
shape()
	//.rotate(t, 1)
	.scale(pi)
	.pixelate()
	.repeat(t, t)
	// 	.kaleid(pi, f)
	//.modulate(o0,f)
	//.modulate(o0, t)
	//.rotate(t, f)
	.modulateScrollY(osc(1, 1, 1))
	.out(o0)
render(o0)

//uncomment after lc set to finish
const arr = []
for(i=0;i<10;i++){arr.push(i)}
const oscFunc = (o) => (osc(arr.smooth()).kaleid(arr)
  .scale(0.1,1)
  .repeat(()=>time,1)
  .add(noise(arr.smooth())
  .rotate(()=>time,0.1)).out(o))
const flt=(i,o,m)=>(src(i).modulatePixelate(m).out(o))
const flt1=(i,o,m)=>(src(i).modulate(m).kaleid().out(o))

oscFunc(o0)
flt(o0,o1,o1)
flt(o1,o2,o0)
flt1(o0,o3,o2)
render(o3)
