const express = require('express');
const app = express();
const vendors = require('./vendor.json');
const purchaseOrders = require('./purchaseOrder.json');

app.use(express.json());

// Step 1 - Get Vendors
app.get('/vendors', (req, res) => {
    res.json(vendors);
});

// Step 2 - Create Purchase Requisition
app.post('/purchaseRequisition', (req, res) => {
   console.log("Purchase Requisition Created");
    res.send("Purchase Requisition Created");
});

// Step 3 - Create Purchase Order
app.post('/purchaseOrder', (req, res) => {
    const newOrder = req.body;
    purchaseOrders.push(newOrder);
    console.log("Purchase Order Created");
    res.send("Purchase Order Created Successfully");
});

// Step 4 - Goods Receipt
app.post('/goodsReceipt', (req, res) => {
    console.log("Invoice Verified");
     res.send("Goods Received Successfully");
});

// Step 5 - Invoice Verification
app.post('/invoice', (req, res) => {
     console.log("Invoice Verified");
    res.send("Invoice Verified");
});

// Step 6 - Payment to Vendor
app.post('/payment', (req, res) => {
     console.log("Payment Completed");
    res.send("Payment Completed");
});

app.listen(3001, () => {
    console.log("SAP P2P Integration Running on port 3001");
});