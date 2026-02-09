const customers = [
  {
    name: "Dragon Warrior",
    email: "po@shifuacademy.com",
    purchases: ["Staff", "Dumplings", "Noodles"]
  },
  {
    name: "Elsa Frost",
    email: "elsa.frost@email.com",
    purchases: ["Ice Cream", "Barbie House"]
  },
  {
    name: "Sydney Abaccadaius 3",
    email: "imreallynotsydney@gmail.com",
    purchases: ["67 Machine", "Water Bottle"]
  }
];

newCustomer = {
    name: "New Customer",
    email: "email@email.com",
    purchases: ["Item 1", "Item 2"]
}
customers.push(newCustomer);

customers.shift();

customers[0].email = "elsechuchutrain@gmail.com";
customers[0].purchases.push("Dragon Ball Z DVD");

customers.forEach(customer => {
    console.log(`Customer Name: ${customer.name}`);
    console.log(`Customer Email: ${customer.email}`);
    console.log(`Customer Purchases: ${customer.purchases.join(", ")}`);
});