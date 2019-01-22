/*
import module
*/
    const express = require('express');
    const d3Router = express.Router();

    class D3RouterClass{
        constructor(){};
        routes(){
            //=> D3
            d3Router.get('/', (req,res)=>{
                res.render('d3');
            });
        }

        init(){
            this.routes();
            return d3Router
        }
    }

    module.exports = D3RouterClass;