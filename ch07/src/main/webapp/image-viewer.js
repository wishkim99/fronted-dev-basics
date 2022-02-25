var imageViewer = { //객체
	init: function() {
		$(function() {
			$("#btn-change").click(this._changeImage.bind(this));
			$(".image-viewer img").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._slideImage.bind(this));

			// 첫 번째 이미지 선택
			this._changeImage();
		}.bind(this));

	},


	_slideImage: function() {
		console.log(this._check);
		if (this._check) {
			this._check = false;
			startSlide = setInterval(this._changeImage.bind(this), 1000);
			$("#btn-slideshow").text('슬라이드쇼 중지');
		} else {
			this._check = true;
			clearInterval(startSlide);
			$("#btn-slideshow").text('슬라이드쇼 시작')

		}
	},

	_changeImage: function() { //imageViewer안에서만 쓰는 함수
	
		var index = Math.floor(Math.random() * this._images.length);
		$(".image-viewer img").attr({
			alt: this._images[index].name,
			src: 'images/' + this._images[index].file
		});
	},

	_check: true,
	_images: [
		{
			name: "국화",
			file: "Chrysanthemum.jpg"
		},
		{
			name: "사막",
			file: "Desert.jpg"
		},
		{
			name: "수국",
			file: "Hydrangeas.jpg"
		},
		{
			name: "해파리",
			file: "Jellyfish.jpg"
		},
		{
			name: "코알라",
			file: "Koala.jpg"
		},
		{
			name: "등대",
			file: "Lighthouse.jpg"
		},
		{
			name: "펭귄",
			file: "Penguins.jpg"
		},
		{
			name: "툴립",
			file: "Tulips.jpg"
		}
	]
}