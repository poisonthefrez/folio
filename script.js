//FADE SCROLL
const items = document.querySelectorAll('.fade-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

items.forEach(item => {
  observer.observe(item);
});

//MENU SCRIPT (FUNCTIONS)
const burger = document.getElementById('burger');
const yinSymbol = burger.querySelector('.yin-symbol');
const menu = document.getElementById('menu');

burger.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = menu.classList.toggle('open');

  // Убираем классы анимации чтобы перезапустить анимацию
  yinSymbol.classList.remove('spin-open', 'spin-close');

  if (isOpen) {
    yinSymbol.classList.add('spin-open');
  } else {
    yinSymbol.classList.add('spin-close');
  }
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      yinSymbol.classList.remove('spin-open', 'spin-close');
      yinSymbol.classList.add('spin-close');
    }
  }
});


//THEME TOGGLE SCRIPT
const btn = document.getElementById('themeToggle');
btn.addEventListener('click', () => {
  document.body.classList.toggle('l-theme');

  if (document.body.classList.contains('l-theme')) {
    localStorage.setItem('theme', 'light');
    btn.textContent = '⏾';
  } else {
    localStorage.setItem('theme', 'dark');
    btn.textContent = '☀︎';
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('l-theme');
    btn.textContent = '⏾';
  } else {
    btn.textContent = '☀︎';
  }
});
const menuItems = menu.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('open');
    yinSymbol.classList.remove('spin-open', 'spin-close');
    yinSymbol.classList.add('spin-close');
  });
});


//PAGE SCALE (ADAPTATION)
function scaleTextToFit() {
  const container = document.querySelector('.container2');
  const text = document.querySelector('.container2-txt');

  if (!container || !text) return;

  text.style.transform = 'scaleX(1)';
  const containerWidth = container.clientWidth;
  const textWidth = text.scrollWidth;
  const scale = containerWidth / textWidth;

  text.style.transform = `scaleX(${scale})`;
}
window.addEventListener('resize', scaleTextToFit);
window.addEventListener('DOMContentLoaded', scaleTextToFit);
window.addEventListener('load', () => {
  window.dispatchEvent(new Event('resize'));
});

//TEXT ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const text = "Web • Visual • UI/UX • Motion Design";
  const speed = 50;
  const delay = 7500;

  const typeTarget = document.getElementById("typewriter");
  typeTarget.textContent = "";

  setTimeout(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        typeTarget.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
  }, delay);
});

// MODAL SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const openBtn = document.querySelector(".menu-item:nth-child(2)"); // "Contacts"
  const closeBtn = document.getElementById("closeModal");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

//BACKEND MESSAGE SEND NOTIFICATION
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('custom-alert-message');
  const contactModal = document.getElementById('contactModal');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        showAlert('Message sent successfully!');
        form.reset();
      } else {
        showAlert('Oops! There was a problem submitting your form');
      }
    } catch {
      showAlert('Network error. Please try again later.');
    }
  });

  function showAlert(message) {
    alertMessage.textContent = message;

    // Показать алерт сразу без плавного появления
    alertBox.style.opacity = '1';
    alertBox.style.display = 'block';

    // Через 5 секунд начинаем плавное исчезновение
    setTimeout(() => {
      alertBox.style.transition = 'opacity 0.5s ease';
      alertBox.style.opacity = '0';

      // Через 0.5 секунды скрываем алерт и модалку полностью
      setTimeout(() => {
        alertBox.style.display = 'none';
        alertBox.style.transition = ''; // сбрасываем transition
        if (contactModal) {
          contactModal.style.display = 'none';
        }
      }, 500);
    }, 5000);
  }
});

//BACKGROUND LINES ANIMATION
const container = document.getElementById('stripes-container');
const stripeCount = 20; // сколько полосок

for (let i = 0; i < stripeCount; i++) {
  const stripe = document.createElement('div');
  stripe.classList.add('stripe');
  // Позиция
  stripe.style.left = Math.random() * 100 + 'vw';
  // Ширина
  stripe.style.width = (5 + Math.random() * 10) + 'px';
  // Длительность
  const duration = 5 + Math.random() * 25;
  stripe.style.animation = `moveUp ${duration}s linear infinite`;
  // Задержа
  stripe.style.animationDelay = `${Math.random() * duration}s`;

  container.appendChild(stripe);
}

//MODAL3
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

const modal3b1 = document.getElementById("modal3b1");
const modal3b2 = document.getElementById("modal3b2");
const modal3b3 = document.getElementById("modal3b3");

const closeModal3 = document.querySelectorAll(".close3");
closeModal3.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal3-1, .modal3-2, .modal3-3");
    if (modal) {
      modal.style.display = "none";
    }
  });
});

card1.addEventListener("click", () => {
  modal3b1.style.display = "block";
});
card2.addEventListener("click", () => {
  modal3b2.style.display = "block";
});
card3.addEventListener("click", () => {
  modal3b3.style.display = "block";
});
