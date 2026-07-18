// ===== Mobile Menu Toggle =====
const mobileToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// ===== Scroll Spy - Destaca link do menu na seção ativa =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.scrollY + 120; // offset do header

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            // Remove active de todos
            navLinks.forEach(link => link.classList.remove('active'));

            // Adiciona active no link correspondente
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Atualiza ao scrollar
window.addEventListener('scroll', updateActiveNav);

// Atualiza no carregamento
window.addEventListener('load', updateActiveNav);

// ===== Smooth Scroll para links do menu =====
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('.main-header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Fecha menu mobile após clicar
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });
});

// ===== Header com sombra ao scrollar =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== FIM DO SCRIPT =====
// Formulários gerenciados por form-handler.js


if (fileInput && fileLabel) {
    fileInput.addEventListener('change', function() {
        if (this.files && this.files.length > 0) {
            const fileName = this.files[0].name;
            fileLabel.innerHTML = `<i class="fas fa-check-circle"></i> ${fileName}`;
        } else {
            fileLabel.innerHTML = '<i class="fas fa-paperclip"></i> Anexar Currículo (opcional)';
        }
    });
}

// ===== Máscaras de Input (básicas) =====
const telefoneInputs = document.querySelectorAll('input[name="telefone"]');

telefoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 6) {
            value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0,2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        e.target.value = value;
    });
});

const cnpjInput = document.querySelector('input[name="cnpj"]');

if (cnpjInput) {
    cnpjInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 14) value = value.slice(0, 14);

        if (value.length > 12) {
            value = `${value.slice(0,2)}.${value.slice(2,5)}.${value.slice(5,8)}/${value.slice(8,12)}-${value.slice(12)}`;
        } else if (value.length > 8) {
            value = `${value.slice(0,2)}.${value.slice(2,5)}.${value.slice(5,8)}/${value.slice(8)}`;
        } else if (value.length > 5) {
            value = `${value.slice(0,2)}.${value.slice(2,5)}.${value.slice(5)}`;
        } else if (value.length > 2) {
            value = `${value.slice(0,2)}.${value.slice(2)}`;
        }

        e.target.value = value;
    });
}

// ===== Parallax suave no hero =====
const heroBg = document.querySelector('.hero-bg');

if (heroBg) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY < 800) {
            heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    });
}

// ===== Animação de contadores nas estatísticas =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toString().includes('+') ? target : `+${target}`;
            clearInterval(timer);
        } else {
            const display = Math.floor(current);
            element.textContent = `+${display}`;
        }
    }, 16);
}

// Observador para animar contadores quando entram na tela
const statNumbers = document.querySelectorAll('.stat-box .number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            // IMPORTANTE: Não anima se o conteúdo foi editado pelo usuário
            // Verifica se há edição salva checando se data-editable-id existe e se o conteúdo mudou
            const hasCustomContent = entry.target.hasAttribute('data-custom-edited');

            if (!hasCustomContent) {
                const text = entry.target.textContent.replace(/[^0-9]/g, '');
                const target = parseInt(text);
                if (!isNaN(target)) {
                    entry.target.textContent = '0';
                    setTimeout(() => animateCounter(entry.target, target), 200);
                }
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

console.log('✅ CAFCM - Site carregado com sucesso');
console.log('✨ Scroll Spy ativo - ícones do menu brilham em amarelo na seção ativa');

// Versão corrigida - 2026-07-18-17-48-21
