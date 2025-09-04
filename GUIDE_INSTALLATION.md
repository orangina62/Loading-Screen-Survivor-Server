# Guide d'Installation et Configuration

## Installation Rapide

### 1. Préparation du Serveur GMod

1. **Télécharger** tous les fichiers du projet
2. **Copier** le contenu dans votre dossier web du serveur
3. **Configurer** votre `server.cfg` :

```cfg
// Configuration Loading Screen
sv_loadingurl "https://votre-domaine.com/"
sv_allowdownload 1
sv_allowupload 1
```

### 2. Configuration Personnalisée

#### Modifier le fichier `js/config.js` :

```javascript
var Config = {};

// Titre de votre serveur (laissez vide pour auto)
Config.title = "Mon Serveur Zombie RP";

// Afficher la carte en cours ?
Config.enableMap = true;

// Afficher le SteamID du joueur ?
Config.enableSteamID = true;

// Activer les annonces ?
Config.enableAnnouncements = true;

// Messages d'annonce
Config.announceMessages = [
    "Bienvenue sur notre serveur !",
    "Consultez notre Discord pour les règles",
    "Bon jeu et amusez-vous bien !"
];

// Durée d'affichage des annonces (millisecondes)
Config.announcementLength = 4000;

// Image de fond personnalisée (dans le dossier images/)
Config.backgroundImage = "zombie-background.jpg";

// Mode debug (pour développement)
Config.enableDebug = false;
```

#### Personnaliser l'apparence dans `css/main.css` :

```css
/* Changer la couleur principale */
:root {
    --primary-color: #ff6b35;    /* Orange vers rouge */
    --secondary-color: #1a1a1a;  /* Noir profond */
}

/* Modifier le gradient de fond */
.bg-gradient-to-br {
    background: linear-gradient(135deg, #000000 0%, #ff6b35 100%);
}
```

### 3. Ajouter votre Image de Fond

1. **Placez** votre image dans le dossier `images/`
2. **Nommez-la** explicitement (ex: `zombie-apocalypse.jpg`)
3. **Modifiez** `Config.backgroundImage = "zombie-apocalypse.jpg"`

**Recommandations image :**
- Format : PNG ou JPEG
- Résolution : 1920x1080 minimum
- Taille : < 2MB pour un chargement rapide
- Style : Sombre avec contrastes pour la lisibilité

### 4. Test et Validation

#### Test en Local
```bash
# Démarrer un serveur de test
python3 -m http.server 8080

# Ouvrir dans votre navigateur
http://localhost:8080?test=1
```

#### Test sur GMod
1. **Démarrer** votre serveur GMod
2. **Se connecter** depuis le client
3. **Vérifier** que l'écran s'affiche correctement
4. **Tester** le téléchargement de quelques addons

## Personnalisation Avancée

### Couleurs et Thème

Modifier les variables CSS dans `main.css` :

```css
/* Thème Zombie Apocalypse */
.text-orange-400 { color: #dc2626; }  /* Rouge sang */
.text-orange-200 { color: #fecaca; }  /* Rose pâle */
.border-orange-500 { border-color: #dc2626; }

/* Thème Cyberpunk */
.text-orange-400 { color: #06ffa5; }  /* Vert néon */
.text-orange-200 { color: #4ade80; }  /* Vert clair */
.border-orange-500 { border-color: #06ffa5; }
```

### Messages Personnalisés

Ajouter des messages contextuels dans `main.js` :

```javascript
// Messages selon l'heure
var currentHour = new Date().getHours();
if (currentHour < 12) {
    announce("Bon matin ! Préparez-vous à survivre...");
} else if (currentHour < 18) {
    announce("Bon après-midi ! L'apocalypse continue...");
} else {
    announce("Bonne soirée ! Les zombies sortent la nuit...");
}
```

### Animations Personnalisées

Ajouter des effets dans `main.css` :

```css
/* Animation de zombie pour le titre */
@keyframes zombieWalk {
    0%, 100% { transform: translateX(0px) rotate(0deg); }
    25% { transform: translateX(5px) rotate(1deg); }
    75% { transform: translateX(-5px) rotate(-1deg); }
}

#title {
    animation: zombieWalk 2s ease-in-out infinite;
}
```

## Optimisation Performance

### Hébergement Web

**Recommandations serveur :**
- **CDN** : Cloudflare ou similaire
- **Compression** : Gzip activé
- **Caching** : Headers appropriés
- **HTTPS** : Certificat SSL obligatoire

### Configuration Nginx

```nginx
server {
    listen 443 ssl http2;
    server_name votre-domaine.com;

    # SSL Configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Compression
    gzip on;
    gzip_types text/css application/javascript image/png image/jpeg;

    # Caching
    location ~* \.(css|js|png|jpg|jpeg|gif|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Loading screen files
    location / {
        root /var/www/loading-screen;
        index index.html;
    }
}
```

### Optimisation GMod

```cfg
// Dans server.cfg
sv_downloadurl "https://votre-domaine.com/fastdl/"
sv_allowupload 1
sv_allowdownload 1

// Réseau optimisé
sv_maxrate 30000
sv_minrate 7500
sv_maxupdaterate 66
sv_minupdaterate 10

// Compression
net_compression 1
```

## Dépannage

### Problèmes Fréquents

**Écran noir ou vide :**
1. Vérifier `sv_loadingurl` dans server.cfg
2. Tester l'URL dans un navigateur
3. Vérifier les logs serveur web

**Animations qui ne marchent pas :**
1. CDN bloqués → Télécharger les libs en local
2. JavaScript désactivé → Impossible à résoudre côté GMod
3. Erreurs console → Vérifier la syntaxe

**Progression bloquée :**
1. Workshop mal configuré
2. Addons corrompus
3. Réseau instable

**Police ne s'affiche pas :**
1. Google Fonts bloqué → Ajout fonts locales
2. Fallback automatique vers Arial

### Logs de Debug

Activer `Config.enableDebug = true` et vérifier :
- Console navigateur (F12)
- Logs serveur GMod
- Fichiers access.log du serveur web

### Support Communauté

- **GitHub Issues** : Reporter les bugs
- **Discord** : Support communautaire  
- **Forum GMod** : Aide installation serveur
- **Documentation** : README et fichiers .md du projet