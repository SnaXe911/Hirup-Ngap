let currentKey = 'samyang';

const menuData = {
    samyang: {
        title: "SAMYANG NGAP WITH FRIED EGG",
        price: "RM8",
        img: "img/samyang.png",
        icon: "fa-bowl-food",
        desc: "Enjoy a delicious bowl of creamy, and spicy Samyang Carbonara noodles topped with a fresh fried egg. The rich, creamy sauce pairs perfectly with the spicy flavor of the noodles, creating a mouthwatering taste combination. Perfect for anyone who loves something flavorful and filling!",
        highlights: [
            "Creamy carbonara sauce with a spicy kick",
            "Topped with a fresh, crispy-edged fried egg",
            "Rich, savory, and filling portion"
        ],
        footer: "Enjoy the spicy, savory goodness!"
    },
    peach: {
        title: "HIRUP PEACH TEA SPARKLING",
        price: "RM3",
        img: "img/peach.png",
        icon: "fa-wine-glass",
        desc: "A crisp and aromatic blend of sweet peach tea infused with lively sparkling fizz. Perfectly chilled to cool you down and balance out spicy meals.",
        highlights: [
            "Sweet, fragrant peach tea flavor",
            "Refreshing fizzy sparkle in every sip",
            "Best paired with Samyang Ngap"
        ],
        footer: "Sweet, crisp, and oh-so-refreshing!"
    },
    berry: {
        title: "HIRUP BERRY SPARKLING",
        price: "RM3",
        img: "img/berry.png",
        icon: "fa-whiskey-glass",
        desc: "A vibrant mix of tangy mixed berries topped with icy sparkling soda. Bursting with fruity sweetness and a zesty finish.",
        highlights: [
            "Tangy & sweet mixed berry infusion",
            "Ice-cold effervescent fizz",
            "Ultimate thirst-quencher"
        ],
        footer: "Cool, fizzy, and bursting with berry!"
    }
};

// Automatically try .jpg if .png is missing before showing fallback icon
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

// Switch from 3-card overview to inline detail view
function showItem(key) {
    currentKey = key;
    const item = menuData[key];
    if (!item) return;

    document.getElementById('detail-title').textContent = item.title;
    document.getElementById('detail-price').textContent = item.price;
    document.getElementById('detail-desc').textContent = item.desc;
    document.getElementById('detail-footer-tag').textContent = item.footer;

    const imgEl = document.getElementById('detail-img');
    imgEl.dataset.retried = '';
    imgEl.style.display = 'block';
    imgEl.nextElementSibling.classList.add('hidden');
    imgEl.nextElementSibling.classList.remove('flex');
    imgEl.src = item.img;
    document.getElementById('detail-icon').className = `fa-solid ${item.icon} text-lg mb-0.5`;

    document.getElementById('detail-highlights').innerHTML = item.highlights
        .map(h => `<li>${h}</li>`)
        .join('');

    document.getElementById('overview-view').classList.add('hidden');
    document.getElementById('detail-view').classList.remove('hidden');
}

// Return to 3-card overview
function showOverview() {
    document.getElementById('detail-view').classList.add('hidden');
    document.getElementById('overview-view').classList.remove('hidden');
}

// Open zoomed photo + full detail modal
function openDetailModal(key) {
    currentKey = key;
    const item = menuData[key];
    if (!item) return;

    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-price-badge').textContent = item.price;
    document.getElementById('modal-desc').textContent = item.desc;
    document.getElementById('modal-footer').textContent = item.footer;

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

// Close modal
function closeDetailModal() {
    document.getElementById('detail-modal').style.display = 'none';
}

// Bottom dock navigation handler
function setActiveNav(tab) {
    if (tab === 'menu' || tab === 'home') {
        showOverview();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'location') {
        alert('Hirup & Ngap — Open Daily! Check our socials for today’s booth location.');
    }
}
