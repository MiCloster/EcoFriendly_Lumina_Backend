# EcoFriendly_Lumina_Backend

Este es el backend del proyecto **EcoFriendly Lumina**, una API desarrollada con Node.js y Express que proporciona información sobre productos ecofriendly y cruelty-free. La aplicación no realiza ventas directas, sino que se enfoca en recomendaciones de productos sustentables.

## Tecnologías utilizadas

- **Node.js**
- **Express**
- **Sequelize** (ORM para PostgreSQL)
- **PostgreSQL**
- **dotenv** (Manejo de variables de entorno)
- **Nodemon** (para desarrollo)

## Instalación y configuración

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tu_usuario/EcoFriendly_Lumina_Backend.git
   cd EcoFriendly_Lumina_Backend
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Configurar variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto.
   - Agregar las siguientes variables:
     ```env
     DB_HOST=tu_host
     DB_USER=tu_usuario
     DB_PASSWORD=tu_contraseña
     DB_NAME=tu_basededatos
     DB_PORT=5432
     ```

## Uso

### Modo desarrollo
   ```sh
   npm run dev
   ```

### Modo producción
   ```sh
   npm start
   ```

## Endpoints

La API cuenta con los siguientes endpoints:

### Productos (`/products`)

| Método | Endpoint          | Descripción                      |
|--------|------------------|----------------------------------|
| GET    | `/products`      | Obtener todos los productos     |
| GET    | `/products/:id`  | Obtener un producto por ID      |
| POST   | `/products`      | Crear un nuevo producto         |
| PUT    | `/products/:id`  | Actualizar un producto          |
| DELETE | `/products/:id`  | Eliminar un producto            |


