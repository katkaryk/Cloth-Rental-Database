import express from 'express';
import DeliveryDetail from '../models/deliveryDetailSchema.js';

const router = express.Router();

// GET all delivery details
router.get('/', async (req, res) => {
    try {
        const deliveryDetails = await DeliveryDetail.find();
        res.json(deliveryDetails);
        console.log("hello")
    } catch (err) {
        res.status(500).send('Error from get request: ' + err.message);
    }
});

router.post('/', (req, res) =>{
    const deliveryDetails = new DeliveryDetail({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        streetAddress:req.body.streetAddress,
        postalCode:req.body.postalCode,
        townCity:req.body.townCity,
        phoneNumber:req.body.phoneNumber,
        useBillingAddress:req.body.useBillingAddress,
    });
    try{
    deliveryDetails.save();
    }
    catch(err){
        res.status(501).send('Data not set...')
    }
})

export default router;
