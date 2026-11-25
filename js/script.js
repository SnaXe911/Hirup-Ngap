let currentKey = 'samyang';

const menuData = {
    samyang: {
        title: "SAMYANG NGAP WITH FRIED EGG",
        price: "RM8",
        img: "img/samyang.png",
        icon: "fa-bowl-food",
        desc: "Enjoy a delicious bowl of creamy and spicy Samyang Carbonara ramen topped with a freshly fried egg. The rich, creamy sauce blends perfectly with the spicy flavour of the noodles, creating a satisfying meal for ramen lovers. Perfect for students who crave something flavourful and filling!",
        highlights: [
            "Chewy and flavourful samyang noodles",
            "Topped with a freshly fried egg",
            "Perfect for a quick and satisfying meal"
        ],
        footer: "Enjoy the creamy, spicy goodness!",
        limitNotice: "Limited to 12 orders daily!"
    },
    peach: {
        title: "HIRUP PEACH TEA SPARKLING",
        price: "RM3",
        img: "img/peach.png",
        icon: "fa-wine-glass",
        desc: "Refresh yourself with our Hirup Peach Tea Sparkling, delightful combination of sweet peach flavour, refreshing tea and sparkling fizz. Every sip offers a light, fruity taste with a bubbly sensation that makes it the perfect drink to enjoy on a warm day. It's refreshing, flavourful and perfect for quenching your thirst!",
        highlights: [
            "Sweet and fruity peach flavour",
            "Refreshing tea with a fizzy twist",
            "Light, bubbly and enjoyable",
            "Perfect for a refreshing break"
        ],
        footer: "Enjoy the refreshing taste of peach in every sip!",
        limitNotice: ""
    },
    berry: {
        title: "HIRUP BERRY SPARKLING",
        price: "RM3",
        img: "img/berry.png",
        icon: "fa-whiskey-glass",
        desc: "Enjoy the refreshing taste of our Hirup Berry Sparkling, a delicious blend of sweet and tangy berry flavour with a sparkling fizzy twist. Its fruity taste and bubbly sensation make every sip refreshing and enjoyable. Perfect for students who want a cool and refreshing drink to brighten up their day!",
        highlights: [
            "Sweet and tangy berry flavour",
            "Refreshing and fizzy sensation",
            "Fruity taste with every sip",
            "Perfect for a refreshing break"
        ],
        footer: "Enjoy the refreshing taste of berry in every sip!",
        limitNotice: ""
    }
};

function handleImgError(imgEl) {
    if (imgEl.src.endsWith('.png') && !imgEl.dataset.retried) {
        imgEl.dataset.retried = 'true';
        imgEl.src = imgEl.src.replace('.png', '.jpg');
        return;
    }
    imgEl.style.display = 'none';
    if (imgEl.nextElementSibling) {
        imgEl.nextElementSibling.classList.remove('hidden');
        imgEl.nextElementSibling.classList.add('flex');
    }
}

function handleModalImgError(imgEl) {
    if (imgEl.src.endsWith('.png') && !imgEl.dataset.retried) {
        imgEl.dataset.retried = 'true';
        imgEl.src = imgEl.src.replace('.png', '.jpg');
        return;
    }
    imgEl.style.display = 'none';
    const fallback = document.getElementById('modal-img-fallback');
    fallback.classList.remove('hidden');
    fallback.classList.add('flex');
}

function openDetailModal(key) {
    currentKey = key;
    const item = menuData[key];
    if (!item) return;

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-price-badge').textContent = item.price;
    document.getElementById('modal-desc').textContent = item.desc;
    document.getElementById('modal-footer').textContent = item.footer;

    const limitNoticeEl = document.getElementById('modal-limit-notice');
    if (item.limitNotice) {
        limitNoticeEl.textContent = item.limitNotice;
        limitNoticeEl.style.display = 'inline';
    } else {
        limitNoticeEl.style.display = 'none';
    }

    const modalImg = document.getElementById('modal-img');
    const fallback = document.getElementById('modal-img-fallback');
    modalImg.dataset.retried = '';
    modalImg.style.display = 'block';
    fallback.classList.add('hidden');
    fallback.classList.remove('flex');
    modalImg.src = item.img;

    document.getElementById('modal-fallback-icon').className = `fa-solid ${item.icon} text-4xl mb-2`;
    document.getElementById('modal-fallback-src').textContent = `src="${item.img}"`;

    document.getElementById('modal-highlights').innerHTML = item.highlights
        .map(h => `<li>${h}</li>`)
        .join('');

    document.getElementById('detail-modal').style.display = 'flex';
}

function closeDetailModal() {
    document.getElementById('detail-modal').style.display = 'none';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        navButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
    });
});