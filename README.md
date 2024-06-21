## Стажировка в АТОН (Fullstack-разработчик)

### Задание

1. Синтезировать данные для базы данных:

**Таблица клиентов**
Номер счета
Фамилия
Имя
Отчество
Дата рождения
ИНН
ФИО ответственного
Статус (по умолчанию «Не в работе»)

**Таблица пользователей**
ФИО
Логин
Пароль

2. Создать интерфейс для обращения к синтезированным данным:

- Форма для авторизации по паре логин/пароль
- После показать таблицу клиентов авторизованного пользователя по связи ФИО из таблицы пользователей – ФИО ответственного
- Пользователь должен иметь возможность изменить статус клиента на «В работе», «Отказ», «Сделка закрыта»

### Использование
Для тестирования приложения (также можно создать нового пользователя, но у него не будет клиентов)
```логин: admin```
```пароль: main_pass```

### Технологический стек

**Фронтенд**

код: 
https://github.com/mariaklyass/test-frontend

Саязка Next.js / TypeScript / TailwindCSS, для форм и валидации React-hook-form и Zod

![frontend](https://github.com/mariaklyass/test-frontend/assets/110608602/4fba2636-8110-4d8a-9ed4-eb6c29781d76)

**Бекенд**

REST API на Node.js / Express

код:
https://github.com/mariaklyass/test-api
![backend](https://github.com/mariaklyass/test-frontend/assets/110608602/ed71efb5-073e-4452-b4d8-863f2348e8d4)

**База Данных**
MongoDB
![DB](https://github.com/mariaklyass/test-frontend/assets/110608602/71fcd955-0252-419f-bb16-286cc350f64f)

### Деплой

Фронт Vercel:
https://aton-internship.vercel.app/

Бек Render:
https://aton-internship-api.onrender.com/

База в Railway

Коллекция Постман для тестирования API
<br/>
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/32670769-4a300dfb-1bf5-4eb5-8208-a7fcb9984844?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D32670769-4a300dfb-1bf5-4eb5-8208-a7fcb9984844%26entityType%3Dcollection%26workspaceId%3Dd4e20fef-dafa-4ce3-b8ae-0e004c12fc2a)

### Локальная сборка

`git clone`
`npm i`
`npm run dev`

Фронтенд на порту http://localhost:3000/, бекенд на http://localhost:3500/
Необходимо создать .env с переменной MONGO_URI= для бекенда.
И в случае открытия на других портах, прописать их в массиве разрешенных для CORS.

### ToDo список

- ~~создание нового пользователя~~
- ~~валидация на клиенте~~
- ~~шифрование пароля~~
- изменение пароля через ФИО
- ~~сортировка, поиск~~
- аутентификация (JWT)
- роли (просмотр всех пользователей, переназначение отвественного лица Администратором, управление учетными записями и тд)
- стейт (Redux, RTK)
- ~~адаптивный дизайн~~
- тесты
