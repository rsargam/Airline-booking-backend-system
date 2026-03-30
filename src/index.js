const express = require('express');
const { ServerConfig, Logger } = require('./config');
// const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const { createLogger } = require('winston');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT,async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const {City,Airport}=require('./models');
    const bengaluru= await City.findByPk(1);
    console.log(bengaluru);
    // const airport= await Airport.create({name:"Kerela Airport",code:"KLA",cityID:1});
    // const kmpairport=await bengaluru.createAirport({name:"Kempegowda Airport",code:"BLR"});
    // console.log(kmpairport)
    // const airportsInBlr= await bengaluru.getAirports();
    // console.log(airportsInBlr)
    // const hbairport= await Airport.findByPk(3);
    // await bengaluru.removeAirport(hbairport);
    // await city.destroy({
    //     where:{
    //         id:1
    //     }
    // });
    // const city= await City.findByPk(4);
    // await city.createAirport({name:"indore Airport",code:"IND"});
    await City.destroy({
        where:{
            id:4
        }
    })
});
