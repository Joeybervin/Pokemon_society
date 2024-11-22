


<p align="center">
  <img src="./public/pokemon-logo.png" alt="Logo du projet" width="400">
</p>



# Pokémon Society API


**Création d'un Pokédex Numérique Ultime**

Bienvenue, jeune chercheur ! Ce projet consiste à développer une API complète et sécurisée pour la Pokémon Society, permettant de manipuler et d'explorer des données sur les Pokémon. Le Pokédex Numérique Ultime sera une référence incontournable pour les chercheurs et dresseurs du monde entier.


---

## 🏆 Objectifs

- **Apprendre** et comprendre le concept d'API REST.
- **Implémenter** des routes, contrôleurs et modèles en TypeScript.
- **Manipuler** une base de données MySQL/MariaDB de manière sécurisée.
- **Maîtriser** les opérations CRUD (Create, Read, Update, Delete).
- **Utiliser** des outils modernes pour la journalisation et la gestion des erreurs.
- **Implémenter** des techniques avancées de sécurité (JWT, middlewares).

---

## 📚 Structure du Projet

```plaintext
  ├── 📂 dist                     # Code compilé généré automatiquement par TypeScript
  │   └── ...                     # Fichiers JS compilés
  ├── 📂 public                   # Fichiers publics
  │   └── ...                     # Assets tels que images, styles CSS ou JS statiques
  ├── 📂 src
  │   ├── 📂 routes               # Définition des routes API et mapping vers les contrôleurs correspondants
  │   ├── 📂 controllers          # Logique métier associée aux routes (traitement des requêtes)
  │   ├── 📂 models               # Structures de données représentant les entités (Pokémon, Item, etc.)
  │   ├── 📂 repositories         # Gestion des interactions directes avec la base de données
  │   ├── 📂 configs              # Configuration des paramètres globaux (connexion DB, constants, etc.)
  │   ├── 📂 types                # Déclarations des interfaces et types personnalisés pour TypeScript
  │   └── 📂 utils                # Fonctions utilitaires réutilisables (gestion d'erreurs, loggers, etc.)
``` 

📄 .env # Fichier pour les variables d'environnement (non inclus dans le dépôt pour des raisons de sécurité).  
⚙️ install.sh # Script pour automatiser l'installation et la configuration du projet.  

## ⚙️ Installation et Lancement

### 1. **Pré-requis**
Assurez-vous que les outils suivants sont installés sur votre machine :
- **Node.js** (version LTS recommandée)
- **TypeScript** (si vous n'utilisez pas Docker)
- **MySQL/MariaDB** (configuré sur votre machine ou en conteneur)

> Remarque : Si vous utilisez Docker, tous les pré-requis seront inclus automatiquement.

---

### 2. **Installation**
1. **Cloner le dépôt** :
Clonez le dépôt GitHub et accédez au dossier du projet :
```bash
  git clone <url_du_dépôt>
  cd <nom_du_projet>
```

2. **Configurer les variables d'environnement**
Créez un fichier `.env` à la racine du projet pour sécuriser vos informations sensibles :
```env
DB_HOST=localhost
DB_USER=<votre_utilisateur>
DB_PASSWORD=<votre_mot_de_passe>
DB_NAME=pokedex

HOST_PORT=<port_you_want_to_use>
```

3. **Installer les pré-requis *(si nécessaire)***
Si votre environnement manque des outils nécessaires, exécutez le script d'installation inclus dans le projet :
```bash
  ./install.sh
```

4. **Installer les dépendances du projet** :
Installez toutes les dépendances nécessaires au fonctionnement du projet :
```bash
  npm install
```
---

### 3. **Lancer le projet**
1. **En mode développement (avec rechargement automatique des fichiers) :**
```bash
  npm run dev
```

2. **En mode production (sans rechargement automatique) :**
```bash
  npm start
```

---

## 🌟 Ressources Utilisées
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL2](https://github.com/sidorares/node-mysql2)
- [Winston](https://github.com/winstonjs/winston)
- [dotenv](https://github.com/motdotla/dotenv)


## ✅ Prochaines Étapes et Améliorations
  ### Sécurisation 🔐
  - Ajouter l'authentification avec JWT pour protéger les routes sensibles.
  - Mettre en place des middlewares de validation et des logs détaillés pour surveiller l'activité et détecter les accès suspects.
  ### Interface Visuelle 🖥️
  - Créer un mini Pokédex en ligne avec EJS ou Pug, comprenant :
  - Une galerie interactive affichant les Pokémon sous forme de cartes.
  - Une page de détails pour chaque Pokémon (types, statistiques, mouvements).
  - Des fonctionnalités de pagination et de filtrage.
  ### Améliorations UX ✨
  - Ajouter du style avec CSS pour un design immersif.
  - Rendre la navigation fluide avec JavaScript.
  ### Autres ➕
  - Documenter l'API avec Swagger ou Postman.
    

# Attrapez-les tous ! 🎮

