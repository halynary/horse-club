# Публікація horse-club на GitHub Pages

Проєкт підготовлено з коміту 24d29c0c3b2c1fa00d34ed3c61596bf37166b838.
Збірку npm run build перевірено успішно.

1. Розпакуйте архів.
2. Скопіюйте вміст папки horse-club до своєї локальної папки репозиторію horse-club із заміною файлів. Важливо скопіювати також папку .github.
3. У GitHub Desktop перегляньте зміни, зробіть Commit і натисніть Push origin.
4. Відкрийте https://github.com/halynary/horse-club/settings/pages
5. У Build and deployment → Source виберіть GitHub Actions.
6. На вкладці Actions відкрийте Deploy to GitHub Pages. Якщо попередній запуск не вдався до ввімкнення Pages, натисніть Re-run all jobs або Run workflow для гілки main.
7. Після успішного завершення сайт буде доступний: https://halynary.github.io/horse-club/

Наступні push у main автоматично збиратимуть та публікуватимуть сайт.
Сторінки навігації використовують адреси з #, щоб оновлення сторінки працювало на GitHub Pages.

Що змінено:
- .github/workflows/deploy.yml: автоматична збірка й публікація frontend/dist.
- frontend/vite.config.js: base /horse-club/.
- frontend/package.json і package-lock.json: збірка JSX через Vite, Sass у залежностях фронтенду.
- frontend/src/main.jsx: HashRouter для статичного хостингу.
- frontend/src/componets/SidebarMenu/SidebarMenu.jsx: виправлено шлях до іконки коня.

frontend/dist містить готову збірку для /horse-club/. Вона не додається до git: workflow збирає її автоматично.
GitHub Pages показуватиме поточний інтерфейс проєкту. У вихідному проєкті розділи меню ще не мають окремих реалізованих сторінок.

Локальна перевірка з папки frontend:
npm ci
npm run build
npm run preview
Відкрийте адресу, яку надрукує Vite, з /horse-club/ у кінці.
