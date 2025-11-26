document.addEventListener("DOMContentLoaded", function () {
    const darkToggle = document.getElementById("dark-mode-toggle");
    const languageToggle = document.getElementById("language-toggle");
    const body = document.body;
    const root = document.documentElement;

    const translations = {
        sv: {
            tagline: "Lagerarbetare | Blivande databasspecialist",
            locationEmail: "Tidaholm, Sverige | <a href=\"mailto:j.svan76@gmail.com\">j.svan76@gmail.com</a>",
            summaryHeading: "Professionell sammanfattning",
            summary: "Noggrann och dedikerad lagerarbetare med lång erfarenhet av godshantering, logistik och verkstadsarbete. Sedan 1999 har jag arbetat i olika roller på Nobia AB, inklusive centrallager,  maskinopratör och hantering av provprodukter. För närvarande studerar jag databashantering, sql och prompt engineering för att övergå till roller inom Large language models (LLMs) och databassystem. Flytande i både svenska och engelska med ett starkt intresse för teknik och datarelaterade lösningar.",
            workHeading: "Arbetslivserfarenhet",
            workIntro: "<strong>Nobia AB, Tidaholm, Sverige</strong> (1999 - Nuvarande)",
            currentRole: "Lagerarbetare/Godsmottagning (Nuvarande roll)",
            current1: "Ansvarar för mottagning av varor och att säkerställa korrekt lagerhantering.",
            current2: "Samarbetar med teammedlemmar för att upprätthålla effektiva arbetsflöden och stödja verksamhetsmål.",
            prototypeRole: "Provproduktsarbetare",
            prototype1: "Samordnade och förberedde provprodukter för olika projekt och kunder.",
            prototype2: "Säkerställde hög kvalitetsstandard vid paketering och leverans.",
            machineRole: "Maskinverkstad",
            machine1: "Opererade och underhöll maskiner i verkstaden för att säkerställa precision och effektivitet.",
            machine2: "Bidrog till produktionsförbättringar genom att felsöka och lösa tekniska problem.",
            educationHeading: "Utbildning & Kurser",
            educationTitle: "Zero to Mastery Academy",
            education1: "<strong>Zero to Mastery Academy</strong> - Prompt Engineering",
            education2: "<strong>Zero to Mastery Academy</strong> - SQL & Database Bootcamp (Pågående)",
            skillsHeading: "Kompetenser",
            skillPrompt: "Prompt Engineering",
            skillWarehouse: "Lager & Godsmottagning",
            skillSql: "SQL & Database Management (pågående)",
            skillLanguages: "Svenska (Modersmål), Engelska (Flytande)",
            interestsHeading: "Intressen",
            interestTech: "Datorer och Teknik",
            interestShooting: "Lerduveskytte",
            interestFishing: "Fiske",
            downloadSv: "Ladda ner CV (PDF, Svenska)",
            downloadEn: "Ladda ner CV (PDF, English)"
        },
        en: {
            tagline: "Warehouse Associate | Aspiring Database Specialist",
            locationEmail: "Tidaholm, Sweden | <a href=\"mailto:j.svan76@gmail.com\">j.svan76@gmail.com</a>",
            summaryHeading: "Professional Summary",
            summary: "Detail-oriented and dedicated warehouse professional with extensive experience in goods handling, logistics, and workshop operations. Since 1999 I’ve held multiple roles at Nobia AB, including central warehouse work, machine operator, and prototype handling. I’m currently studying database management, SQL, and prompt engineering to transition into roles focused on Large Language Models (LLMs) and database systems. Fluent in Swedish and English with a strong interest in technology and data-driven solutions.",
            workHeading: "Work Experience",
            workIntro: "<strong>Nobia AB, Tidaholm, Sweden</strong> (1999 – Present)",
            currentRole: "Warehouse Associate / Goods Receiving (Current)",
            current1: "Receive goods and ensure accurate inventory handling.",
            current2: "Collaborate with team members to maintain efficient workflows and support operational goals.",
            prototypeRole: "Sample Components",
            prototype1: "Coordinated and prepared sample components for projects and customers.",
            prototype2: "Ensured high quality standards in packaging and delivery.",
            machineRole: "Machine Workshop",
            machine1: "Operated and maintained machines to ensure precision and efficiency.",
            machine2: "Contributed to production improvements by troubleshooting and solving technical problems.",
            educationHeading: "Education & Courses",
            educationTitle: "Zero to Mastery Academy",
            education1: "<strong>Zero to Mastery Academy</strong> - Prompt Engineering",
            education2: "<strong>Zero to Mastery Academy</strong> - SQL & Database Bootcamp (In Progress)",
            skillsHeading: "Skills",
            skillPrompt: "Prompt Engineering",
            skillWarehouse: "Warehouse & Goods Receiving",
            skillSql: "SQL & Database Management (in progress)",
            skillLanguages: "Languages: Swedish (native), English (fluent)",
            interestsHeading: "Interests",
            interestTech: "Computers & Technology",
            interestShooting: "Clay pigeon shooting",
            interestFishing: "Fishing",
            downloadSv: "Download CV (PDF, Swedish)",
            downloadEn: "Download CV (PDF, English)"
        }
    };

    function applyLanguage(lang) {
        const strings = translations[lang] || translations.sv;
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.dataset.i18n;
            if (strings[key]) {
                el.textContent = strings[key];
            }
        });
        document.querySelectorAll("[data-i18n-html]").forEach((el) => {
            const key = el.dataset.i18nHtml;
            if (strings[key]) {
                el.innerHTML = strings[key];
            }
        });
        languageToggle.textContent = lang === "sv" ? "English" : "Swedish";
        root.setAttribute("lang", lang);
        localStorage.setItem("lang", lang);
    }

    function initLanguage() {
        const urlParam = new URLSearchParams(window.location.search).get("lang");
        const saved = localStorage.getItem("lang") || "sv";
        const lang = (urlParam && translations[urlParam]) ? urlParam : saved;
        applyLanguage(lang);
    }

    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkToggle.textContent = "Light Mode";
    }

    darkToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkToggle.textContent = "Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkToggle.textContent = "Dark Mode";
        }
    });

    languageToggle.addEventListener("click", function () {
        const current = localStorage.getItem("lang") || "sv";
        const next = current === "sv" ? "en" : "sv";
        applyLanguage(next);
    });

    initLanguage();
});
