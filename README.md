# mydevice

Détection et affichage des capacités des appareils et navigateurs web.

## À propos du projet

`mydevice` est un outil web conçu pour identifier et présenter les diverses fonctionnalités et capacités du navigateur et de l'appareil utilisé par le visiteur. Il peut être utile pour les développeurs, les testeurs ou simplement les curieux souhaitant connaître les technologies supportées par leur configuration actuelle (par exemple, les fonctionnalités HTML5, CSS3, JavaScript, la taille de l'écran, etc.).

Ce projet s'appuie notamment sur Modernizr pour la détection de fonctionnalités.

## Fonctionnalités principales (Exemples)

- Affichage des informations du navigateur (User Agent, version).
- Détection des fonctionnalités HTML5/CSS3 supportées.
- Informations sur l'écran (résolution, densité de pixels).
- Détection des types d'entrée (tactile, souris).
- Et bien plus, en fonction des tests implémentés via Modernizr et JavaScript personnalisé.

## Structure du projet

```text
mydevice/
├── assets/
│   ├── css/
│   │   └── styles.css         # Styles principaux de l'application
│   ├── img/                   # Images et icônes
│   │   ├── alsacreations-logo.svg
│   │   ├── favicon.png
│   │   ├── mydevice-logo.svg
│   │   └── ref-picture.png
│   └── js/
│       ├── modernizr.min.js   # Bibliothèque Modernizr pour la détection de fonctionnalités
│       └── mydevice.js        # Scripts JavaScript personnalisés de l'application
├── index.html                 # Page principale de l'application
├── LICENSE                    # Licence du projet
├── README.md                  # Ce fichier
└── stylelint.config.js        # Configuration pour Stylelint (linting CSS)
```

## Installation et Lancement

1. Clonez ce dépôt :

   ```bash
   git clone <url_du_depot>
   ```

2. Ouvrez le fichier `index.html` directement dans votre navigateur web.

Aucune étape de compilation ou d'installation de dépendances complexes n'est requise pour la version de base, car il s'agit d'un projet front-end statique.

## Technologies utilisées

- HTML5
- CSS3 (avec utilisation de propriétés personnalisées)
- JavaScript (ES6+)
- [Modernizr](https://modernizr.com/)

## Comment contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer `mydevice` :

1. Forkez le projet.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/NouvelleFonctionnalite`).
3. Commitez vos changements (`git commit -m 'feat: Ajoute NouvelleFonctionnalite'`).
4. Poussez vers la branche (`git push origin feature/NouvelleFonctionnalite`).
5. Ouvrez une Pull Request.

Veuillez vous assurer que votre code respecte les conventions du projet et les bonnes pratiques.

## Licence

Ce projet est sous licence [MIT](LICENSE).
