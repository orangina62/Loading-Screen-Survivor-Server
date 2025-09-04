# Garry's Mod Loading Screen

Un écran de chargement moderne et professionnel pour Garry's Mod avec animations fluides, barre de progression et affichage des fichiers en cours de téléchargement.

## Fonctionnalités

- ✅ **Interface moderne** avec dégradés orange et animations
- ✅ **Barre de progression** avec pourcentage en temps réel  
- ✅ **Affichage des fichiers** en cours de téléchargement
- ✅ **Informations du serveur** (nom, carte, Steam ID)
- ✅ **Compatible Garry's Mod** avec toutes les fonctions API
- ✅ **Fallbacks locaux** pour les dépendances externes
- ✅ **Personnalisable** via le fichier de configuration

## Installation

1. Téléchargez tous les fichiers de ce repository
2. Uploadez le dossier complet sur votre serveur web
3. Dans votre serveur Garry's Mod, configurez l'URL de votre loading screen dans le fichier `server.cfg`:
   ```
   sv_loadingurl "http://votre-site.com/loading-screen/"
   ```

## Configuration

Modifiez le fichier `js/config.js` pour personnaliser votre écran de chargement:

```javascript
// Titre personnalisé (laissez vide pour utiliser le nom du serveur)
Config.title = "Mon Serveur Awesome";

// Afficher le nom de la carte
Config.enableMap = true;

// Afficher le Steam ID
Config.enableSteamID = true;

// Activer les annonces
Config.enableAnnouncements = true;
Config.announceMessages = ["Bienvenue!", "Rejoignez notre Discord!"];

// Image de fond personnalisée (placez l'image dans le dossier images/)
Config.backgroundImage = "mon-background.jpg";

// Debug (pour résolution de problèmes)
Config.enableDebug = false;
```

## Images de fond

Pour changer l'image de fond:
1. Placez votre image dans le dossier `images/`
2. Modifiez `Config.backgroundImage` dans `js/config.js`
3. Formats supportés: JPG, PNG, GIF

## Dépannage

Si l'écran de chargement ne s'affiche pas correctement:

1. **Vérifiez l'URL**: Assurez-vous que l'URL dans `sv_loadingurl` est correcte
2. **Activez le debug**: Définissez `Config.enableDebug = true` dans `config.js`
3. **Vérifiez la console**: Ouvrez la console du navigateur (F12) pour voir les erreurs
4. **Testez en local**: Ouvrez `index.html` dans votre navigateur pour tester

## Fonctions Garry's Mod

Ce loading screen supporte toutes les fonctions standard de Garry's Mod:

- `GameDetails()` - Informations du serveur
- `SetFilesTotal()` - Nombre total de fichiers
- `SetFilesNeeded()` - Fichiers restants à télécharger  
- `DownloadingFile()` - Fichier en cours de téléchargement
- `SetStatusChanged()` - Changement de statut

## Crédits

Créé par Exsite - Loading screen professionnel pour Garry's Mod