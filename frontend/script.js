zoomed = false
bound = map.getBoundingClientRect()
offset = [bound.x, bound.y]
dim = [bound.width, bound.height]

map.addEventListener('click', (e) => {
	zoomed = !zoomed
	pos = [e.x - offset[0] - dim[0] / 4, e.y - offset[1] - dim[1] / 4]
	pos[0] = Math.max(pos[0], 0) * 2
	pos[1] = Math.max(pos[1], 0) * 2
	console.log(pos)

	if(zoomed)
	{
		map.style.backgroundSize = '200% 200%'
		map.style.backgroundPosition = `${-pos[0]}px ${-pos[1]}px`
	}
	else
	{
		map.style.backgroundSize = '100% 100%'
		map.style.backgroundPosition = '0 0'
	}
})
