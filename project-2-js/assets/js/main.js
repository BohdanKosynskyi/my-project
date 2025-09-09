
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector('.hero .overlay');

  const backgrounds = [
    `linear-gradient(243deg, rgba(126, 90, 255, 0.52), rgba(85, 184, 255, 0.6)), url('assets/images/1.webp')`,
    `linear-gradient(243deg, rgba(255, 90, 90, 0.59), rgba(255, 184, 85, 0.6)), url('assets/images/1.webp')`,
    `linear-gradient(243deg, rgba(90, 255, 159, 0.63), rgba(85, 130, 255, 0.1)), url('assets/images/1.webp')`,
    `linear-gradient(243deg, rgba(218, 96, 189, 0.61), rgba(88, 15, 197, 0.6)), url('assets/images/1.webp')`
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % backgrounds.length;
    console.log('background index:', index);
    hero.style.backgroundImage = backgrounds[index];
  }, 3000);
});



// https://api.telegram.org/bot8251510902:AAHEKJyLQ2iS7qK5_eeKvazTPBQRXpq0_8w/sendMessage?chat_id=-4906964263&parse_mode=html&text=bla

document.addEventListener('DOMContentLoaded', () => {
  let formInProgress = false;

  const form = document.getElementById('subscr');
  form.onsubmit = async function (e) {
    e.preventDefault();
    console.log('Submit handler triggered');
    if (formInProgress) return;

    formInProgress = true;

    const BOT_TOKEN = '8251510902:AAHEKJyLQ2iS7qK5_eeKvazTPBQRXpq0_8w';
    const CHAT_ID = '-4906964263';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const msg = `<b>Name: </b>${name}%0a<b>Email: </b>${email}`;

    try {
      const resp = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${msg}`);
      const answer = await resp.json();

      if (answer.ok) {
        alert('Success');
        form.reset();
      } else {
        alert('Try again');
      }
    } catch (err) {
      alert('Error sending message');
    }

    formInProgress = false;
  };
});





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
    img: "assets/images/Image-1.webp",
    avatar: "assets/images/avatar/1.webp",
    author: "ALJA BRUN",
    date: "20 Jan 2020",
  },
  {
    title: "EFFECTIVE ADVERTISING POINTERS.",
    text: "Having a home based business is a wonderful asset to your life...",
    img: "assets/images/Image-2.webp",
    avatar: "assets/images/avatar/2.webp",
    author: "DOMINIC FREEMAN",
    date: "13 Dec 2019",
  },
  {
    title: "HYPNOTIZE YOURSELF INTO THE GHOST.",
    text: "There are many things that are important to catalog design...",
    img: "assets/images/Image-3.webp",
    avatar: "assets/images/avatar/1.webp",
    author: "ALICE WARD",
    date: "30 Nov 2019",
  },
  {
    title: "DREAMING IN DIGITAL SHADOWS.",
    text: "Understanding the essence of modern catalog aesthetics begins with a grasp...",
    img: "assets/images/modern-building.webp",
    avatar: "assets/images/avatar/1.webp",
    author: "JONATHAN MILES",
    date: "12 Jan 2020",
  },
  {
    title: "THE GEOMETRY OF EMPTINESS.",
    text: "Design is not just what you see, but what you feel in the negative space...",
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

  const sliderInstance = container.lightSlider({
    item: 3,
    slideMargin: 10,
    loop: true,
    auto: true,
    pause: 3000,
    controls: false,
    pager: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 2,
          controls: false,
        }
      },
      {
        breakpoint: 500,
        settings: {
          item: 1,
          controls: false,
        }
      }
    ]
  });

  $("#prevSlide").on("click", function () {
    sliderInstance.goToPrevSlide();
  });

  $("#nextSlide").on("click", function () {
    sliderInstance.goToNextSlide();
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

