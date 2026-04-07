
// ======================== DADOS ========================
const skillsList = [
    "Python (Django/Flask)", "Java (Spring Boot, Maven)", "C / C++", "C#", "JavaScript", "HTML5/CSS3",
    "MySQL / SQLite", "Git & GitHub Actions", "Azure / CI-CD", "REST APIs", "Testes Unitários", "Arduino / ESP32",
    "Unity 2D", "Linux / DevOps", "MVC", "POO", "Bootstrap", "Portuguese and English"
];

// Projetos 
const projectsData = [
    { name: "KOLEKTO", icon: "fas fa-store", desc_en: "E-commerce for collectibles, deployed with CI/CD and unit tests.", desc_pt: "E-commerce para colecionáveis, publicado com CI/CD e testes.", tech: ["Python", "Django", "Azure", "SQLite", "Bootstrap"], links: [{ text_en: "GitHub", text_pt: "GitHub", url: "https://github.com/P-E-N-T-E-S/Kolekto" }, { text_en: "Live Demo", text_pt: "Demo", url: "https://kolekto2.azurewebsites.net" }] },
    { name: "SUB!", icon: "fas fa-closed-captioning", desc_en: "Tool to facilitate collaborative subtitling for Libreflix platform.", desc_pt: "Ferramenta para facilitar legendagem colaborativa na plataforma Libreflix.", tech: ["Java", "Maven", "Eclipse"], links: [{ text_en: "GitHub", text_pt: "GitHub", url: "https://github.com/P-E-N-T-E-S/Sub" }] },
    { name: "PRIS.ME", icon: "fas fa-hand-holding-heart", desc_en: "Management platform for NGOs (real client: Caçadores de Bons Exemplos).", desc_pt: "Plataforma de gestão para ONGs (cliente real: Caçadores de Bons Exemplos).", tech: ["Python", "Django", "Azure", "Jira", "Bootstrap"], links: [{ text_en: "GitHub", text_pt: "GitHub", url: "https://github.com/P-E-N-T-E-S/Pris.ME" }, { text_en: "Website", text_pt: "Site", url: "https://sites.google.com/cesar.school/capibyte/home" }] },
    { name: "Line Following Robot", icon: "fas fa-robot", desc_en: "Open-source robot with PID control system. Reached Top 10 at RoboCore Experience.", desc_pt: "Robô seguidor de linha open-source com controle PID. Top 10 na RoboCore Experience.", tech: ["ESP32", "C/C++", "PID Control", "Hardware"], links: [{ text_en: "GitHub", text_pt: "GitHub", url: "https://github.com/garagino/FollowLine" }] },
    { name: "Coffee Break", icon: "fas fa-mug-hot", desc_en: "Arduino-based scale to monitor coffee level in thermos.", desc_pt: "Balança com Arduino para monitorar nível de café em garrafa térmica.", tech: ["Arduino", "C++", "Hardware"], links: [{ text_en: "Tutorial", text_pt: "Tutorial", url: "https://projecthub.arduino.cc/sofia-saraiva/coffee-break-171e1b" }] }
];

// Educação
const educationData = [
    { title_en: "Systems Analysis and Development", title_pt: "Análise e Desenvolvimento de Sistemas", institution: "IFPE - Federal Institute of Pernambuco", period: "2025 - Atual", desc_en: "Bachelor's degree focusing on databases, web dev, and statistics.", desc_pt: "Bacharelado com foco em bancos de dados, desenvolvimento web e estatística." },
    { title_en: "Digital Game Development (Technical High School)", title_pt: "Desenvolvimento de Jogos Digitais (Ensino Técnico)", institution: "Cícero Dias / NAVE", period: "2018 - 2020", desc_en: "Programming logic, Unity, OOP, Agile & PBL.", desc_pt: "Lógica de programação, Unity, POO, Métodos Ágeis e PBL." }
];

const awards = [
    "🏆 Top 10 - Line Follower Robot @ RoboCore Experience (2023)",
    "🎓 Volunteer at The Developer Conference Recife (TDC) 2019",
    "🎮 Global Game Jam participant (2019)"
];

// ======================== TRADUÇÕES ========================
const translations = {
    en: {
        logo: "Luiz Brayner", nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_education: "Education", nav_contact: "Contact",
        hero_badge: "🚀 Back-end & DevOps", hero_desc: "C • Python • Java • Embedded Hardware • Web — From low-level systems to end-to-end solutions.",
        hero_btn_contact: "Hire Me", hero_btn_resume: "Resume", about_title: "About Me",
        about_text1: "🚀 Since 2018, I've built a solid tech career. I started with a technical degree in Digital Game Programming, where I learned C#, Unity, OOP, and agile methods, while participating in hackathons and events like TDC.",
        about_text2: "💻 My hands‑on experience is centered on C and Python – languages I use for system development, automation, and hardware projects (e.g., line‑following robots with ESP32 and PID control). I also work with Java, databases, and DevOps tools.",
        about_text3: "🎓 I'm currently pursuing a degree in Systems Analysis and Development at IFPE (2025–present), deepening my skills in web development, statistics, and data management. I aim to apply this knowledge to collaborative, high‑impact solutions.",
        skills_title: "Tech Stack & Skills", projects_title: "Featured Projects", education_title: "Education & Awards", contact_title: "Let's Connect",
        contact_name: "Your Name", contact_email: "Email Address", contact_msg: "Your Message...", contact_send: "Send Message", contact_demo: "(Demo — replace with actual backend)",
        footer_tag: "Built with HTML/CSS/JS"
    },
    pt: {
        logo: "Luiz Brayner", nav_home: "Início", nav_about: "Sobre", nav_skills: "Habilidades", nav_projects: "Projetos", nav_education: "Formação", nav_contact: "Contato",
        hero_badge: "🚀  Back-end & DevOps", hero_desc: "C • Python • Java • Hardware Embarcado • Web — De sistemas de baixo nível a soluções ponta a ponta.",
        hero_btn_contact: "Contrate-me", hero_btn_resume: "Currículo", about_title: "Sobre mim",
        about_text1: "🚀 Desde 2018 construo uma carreira sólida em tecnologia. Comecei no curso técnico de Programação de Jogos Digitais, onde desenvolvi lógica de programação com C#, Unity, POO e métodos ágeis, além de participar de hackathons e eventos como TDC.",
        about_text2: "💻 Minha experiência prática se consolidou com C e Python – linguagens que utilizo para desenvolvimento de sistemas, automação e projetos de hardware (como robôs seguidores de linha com ESP32 e controle PID). Também atuo com Java, bancos de dados e ferramentas de DevOps.",
        about_text3: "🎓 Atualmente curso Análise e Desenvolvimento de Sistemas no IFPE (2025–atual), aprofundando-me em desenvolvimento web, estatística e gestão de dados. Busco aplicar esse conhecimento em soluções colaborativas e de alto impacto.",
        skills_title: "Tecnologias & Habilidades", projects_title: "Projetos em Destaque", education_title: "Formação e Prêmios", contact_title: "Vamos Conectar",
        contact_name: "Seu nome", contact_email: "Seu e-mail", contact_msg: "Sua mensagem...", contact_send: "Enviar mensagem", contact_demo: "(Demo — substitua por backend real)",
        footer_tag: "Feito com HTML/CSS/JS"
    }
};

let currentLang = "pt";

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });
    renderProjects();
    renderEducation();
    document.getElementById("langLabel").innerText = lang.toUpperCase();
    localStorage.setItem("preferredLang", lang);
}

function renderProjects() {
    const container = document.getElementById("projectsGrid");
    if (!container) return;
    container.innerHTML = projectsData.map(proj => `
        <div class="project-card">
            <div class="project-img"><i class="${proj.icon}"></i></div>
            <div class="project-info">
                <h3>${proj.name}</h3>
                <p>${currentLang === "en" ? proj.desc_en : proj.desc_pt}</p>
                <div class="project-tech">${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}</div>
                <div style="display: flex; gap: 1rem; flex-wrap:wrap;">${proj.links.map(link => `<a href="${link.url}" class="project-link" target="_blank">${currentLang === "en" ? link.text_en : link.text_pt} <i class="fas fa-arrow-right"></i></a>`).join("")}</div>
            </div>
        </div>
    `).join("");
}

function renderSkills() {
    const container = document.getElementById("skillsGrid");
    if (container) container.innerHTML = skillsList.map(skill => `<div class="skill-card">${skill}</div>`).join("");
}

function renderEducation() {
    const eduContainer = document.getElementById("educationGrid");
    if (eduContainer) {
        eduContainer.innerHTML = educationData.map(edu => `
            <div class="edu-item">
                <div class="edu-title">${currentLang === "en" ? edu.title_en : edu.title_pt}</div>
                <div class="edu-meta">${edu.institution} | ${edu.period}</div>
                <p style="color: var(--text-secondary);">${currentLang === "en" ? edu.desc_en : edu.desc_pt}</p>
            </div>
        `).join("");
    }
    const awardContainer = document.getElementById("awardList");
    if (awardContainer) awardContainer.innerHTML = awards.map(a => `<div class="award-badge">${a}</div>`).join("");
}

// ======================== TEMA (CLARO/ESCURO) ========================
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}
themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// ======================== MENU MOBILE E SMOOTH SCROLL ========================
const hamburger = document.getElementById("hamburgerBtn");
const navLinksMenu = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinksMenu.classList.toggle("active"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinksMenu.classList.remove("active")));
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#" || targetId === "") return;
        const target = document.querySelector(targetId);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
});

// ======================== BOTÃO DE IDIOMA ========================
const langToggle = document.getElementById("langToggle");
langToggle.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "pt" : "en";
    updateLanguage(newLang);
});

// ======================== FORMULÁRIO DE CONTATO ========================
/*const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const msg = document.getElementById("message").value;
        if (name && email && msg) {
            alert(currentLang === "en" ? `Thanks ${name}! This is a demo. Your message: ${msg}` : `Obrigado ${name}! (Demonstração). Mensagem: ${msg}`);
            contactForm.reset();
        } else alert(currentLang === "en" ? "Please fill all fields." : "Preencha todos os campos.");
    });
}*/
document.getElementById("currentYear").innerText = new Date().getFullYear();
// Botão de download do currículo com idioma dinâmico
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
    resumeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Define os arquivos conforme o idioma atual (currentLang é 'pt' ou 'en')
        const lang = currentLang;
        let fileUrl, fileName;
        
        if (lang === 'pt') {
            fileUrl = 'assets/pdfs/curriculo_PTBR.pdf';
            fileName = 'Curriculo_Luiz_Brayner.pdf';
        } else {
            fileUrl = 'assets/pdfs/resume_EN.pdf';
            fileName = 'Resume_Luiz_Brayner.pdf';
        }
        
        // Cria um link temporário e força o download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
// Inicialização
renderSkills();
const savedLang = localStorage.getItem("preferredLang") || "pt";
updateLanguage(savedLang);
renderProjects();
renderEducation();
