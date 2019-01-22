# Creer un server en nodeJS
---

# lancer un server
---

### creer fichier package,json
```bash
npm init -y # y option pour répondre oui tout les question au terminal
```
> creer un fichier `package.json`qui contient toute information

- NodeJs est langage base niveau, il nous faut creer ou installer difference modules pour nodeJS utilise

- Dans cet cas qu'on install module `express` (est le package pour développer web server facilement), `dotenv` (gestion tout les variables)
`path` pour définir à server client
`body-parser` pour récuppérer les données à requête afin d'envoyer à server
`ejs`

```bash
npm i -s express dotenv ejs path body-parser d3
```
- Dans le package.json on se trouve bcp package depenceries ce qui on vient d'installer

- installer nodemon pour recharger l'application.
---
# Clone repository github
- creer `.env`fichier et creer une variable `PORT=5555`
- installer tous les packages nécessaires pour lancer notre server, sur le terminal: `npm i`
> `npm i` va chercher tout les modules dependencies dans le fichier package.json et les installe

---
# Convertir csv en json
````
name,amount,date
jim,34.0,11/12/2015
carl,120.11,11/12/2015
jim,45.0,12/01/2015
stacy,12.00,01/04/2016
stacy,34.10,01/04/2016
stacy,44.80,01/05/2016
```