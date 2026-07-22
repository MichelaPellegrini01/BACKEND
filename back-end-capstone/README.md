# Happy Tail - Backend

Backend della web application Happy Tail, sviluppato con Node.js, Express e MongoDB.
Il backend gestisce l'autenticazione degli utenti, le operazioni CRUD sulle razze canine, le recensioni e il caricamento delle immagini tramite Cloudinary.

## Tecnologie utilizzate

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Cloudinary
- Multer
- Dotenv
- CORS
- Bcrypt

## Funzionalità

- Registrazione utenti
- Login con autenticazione JWT
- CRUD completo delle razze canine
- CRUD delle recensioni
- Upload immagini con Cloudinary
- Gestione utenti amministratori
- Connessione a MongoDB Atlas

## Installazione

Installare le dipendenze:

```bash
npm install
```

Avviare il server:

```bash
npm run dev
```

## Variabili d'ambiente

Creare un file `.env` nella root del progetto.

```env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## API

https://happy-tail-backend.onrender.com

## Frontend

Il frontend dell'applicazione è disponibile nel repository dedicato:

https://github.com/MichelaPellegrini01/FRONTEND

## Autore

Michela Pellergini
GitHub: https://github.com/MichelaPellegrini01