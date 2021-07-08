// Navigation dropdown hover
'use strict';

const navbar = document.querySelector('.navbar');
const section1 = document.querySelector('.section-1');

// section1.addEventListener('mouseover', ev => {
// 	const drop = ev.target.closest('.dropdown-hover');
// 	if (!drop) return;
// 	drop.lastElementChild.style.cssText = `opacity: 1; visibility: visible;`;
// });

// section1.addEventListener('mouseout', ev => {
// 	const out = ev.target.closest('.dropdown-hover');
// 	if (!out) return;
// 	out.lastElementChild.style.cssText = `opacity: 0; visibility: hidden`;
// });

// pages
const loginPage = document.querySelector('.login-page');
const frontPage = document.querySelector('.front-page');
const signupPage = document.querySelector('.signup-page');

const allLogo = document.querySelectorAll('.logo');
const allSignup = document.querySelectorAll('.signup');
const allLogin = document.querySelectorAll('.login');

const container = document.querySelector('.container');

container.addEventListener('click', ev => {
	if (ev.target.closest('.logo')) {
		loginPage.style.display = 'none';
		frontPage.style.display = 'block';
		signupPage.style.display = 'none';
	}

	if (ev.target.closest('.signup')) {
		loginPage.style.display = 'none';
		frontPage.style.display = 'none';
		signupPage.style.display = 'flex';
	}

	if (ev.target.closest('#login')) {
		loginPage.style.display = 'block';
		frontPage.style.display = 'none';
		signupPage.style.display = 'none';
	}
});

if (window.innerWidth < 1000) {
	const menu = document.querySelector('.menu');
	const navbarInner = document.querySelectorAll('.navbar__inner');

	menu.addEventListener('click', () => {
		navbar.classList.toggle('change');

		if (!navbar.classList.contains('change')) {
			document.querySelectorAll('.navbar__dropdown').forEach(dropdown => {
				dropdown.style.left = '-20rem';
			});
		}

		document
			.querySelectorAll('.navbar__inner-heading-link')
			.forEach(heading => {
				heading.addEventListener('click', () => {
					heading.parentElement.parentElement.style.left = '-20rem';
				});
			});
	});

	// Show inner Lists
	navbarInner.forEach(inner => {
		inner.addEventListener('click', () => {
			inner.nextElementSibling.style.left = '0';
		});
	});
} else {
	// Refactored
	const displayDropdown = eventType => {
		section1.addEventListener(eventType, ev => {
			const target = ev.target.closest('.dropdown-hover');
			if (!target) return;
			let opacity = eventType == 'mouseover' ? 1 : 0;
			let visibility = eventType == 'mouseover' ? 'visible' : 'hidden';
			let rotate = eventType == 'mouseover' ? 'rotate(180deg)' : 'rotate(0)';
			// console.log(target.firstElementChild);
			let background =
				eventType == 'mouseover'
					? 'linear-gradient(to right, #066399, #2f8fdf, #066399)'
					: 'none';
			target.lastElementChild.style.cssText = `opacity: ${opacity}; visibility: ${visibility};`;
			navbar.style.cssText = `background: ${background}`;
			// Rotate Icon
			target.firstElementChild.firstElementChild.style.cssText = `transform: ${rotate}`;
		});
	};

	displayDropdown('mouseover');
	displayDropdown('mouseout');
}

window.addEventListener('resize', () => window.location.reload());
