// Dynamic URL Parameters Parser and Landing Engine
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Customization parameters from query string
  const brandName = urlParams.get('brand') || urlParams.get('name') || 'Бизнес Концепт';
  const category = urlParams.get('category') || urlParams.get('niche') || 'Услуги и сервис';
  const city = urlParams.get('city') || 'Челябинск';
  const address = urlParams.get('address') || 'ул. Бейвеля / ул. Хариса Юсупова';
  const phone = urlParams.get('phone') || '+7 (999) 000-00-00';

  // Apply to Document and Header
  document.title = `${brandName} — Официальный сайт (${city})`;
  const brandEl = document.getElementById('brand-name');
  if (brandEl) brandEl.textContent = brandName;

  const footerBrand = document.getElementById('footer-brand');
  if (footerBrand) footerBrand.textContent = brandName;

  const heroTag = document.getElementById('hero-tag');
  if (heroTag) heroTag.textContent = `Качественный сервис • ${category}`;

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `Современные решения и надежный сервис для <span class="gradient-text">${city}</span>`;
  }

  const heroCity = document.getElementById('hero-city');
  if (heroCity) heroCity.textContent = city;

  const aboutAddress = document.getElementById('about-address');
  if (aboutAddress) {
    aboutAddress.textContent = `Удобный подъезд по адресу: ${city}, ${address}. Всегда свободная парковка.`;
  }

  const contactAddress = document.getElementById('contact-address');
  if (contactAddress) contactAddress.textContent = `${city}, ${address}`;

  const contactPhone = document.getElementById('contact-phone');
  if (contactPhone) {
    contactPhone.textContent = phone;
    contactPhone.href = `tel:${phone.replace(/[^\d+]/g, '')}`;
  }

  const yandexMapBtn = document.getElementById('yandex-map-btn');
  if (yandexMapBtn) {
    yandexMapBtn.href = `https://yandex.ru/maps/?text=${encodeURIComponent(`${brandName} ${city} ${address}`)}`;
  }

  // Niche-tailored content presets
  const nichePresets = {
    beauty: {
      services: [
        { icon: '💅', title: 'Маникюр и авторский педикюр', desc: 'Стерильные инструменты, премиальные покрытия и стойкость от 3-х недель.', points: ['Аппаратная обработка', 'Выравнивание и укрепление', 'Снятие в подарок'], price: 'от 1 800 ₽' },
        { icon: '✨', title: 'Сложные техники окрашивания', desc: 'AirTouch, Shatush, Balayage с бережным сохранением структуры волос.', points: ['Премиальные красители', 'Уход-защита Olaplex', 'Точный подбор оттенка'], price: 'от 4 500 ₽' },
        { icon: '🧖‍♀️', title: 'Комплексный SPA-уход & массаж', desc: 'Глубокое восстановление, расслабление и оздоровление кожи.', points: ['Органическая косметика', 'Индивидуальная программа', 'Чайная церемония'], price: 'от 2 500 ₽' }
      ],
      news: [
        { tag: 'Скидка недели', title: '-15% на первый визит к топ-мастеру', desc: 'Запишитесь на любую услугу через форму на сайте и получите скидку на дебютное посещение.', date: 'До конца месяца' },
        { tag: 'Новинка', title: 'Премиальная линейка японского ухода', desc: 'В салон поступила новая сертифицированная коллекция салонных уходов для восстановления волос.', date: 'Свежее поступление' },
        { tag: 'Бонус', title: 'Подарочные сертификаты с доставкой', desc: 'Электронные и дизайнерские печатные сертификаты на любые суммы и комплексы процедур.', date: 'В наличии' }
      ]
    },
    auto: {
      services: [
        { icon: '🔧', title: 'Комплексное ТО и диагностика', desc: 'Полная компьютерная проверка всех систем авто перед сезоном или дальней поездкой.', points: ['Проверка 45 параметров', 'Чтение ошибок сканером', 'Оригинальные расходники'], price: 'от 2 000 ₽' },
        { icon: '🚜', title: 'Ремонт узлов и спецтехники', desc: 'Ремонт гидравлики, коробок передач, подвески и выхлопных систем любой сложности.', points: ['Гарантия 12 месяцев', 'Собственный склад запчастей', 'Опытные мотористы'], price: 'от 3 500 ₽' },
        { icon: '⚡', title: 'Экспресс-замена масел и жидкостей', desc: 'Быстрое обслуживание без очередей по предварительной записи за 30 минут.', points: ['Масла ведущих брендов', 'Замена фильтров', 'Бесплатный осмотр подвески'], price: 'от 1 200 ₽' }
      ],
      news: [
        { tag: 'Акция', title: 'Бесплатная диагностика подвески при замене масла', desc: 'Пройдите плановое обслуживание и получите полный отчет о состоянии ходовой части бесплатно.', date: 'Актуально сейчас' },
        { tag: 'Спецпредложение', title: 'Подготовка автомобиля к сезону', desc: 'Пакетное предложение: проверка аккумулятора, тормозной системы и заправка кондиционера со скидкой 20%.', date: 'Сезонное предложение' },
        { tag: 'Запчасти', title: 'Прямые поставки запчастей без наценки', desc: 'Доставка деталей для иномарок и спецтехники за 24 часа напрямую от дистрибьюторов.', date: 'В наличии на складе' }
      ]
    },
    engineering: {
      services: [
        { icon: '🚰', title: 'Инженерная сантехника и фитинги', desc: 'Трубы, краны, коллекторы и запорная арматура проверенных производителей.', points: ['В наличии на складе', 'Сертификаты ГОСТ', 'Оптовые цены для мастеров'], price: 'от 350 ₽' },
        { icon: '⚡', title: 'Кабель, автоматика и щитовое оборудование', desc: 'Все для надежной электропроводки, автоматические выключатели и УЗО.', points: ['ГОСТ кабель (ВВГ-Пнг)', 'ABB, Schneider, IEK', 'Резерв за 15 минут'], price: 'от 500 ₽' },
        { icon: '🛠️', title: 'Подбор и комплектация под проект', desc: 'Быстрый расчет сметы по проекту или списку мастера в WhatsApp с доставкой на объект.', points: ['Расчет за 20 минут', 'Скидка на объем от 10%', 'Возврат остатков'], price: 'Бесплатно' }
      ],
      news: [
        { tag: 'Для мастеров', title: 'Клуб постоянных монтажников со спецценами', desc: 'Подключайтесь к партнерской программе и получайте максимальные скидки на опт.', date: 'Действует постоянно' },
        { tag: 'Поступление', title: 'Новая поставка коллекторных групп и насосов', desc: 'Расширение складского ассортимента оборудования для водяного теплого пола.', date: 'Новинки каталога' },
        { tag: 'Доставка', title: 'Срочная доставка на объект по звонку за 2 часа', desc: 'Не останавливайте стройку: привезем необходимые комплектующие прямо к подъезду.', date: 'Ежедневно' }
      ]
    },
    driving: {
      services: [
        { icon: '🚗', title: 'Обучение на категорию «B» (МКПП/АКПП)', desc: 'Полный теоретический и практический курс с сопровождением в ГИБДД.', points: ['Удобный график занятий', 'Рассрочка 0% без банка', 'Новые иномарки'], price: 'от 24 900 ₽' },
        { icon: '🏍️', title: 'Категория «A» — курс вождения мотоцикла', desc: 'Закрытый оборудованный автодром, профессиональная экипировка и тренеры.', points: ['Собственная мото-площадка', 'Отработка баланса и контрманевров', 'Сдача экзамена'], price: 'от 18 000 ₽' },
        { icon: '🎯', title: 'Восстановление навыков вождения', desc: 'Индивидуальные занятия с инструктором по городским маршрутам и парковке.', points: ['Преодоление страха потока', 'Маршрут дом-работа', 'Отработка сложных перекрестков'], price: 'от 1 500 ₽/час' }
      ],
      news: [
        { tag: 'Набор группы', title: 'Старт новой вечерней группы в этом месяце', desc: 'Осталось 4 свободных места. Зафиксируйте стоимость обучения со скидкой 3000 ₽.', date: 'Идет запись' },
        { tag: 'Рассрочка', title: 'Обучение в рассрочку от 2 500 ₽ в месяц', desc: 'Оплачивайте учебу частями на протяжении всего периода вождения без переплат.', date: 'Без первого взноса' },
        { tag: 'Онлайн', title: 'Теория онлайн в мобильном приложении', desc: 'Изучайте ПДД в удобное время с разбором билетов и поддержкой преподавателя 24/7.', date: 'Доступ сразу' }
      ]
    },
    general: {
      services: [
        { icon: '⭐', title: 'Базовый пакет услуг', desc: 'Оптимальное решение для типовых задач с фиксированной гарантией результата.', points: ['Быстрое согласование', 'Официальный договор', 'Прозрачная смета'], price: 'от 1 500 ₽' },
        { icon: '🚀', title: 'Комплексное обслуживание под ключ', desc: 'Полный цикл работ с индивидуальным подходом и персональным менеджером.', points: ['Контроль качества', 'Соблюдение дедлайнов', 'Гарантия до 2-х лет'], price: 'от 4 900 ₽' },
        { icon: '💎', title: 'Премиум / Экспресс-формат', desc: 'Максимальный приоритет, оперативное исполнение и индивидуальные условия.', points: ['Выезд в день обращения', 'Персональный подход', 'Поддержка 24/7'], price: 'от 9 900 ₽' }
      ],
      news: [
        { tag: 'Сезонное предложение', title: 'Специальная цена на комплексные заказы', desc: 'При заказе двух и более услуг предоставляется приятная скидка 15%.', date: 'Специальные условия' },
        { tag: 'Обновление', title: 'Мы улучшили стандарты обслуживания клиентов', desc: 'Внедрили мгновенные уведомления в мессенджерах и сократили время ответа до 10 минут.', date: 'Новый сервис' },
        { tag: 'Подарки', title: 'Бонусная программа для постоянных клиентов', desc: 'Копите баллы за каждое обращение и оплачивайте ими до 30% стоимости следующих заказов.', date: 'Программа лояльности' }
      ]
    }
  };

  // Determine niche key
  const catLower = (category + ' ' + brandName).toLowerCase();
  let selectedNiche = 'general';
  if (catLower.includes('бьюти') || catLower.includes('салон') || catLower.includes('красот') || catLower.includes('маникюр') || catLower.includes('стрижк')) {
    selectedNiche = 'beauty';
  } else if (catLower.includes('авто') || catLower.includes('сервис') || catLower.includes('техник') || catLower.includes('машин') || catLower.includes('ремонт авто')) {
    selectedNiche = 'auto';
  } else if (catLower.includes('сантехник') || catLower.includes('электрик') || catLower.includes('труб') || catLower.includes('инженер')) {
    selectedNiche = 'engineering';
  } else if (catLower.includes('школ') || catLower.includes('автошкол') || catLower.includes('обучен') || catLower.includes('права')) {
    selectedNiche = 'driving';
  }

  const nicheData = nichePresets[selectedNiche] || nichePresets.general;

  // Render Services
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid) {
    servicesGrid.innerHTML = nicheData.services.map(s => `
      <div class="service-card">
        <div class="service-card-top">
          <span class="s-icon">${s.icon}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <ul class="s-points">
            ${s.points.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
        <div class="service-card-bottom">
          <span class="s-price">${s.price}</span>
          <a href="#booking" class="btn btn-secondary btn-sm">Выбрать →</a>
        </div>
      </div>
    `).join('');
  }

  // Render News
  const newsGrid = document.getElementById('news-grid');
  if (newsGrid) {
    newsGrid.innerHTML = nicheData.news.map(n => `
      <div class="news-card">
        <div>
          <span class="news-tag">${n.tag}</span>
          <h3>${n.title}</h3>
          <p>${n.desc}</p>
        </div>
        <div class="news-date">📅 ${n.date}</div>
      </div>
    `).join('');
  }

  // Booking Form submit simulation
  const bookingForm = document.getElementById('booking-form');
  const formSuccess = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');

  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Отправка...';

      setTimeout(function() {
        submitBtn.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }, 700);
    });
  }
})();
