import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

router.get("/getData",  (req, res) => {
    let result = req.query.key1 * req.query.key2;
    res.send({ result: result })
});

router.get("/getTriangle",  (req, res) => {
    let result = 0.5 *req.query.base * req.query.high;
    res.send({ Triangle: result })
});

router.get("/getBMI",  (req, res) => {
    let result = Number(req .query.weight/((req.query.height/100)*(req.query.height/100))).toFixed(2);
    let arg ="";
    if (result>25){
        arg= "Fat"
    }else if (result==25){
        arg ="Normal"
    }else if (result < 25){
        arg = "thin"
    }
    res.send({ BMI: result,status: arg})
});
/*
Request
* */
router.post("/postData",async  (req, res) => {
    if(!req.body.key){
        responseObject.result="";
        responseObject.msg = "Bad request";
    }else{
        responseObject.msg = "success";
        responseObject.result = req.body.key * 5;
    }
    res.send(responseObject);
});

module.exports = router;
