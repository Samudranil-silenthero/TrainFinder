const router=require("express").Router();
const e = require("express");
const axios = require('axios');

router.get('/routecheck', async(req,res)=>{
    try {
        const station_list = await axios.get("https://ground-auto-suggest.makemytrip.com/rails/autosuggest/stations?limit=10&search_query="+req.query.str);
        let ans=[];
        const stationAndCode = station_list['data']['data']['r'].map(function(x) {
            if(x.xtr.grp_irctc==null) {
                ans.push(x.dn+ ", " + x.xtr.st_n+ " ("+ x.irctc_code + ")");
            }
            else{
                x.xtr.grp_irctc.map(function(y){
                    ans.push(y.n+ ", " + x.xtr.st_n+ " ("+ y.irctc_code + ")");
                })
            }
        });
        console.log(ans);
        res.status(200).json(ans);
      } 
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports=router;

