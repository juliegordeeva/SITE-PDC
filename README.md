# Психология и развитие

Статический сайт психологической службы «Психология и развитие» (центр доказательной терапии). Готов к публикации на GitHub Pages без сборки и серверной части.

**SITE_URL (заглушка):** `https://juliegordeeva.github.io/SITE-PDC`

После смены домена или имени репозитория замените этот адрес в:

- `robots.txt`
- `sitemap.xml`
- canonical / Open Graph / JSON-LD во всех HTML-страницах

## Структура

```text
/
├── index.html
├── services.html
├── diagnostics.html
├── programs.html
├── team.html
├── contacts.html
├── privacy.html
├── consent.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── site.webmanifest
├── .nojekyll
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
└── references/
```

## Как открыть локально

1. Откройте `index.html` в браузере, или
2. Запустите простой сервер из корня проекта:

```bash
python3 -m http.server 8080
```

Затем перейдите на `http://localhost:8080`.

## Публикация на GitHub Pages

1. Убедитесь, что файлы в репозитории (сейчас: `juliegordeeva/SITE-PDC`).
2. На GitHub: **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `master` (или `main`), folder: `/ (root)`.
5. Сохраните. Сайт будет доступен по адресу вида:

`https://juliegordeeva.github.io/SITE-PDC/`

Файл `.nojekyll` отключает обработку Jekyll.

Все внутренние ссылки относительные и корректно работают в подпапке project site.

## Как заменить фотографии команды

Положите файлы WebP в:

- `assets/images/team/julia-desyatnikova.webp`
- `assets/images/team/alex-desatnik.webp`
- `assets/images/team/ksenia-makarova.webp`
- `assets/images/team/svetlana-romanchenko.webp`

Рекомендации:

- соотношение сторон **1:1**;
- размер около **800×800** (не меньше 600×600);
- формат **WebP**;
- нейтральный фон, лицо в кадре;
- осмысленный `alt` уже прописан в HTML.

Пока файла нет, сайт показывает плейсхолдер с инициалами. После добавления фото обновите страницу — скрипт скроет плейсхолдер при успешной загрузке.

## Как обновить контакты

Контакты сейчас:

- Telegram: https://t.me/Swetlana_Romanchenko
- Телефон: +7 (925) 459-88-88
- Email: sar.romanchenko@gmail.com
- Адрес: Москва, ул. Большая Молчановка, 12, стр. 1

Ищите эти значения в шапке, подвале и `contacts.html`.

## Заявки (mailto)

На сайте нет формы с полями. Заявка по email открывает почтовый клиент пользователя письмом на `sar.romanchenko@gmail.com` (готовая тема письма). Также доступны Telegram и телефон. Сторонние таблицы и CRM не используются.

## TODO перед полноценной публикацией

- [ ] Подставить в `privacy.html` и `consent.html` ФИО/наименование оператора, ИНН, ОГРНИП и юридический адрес клиента
- [ ] Добавить фотографии команды (WebP)
- [ ] Подтвердить, нужно ли публиковать тесты Векслера / Равена / дислексию как отдельные услуги
- [ ] При необходимости указать возраст, число встреч, даты и стоимость программ
- [ ] Заменить `SITE_URL`, если изменится адрес Pages или появится свой домен
- [ ] Скопировать HTML-прототип в `references/`, если он понадобится для сверки
- [ ] Передать репозиторий на GitHub-аккаунт клиента (Settings → Transfer ownership)

## Референсы

- PDF-прототип: `references/PDC.pdf`
- LGEG (настроение и структура услуг, не копировать): https://lgeg.ru/psychology
