/*
Configuration
- Importer tous les modules
*/
    //=> NodeJs
    require('dotenv').config();
// require: charger le module et mothode config pour configurer
// tous les règles dans dotenv
    const express = require('express');
    const path = require('path');
    const ejs = require('ejs');
    // pour compiller le html comme js
    const bodyParser = require('body-parser');

    //=> Inner
    // instancie la classe
    const FrontRouterClass = require('./routes/front/front.routes');
    const D3RouterClass = require('./routes/d3/d3.routes');
/*
Configuration
- Définition du server
*/
    const server = express();
    // creer un server
    const port = process.env.PORT; 
    // creer un port
    // variable PORT est dans le .env

    //déclare une classe
    class ServerClass{
        // pour initial le server
        init(){
            //=> Client folder
            server.set( 'views', __dirname + '/www');
            server.use(express.static(path.join(__dirname, 'www')));

            //=> View engine
            server.engine( 'html', ejs.renderFile);
            server.set( 'view engine', 'html');

            //=> Set Body-parser
            server.use(bodyParser.json({limit:'10mb'}));
            //utiliser body-parser maximal 10 mega bite, accept une requête maximal 10mb
            server.use( bodyParser.urlencoded( {extended: true}));

            //=> Routers
            // router pour le D3
            const d3Router = new D3RouterClass;
            server.use('/api/d3', d3Router.init());
            // routers pour le front
            const frontRouter = new FrontRouterClass;
            server.use('/', frontRouter.init());
            //=> Start server
            this.launch();
        }
        // pour lancer le server
        launch(){
            // il écoute à port
            server.listen( port, () => {
                console.log(`Server listening on port ${port}`);
            })

        }
        
    }

/*
Lancer le server
*/
    new ServerClass().init();
