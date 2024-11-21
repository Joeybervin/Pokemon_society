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

📂 dist/
├── ... # Code compilé généré par TypeScript
📄 .env # Variables d'environnement (non incluses dans le dépôt)

📂 src/ 
├── routes/ # Gestion des routes
├── controllers/ # Logique métier des routes
├── models/ # Requêtes SQL et interactions avec la BDD
├── utils/ # Fonctions utilitaires (ex. logger, requêtes SQL)

## ⚙️ Installation et Lancement

### 1. **Pré-requis**
- **Node.js** (version LTS recommandée)
- **TypeScript** (si vous n'utilisez pas Docker)
- **MySQL/MariaDB** (configuré sur votre machine ou en conteneur)

### 2. **Configurer les variables d'environnement**
Créez un fichier `.env` à la racine du projet pour sécuriser vos informations sensibles :
```env
DB_HOST=localhost
DB_USER=<votre_utilisateur>
DB_PASSWORD=<votre_mot_de_passe>
DB_NAME=pokemon
```

2. **Cloner le dépôt** :
```bash
./install
git clone <url_du_dépôt>
cd <nom_du_projet>
```

3. **Installer les dépendances** :
```bash
./install
npm install
```
5. **Lancer le projet en mode développement** :
```bash
./install
npm run dev
```

---

## 🌟 Ressources
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MySQL2](https://github.com/sidorares/node-mysql2)
- [Winston](https://github.com/winstonjs/winston)
- [dotenv](https://github.com/motdotla/dotenv)


## ✅ Prochaines Étapes et Améliorations
- Implémenter des fonctionnalités avancées (filtrage, pagination).
- Ajouter des tests unitaires avec Jest.
- Préparer la mise en production avec Docker.
- Étendre l’authentification pour des rôles spécifiques (Admin, Utilisateur, etc.).

# Attrapez-les tous ! 🎮

