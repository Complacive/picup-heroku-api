const express = require('express');
const app = express();
const cors = require('cors');

// Allows access from device
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("This middleware function was executed");
    console.log(req.body);
    next();
});

// route middleware
app.use("/api/user", require("./routes/user_route"));
app.use("/api/auth", require('./routes/auth_routes'));
app.use("/api/product", require('./routes/product_routes'));
app.use("/api/merchant", require('./routes/merchant_routes'));
app.use("/api/order", require('./routes/order_routes'));
//app.use("/api/checkout", require('./routes/checkout_routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));