# Proyecto TFG

## 1. Requisitos previos

* Node.js versión LTS (v18 o superior)
* npm (v9 o superior)
* PHP 8.2 o superior
* Composer
* MySQL 8+
* Extensiones PHP necesarias: mbstring, bcmath, xml, curl, zip, intl, gd, mysql

---

## 2. Clonar el repositorio

```bash
git clone https://github.com/gorka6/tfg
cd tfg
```

---

## 3. Instalar dependencias del backend

```bash
composer install --no-interaction --prefer-dist
```

---

## 4. Instalar dependencias del frontend

```bash
npm install
```

---

## 5. Configurar archivo .env

```bash
cp .env.example .env
```

Editar `.env` con la configuración de base de datos y entorno.

---

## 6. Migrar tablas y seedearlas

```bash
php artisan migrate --seed
```

---

## 7. Ejecutar entorno de desarrollo

### Backend

```bash
php artisan serve
```

### Frontend

```bash
npm run dev
```

---
