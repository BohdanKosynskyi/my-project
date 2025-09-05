const hero = document.querySelector('.overlay');

const backgrounds = [
	`linear-gradient(243deg, rgba(126, 90, 255, 0.52), rgba(85, 184, 255, 0.6)), url('assets/images/1.webp')`,
	`linear-gradient(243deg, rgba(255, 90, 90, 0.59), rgba(255, 184, 85, 0.6)), url('assets/images/1.webp')`,
	`linear-gradient(243deg, rgba(90, 255, 159, 0.63), rgba(85, 130, 255, 0.1)), url('assets/images/1.webp')`,
	`linear-gradient(243deg, rgba(218, 96, 189, 0.61), rgba(88, 15, 197, 0.6)), url('assets/images/1.webp')`
];

		function openMenu() {
			document.querySelector('.overlay').classList.add('open')
			document.querySelector('.mobile-menu-panel').classList.add('open')
		}

		function closeMenu() {
			document.querySelector('.overlay').classList.remove('open')
			document.querySelector('.mobile-menu-panel').classList.remove('open')
		}

            new LazyLoad({
            elements_selector: ".lazy"
        });

let index = 0;

setInterval(() => {
	index = (index + 1) % backgrounds.length;
	hero.style.backgroundImage = backgrounds[index];
}, 3000);

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 850) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

        const cards = [
            {
                title: "SEE THE UNMATCHED BEAUTY OF THE GREAT.",
                text: "Free directories: directories are perfect for customers that are searching for...",
                img: "assets/images/image-1.webp",
                avatar: "assets/images/avatar/1.webp",
                author: "ALJA BRUN",
                date: "20 Jan 2020",
            },
            {
                title: "EFFECTIVE ADVERTISING POINTERS.",
                text: "Having a home based business is a wonderful asset to your life...",
                img: "assets/images/image-2.webp",
                avatar: "assets/images/avatar/2.webp",
                author: "DOMINIC FREEMAN",
                date: "13 Dec 2019",
            },
            {
                title: "HYPNOTIZE YOURSELF INTO THE GHOST.",
                text: "There are many things that are important to catalog design...",
                img: "assets/images/image-3.webp",
                avatar: "assets/images/avatar/1.webp",
                author: "ALICE WARD",
                date: "30 Nov 2019",
            },
            {
                title: "DREAMING IN DIGITAL SHADOWS.",
                text: "Understanding the essence of modern catalog aesthetics begins with a grasp on digital abstraction...",
                img: "assets/images/modern-building.webp",
                avatar: "assets/images/avatar/1.webp",
                author: "JONATHAN MILES",
                date: "12 Jan 2020",
            },
            {
                title: "THE GEOMETRY OF EMPTINESS.",
                text: "Design is not just what you see, but what you feel in the negative space between elements...",
                img: "assets/images/old-building.webp",
                avatar: "assets/images/avatar/2.webp",
                author: "SOPHIE LIN",
                date: "27 Mar 2021",
            }
        ];

        $(window).on("load", function () {
    const container = $("#lightSlider");

    cards.forEach((card) => {
        const cardHTML = `
        <li class="card">
            <img src="${card.img}" alt="${card.title}" class="main-img"/>
            <div class="card-body">
                <h3>${card.title}</h3>
                <p>${card.text}</p>
                <div class="author">
                <div>
                  <img src="${card.avatar}" alt="${card.author}" class="avatar-img" />
                </div>
                  <div>
                  <span>${card.author}</span><br>
                  <span class="date">${card.date}</span>
                  </div>
                </div>
            </div>
        </li>`;
        container.append(cardHTML);
    });

    container.lightSlider({
        item: 3,
        slideMargin: 10,
        loop: true,
        auto: true,
        pause: 3000,
        controls: true,
        pager: true,
    });
});





lightGallery(document.getElementById('lightgallery'), {
	selector: '.item a',
	plugins: [lgZoom, lgThumbnail],
	speed: 500
});

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([51.505, -0.09]).addTo(map)
	.openPopup();

