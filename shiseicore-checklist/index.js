
const btn = document.querySelector('.takeImageBtn');


btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.master_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.pdp_creation_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.seo_requests_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.highlights_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.promotion_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.shiseido_pdp_creation_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})

btn.addEventListener('click', () => {
	html2canvas(document.querySelector('.general_pages_checklist_div'))
	.then(canvas => {
		const url = canvas.toDataURL('image/png');
		const a = document.createElement('a');
		a.setAttribute('download', 'Checklist.png');
		a.setAttribute('href',url);
		a.click();
	})
})





