// ==========================================================================
// JavaScript - Dealex Profile (Updated)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================================================
    // Данные дел (из сайта dealex.ru)
    // ========================================================================
    const casesData = [
        {
            image: 'http://dealex.ru/Images/previews/paper-planes.jpg',
            logo: 'http://dealex.ru/Images/logos/paper-planes.jpg',
            client: 'ООО Бумажные самолетики',
            description: 'Комплексное правовое сопровождение, составление договоров, юридическая аналитика и разрешение судебных споров.',
            fullDescription: 'Юридическая компания Dealex оказала полный спектр юридических услуг для ООО "Бумажные самолетики": составление и правовая экспертиза договоров, разработка локальных нормативных актов, юридическая аналитика по сложным правовым вопросам, представление интересов в судебных разбирательствах. Результат: успешно разрешены все судебные споры, заключены выгодные контракты.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/pridex-group.jpg',
            logo: 'http://dealex.ru/Images/logos/pridex-group.jpg',
            client: 'Pridex Group',
            description: 'Согласование и составление договоров, протоколов разногласий, исковых заявлений и правовых заключений.',
            fullDescription: 'Комплексное правовое сопровождение деятельности Pridex Group. В рамках сотрудничества были согласованы и составлены: договоры аренды, поставки, подряда, протоколы разногласий к договорам, исковые заявления в суд, правовые заключения по вопросам корпоративного права и сделок с недвижимостью.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/infintrust.jpg',
            logo: 'http://dealex.ru/Images/logos/infintrust.jpg',
            client: 'ООО ИКГ Инфинтраст (ГК Вертолеты России)',
            description: 'Сопровождение проекта по строительству офисного комплекса Холдинга «Вертолеты России».',
            fullDescription: 'Успешное правовое сопровождение крупнейшего проекта по строительству офисного комплекса для Холдинга "Вертолеты России". В обязанности входило: сопровождение сделок с земельными участками, согласование проектной документации, взаимодействие с государственными органами, защита интересов заказчика в спорах с подрядчиками.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/ECR-Dealex.jpg',
            logo: 'http://dealex.ru/Images/logos/ecr.png',
            client: 'ECR Russia',
            description: 'Правовая экспертиза в области электронного документооборота и внедрения ЭДО.',
            fullDescription: 'Проведена комплексная правовая экспертиза по вопросам внедрения электронного документооборота (ЭДО) в компании ECR Russia. Подготовлены правовые заключения по вопросам юридической силы электронных документов, соответствия законодательству о персональных данных, требованиям 152-ФЗ.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/otziv%20Shtab.jpeg',
            logo: 'http://dealex.ru/Images/logos/shtab.jpg',
            client: 'Штаб по защите бизнеса',
            description: 'Юридическая экспертиза по обращениям предпринимателей, подготовка правовых справок и комментариев.',
            fullDescription: 'Оказание юридической экспертизы по обращениям предпринимателей в рамках работы Штаба по защите бизнеса. Подготовлены правовые справки и экспертные комментарии по актуальным вопросам предпринимательской деятельности, участию в государственных закупках, защите прав собственности.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/3390_001_page-0001.jpg',
            logo: 'http://dealex.ru/Images/logos/%D0%90%D0%B2%D0%B5%D1%80%D0%B1%D1%83%D1%85%20(1).png',
            client: 'Илья Авербух',
            description: 'Консультирование по правовым вопросам и защита в судебных разбирательствах.',
            fullDescription: 'Комплексное правовое сопровождение деятельности известного продюсера и телеведущего. Консультирование по вопросам интеллектуальной собственности, защита авторских прав, представление интересов в судебных разбирательствах, сопровождение сделок с медиа-правами.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/Skillbox.jpeg',
            logo: 'http://dealex.ru/Images/logos/skillbox.png',
            client: 'Skillbox',
            description: 'Правовое сопровождение онлайн университета, договорное право и защита интеллектуальной собственности.',
            fullDescription: 'Успешное правовое сопровождение деятельности онлайн-университета Skillbox. Разработка шаблонов договоров, правовая экспертиза образовательных программ, защита интеллектуальной собственности, сопровождение сделок с преподавателями и партнерами.',
            docUrl: '#'
        },
        {
            image: 'http://dealex.ru/Images/previews/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20Dealex.jpg',
            logo: 'http://dealex.ru/Images/logos/2025-10-21_16-00-21%20(2).png',
            client: 'Meesenburg',
            description: 'Комплексная проверка юридического лица (due diligence) приобретаемой компании.',
            fullDescription: 'Проведена комплексная правовая проверка (due diligence) компании-цели при сделке слияния и поглощения. В результате проверки выявлены риски, которые были учтены при определении условий сделки, что позволило избежать значительных финансовых потерь.',
            docUrl: '#'
        }
    ];

    // ========================================================================
    // Данные отзывов
    // ========================================================================
    const reviewsData = [
        {
            avatar: 'http://dealex.ru/Images/logos/paper-planes.jpg',
            name: 'Белякова А.Д.',
            company: 'Генеральный директор ООО Бумажные самолетики',
            text: 'Благодарим команду юридической компании Dealex за эффективную и квалифицированную правовую помощь в различных юридических вопросах.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/pridex-group.jpg',
            name: 'Константин Анашкин',
            company: 'Генеральный директор Pridex Group',
            text: 'Юридической компанией Dealex были оказаны юридические услуги по согласованию и составлению различных видов договоров.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/infintrust.jpg',
            name: 'Калинин В.И.',
            company: 'Генеральный директор ООО ИКГ Инфинтраст',
            text: 'Выражаем благодарность управляющему партнеру Рассохину В.В. за успешное правовое сопровождение проекта.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/ecr.png',
            name: 'Мусселиус М.С.',
            company: 'Исполнительный директор ECR Russia',
            text: 'Выражаем благодарность юридической компании Dealex за предоставление правовой экспертизы в области ЭДО.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/shtab.jpg',
            name: 'А.Л. Мальцан',
            company: 'Начальник Управления Штаба по защите бизнеса',
            text: 'Управление особо отмечает вклад в части юридической экспертизы по обращениям предпринимателей.'
        },
        {
            avatar: 'http://dealex.ru/Images/logos/skillbox.png',
            name: 'Крутов Д.В.',
            company: 'Генеральный директор Skillbox',
            text: 'Благодарим команду Dealex за успешное правовое сопровождение онлайн университета.'
        }
    ];

    let uploadedAvatar = null;

    // ========================================================================
    // Рендер дел
    // ========================================================================
    function renderCases() {
        const container = document.getElementById('casesContainer');
        if (!container) return;

        casesData.forEach((caseItem, index) => {
            const card = document.createElement('div');
            card.className = 'case-card';
            card.onclick = () => openCaseModal(index);
            card.innerHTML = `
                <img src="${caseItem.image}" alt="${caseItem.client}" class="case-image" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjdmYWZjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmaWxsPSIjNTFhNTFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gaW1hZ2U8L3RleHQ+PC9zdmc+'">
                <div class="case-content">
                    <div class="case-client">
                        <img src="${caseItem.logo}" alt="${caseItem.client}" class="case-avatar"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiMxZTNhNWYiLz48dGV4dCB4PSIyNSIgeT0iMzAiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSI+RDwvdGV4dD48L3N2Zz4='">
                        <span class="case-client-name">${caseItem.client}</span>
                    </div>
                    <p class="case-description">${caseItem.description}</p>
                    <div>
                        <button class="case-doc-btn" onclick="event.stopPropagation(); showDocAlert('${caseItem.client}')">
                            <i class="fas fa-file-alt"></i> Документ
                        </button>
                        <button class="case-view-btn" onclick="event.stopPropagation(); openCaseModal(${index})">
                            <i class="fas fa-eye"></i> Подробнее
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // ========================================================================
    // Модальное окно дела
    // ========================================================================
    window.openCaseModal = function(index) {
        const caseItem = casesData[index];
        const modal = document.getElementById('caseModal');
        const content = document.getElementById('caseModalContent');
        
        if (!modal || !content) return;
        
        content.innerHTML = `
            <div class="case-modal-header">
                <img src="${caseItem.image}" alt="${caseItem.client}" class="case-modal-image"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjdmYWZjIi8+PC9zdmc+'">
                <div class="case-modal-info">
                    <img src="${caseItem.logo}" alt="${caseItem.client}" class="case-modal-logo"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMxZTNhNWYiLz48L3N2Zz4='">
                    <h3 class="case-modal-title">${caseItem.client}</h3>
                </div>
            </div>
            <div class="case-modal-description">
                <h4>Описание проекта:</h4>
                <p>${caseItem.fullDescription || caseItem.description}</p>
            </div>
            <button class="case-modal-close-btn" onclick="closeCaseModal()">Закрыть</button>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeCaseModal = function() {
        const modal = document.getElementById('caseModal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    // ========================================================================
    // Рендер отзывов
    // ========================================================================
    function renderReviews() {
        const container = document.getElementById('reviewsContainer');
        if (!container) return;

        reviewsData.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="review-header">
                    <img src="${review.avatar}" alt="${review.name}" class="review-avatar"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMxZTNhNWYiLz48dGV4dCB4PSIzMCIgeT0iMzUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSI+UzwvdGV4dD48L3N2Zz4='">
                    <div>
                        <div class="review-author">${review.name}</div>
                        <div class="review-company">${review.company}</div>
                    </div>
                </div>
                <p class="review-text">"${review.text}"</p>
            `;
            container.appendChild(card);
        });
    }

    // ========================================================================
    // Стрелки для листания дел
    // ========================================================================
    function initCasesNavigation() {
        const prevBtn = document.getElementById('casesPrev');
        const nextBtn = document.getElementById('casesNext');
        const container = document.getElementById('casesContainer');
        
        if (!prevBtn || !nextBtn || !container) return;

        const scrollAmount = 320;

        prevBtn.addEventListener('click', () => {
            container.parentElement.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            container.parentElement.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // ========================================================================
    // Переключение блоков
    // ========================================================================
    function initBlockNavigation() {
        const blockButtons = document.querySelectorAll('.block-btn');
        const contentBlocks = document.querySelectorAll('.content-block');

        blockButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetBlock = btn.dataset.block;
                blockButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                contentBlocks.forEach(block => {
                    block.classList.remove('active');
                    if (block.id === `${targetBlock}-block`) {
                        block.classList.add('active');
                    }
                });

                document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // ========================================================================
    // Переключение языка (только RU и EN)
    // ========================================================================
    function initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        const translations = {
            ru: {
                cases: 'Успешные дела',
                reviews: 'Отзывы клиентов',
                contact: 'Оставить заявку',
                map: 'Наш офис',
                addReview: 'Оставить отзыв',
                yourName: 'Ваше имя',
                uploadPhoto: 'Загрузить фото',
                yourSurname: 'Ваша фамилия',
                phone: 'Номер телефона',
                message: 'Заявка',
                send: 'Отправить заявку',
                privacy: 'Я согласен на обработку персональных данных',
                goToSite: 'Перейти на Dealex.ru'
            },
            en: {
                cases: 'Successful Cases',
                reviews: 'Client Reviews',
                contact: 'Leave a Request',
                map: 'Our Office',
                addReview: 'Leave a Review',
                yourName: 'Your Name',
                uploadPhoto: 'Upload Photo',
                yourSurname: 'Your Surname',
                phone: 'Phone Number',
                message: 'Message',
                send: 'Send Request',
                privacy: 'I agree to the processing of personal data',
                goToSite: 'Go to Dealex.ru'
            }
        };

        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const trans = translations[lang];
                if (trans) {
                    document.querySelector('#cases-block .block-title').textContent = trans.cases;
                    document.querySelector('#reviews-block .block-title').textContent = trans.reviews;
                    document.querySelector('#contact-block .block-title').textContent = trans.contact;
                    document.querySelector('#map-block .block-title').textContent = trans.map;
                    document.querySelector('.add-review-form h3').textContent = trans.addReview;
                    document.querySelector('label[for="name"]').textContent = trans.yourName;
                    document.querySelector('label[for="surname"]').textContent = trans.yourSurname;
                    document.querySelector('label[for="phone"]').textContent = trans.phone;
                    document.querySelector('label[for="message"]').textContent = trans.message;
                    document.querySelectorAll('.submit-btn').forEach(btn => btn.textContent = trans.send);
                    
                    const avatarLabel = document.querySelector('.avatar-label');
                    if (avatarLabel) avatarLabel.innerHTML = `<i class="fas fa-camera"></i> ${trans.uploadPhoto}`;
                    
                    const checkboxLabel = document.querySelector('.checkbox-group label');
                    if (checkboxLabel) checkboxLabel.innerHTML = `${trans.privacy}`;
                    
                    const siteLink = document.querySelector('.site-link-btn span');
                    if (siteLink) siteLink.textContent = trans.goToSite;
                }
            });
        });
    }

    // ========================================================================
    // Переключение темы
    // ========================================================================
    function initThemeSwitcher() {
        const lightBtn = document.getElementById('lightTheme');
        const darkBtn = document.getElementById('darkTheme');

        lightBtn?.addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'light');
            lightBtn.classList.add('active');
            darkBtn?.classList.remove('active');
        });

        darkBtn?.addEventListener('click', () => {
            document.body.setAttribute('data-theme', 'dark');
            darkBtn.classList.add('active');
            lightBtn?.classList.remove('active');
        });
    }

    // ========================================================================
    // Модальное окно политики конфиденциальности
    // ========================================================================
    function initPrivacyModal() {
        const openBtn = document.getElementById('openPrivacy');
        const closeBtn = document.getElementById('closePrivacy');
        const modal = document.getElementById('privacyModal');

        openBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            modal?.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn?.addEventListener('click', () => {
            modal?.classList.remove('active');
            document.body.style.overflow = '';
        });

        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Закрытие модального окна дела
        const closeCaseBtn = document.getElementById('closeCase');
        const caseModal = document.getElementById('caseModal');
        
        closeCaseBtn?.addEventListener('click', closeCaseModal);

        caseModal?.addEventListener('click', (e) => {
            if (e.target === caseModal) closeCaseModal();
        });

        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal?.classList.remove('active');
                closeCaseModal();
                document.body.style.overflow = '';
            }
        });
    }

    // ========================================================================
    // Загрузка аватара для отзыва
    // ========================================================================
    function initAvatarUpload() {
        const fileInput = document.getElementById('reviewerAvatarFile');
        const preview = document.getElementById('avatarPreview');

        if (!fileInput || !preview) return;

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedAvatar = e.target.result;
                    preview.innerHTML = `<img src="${uploadedAvatar}" alt="Avatar">`;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // ========================================================================
    // Форма отзыва
    // ========================================================================
    function initReviewForm() {
        const form = document.getElementById('reviewForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('reviewerName').value;
            const text = document.getElementById('reviewText').value;
            const avatar = uploadedAvatar || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiIGZpbGw9IiMxZTNhNWYiLz48dGV4dCB4PSIzMCIgeT0iMzUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBkeT0iLjNlbSI+UzwvdGV4dD48L3N2Zz4=';

            const container = document.getElementById('reviewsContainer');
            const newReview = document.createElement('div');
            newReview.className = 'review-card';
            newReview.innerHTML = `
                <div class="review-header">
                    <img src="${avatar}" alt="${name}" class="review-avatar">
                    <div>
                        <div class="review-author">${name}</div>
                        <div class="review-company">Новый отзыв</div>
                    </div>
                </div>
                <p class="review-text">"${text}"</p>
            `;

            container?.insertBefore(newReview, container.firstChild);
            form.reset();
            uploadedAvatar = null;
            if (preview) preview.innerHTML = '<i class="fas fa-user"></i>';
            alert('Спасибо! Ваш отзыв добавлен.');
        });
    }

    // ========================================================================
    // Форма заявки
    // ========================================================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const surname = document.getElementById('surname').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const statusDiv = document.getElementById('formStatus');

            statusDiv.textContent = 'Отправка заявки...';
            statusDiv.className = '';
            statusDiv.style.display = 'block';

            try {
                const formData = { name, surname, phone, message, timestamp: new Date().toISOString() };
                console.log('Данные заявки:', formData);
                
                // Добавьте ваш Webhook URL для реальной отправки:
                // await fetch('YOUR_WEBHOOK_URL', {
                //     method: 'POST',
                //     headers: {'Content-Type': 'application/json'},
                //     body: JSON.stringify(formData)
                // });

                await new Promise(resolve => setTimeout(resolve, 1500));

                statusDiv.textContent = '✅ Заявка успешно отправлена! Мы свяжемся с вами.';
                statusDiv.className = 'success';
                form.reset();

            } catch (error) {
                statusDiv.textContent = '❌ Ошибка при отправке заявки.';
                statusDiv.className = 'error';
            }
        });

        // Маска для телефона
        const phoneInput = document.getElementById('phone');
        phoneInput?.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 1) value = '+' + value;
                if (value.length > 1 && value.length <= 4) value = '+' + value.slice(0,1) + ' (' + value.slice(1);
                if (value.length > 4 && value.length <= 7) value = '+' + value.slice(0,1) + ' (' + value.slice(1,4) + ') ' + value.slice(4);
                if (value.length > 7 && value.length <= 9) value = '+' + value.slice(0,1) + ' (' + value.slice(1,4) + ') ' + value.slice(4,7) + '-' + value.slice(7);
                if (value.length > 9 && value.length <= 11) value = '+' + value.slice(0,1) + ' (' + value.slice(1,4) + ') ' + value.slice(4,7) + '-' + value.slice(7,9) + '-' + value.slice(9,11);
            }
            e.target.value = value;
        });
    }

    // ========================================================================
    // Инициализация
    // ========================================================================
    renderCases();
    renderReviews();
    initCasesNavigation();
    initBlockNavigation();
    initLanguageSwitcher();
    initThemeSwitcher();
    initPrivacyModal();
    initAvatarUpload();
    initReviewForm();
    initContactForm();

});

// ========================================================================
// Глобальные функции
// ========================================================================

function showDocAlert(clientName) {
    alert('Документы по делу: ' + clientName + '\n\nВ демо-режиме документы недоступны.');
}
