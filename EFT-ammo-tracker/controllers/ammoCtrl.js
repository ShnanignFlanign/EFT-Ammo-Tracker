const express = require('express');
const router = express.Router();
const Ammo = require('../models/ammo.js')

router.get('/', (req, res) => {
    Ammo.find({}, (err, allAmmo) => {
        res.render('index.ejs',{
            ammo: allAmmo
        });
    });
});

router.get('/:caliber', (req, res) => {
    Ammo.find(req.params.caliber, (err, allAmmo) => {
        res.render('index.ejs',{
            ammo: allAmmo
        });
    });
});

router.get("/new", (req, res) => {
    res.render('new.ejs');
});

router.get('caliber/:id', (req, res)=>{
    Ammo.findById(req.params.id, (err, foundAmmo)=>{
        res.render('show.ejs', {
            ammo:foundAmmo
        });
    });
});

router.get('caliber/:id/edit', authRequired, (req, res) => {
    Ammo.findById(req.params.id, (err, foundAmmo) => {
        console.log(foundAmmo)
        res.render('edit.ejs', {
            ammo: foundAmmo
        })
    })
})

router.put('caliber/:id', (req, res) => {
    if(req.body.purchasable === 'on') {
        req.body.purchasable = true;
    } else {
        req.body.purchasable = false;
    }
    // console.log("req.body:", req.body)
    // console.log("req.params.id:", req.params.id)
    Ammo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, ammo) => {
        console.log(ammo)
        res.redirect('/ammo/caliber');
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
            res.redirect('/ammo/caliber')
            console.log(createdAmmo)
        }
    });
    
});

router.delete('caliber/:id', (req, res) => {
    Ammo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/ammo/caliber');
    });
});

module.exports = router;