const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#FACFFB';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


function myFunction() {
	var visible = document.getElementById("faq-answers1").style.display;
	if (visible == "none") 
	{
		document.getElementById("faq-answers1").style.display = "block";
		document.getElementById("faq-hidden").style.display = "block";
		document.getElementById("faq-visible").style.display = "none";
	}
	else 
	{
		document.getElementById("faq-answers1").style.display = "none";
		document.getElementById("faq-hidden").style.display = "none";
		document.getElementById("faq-visible").style.display = "block";
	}

}

function myFunction2() {
	var visible = document.getElementById("faq-answers2").style.display;
	if (visible == "none") 
	{
		document.getElementById("faq-answers2").style.display = "block";
		document.getElementById("faq-hidden2").style.display = "block";
		document.getElementById("faq-visible2").style.display = "none";
	}
	else 
	{
		document.getElementById("faq-answers2").style.display = "none";
		document.getElementById("faq-hidden2").style.display = "none";
		document.getElementById("faq-visible2").style.display = "block";
	}

}

function myFunction3() {
	var visible = document.getElementById("faq-answers3").style.display;
	if (visible == "none") 
	{
		document.getElementById("faq-answers3").style.display = "block";
		document.getElementById("faq-hidden3").style.display = "block";
		document.getElementById("faq-visible3").style.display = "none";
	}
	else 
	{
		document.getElementById("faq-answers3").style.display = "none";
		document.getElementById("faq-hidden3").style.display = "none";
		document.getElementById("faq-visible3").style.display = "block";
	}

}

function myFunction4() {
	var visible = document.getElementById("faq-answers4").style.display;
	if (visible == "none") 
	{
		document.getElementById("faq-answers4").style.display = "block";
		document.getElementById("faq-hidden4").style.display = "block";
		document.getElementById("faq-visible4").style.display = "none";
	}
	else 
	{
		document.getElementById("faq-answers4").style.display = "none";
		document.getElementById("faq-hidden4").style.display = "none";
		document.getElementById("faq-visible4").style.display = "block";
	}

}

function myFunction5() {
	var visible = document.getElementById("faq-answers5").style.display;
	if (visible == "none") 
	{
		document.getElementById("faq-answers5").style.display = "block";
		document.getElementById("faq-hidden5").style.display = "block";
		document.getElementById("faq-visible5").style.display = "none";
	}
	else 
	{
		document.getElementById("faq-answers5").style.display = "none";
		document.getElementById("faq-hidden5").style.display = "none";
		document.getElementById("faq-visible5").style.display = "block";
	}

}

function myFunction6() {
	var visible = document.getElementById("faq-answers6").style.display;
	if (visible == "none") 
	{
		document.getElementById("faq-answers6").style.display = "block";
		document.getElementById("faq-hidden6").style.display = "block";
		document.getElementById("faq-visible6").style.display = "none";
	}
	else 
	{
		document.getElementById("faq-answers6").style.display = "none";
		document.getElementById("faq-hidden6").style.display = "none";
		document.getElementById("faq-visible6").style.display = "block";
	}

}