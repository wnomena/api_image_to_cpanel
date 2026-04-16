# API Image to CPanel

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)

## 📋 Présentation

Cette API REST robuste centralise la gestion des fichiers multimédias pour plusieurs applications. Elle permet de téléverser, récupérer et supprimer des fichiers avec une intégration transparente à cPanel, offrant une solution unifiée de stockage d'images pour vos services.

## 🎯 Objectif

Éliminer la duplication de code et les configurations répétitives en fournissant un service centralisé de gestion des images, accessible par toutes les applications du groupe.

## 🛠️ Stack Technique

- **Framework** : Express.js 5.1.0
- **Gestion des fichiers** : Multer 2.0.2
- **Contrôle d'accès** : CORS 2.8.5
- **Environnement de développement** : Nodemon 3.1.10
- **Runtime** : Node.js

## 📦 Composants du Projet

### Structure Modulaire

- **`index.js`** : Point d'entrée principal de l'application et configuration du serveur Express
- **`Image/`** : Module de gestion des opérations sur les images
  - `insertimage` : Insertion de nouvelles images
  - `getImage` : Récupération des fichiers stockés
  - `deleteImage` : Suppression sécurisée des fichiers
- **`multer/`** : Configuration et middleware pour le traitement des uploads
  - `multer.js` : Configuration du stockage et des validations

## 🚀 Fonctionnalités

✅ Upload multi-fichiers sécurisé  
✅ API RESTful avec endpoints CRUD complets  
✅ Gestion des erreurs robuste  
✅ Support CORS pour les requêtes cross-origin  
✅ Suppression sécurisée des fichiers  

## 📝 Endpoints Disponibles

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/file` | Upload de fichiers multiples |
| GET | `/get/image/:name` | Récupération d'une image par nom |
| POST | `/` | Insertion d'image avec métadonnées |
| DELETE | `/delete/image/:name` | Suppression d'une image |

## 🔧 Installation & Utilisation

### Prérequis
- Node.js >= 14.x
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/wnomena/api_image_to_cpanel.git
cd api_image_to_cpanel

# Installer les dépendances
npm install
```

### Lancer l'application

```bash
# Mode développement (avec rechargement automatique)
npm run dev

# Mode production
npm start
```

Le serveur sera accessible sur le port défini par défaut: **8080** ou via la variable d'environnement `PORT`.

## 🔌 Intégration

Cette API est conçue pour s'intégrer seamlessly avec d'autres services API REST. Les autres applications peuvent communiquer avec cette API pour centraliser leur gestion d'images.

## 📄 Licence

ISC