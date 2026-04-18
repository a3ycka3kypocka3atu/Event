/* ============================================================
   SCRIPT — Seven Rays Event Landing Page
   i18n, scroll animations, navbar, mobile menu
   ============================================================ */

// ─────────── i18n TRANSLATIONS ───────────
const translations = {
  ru: {
    // Navbar
    nav_logo: 'Семь<span>Лучей</span>',
    nav_logo_sub: 'практическая встреча · Прага',
    nav_wisdom: 'Учение',
    nav_insights: 'Открытия',
    nav_qigong: 'Практика',
    nav_master: 'Мастер',
    nav_schedule: 'Расписание',
    nav_location: 'Место',

    // Hero
    hero_invitation: 'ПРИГЛАШЕНИЕ НА 2-ДНЕВНЫЙ ИНТЕНСИВ',
    hero_title: 'Вневременная <em data-i18n="hero_title_em">Мудрость</em>',
    hero_title_em: 'Мудрость',
    hero_sub: 'Учение о Семи Лучах — глубокое знание, которое объясняет человеческую природу глубже, чем психология. Присоединяйтесь к Владимиру Маширу в Праге на серию живых практик и лекций.',
    hero_location_text: 'Studio Santiago, Прага',
    hero_dates_text: '24 — 25 апреля 2026',
    hero_cta: 'Забронировать место',
    hero_cta2: 'Изучить программу',
    
    // Event tags
    tag_lectures: 'Лекции',
    tag_qigong: 'Цигун',
    tag_yoga: 'Йога',
    tag_tea: 'Чайная церемония',

    // Wisdom
    wisdom_label: 'Учение о Семи Лучах',
    wisdom_title: 'Есть система, которая объясняет людей глубже, чем психология',
    wisdom_lead: 'Замечали ли вы, что люди воспринимают мир совершенно по-разному?',
    wisdom_obs1: 'Один человек действует через <strong>силу и волю</strong>.',
    wisdom_obs2: 'Другой проживает всё через <strong>чувства и эмоции</strong>.',
    wisdom_obs3: 'Третий опирается на глубокое <strong>понимание и логику</strong>.',
    wisdom_highlight: 'И каждый абсолютно уверен, что именно его путь — правильный. Именно на этом стыке рождаются конфликты, выгорание и непонимание себя и других.',

    // Qigong
    qigong_label: 'Занятия',
    qigong_title: 'Практика: Авторский метод Йоги-Цигун',
    qigong_sub: 'Уникальный синтез Крия-йоги и Цигун, созданный для снятия физических блоков, балансировки высших энергетических центров и установления глубокой связи с Душой.',
    qigong_c1_title: 'Баланс высших энергий',
    qigong_c1_text: 'Основа практики сфокусирована на энергетических центрах выше диафрагмы. Мы работаем с планетарной и солнечной праной для активации и балансировки жизненно важных точек.',
    qigong_c2_title: 'Физическое освобождение',
    qigong_c2_text: 'Через специальные техники мы достигаем расслабления мышц путем осознанного напряжения и отпускания, позволяя энергии свободно течь по каналам.',
    qigong_c3_title: 'Осознанное дыхание',
    qigong_c3_text: 'Дыхание — это мост. Вы освоите ритмичные техники, необходимые для регуляции нервной системы и координации жизненной энергии.',
    qigong_c4_title: 'Глубокая медитация',
    qigong_c4_text: 'Используя 7 ступеней йоги, мы фокусируемся на очищении и гармонизации. Трансформация внутренних состояний и соединение с Душой (Солнечным Ангелом).',

    // Insights
    insights_label: 'Что открывает учение',
    insights_title: 'Учение о Семи Лучах показывает',
    insight1_title: 'Почему люди такие разные',
    insight1_text: 'Понимание глубинных отличий в энергетической природе каждого человека',
    insight2_title: 'Какой тип энергии у вас',
    insight2_text: 'Определение вашего уникального энергетического луча и его влияния на жизнь',
    insight3_title: 'Как вы принимаете решения',
    insight3_text: 'Осознание механизмов вашего мышления и действий в различных ситуациях',
    insight4_title: 'Где вы теряете ресурс',
    insight4_text: 'Обнаружение скрытых утечек энергии и восстановление внутренней силы',

    // Transformation
    transform_label: 'Когда приходит это понимание',
    transform1: 'Исчезает внутренний конфликт',
    transform2: 'Появляется ясность',
    transform3: 'Возвращается опора внутри',

    // Not Faith
    not_faith: 'Это не про веру. Это про глубокое узнавание себя.',

    // Carousel themes
    theme_sport: 'Спорт',
    theme_practice: 'Практики и Занятия',
    theme_vladimir: 'Владимир',

    // Master
    master_label: 'Практическая встреча',
    master_title: 'Владимир Машир',
    master_intro: 'Приглашаем вас на особую встречу с мастером, чей подход объединяет древнюю мудрость и современное понимание тела и сознания.',
    approach1_title: 'Телесная диагностика',
    approach1_text: 'Глубокое считывание состояния тела — понимание того, что ваше тело пытается вам сказать',
    approach2_title: 'Работа с психосоматикой',
    approach2_text: 'Выявление и растворение скрытых блоков, которые проявляются через тело',
    approach3_title: 'Тибетские поющие чаши',
    approach3_text: 'Мягкое восстановление состояния через звуковые вибрации и настройку на энергетические ритмы',

    // Schedule
    schedule_label: 'Расписание',
    schedule_title: 'Два дня практических встреч',
    month_apr: 'апреля',
    sched1_desc: 'Вечерняя встреча — знакомство с учением и первая практика',
    sched2_desc: 'Утренняя встреча — глубокая работа с телесной диагностикой и психосоматикой',
    sched3_desc: 'Утренняя встреча — звуковая медитация с тибетскими поющими чашами',
    day_thu: 'Четверг',
    day_fri: 'Пятница',
    day_sat: 'Суббота',
    day_sun: 'Воскресенье',
    schedule_note: 'Вы можете посетить одну встречу или весь цикл',

    // Location
    location_label: 'Место проведения',
    location_title: 'Studio Santiago',
    location_map: '<svg viewBox="0 0 24 24"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> Открыть на карте',

    // CTA
    cta_title: 'Откройте для себя путь к глубокому узнаванию',
    cta_sub: 'Количество мест ограничено для создания камерной атмосферы',
    cta_btn: 'Забронировать место',
    cta_note: 'Для бронирования напишите нам в Telegram',

    // Footer
    footer_copy: '© 2026 Семь Лучей · Владимир Машир. Все права защищены.',
    footer_privacy: 'Конфиденциальность',
    footer_contact: 'Контакты',
  },

  ua: {
    // Navbar
    nav_logo: 'Сім<span>Променів</span>',
    nav_logo_sub: 'практична зустріч · Прага',
    nav_wisdom: 'Вчення',
    nav_insights: 'Відкриття',
    nav_qigong: 'Практика',
    nav_master: 'Майстер',
    nav_schedule: 'Розклад',
    nav_location: 'Місце',

    // Hero
    hero_invitation: 'ЗАПРОШЕННЯ НА 2-ДЕННИЙ ІНТЕНСИВ',
    hero_title: 'Позачасова <em data-i18n="hero_title_em">Мудрість</em>',
    hero_title_em: 'Мудрість',
    hero_sub: 'Вчення про Сім Променів — глибоке знання, що розкриває людську природу глибше, ніж психологія. Приєднуйтесь до Володимира Машира у Празі на серію живих практик та лекцій.',
    hero_location_text: 'Studio Santiago, Прага',
    hero_dates_text: '24 — 25 квітня 2026',
    hero_cta: 'Забронювати місце',
    hero_cta2: 'Вивчити програму',
    
    // Event tags
    tag_lectures: 'Лекції',
    tag_qigong: 'Цигун',
    tag_yoga: 'Йога',
    tag_tea: 'Чайна церемонія',

    // Wisdom
    wisdom_label: 'Вчення про Сім Променів',
    wisdom_title: 'Є система, яка пояснює людей глибше, ніж психологія',
    wisdom_lead: 'Чи помічали ви, що люди сприймають світ зовсім по-різному?',
    wisdom_obs1: 'Одна людина діє через <strong>силу та волю</strong>.',
    wisdom_obs2: 'Інша проживає все через <strong>почуття та емоції</strong>.',
    wisdom_obs3: 'Третя спирається на глибоке <strong>розуміння та логіку</strong>.',
    wisdom_highlight: 'І кожен абсолютно впевнений, що саме його шлях — правильний. Саме на цьому стику народжуються конфлікти, вигорання та нерозуміння себе та інших.',

    // Qigong
    qigong_label: 'Заняття',
    qigong_title: 'Практика: Авторський метод Йоги-Цигун',
    qigong_sub: 'Унікальний синтез Крія-йоги та Цигун, створений для зняття фізичних блоків, балансування вищих енергетичних центрів та встановлення глибокого зв\'язку з Душею.',
    qigong_c1_title: 'Баланс вищих енергій',
    qigong_c1_text: 'Основа практики сфокусована на енергетичних центрах вище діафрагми. Ми працюємо з планетарною та сонячною праною для активації та балансування життєво важливих точок.',
    qigong_c2_title: 'Фізичне звільнення',
    qigong_c2_text: 'Через спеціальні техніки ми досягаємо розслаблення м\'язів шляхом напруження та відпускання, дозволяючи енергії вільно текти по каналах.',
    qigong_c3_title: 'Усвідомлене дихання',
    qigong_c3_text: 'Дихання — це міст. Ви опануєте ритмічні техніки, необхідні для регуляції нервової системи та координації життєвої енергії.',
    qigong_c4_title: 'Глибока медитація',
    qigong_c4_text: 'Використовуючи 7 ступенів йоги, ми фокусуємося на очищенні та гармонізації. Трансформація внутрішніх станів та з\'єднання з Душею (Сонячним Ангелом).',

    // Insights
    insights_label: 'Що відкриває вчення',
    insights_title: 'Вчення про Сім Променів показує',
    insight1_title: 'Чому люди такі різні',
    insight1_text: 'Розуміння глибинних відмінностей в енергетичній природі кожної людини',
    insight2_title: 'Який тип енергії у вас',
    insight2_text: 'Визначення вашого унікального енергетичного променя та його впливу на життя',
    insight3_title: 'Як ви приймаєте рішення',
    insight3_text: 'Усвідомлення механізмів вашого мислення та дій у різних ситуаціях',
    insight4_title: 'Де ви втрачаєте ресурс',
    insight4_text: 'Виявлення прихованих витоків енергії та відновлення внутрішньої сили',

    // Transformation
    transform_label: 'Коли приходить це розуміння',
    transform1: 'Зникає внутрішній конфлікт',
    transform2: 'З\'являється ясність',
    transform3: 'Повертається опора всередині',

    // Not Faith
    not_faith: 'Це не про віру. Це про глибоке впізнавання себе.',

    // Carousel themes
    theme_sport: 'Спорт',
    theme_practice: 'Практики та Заняття',
    theme_vladimir: 'Володимир',

    // Master
    master_label: 'Практична зустріч',
    master_title: 'Володимир Машир',
    master_intro: 'Запрошуємо вас на особливу зустріч з майстром, чий підхід об\'єднує давню мудрість і сучасне розуміння тіла та свідомості.',
    approach1_title: 'Тілесна діагностика',
    approach1_text: 'Глибоке зчитування стану тіла — розуміння того, що ваше тіло намагається вам сказати',
    approach2_title: 'Робота з психосоматикою',
    approach2_text: 'Виявлення та розчинення прихованих блоків, які проявляються через тіло',
    approach3_title: 'Тибетські співочі чаші',
    approach3_text: 'М\'яке відновлення стану через звукові вібрації та налаштування на енергетичні ритми',

    // Schedule
    schedule_label: 'Розклад',
    schedule_title: 'Два дні практичних зустрічей',
    month_apr: 'квітня',
    sched1_desc: 'Вечірня зустріч — знайомство з вченням та перша практика',
    sched2_desc: 'Ранкова зустріч — глибока робота з тілесною діагностикою та психосоматикою',
    sched3_desc: 'Ранкова зустріч — звукова медитація з тибетськими співочими чашами',
    day_thu: 'Четвер',
    day_fri: 'П\'ятниця',
    day_sat: 'Субота',
    day_sun: 'Неділя',
    schedule_note: 'Ви можете відвідати одну зустріч або весь цикл',

    // Location
    location_label: 'Місце проведення',
    location_title: 'Studio Santiago',
    location_map: '<svg viewBox="0 0 24 24"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg> Відкрити на карті',

    // CTA
    cta_title: 'Відкрийте для себе шлях до глибокого впізнавання',
    cta_sub: 'Кількість місць обмежена для створення камерної атмосфери',
    cta_btn: 'Забронювати місце',
    cta_note: 'Для бронювання напишіть нам у Telegram',

    // Footer
    footer_copy: '© 2026 Сім Променів · Володимир Машир. Усі права захищено.',
    footer_privacy: 'Конфіденційність',
    footer_contact: 'Контакти',
  }
};

// ─────────── i18n ENGINE ───────────
let currentLang = localStorage.getItem('event-lang') || 'ru';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('event-lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'ua' ? 'uk' : 'ru';

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = lang === 'ua'
      ? 'Вчення про Сім Променів — практична зустріч з Володимиром Маширом у Празі. Тілесна діагностика, психосоматика, тибетські співочі чаші. Studio Santiago.'
      : 'Учение о Семи Лучах — практическая встреча с Владимиром Маширом в Праге. Телесная диагностика, психосоматика, тибетские поющие чаши. Studio Santiago.';
  }

  // Translate all elements with data-i18n
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update language switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ─────────── NAVBAR SCROLL EFFECT ───────────
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ─────────── MOBILE MENU ───────────
function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('navLinks');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Close menu when clicking a nav link
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// ─────────── SMOOTH SCROLL ───────────
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ─────────── SCROLL REVEAL (IntersectionObserver) ───────────
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ─────────── LANGUAGE SWITCHER EVENTS ───────────
function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

// ─────────── PHOTO CAROUSEL ───────────
let currentTheme = 'sport';
let carouselRafId = null;
let carouselScrollPos = 0;
let carouselSpeed = 0.5; // px per frame (slower rotation)
let isCarouselDragging = false;
let isCarouselHovered = false;
let carouselStartX = 0;
let carouselPrevX = 0;

function setupCarousel() {
  const track = document.getElementById('carouselTrack');
  const themeBtns = document.querySelectorAll('.theme-btn');
  const viewport = document.querySelector('.carousel-viewport');
  if (!track || !themeBtns.length || !viewport) return;

  filterAndBuildCarousel('sport');

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      if (theme === currentTheme) return;

      currentTheme = theme;

      // Update active button
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Fade out, swap, fade in
      track.style.transition = 'opacity 0.3s ease';
      track.style.opacity = '0';

      setTimeout(() => {
        filterAndBuildCarousel(theme);
        track.style.opacity = '1';
        track.style.transform = `translateX(0)`;
        carouselScrollPos = 0;
      }, 300);
    });
  });

  // Drag and hover events
  viewport.addEventListener('mouseenter', () => isCarouselHovered = true);
  viewport.addEventListener('mouseleave', () => {
     isCarouselHovered = false;
     if (isCarouselDragging) endDrag();
  });
  
  viewport.addEventListener('mousedown', (e) => {
    isCarouselDragging = true;
    carouselStartX = e.pageX;
    carouselPrevX = e.pageX;
    track.style.transition = 'none';
  });
  
  viewport.addEventListener('mousemove', (e) => {
    if (!isCarouselDragging) return;
    e.preventDefault();
    const dx = e.pageX - carouselPrevX;
    carouselScrollPos -= dx; 
    
    // Change direction based on drag direction
    if (dx > 2) carouselSpeed = -0.5;
    else if (dx < -2) carouselSpeed = 0.5;
    
    carouselPrevX = e.pageX;
  });
  
  window.addEventListener('mouseup', () => {
     if (isCarouselDragging) endDrag();
  });

  // Touch support
  viewport.addEventListener('touchstart', (e) => {
    isCarouselDragging = true;
    isCarouselHovered = true;
    carouselStartX = e.touches[0].pageX;
    carouselPrevX = e.touches[0].pageX;
    track.style.transition = 'none';
  }, {passive: true});

  viewport.addEventListener('touchmove', (e) => {
    if (!isCarouselDragging) return;
    const dx = e.touches[0].pageX - carouselPrevX;
    carouselScrollPos -= dx;
    
    if (dx > 2) carouselSpeed = -0.5;
    else if (dx < -2) carouselSpeed = 0.5;
    
    carouselPrevX = e.touches[0].pageX;
  }, {passive: true});

  window.addEventListener('touchend', () => {
    if (isCarouselDragging) {
       endDrag();
       isCarouselHovered = false;
    }
  });

  function endDrag() {
    isCarouselDragging = false;
  }

  // Animation loop
  function loop() {
    if (!isCarouselDragging && !isCarouselHovered) {
      carouselScrollPos += carouselSpeed;
    }
    
    const slides = track.querySelectorAll('.carousel-slide:not(.clone):not(.hidden)');
    if (slides.length > 0) {
      const slideWidth = slides[0].offsetWidth;
      const gap = 16; 
      const origWidth = slides.length * (slideWidth + gap);
      
      // Boundaries handle
      if (carouselScrollPos >= origWidth) {
        carouselScrollPos -= origWidth;
      } else if (carouselScrollPos <= 0) {
        carouselScrollPos += origWidth;
      }
      
      track.style.transform = `translateX(${-carouselScrollPos}px)`;
    }
    
    carouselRafId = requestAnimationFrame(loop);
  }
  
  if (carouselRafId) cancelAnimationFrame(carouselRafId);
  carouselRafId = requestAnimationFrame(loop);
}

function filterAndBuildCarousel(theme) {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const allSlides = track.querySelectorAll('.carousel-slide:not(.clone)');
  track.querySelectorAll('.carousel-slide.clone').forEach(c => c.remove());

  allSlides.forEach(slide => {
    if (slide.dataset.theme === theme) {
      slide.classList.remove('hidden');
    } else {
      slide.classList.add('hidden');
    }
  });

  const visible = Array.from(track.querySelectorAll(`.carousel-slide[data-theme="${theme}"]`));
  // Create 2 clone sets for robust bidirectional wrapping
  [1, 2].forEach(() => {
    visible.forEach(slide => {
      const clone = slide.cloneNode(true);
      clone.classList.add('clone');
      track.appendChild(clone);
    });
  });
}

// ─────────── THEME ENGINE ───────────
function setupTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('event-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('event-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('event-theme', 'dark');
    }
  });
}

// ─────────── INIT ───────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved or default language
  setLanguage(currentLang);

  // Setup all interactions
  setupTheme();
  setupLanguageSwitcher();
  setupMobileMenu();
  setupSmoothScroll();
  setupScrollReveal();
  setupCarousel();

  // Navbar scroll
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();
});


