const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route(':/search')
      .get((req, res) => {
        console.log("inside search.js");
             axios.get(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=${req.params.query}`)
              .then(results=>{
               //console.log('response.data:', response.data)
               res.send(results.data);
              })
              .catch(err=>console.log(err))
      })

module.exports = router;

