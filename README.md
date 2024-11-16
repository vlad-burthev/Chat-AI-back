# Инструкция по запуску проекта с сервером на NestJS и фронтом на Next.js

## Структура проекта

Проект состоит из двух частей:

- **`backend/`** — серверная
- **`frontend/`** — фронтенд

## Шаги для запуска

### 1. Настройка серверной части (NestJS)

1. Перейдите в каталог серверной части:

   ```bash
   cd backend
   npm install
   ```

#### Создайте файл .env в каталоге backend и добавьте настройки для базы данных и AI-секрета:

```bash
PORT=порт_для_сервера

DB_NAME=имя_бд
DB_USER=postgres
DB_PASS=пароль_от_бд
DB_PORT=порт_бд
DB_HOST=хост_бд

https://dashboard.cohere.com/
AI_SECRET=ключ_для_ии

```

### Запуск

```bash
npm run start:dev
```

## Настройка фронтенда (Next.js)

```bash
cd frontend
npm install
npm run dev
```
