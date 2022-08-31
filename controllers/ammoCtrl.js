const express = require('express');
const router = express.Router();
const Ammo = require('../models/ammo.js')
// const seed = require('../models/seed.js')

router.get('/', (req, res) => {
    Ammo.find({}, (err, allAmmo) => {
        //array of caliber objects here, each with their own array of bullets. place each bullet in corresponding object's array of bullets
        let calArr = [];
        for(element of allAmmo){
            console.log(element.caliber)
            if(!calArr.includes({caliber: element.caliber})){
                calArr.push({caliber: element.caliber, bullets:[]});
            }
        }
        console.log(calArr)
        for(let i = 0; i < calArr.length; i++) {
            for(let j = 0; j < calArr.length; j++)
            // if (i!==j) {
                if(calArr[j].caliber === calArr[i].caliber){
                    calArr.splice(j, 1)
                }
            // }
        }
        console.log(calArr)
        for(element of allAmmo){
            for(let i = 0; i < calArr.length; i++){
                if(element.caliber === calArr[i].caliber){
                    calArr[i].bullets.push(element)
                }
            }
        };
        res.render('index.ejs',{
            calArr,
            ammo:allAmmo
        });
        // res.send(allAmmo)
    });
});

//seeder that's uncommented as needed
// router.get('/seed', (req, res) => {
//     Ammo.create(seed),(err, createdAmmo) => {
//         console.log(createdAmmo)
//         res.redirect('/ammo')
//     }
// })

router.get("/new", (req, res) => {
    res.render('new.ejs');
});

router.get('/:caliber', (req, res) => {
    Ammo.find({caliber: req.params.caliber}, (err, foundAmmo) => {
        const caliber = req.params.caliber
        res.render('caliber.ejs',{
            foundAmmo,
            caliber
        });
        // res.send(allAmmo)
    });

});



router.get('/:caliber/:id', (req, res)=>{
    Ammo.findById(req.params.id, (err, foundAmmo)=>{
        res.render('show.ejs', {
            ammo:foundAmmo
        });
    });
});

router.get('/:caliber/:id/edit', (req, res) => {
    Ammo.findById(req.params.id, (err, foundAmmo) => {
        console.log(foundAmmo)
        res.render('edit.ejs', {
            ammo: foundAmmo
        })
    })
})

router.put('/:caliber/:id', (req, res) => {
    if(req.body.purchasable === 'on') {
        req.body.purchasable = true;
    } else {
        req.body.purchasable = false;
    }
    console.log("req.body:", req.body)
    console.log("req.params.id:", req.params.id)
    Ammo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, ammo) => {
        console.log(ammo)
        res.redirect('/ammo/'+req.params.caliber+'/'+req.params.id);
    }) 
})

router.post('/', (req, res) => {
    console.log(req.body);
    if (req.body.purchasable ==='on') {
        req.body.purchasable = true;
    }
    else {
        req.body.purchasable = false;
    }
    Ammo.create(req.body, (err, createdAmmo) => {
        if(err) {
            console.log("This happened:", err)
            res.send(err)
        } else {
            res.redirect('/ammo')
            console.log("Created ammo:",createdAmmo)
        }
    });
});

router.delete('/:caliber/:id', (req, res) => {
    Ammo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/ammo');
    });
});

module.exports = router;