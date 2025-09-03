# 🧟 Loading Screen Survivor Server

![Loading Screen Preview](https://github.com/user-attachments/assets/3b2af8eb-7d88-4817-adf7-e96c74abc6c3)

## 📋 Description

**Loading Screen Survivor Server** est un écran de chargement moderne et animé pour les serveurs Garry's Mod, spécialement conçu pour les serveurs de survie zombie. Il offre une expérience visuelle immersive avec des animations fluides et une interface utilisateur contemporaine.

### ✨ Fonctionnalités Principales

- 🎨 **Design moderne** avec palette orange/noir apocalyptique
- 🔄 **Animations fluides** et effets de glassmorphisme
- 📊 **Barre de progression** en temps réel avec historique des fichiers
- 🎮 **Intégration GMod complète** avec tous les événements de chargement
- ⚙️ **Configuration facile** via fichier de config centralisé
- 🖼️ **Images de fond personnalisables**
- 📢 **Système d'annonces** rotatif configurable
- 📱 **Design responsive** adaptatif
- 🛠️ **Mode debug** intégré pour le développement

## 🚀 Installation Rapide

### 1. Configuration Serveur GMod

```cfg
// Dans votre server.cfg
sv_loadingurl "https://votre-domaine.com/"
sv_allowdownload 1
sv_allowupload 1
```

### 2. Téléchargement et Déploiement

1. **Clonez** ce repository
2. **Uploadez** tous les fichiers sur votre serveur web
3. **Configurez** le fichier `js/config.js`
4. **Testez** votre écran de chargement

### 3. Configuration Personnalisée

Modifiez `js/config.js` selon vos besoins :

```javascript
Config.title = "Mon Serveur Zombie";        // Titre personnalisé
Config.enableMap = true;                     // Afficher la carte
Config.enableSteamID = true;                 // Afficher SteamID
Config.enableAnnouncements = true;           // Activer annonces
Config.backgroundImage = "zombie-bg.jpg";    // Image de fond
```

## 📁 Structure du Projet

```
Loading-Screen-Survivor-Server/
├── index.html                   # Interface utilisateur principale
├── js/
│   ├── main.js                 # Logique de l'application
│   ├── config.js               # Configuration personnalisable
│   └── lib/                    # Librairies tierces
├── css/
│   └── main.css                # Styles et animations
├── images/
│   └── default.png             # Image de fond par défaut
├── ANALYSE_PROJET.md           # Analyse technique complète
├── SPECIFICATIONS_TECHNIQUES.md # Spécifications détaillées
└── GUIDE_INSTALLATION.md       # Guide d'installation détaillé
```

## 🛠️ Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript ES5+
- **Frameworks** : Tailwind CSS, jQuery 3.4.1
- **Animations** : CSS3 + Anime.js 3.2.1
- **Polices** : Google Fonts (Inter)
- **Compatibilité** : Chromium Embedded Framework (GMod)

## 🎯 Fonctionnalités GMod

### Événements Supportés
- `GameDetails()` - Informations serveur et joueur
- `SetFilesTotal()` - Nombre total de fichiers
- `SetFilesNeeded()` - Fichiers restants à télécharger
- `DownloadingFile()` - Fichier en cours de téléchargement
- `SetStatusChanged()` - États de chargement

### États de Progression
- **Workshop Complete** → 80% automatique
- **Client info sent!** → 95% automatique
- **Starting Lua...** → 100% automatique
- **États personnalisés** → Incrémentation automatique

## 📸 Aperçus Visuels

L'écran de chargement présente :
- Design sombre apocalyptique avec thème zombie
- Animations de formes géométriques en arrière-plan
- Barre de progression avec effet glassmorphisme
- Historique des téléchargements avec fade d'opacité
- Affichage du nom de carte et SteamID
- Messages d'annonce rotatifs

## ⚡ Performance

- **Temps de chargement** : < 2 secondes
- **Animations** : 60 FPS constant
- **Mémoire** : < 50MB RAM utilisés
- **Compatibilité** : CEF 76+ (natif GMod)

## 🔧 Personnalisation

### Thèmes de Couleurs

Modifiez les variables CSS pour adapter le thème :

```css
/* Thème Zombie (défaut) */
--primary-color: #ff9800;     /* Orange apocalyptique */
--secondary-color: #212121;   /* Noir profond */

/* Thème Cyberpunk */
--primary-color: #06ffa5;     /* Vert néon */
--secondary-color: #0a0a0a;   /* Noir tech */
```

### Images de Fond

1. Placez votre image dans `images/`
2. Modifiez `Config.backgroundImage = "votre-image.jpg"`
3. Recommandations : 1920x1080, < 2MB, style sombre

## 🐛 Dépannage

### Problèmes Courants
- **Écran noir** : Vérifier sv_loadingurl et accessibilité
- **Pas d'animations** : CDN bloqués, utiliser versions locales
- **Progression bloquée** : Workshop ou addons corrompus

### Mode Debug
Activez `Config.enableDebug = true` pour les logs détaillés.

## 📄 Documentation

- 📊 **[Analyse Complète](ANALYSE_PROJET.md)** - Analyse technique détaillée
- 🔧 **[Spécifications](SPECIFICATIONS_TECHNIQUES.md)** - Référence technique complète
- 📋 **[Guide Installation](GUIDE_INSTALLATION.md)** - Instructions détaillées

## 👨‍💻 Auteur

**Développé par Exsite**

- Design moderne et animations avancées
- Intégration GMod optimisée
- Code propre et maintenable

## 📜 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité
3. **Commit** vos changements
4. **Push** vers la branche
5. **Ouvrir** une Pull Request

## ⭐ Support

Si ce projet vous plaît, n'hésitez pas à lui donner une étoile ! ⭐

---

*Loading Screen Survivor Server - Une expérience de chargement immersive pour vos serveurs Garry's Mod*