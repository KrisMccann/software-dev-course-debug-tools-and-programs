
/*
Shopping Cart Debugging Assignment

Errors Fixed:
1. Changed <= to < in the calculateTotal loop.
   The original loop went one index past the end
   of the array, causing an undefined error.

2. Added validation for discountRate.
   Discounts must be between 0 and 1.

3. Added validation for total in generateReceipt.
   This prevents toFixed() from being called
   on an invalid value.

Debugging Tools:
I used the browser Console to inspect errors
and the Sources tab to examine the functions.
Breakpoints and the debugger statement help
inspect variable values during execution.
*/

const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

// Calculate total price of items
function calculateTotal(cartItems) {
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    debugger;
    total += cartItems[i].price;
  }

  return total;
}

// Apply discount
function applyDiscount(total, discountRate) {
  if (
    typeof total !== "number" ||
    !Number.isFinite(total)
  ) {
    throw new Error("Total must be a valid number.");
  }

  if (
    typeof discountRate !== "number" ||
    !Number.isFinite(discountRate) ||
    discountRate < 0 ||
    discountRate > 1
  ) {
    throw new Error("Discount rate must be between 0 and 1.");
  }

  return total - total * discountRate;
}

// Generate receipt
function generateReceipt(cartItems, total) {
  if (
    typeof total !== "number" ||
    !Number.isFinite(total)
  ) {
    throw new Error("Total must be a valid number.");
  }

  let receipt = "Items:\n";

  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });

  receipt += `Total: $${total.toFixed(2)}`;

  return receipt;
}

// Main shopping cart calculation
console.log("Starting shopping cart calculation...");

const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2);
const receipt = generateReceipt(cart, discountedTotal);

console.log(receipt);

document.getElementById("total").textContent =
  `Total: $${discountedTotal.toFixed(2)}`;

document.getElementById("receipt").textContent = receipt;

// Edge Case Tests
console.log("Empty cart:", calculateTotal([]));

console.log(
  "One item:",
  calculateTotal([{ name: "Book", price: 20 }])
);

console.log("No discount:", applyDiscount(100, 0));

console.log("Full discount:", applyDiscount(100, 1));
