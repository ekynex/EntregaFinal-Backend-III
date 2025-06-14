# Proyecto Final - Backend III

## 📄 Descripción
Este proyecto es una API REST construida con Node.js, Express y MongoDB Atlas, documentada con Swagger.  
El objetivo es gestionar usuarios y procesos de adopción de mascotas.  
El proyecto está **dockerizado** para facilitar su despliegue.

---

## 🛠 Tecnologías utilizadas
- Node.js + Express  
- MongoDB Atlas  
- Swagger (OpenAPI 3.0)  
- Jest + Supertest  
- Docker

---

## 📌 Instrucciones de uso

### 1. Instalar dependencias (modo local)
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm start
```

### 3. Correr tests funcionales
```bash
npm test
```

### 4. Construir imagen local con Docker
```bash
docker build -t entrega-final .
```

### 5. Ejecutar contenedor con variables de entorno
```bash
docker run -p 3000:3000 --env-file .env entrega-final
```

### 6. Acceder a la documentación Swagger
Una vez ejecutado el contenedor, entra a:
http://localhost:3000/api-docs

---

## ☁️ Imagen en DockerHub

La imagen ya está publicada públicamente en DockerHub:  
🔗 https://hub.docker.com/r/matiasponce/entrega-final

### Descargar imagen
```bash
docker pull matiasponce/entrega-final
```

### Ejecutar imagen desde DockerHub
```bash
docker run -p 3000:3000 --env-file .env matiasponce/entrega-final
```

---

## 📁 Estructura del proyecto
```
Entrega-Final/
│
├── src/
│   ├── config/
│   ├── routes/
│   ├── tests/
│   ├── docs/
│   └── server.js
│
├── .env
├── Dockerfile
├── README.md
└── package.json
```

---

## ✍️ Autor
Matías Ponce  
Proyecto final - Curso Backend III | Coderhouse
