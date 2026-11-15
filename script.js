// Dynamic URL Parameters & Sanctuary Theme Customizer
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Customization parameters from query string
  const brandName = urlParams.get('brand') || urlParams.get('name') || 'Дом мира';
  const category = urlParams.get('category') || urlParams.get('niche') || 'Парк-отель & Экотуризм';
  const city = urlParams.get('city') || 'Изборско-Мальская долина';
  const address = urlParams.get('address') || 'Псковская обл., Печорский р-н';
  const phone = urlParams.get('phone') || '+7 (911) 698-87-30';

  // Apply to Document Title and Branding
  document.title = `${brandName} — Официальный сайт (${city})`;

  const brandTitleEl = document.getElementById('brand-title');
  if (brandTitleEl) brandTitleEl.textContent = brandName;

  const brandTagline = document.getElementById('brand-tagline');
  if (brandTagline) brandTagline.textContent = city;

  const brandSubline = document.getElementById('brand-subline');
  if (brandSubline) brandSubline.textContent = category.toUpperCase();

  const heroNameAccent = document.getElementById('hero-name-accent');
  if (heroNameAccent) heroNameAccent.textContent = `«${brandName}»`;

  const topBarGeo = document.getElementById('top-bar-geo');
  if (topBarGeo) topBarGeo.textContent = `📍 ${address}, ${city}`;

  const headerPhone = document.getElementById('header-phone');
  if (headerPhone) {
    headerPhone.textContent = phone;
    headerPhone.href = `tel:${phone.replace(/[^\d+]/g, '')}`;
  }

  const routePhone = document.getElementById('route-phone-link');
  if (routePhone) {
    routePhone.textContent = phone;
    routePhone.href = `tel:${phone.replace(/[^\d+]/g, '')}`;
  }

  const routeAddrText = document.getElementById('route-address-text');
  if (routeAddrText) routeAddrText.textContent = `${address}, ${city}`;

  const footerBrand = document.getElementById('footer-brand-name');
  if (footerBrand) footerBrand.textContent = brandName.toUpperCase();

  const routeYandexBtn = document.getElementById('route-yandex-btn');
  if (routeYandexBtn) {
    routeYandexBtn.href = `https://yandex.ru/maps/?text=${encodeURIComponent(`${brandName} ${city} ${address}`)}`;
  }

  // Niche-tailored content presets for dynamic demos
  const nichePresets = {
    beauty: {
      tag: "Салон красоты & СПА-пространство",
      headline: `Премиальный уход и эстетика в студии `,
      desc: "Уютная атмосфера заботы, авторские техники окрашивания, маникюр в 4 руки, японские спа-ритуалы и тишина для вашей перезагрузки.",
      pills: [
        { icon: "✨", label: "Стерильность", val: "Стандарты СанПиН 100%" },
        { icon: "💅", label: "Услуги", val: "Маникюр, брови и стрижки" },
        { icon: "⚡", label: "Без ожидания", val: "Онлайн-запись 24/7" },
        { icon: "☕", label: "Атмосфера", val: "Кофе и чайная карта" }
      ],
      filterLabel: "ВЫБЕРИТЕ УСЛУГУ / МАСТЕРА",
      filterOptions: [
        "Комплекс: маникюр + педикюр в 4 руки",
        "Сложное окрашивание (AirTouch/Шатуш)",
        "SPA-уход для волос и массаж головы",
        "Оформление бровей и ламинирование ресниц"
      ]
    },
    auto: {
      tag: "Спецтехника & Автосервис",
      headline: `Надежный сервис и аренда спецтехники в `,
      desc: "Собственный парк строительной и дорожной техники, опытные операторы, оперативная подача на объект и прозрачные сметы без скрытых платежей.",
      pills: [
        { icon: "🚜", label: "Автопарк", val: "Экскаваторы и манипуляторы" },
        { icon: "🛡️", label: "Гарантия", val: "Официальный договор и ЭДО" },
        { icon: "⚡", label: "Скорость", val: "Подача от 60 минут" },
        { icon: "👨‍🔧", label: "Опыт", val: "Аттестованные машинисты" }
      ],
      filterLabel: "ТИП ТЕХНИКИ / ВИД РАБОТ",
      filterOptions: [
        "Аренда мини-экскаватора (от 4 часов)",
        "Манипулятор 5-10 тонн с люлькой",
        "Комплексная разработка котлована",
        "Эвакуация и транспортировка спецтехники"
      ]
    },
    flowers: {
      tag: "Цветочная мастерская & Доставка",
      headline: `Авторские букеты и свежая флористика от `,
      desc: "Цветы премиальных плантаций Голландии и Эквадора, дизайнерская упаковка, фотоконтроль перед отправкой и бережная доставка точно ко времени.",
      pills: [
        { icon: "🌸", label: "Свежесть", val: "Поставки 3 раза в неделю" },
        { icon: "📸", label: "Контроль", val: "Фото букета перед отправкой" },
        { icon: "⚡", label: "Доставка", val: "От 45 минут по городу" },
        { icon: "💌", label: "Комплимент", val: "Открытка к каждому заказу" }
      ],
      filterLabel: "ПОВОД / БЮДЖЕТ БУКЕТА",
      filterOptions: [
        "Авторский букет гигант (от 5 000 ₽)",
        "Монобукет из пионовидных роз",
        "Сборная композиция в шляпной коробке",
        "Свадебная флористика под ключ"
      ]
    },
    engineering: {
      tag: "Инженерная сантехника & Электрика",
      headline: `Качественные материалы для монтажа от `,
      desc: "Трубы, фитинги, коллекторы, автоматика и кабель по ГОСТу. Быстрый резерв товара за 15 минут и оптовые спеццены для мастеров-монтажников.",
      pills: [
        { icon: "🚰", label: "Склад", val: "Более 5 000 позиций в наличии" },
        { icon: "⚡", label: "Резерв", val: "Сборка заказа за 15 минут" },
        { icon: "📑", label: "Стандарты", val: "Сертификаты ГОСТ и ISO" },
        { icon: "🚚", label: "Логистика", val: "Срочная доставка на объект" }
      ],
      filterLabel: "КАТЕГОРИЯ ОБОРУДОВАНИЯ",
      filterOptions: [
        "Отопление и водяной теплый пол",
        "Трубы сшитый полиэтилен и фитинги",
        "Кабель ВВГ-Пнг и модульная автоматика",
        "Насосные станции и гидроаккумуляторы"
      ]
    },
    driving: {
      tag: "Автошкола & Обучение вождению",
      headline: `Уверенное вождение и права категорий А/В в `,
      desc: "Современный автопарк, закрытый автодром, рассрочка 0% без переплат, онлайн-теория в мобильном приложении и полное сопровождение на экзамене в ГИБДД.",
      pills: [
        { icon: "🚗", label: "Автопарк", val: "Новые иномарки МКПП / АКПП" },
        { icon: "💳", label: "Оплата", val: "Рассрочка 0% от 2 500 ₽/мес" },
        { icon: "📱", label: "Теория", val: "Онлайн в приложении 24/7" },
        { icon: "🎯", label: "Результат", val: "Сдача экзамена с 1-го раза" }
      ],
      filterLabel: "ПРОГРАММА ОБУЧЕНИЯ",
      filterOptions: [
        "Категория «B» — полный курс вождения",
        "Категория «A» — управление мотоциклом",
        "VIP-курс с персональным инструктором",
        "Восстановление навыков вождения"
      ]
    }
  };

  // Detect niche
  const combined = (category + ' ' + brandName).toLowerCase();
  let currentNiche = null;
  if (combined.includes('бьюти') || combined.includes('салон') || combined.includes('красот')) {
    currentNiche = nichePresets.beauty;
  } else if (combined.includes('авто') || combined.includes('спецтехник') || combined.includes('сервис')) {
    currentNiche = nichePresets.auto;
  } else if (combined.includes('цвет') || combined.includes('флорист') || combined.includes('букет')) {
    currentNiche = nichePresets.flowers;
  } else if (combined.includes('сантехник') || combined.includes('электрик') || combined.includes('инженер')) {
    currentNiche = nichePresets.engineering;
  } else if (combined.includes('школ') || combined.includes('автошкол') || combined.includes('вод')) {
    currentNiche = nichePresets.driving;
  }

  if (currentNiche) {
    const heroH1 = document.getElementById('hero-headline');
    if (heroH1) {
      heroH1.innerHTML = `${currentNiche.headline} <span class="headline-serif">«${brandName}»</span>`;
    }
    const heroDesc = document.getElementById('hero-description');
    if (heroDesc) heroDesc.textContent = currentNiche.desc;

    // Replace 4 feature pills
    const pillsContainer = document.getElementById('feature-cards-row');
    if (pillsContainer) {
      pillsContainer.innerHTML = currentNiche.pills.map(p => `
        <div class="f-pill-card">
          <div class="f-pill-icon">${p.icon}</div>
          <div class="f-pill-text">
            <span class="f-pill-label">${p.label}</span>
            <strong class="f-pill-value">${p.val}</strong>
          </div>
        </div>
      `).join('');
    }

    // Replace dropdown options
    const categorySelect = document.getElementById('category-select');
    if (categorySelect) {
      categorySelect.innerHTML = currentNiche.filterOptions.map((opt, i) => `
        <option value="opt_${i}">${opt}</option>
      `).join('');
    }
  }

  // Booking Form Submission & Feedback
  const bookingForm = document.getElementById('booking-filter-form');
  const alertSuccess = document.getElementById('booking-alert-success');
  const checkPricesBtn = document.getElementById('check-prices-btn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (checkPricesBtn) {
        checkPricesBtn.disabled = true;
        checkPricesBtn.innerHTML = '<span>Проверка доступности...</span>';
      }

      setTimeout(function() {
        if (checkPricesBtn) {
          checkPricesBtn.disabled = false;
          checkPricesBtn.innerHTML = '<span>Забронировано! ✓</span>';
        }
        if (alertSuccess) {
          alertSuccess.style.display = 'block';
          alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 700);
    });
  }
})();
