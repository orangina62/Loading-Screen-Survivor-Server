# Spécifications Techniques - Loading Screen Survivor Server

## Configuration Système Requise

### Serveur Garry's Mod
- **Garry's Mod** : Version 13.09.21 ou supérieure
- **Système d'exploitation** : Windows/Linux compatible
- **Chromium Embedded Framework** : Support natif GMod
- **Résolution** : Adaptative (minimum 1024x768)

### Technologies Web Utilisées

#### Frontend
- **HTML5** : Structure sémantique moderne
- **CSS3** : Animations et transitions avancées
- **JavaScript ES5+** : Logique interactive
- **Tailwind CSS 3.x** : Framework de design utility-first
- **jQuery 3.4.1** : Manipulation DOM simplifiée
- **Anime.js 3.2.1** : Animations JavaScript avancées

#### Polices et Ressources
- **Google Fonts** : Inter (400, 600, 800)
- **CDN External** : Tailwind, jQuery, Anime.js
- **Images** : PNG/JPEG optimisées

## API GMod Intégrées

### Fonctions de Callback Obligatoires

```javascript
// Informations du serveur et de la session
GameDetails(servername, serverurl, mapname, maxplayers, steamid, gamemode)

// Gestion des téléchargements
SetFilesTotal(total)           // Nombre total de fichiers
SetFilesNeeded(needed)         // Fichiers restants à télécharger
DownloadingFile(filename)      // Fichier en cours de téléchargement

// États de chargement
SetStatusChanged(status)       // Changement d'état du chargement
```

### États de Chargement Supportés
- `"Workshop Complete"` → 80% de progression
- `"Client info sent!"` → 95% de progression  
- `"Starting Lua..."` → 100% de progression
- États personnalisés → Incrémentation automatique

## Structure de Configuration

### Variables Configurables (config.js)

```javascript
Config = {
    title: "",                           // Titre personnalisé (défaut: nom serveur)
    enableMap: true,                     // Affichage nom de carte
    enableSteamID: true,                 // Affichage SteamID joueur
    enableAnnouncements: false,          // Système d'annonces
    announceMessages: [...],             // Messages rotatifs
    announcementLength: 3000,            // Durée affichage (ms)
    backgroundImage: "",                 // Image de fond personnalisée
    enableDebug: false                   // Mode débogage console
}
```

## Animations et Effets Visuels

### Animations CSS Natives
- **fadeIn** : Apparition progressive (0.8s ease-out)
- **floaty** : Mouvement fluide formes (18s ease-in-out)
- **slowRotate** : Rotation continue (22s linear)
- **glassPulse** : Pulsation barre progression (3.2s ease-in-out)
- **gradientShift** : Animation gradient (5s ease)

### Effets Visuels Avancés
- **Glassmorphisme** : backdrop-filter blur sur la barre
- **Gradients radiaux** : Formes d'arrière-plan animées
- **Box-shadows colorées** : Éclairage ambiant orange
- **Opacity fade** : Historique des fichiers (opacité dégradée)

## Performance et Optimisation

### Techniques d'Optimisation
- **Hardware acceleration** : transform3d pour les animations
- **Cache busting** : `?${Math.random()}` sur les scripts
- **Transition CSS** : Préférées aux animations JavaScript
- **Debouncing** : Limitation des updates DOM fréquents

### Métriques de Performance
- **Temps de chargement initial** : < 2 secondes
- **Fluidité animations** : 60 FPS constant
- **Mémoire utilisée** : < 50MB RAM
- **Compatibilité** : CEF 76+ (Chromium 76+)

## Intégration et Déploiement

### Installation Serveur GMod
1. Copier tous les fichiers dans `garrysmod/html/`
2. Configurer `server.cfg` :
   ```
   sv_loadingurl "https://votre-domaine.com/"
   sv_allowdownload 1
   sv_allowupload 1
   ```

### Configuration Personnalisée
1. Modifier `js/config.js` selon vos besoins
2. Remplacer `images/default.png` par votre image
3. Personnaliser les couleurs dans `css/main.css`
4. Tester avec `?test=1` en paramètre URL

### Optimisations Recommandées
- **CDN** : Héberger sur CDN pour latence réduite
- **Compression** : Activer gzip sur le serveur web
- **Caching** : Headers cache appropriés
- **HTTPS** : Obligatoire pour certaines fonctionnalités

## Compatibilité et Support

### Navigateurs Supportés
- **Chromium Embedded Framework** : 76+ (natif GMod)
- **Chrome** : 76+ (test navigateur)
- **Firefox** : 68+ (test navigateur)
- **Safari** : 12+ (test navigateur)

### Résolutions Testées
- **1920x1080** : Optimale
- **1366x768** : Supportée
- **1024x768** : Minimale
- **Mobile** : Responsive adaptatif

## Dépannage et Debug

### Mode Debug
Activer `Config.enableDebug = true` pour :
- Messages console détaillés
- Affichage debug overlay
- Logs des événements GMod
- Trace des animations

### Problèmes Courants
1. **Écran noir** : Vérifier sv_loadingurl
2. **Pas d'animations** : CDN bloqués, utiliser versions locales
3. **Progression bloquée** : Workshop mal configuré
4. **Police manquante** : Fallback vers Arial/sans-serif

### Logs et Monitoring
- Console navigateur pour erreurs JavaScript
- Logs serveur GMod pour problèmes réseau
- Métriques de performance via DevTools
- Tests automatisés recommandés

## Sécurité

### Bonnes Pratiques
- **Validation input** : Sanitisation des noms fichiers
- **XSS Protection** : Échappement des contenus dynamiques
- **HTTPS Only** : Communication sécurisée
- **Content Security Policy** : Restriction ressources externes

### Données Sensibles
- SteamID affiché selon configuration
- Aucune donnée personnelle stockée
- Pas de cookies ou localStorage utilisés
- Communication read-only avec GMod