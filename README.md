# Welkom op de SoWind applicatie

## Inleiding

Met deze applicatie kun je zoeken naar alle kitesurfspots over de hele wereld. Wanneer je je spot hebt gevonden kun je de laatste relavante weerdata opvragen en wanneer er spot informatie beschikbaar is, de spot informatie.

Wil je gebruik maken van de favorieten functie binnen de applicatie, log dan even in of maak een account aan.

![](./src/assets/Screenshot.png)

De zoekfunctie werkt altijd, of je nou ingelogd bent of niet.

## Installatie

Om de applicatie lokaal te runnen, clone deze repository en run de volgende shell command

#### `installeren van dependencies`

```shell
npm install
```

#### `aanmaken van .env bestand`

maak een .env bestand aan in de root folder en voeg de volgende 2 keys toe aan het .env bestand

`REACT_APP_WINDFINDER_API_KEY=`'_api key is te vinden in de KEYS.md_'\
`REACT_APP_FIREBASE_API_KEY=`'_api key is te vinden in de KEYS.md_'

clone je deze repo van github, vraag het KEY.md bestand op via de maker van deze app.

wanneer _npm install_ is uitgevoerd en het _.env_ bestand met keys is aangemaakt kan je de applicatie starten d.m.v. het volgende commando

#### `starten van applicatie`

```shell
npm start
```

De applicatie wordt gestart in je browser. Kies in de inspector voor een mobiel overzicht omdat de applicatie mobile first is gebouwd.

## Gebruik

### `Search`

Zoeken naar een kitesurfspot kan altijd, ongeacht of je ingelogd bent of niet. Zoek bijvoorbeeld naar `brouwersdam` of `oostvoorne`, 2 bekende kitesurf locaties in nederland. Heb je er eenmaal 1 gevonden en wil je terug, klik dan op het het SoWind logo om terug te keren naar de homepagina.

### `Log-in`

Je kan direct gebruik maken van de zoekfunctie of je kan er voor kiezen om eerst in te loggen zo dat je gebruik kan maken van de favorieten functie in de applicatie.

username: bassie@novi.nl of adriaan@novi.nl (ww is voor beide het zelfde)\
ww: bassie1234

Wil je je eigen gebruiker aanmaken dan kan dat ook, ga dan door naar `sign-up`

### `Sign-up`

Vul alle gegevens in die gevraagd worden en log er daarna mee in. In Firebase wordt er een user aangemaakt en er wordt een object met favorieten en last visited aangemaakt. **Wil je meekijken in firebase** ( https://console.firebase.google.com/ ) en log in met de gegevens die in het KEYS.md bestand staan

### `Favorieten`

Wanneer je ingelogd bent heb je de mogelijkheid om favorieten toe te voegen. Klik op het ster icoon, en het spotobject wordt opgeslagen als favoriet in firebase.
