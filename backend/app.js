const express = require("express");
const bodyParser = require("body-parser");

const recents = [
  {
    imgkey: 0,
    name: "Chicken Bacon Pizza",
    prize: 1500,
  },
  {
    imgkey: 1,
    name: "Seeni Sambol Pizza",
    prize: 1200,
  },
  {
    imgkey: 2,
    name: "Tandoori Chi. Pizza",
    prize: 1500,
  },
  {
    imgkey: 3,
    name: "Black Chicken Pizza",
    prize: 1500,
  },
];
const orders = [];
var toPay = {
  amount: 0,
};
const allItems = [
  {
    imgkey: 1,
    name: "Seeni Sambol Pizza",
    prize: 1200,
  },
  {
    imgkey: 0,
    name: "Chicken Bacon Pizza",
    prize: 1500,
  },
  {
    imgkey: 2,
    name: "Tandoori Chi. Pizza",
    prize: 1500,
  },
  {
    imgkey: 3,
    name: "Black Chicken Pizza",
    prize: 1500,
  },
  {
    imgkey: 4,
    name: "Cheese Pizza",
    prize: 1500,
  },
  {
    imgkey: 5,
    name: "Double Chicken Pizza",
    prize: 1500,
  },
  {
    imgkey: 6,
    name: "Sausage Pizza",
    prize: 1500,
  },
  {
    imgkey: 7,
    name: "Hot & Spicy Pizza01",
    prize: 1500,
  },
];

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/recents", (req, res) => {
  res.send(recents);
});
// app.get("/amountToPay", (req, res) => {
//   res.send(toPay);
// });
app.get("/allItems", (req, res) => {
  res.send(allItems);
});
app.get("/orders", (req, res) => {
  res.send(orders);
});
app.get("/toPay", (req, res) => {
  res.send(toPay);
});

app.post("/addCart", (req, res) => {
  const requestData = req.body;
  orders.push(requestData);
  res.status(200).json({ message: true });
  console.log(orders);
});
app.post("/toPay", (req, res) => {
  const requestData = req.body;
  // console.log(requestData.amount);
  toPay.amount = requestData.amount;
  res.status(200).json({ message: true });
  console.log(toPay);
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
``;
