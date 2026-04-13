// ========== LOADING SCREEN ==========
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Show loading screen on page load and hide after content is ready
window.addEventListener('load', () => {
    // Simulasi loading time minimal 2 detik
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);
});

// If page loads too fast, hide loading screen after 3 seconds maximum
setTimeout(() => {
    hideLoadingScreen();
}, 3000);

// ========== HAMBURGER MENU TOGGLE ==========
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// ========== PESAN PRODUK KE WHATSAPP ==========
function pesan(namaProduk) {
    const phoneNumber = '6281352041668';
    const message = `Halo, saya tertarik dengan produk: *${namaProduk}*. Berapa harganya dan apakah masih tersedia?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// ========== KIRIM PESAN FORM ==========
function kirimPesanForm() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    if (nama === '' || email === '' || pesan === '') {
        alert('⚠️ Mohon lengkapi semua data formulir.');
        return;
    }

    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('⚠️ Mohon masukkan email yang valid.');
        return;
    }

    const phoneNumber = '6281352041668';
    const text = `Halo Mega Sari Furniture 👋\n\n📝 *Nama:* ${nama}\n📧 *Email:* ${email}\n\n💬 *Pesan:*\n${pesan}\n\nTerima kasih!`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappURL, '_blank');
    
    // Reset form
    document.getElementById('formPesan').reset();
    alert('✅ Pesan Anda akan dikirim ke WhatsApp Mega Sari Furniture.');
}

// ========== ANIMASI SAAT SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe product cards dan elements lainnya
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// ========== SMOOTH SCROLL UNTUK ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== RESPONSIVE IMAGE LOADING ==========
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            img.src = 'https://via.placeholder.com/300x300?text=Gambar+Tidak+Tersedia';
        });
    });
});

// ========== CONSOLE WELCOME MESSAGE ==========
console.log('%c🎉 Selamat datang di Mega Sari Furniture!', 'font-size: 16px; color: #b08d57; font-weight: bold;');
console.log('%cWebsite © 2026 Mega Sari. Hubungi kami di WhatsApp: +62 813 5204 1668', 'color: #666; font-size: 12px;');

    // Update Instagram link in footer
    document.addEventListener('DOMContentLoaded', function() {
        const igLink = document.querySelector('.social-links a:nth-child(2)');
        if (igLink) {
            igLink.href = 'https://www.instagram.com/megasari_sambas?igsh=MW9haGc2ZWgwZ2s2aQ%3D%3D';
            igLink.target = '_blank';
        }
    });
