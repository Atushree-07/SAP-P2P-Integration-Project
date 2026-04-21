# SAP-P2P-Integration-Project

**PROJECT OVERVIEW:**

This project demonstrates the Procure-to-Pay (P2P) Integration process without requiring access to any SAP system. Procure-to-Pay (P2P) is a business workflow used by organizations to purchase goods or services from vendors and complete the payment process in a structured manner. The goal of this project is to simulate this real-world procurement cycle using REST APIs, making it easy to understand how different stages of purchasing and payment are connected.

The project is developed using Node.js and Express.js, where each step of the P2P process is implemented as an API. This helps in understanding how procurement systems communicate with finance systems in an integrated environment. The workflow starts with selecting a vendor and creating a purchase requisition, followed by generating a purchase order. Once the goods are received, invoice verification is performed, and finally payment is processed to complete the transaction.

This project helps learners understand the concept of P2P integration without SAP access by simulating real-world business processes in a simple and structured way.



**WHAT IS P2P:**

Procure-to-Pay (P2P) is a business process used by organizations to purchase goods or services from vendors and complete the payment process. It ensures smooth procurement operations and financial tracking. The P2P process typically includes the following steps:

* Vendor Selection
* Purchase Requisition
* Purchase Order
* Goods Receipt
* Invoice Verification
* Payment
  
**PROJECT WORKFLOW:**
Vendor → Purchase Requisition → Purchase Order → Goods Receipt → Invoice → Payment

This project simulates the complete P2P lifecycle.

**TECHNOLOGY STACK USED:**

The following technologies were used to develop this project:

* Node.js
* Express.js
* JSON
* Postman
* Visual Studio Code


**API ENDPOINTS:**

THE PROJECT PROVIDES THE FOLLOWING API ENDPOINTS:

* GET /vendors — Retrieve vendor list
* POST /purchaseRequisition — Create purchase requisition
* POST /purchaseOrder — Create purchase order
* POST /goodsReceipt — Confirm goods receipt
* POST /invoice — Verify invoice
* POST /payment — Process payment

**CONCLUSION AND FUTURE SCOPE:**

This project successfully demonstrates the Procure-to-Pay (P2P) integration process using REST APIs, providing a clear understanding of procurement workflows without SAP access. In the future, this project can be enhanced by integrating databases, adding a user interface, and connecting with SAP Cloud Integration to simulate a more realistic enterprise-level solution.

**AUTHOR:**
- Atushree Guin
- Roll no-23052559
- B.Tech (Computer Science and Engineering)
- KIIT University
