/**
 * Mayookha Saree Rolling Center & Boutique - Interactive Functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initScrollReveal();
    initSectionHighlighter();
    initServiceTabs();
});

// --------------------------------------------------------------------------
// 1. STICKY HEADER & SHRUNK SCROLL LISTENER
// --------------------------------------------------------------------------
function initHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
}

// --------------------------------------------------------------------------
// 2. MOBILE HAMBURGER TOGGLE MENU
// --------------------------------------------------------------------------
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// --------------------------------------------------------------------------
// 3. SERVICE CATEGORY TABS CONTROLLER
// --------------------------------------------------------------------------
function initServiceTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            // Add active state to clicked tab
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// --------------------------------------------------------------------------
// 4. SERVICES DATABASE & DETAILED MODAL CONTROLLERS
// --------------------------------------------------------------------------
const SERVICES_DB = {
    maggam: {
        title: "Traditional Maggam Work",
        tag: "Stitching & Designs",
        image: "assets/maggam_embroidery.png",
        duration: "5 - 10 Days",
        safety: "Safe for Silk Sarees",
        desc: "Our special bridal service. We offer beautiful, hand-made traditional needlework using high-quality zari, glittering beads, stones, and shiny pearls. Every design is carefully sewn by expert tailors to make your blouses and lehengas look stunning. Perfect for weddings and special functions."
    },
    embroidery: {
        title: "Hand & Machine Embroidery",
        tag: "Stitching & Designs",
        image: "assets/custom_embroidery.png",
        duration: "3 - 5 Days",
        safety: "Strong & Neat Threadwork",
        desc: "Beautiful machine and hand embroidery customized to match your style. From delicate flower patterns on sarees to neat designs on kurtis, our high-quality silk threads and careful stitching ensure your designs look bright and neat without any loose threads."
    },
    stitching: {
        title: "Perfect Stitching & Tailoring",
        tag: "Stitching & Designs",
        image: "assets/custom_stitching.jpg",
        duration: "4 - 7 Days",
        safety: "Double Stitching & Trial Fit",
        desc: "Tailored specifically for your body measurements. We customize the design, padding, lining, and finishing for bridal blouses, lehengas, and salwar suits. Every outfit is carefully checked to make sure you get a perfect and comfortable fit on the very first try."
    },
    jewellery: {
        title: "Silk Thread Jewellery Sets",
        tag: "Stitching & Designs",
        image: "assets/silk_jewellery.png",
        duration: "2 - 4 Days",
        safety: "Safe for Skin & High Quality Base",
        desc: "Beautiful and color-matched jewelry sets. Hand-made by wrapping shiny silk threads around strong bases, decorated with stone chains, gold beads, and stones. We make custom bangles, matching necklaces, and beautiful earrings (jhumkas) designed to match your outfit perfectly."
    },
    rolling: {
        title: "Saree Rolling & Polishing",
        tag: "Saree Care & Cleaning",
        image: "assets/custom_rolling.png",
        duration: "2 - 3 Days",
        safety: "Safe Polishing (No Heat Damage)",
        desc: "Our special care for luxury silk sarees (Kora, Banarasi, Kanchi, Organza). Using a special rolling press machine, we remove all stubborn wrinkles, restore the original feel, and add a beautiful new shine to your expensive sarees without stretching or weakening the fabric. Experience the fresh feel of a brand-new saree."
    },
    drycleaning: {
        title: "Saree Dry Cleaning",
        tag: "Saree Care & Cleaning",
        image: "assets/custom_drycleaning.jpg",
        duration: "2 - 4 Days",
        safety: "Safe Stain Removal & Design Protection",
        desc: "Gentle cleaning custom-designed for sarees with heavy borders, stones, and delicate zari work. We use safe, eco-friendly cleaning methods that remove tough stains and sweat marks while fully keeping the original colors bright, ensuring heavy gold zari doesn't lose its shine."
    },
    suits: {
        title: "Suits & Shirts Dry Cleaning",
        tag: "Saree Care & Cleaning",
        image: "assets/custom_suits.png",
        duration: "2 - 3 Days",
        safety: "Neat Crease & Steam Pressing",
        desc: "High-quality cleaning for men's formal wear. Includes deep stain removal, collar dirt cleaning, and professional steam pressing to give your shirts, suits, jackets, and sherwanis a sharp, neat, and brand-new look."
    },
    prepleating: {
        title: "Saree Pre-Pleating & Folding",
        tag: "Saree Care & Cleaning",
        image: "assets/custom_pleating.jpg",
        duration: "1 - 2 Days",
        safety: "Long-lasting Pleats & Crease Care",
        desc: "Save hours of draping time! We professionally fold and pre-pleat the waist and shoulder pleats based on your height and measurements. The saree is then carefully ironed and packed in a box, allowing you to wear it perfectly in under 5 minutes on your big day. Great for brides, wedding guests, and festivals."
    }
};

let currentModalServiceKey = "";

function openServiceModal(serviceKey) {
    const data = SERVICES_DB[serviceKey];
    if (!data) return;
    
    currentModalServiceKey = serviceKey;
    
    // Fill Modal Data
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-image').alt = data.title;
    document.getElementById('modal-tag').textContent = data.tag;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-description').textContent = data.desc;
    document.getElementById('modal-duration').textContent = data.duration;
    document.getElementById('modal-fabric-safeguard').textContent = data.safety;
    
    // Display Modal
    const modal = document.getElementById('service-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
    currentModalServiceKey = "";
}

// Close Modal with Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

// Close Modal and Scroll to Form
function bookServiceFromModal() {
    if (!currentModalServiceKey) return;
    
    // 1. Select the service in the dropdown
    const selectElem = document.getElementById('client-service');
    selectElem.value = currentModalServiceKey;
    
    // 2. Close Modal
    closeServiceModal();
    
    // 3. Scroll to Quote Form
    setTimeout(() => {
        const quoteSection = document.getElementById('quote');
        quoteSection.scrollIntoView({ behavior: 'smooth' });
        
        // Highlight service field
        selectElem.focus();
        selectElem.classList.add('highlight-flash');
        setTimeout(() => selectElem.classList.remove('highlight-flash'), 1500);
    }, 300);
}



// --------------------------------------------------------------------------
// 6. WHATSAPP QUOTE FORM SUBMISSION HANDLER
// --------------------------------------------------------------------------
function handleFormSubmission(event) {
    event.preventDefault();
    
    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const serviceSelect = document.getElementById('client-service');
    const serviceLabel = serviceSelect.options[serviceSelect.selectedIndex].text;
    const message = document.getElementById('client-message').value.trim();
    
    if (!name || !phone || !serviceSelect.value) {
        alert("Please fill in all required fields.");
        return;
    }
    
    // Construct WhatsApp message template with beautiful styling
    const textTemplate = `🌸 *MAYOOOKHA BOUTIQUE - NEW QUOTE REQUEST* 🌸\n\n` + 
                         `👤 *Client Name:* ${name}\n` + 
                         `📞 *Phone:* ${phone}\n` + 
                         `✨ *Requested Service:* ${serviceLabel}\n` + 
                         `📝 *Details:* ${message ? message : 'N/A'}\n\n` + 
                         `--- Prefilled from Mayookha Web Portfolio ---`;
                         
    const whatsappUrl = `https://wa.me/916301884617?text=${encodeURIComponent(textTemplate)}`;
    
    // Open WhatsApp Web/Mobile App in new tab
    window.open(whatsappUrl, '_blank');
    
    // Trigger Success Panel Overlay on current page
    document.getElementById('success-client-name').textContent = name;
    document.getElementById('success-service-name').textContent = serviceLabel;
    document.getElementById('form-success-card').classList.add('active');
}

// --------------------------------------------------------------------------
// 7. OFFLINE CALLBACK SUCCESS FLOW - DELETED (REMOVED)
// --------------------------------------------------------------------------

function resetFormState() {
    // Reset Form Fields
    document.getElementById('booking-quote-form').reset();
    
    // Hide Success Panel
    document.getElementById('form-success-card').classList.remove('active');
}

// --------------------------------------------------------------------------
// 8. SCROLL REVEAL & ACCURATE SECTION HIGHLIGHTER
// --------------------------------------------------------------------------
function initScrollReveal() {
    const reveals = document.querySelectorAll('.service-card, .info-block, .about-text-content, .about-visuals, .banner-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(elem => {
        elem.classList.add('reveal');
        revealObserver.observe(elem);
    });
}

function initSectionHighlighter() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 180)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
