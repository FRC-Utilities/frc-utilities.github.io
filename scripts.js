// Object of every element on page
var page = {
	header: document.getElementsByTagName('header')[0],
	article: document.getElementsByTagName('article')[0]
};

// Add video src if on desktop.
// This way if you're on mobile the video's data won't be loaded and potentially burn mobile data.
if (window.innerWidth > 600) {
    document.getElementsByTagName('video')[0].src = 'video.mp4';
}

// This section manages the header changing as you scroll.
window.onscroll = function() {
	scroll = document.body.scrollTop;
	if (scroll >= window.innerHeight * 0.65 && window.innerWidth >= 600) {
		page.header.className = 'small';
		page.header.style.opacity = (scroll - window.innerHeight * 0.65) / 50;
		page.article.style.marginTop = '60vh';
	} else {
		page.header.className = '';
		page.header.style.opacity = 1;
		page.article.style.marginTop = 0;
	}
};
