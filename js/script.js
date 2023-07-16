$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.slider2').slick({
		arrows:true,
		dots:true,
		slidesToShow:5,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

const text = document.querySelector(".rotating-text");
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

const element = document.querySelectorAll('span');
for (let i = 0; i<element.length; i++) {
    element[i].style.transform = "rotate("+i*16+"deg)"
};

const inputElement = document.getElementById('user');
inputElement.addEventListener('input', function() {
  if (this.value) {
    this.style.color = '#000'; 
  } else {
    this.style.color = '';
  }
});
inputElement.addEventListener('focus', function() {
	this.removeAttribute('placeholder');
});
inputElement.addEventListener('blur', function() {
if (!this.value) {
	this.setAttribute('placeholder', 'Name');
}
});

const inputElement2 = document.getElementById('phone');
inputElement2.addEventListener('input', function() {
  if (this.value) {
    this.style.color = '#000'; 
  } else {
    this.style.color = ''; 
  }
});
inputElement2.addEventListener('focus', function() {
	this.removeAttribute('placeholder');
});
inputElement2.addEventListener('blur', function() {
if (!this.value) {
	this.setAttribute('placeholder', 'Phone number');
}
});


const inputElement3 = document.getElementById('message');
inputElement3.addEventListener('input', function() {
  if (this.value) {
    this.style.color = '#000'; 
  } else {
    this.style.color = ''; 
  }
});
inputElement3.addEventListener('focus', function() {
	this.removeAttribute('placeholder');
});
inputElement3.addEventListener('blur', function() {
if (!this.value) {
	this.setAttribute('placeholder', 'Question');
}
});

const textContainer = document.querySelector('.text');
const toggle = document.querySelector('.toggle');

textContainer.addEventListener('mouseenter', () => {
  toggle.style.background = '#F2473C';
});

textContainer.addEventListener('mouseleave', () => {
  toggle.style.background = '#D4433A';
});
