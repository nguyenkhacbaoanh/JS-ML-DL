/*
import module
*/
    const express = require('express');
    const d3Router = express.Router();
    const d3 = require('d3');

    class D3RouterClass{
        constructor(){};
        routes(){
            //=> D3
            d3Router.get('/', (req,res)=>{
                // res.render('d3'); // pour les routes en front
                res.json({msg: 'Hello API'}) // pour envoyer les objects
            });
            d3Router.post( '/convert', (req, res) => {
                //=> Convertir un CSV en JSON avec D3js
                let jsonData = d3.csvParse(req.body.input)

                //=> Regex pour verifier la valeur numérique
                const regexNumeric = /(\d+(\.\d+)?)/;

                const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

                //=> Faire une boucle sur la collection de données
                for (let i = 0; i< jsonData.length; i++){
                    //=> Boucle sur un object
                    let item = jsonData[i]
                    for ( let prop in item){
                        //=> Verifier les valeurs numériques
                        if (regexNumeric.test(item[prop]) && !regexDate.test(item[prop])){
                            item[prop] = +item[prop]
                        }
                        else if (regexDate.test(item[prop])){
                            item[prop] = new Date(item[prop])
                        }
                        
                    }
                }
                res.json({ msg: 'Post data', data:jsonData });
            });
        }

        init(){
            this.routes();
            return d3Router
        }
    }

    module.exports = D3RouterClass;