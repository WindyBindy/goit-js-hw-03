const imageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.src = entry.target.dataset.src

			// entry.target.src = entry.target.datasrc.src

			observer.unobserve(entry.target)
		}
	})
}, {})
const img = document.querySelectorAll('img')
img.forEach(element => imageObserver.observe(element))
