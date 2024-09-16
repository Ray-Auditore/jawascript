
function applyDiscount(userType, purchaseAmount) {
  let discount;
  if (userType === "VIP") {
    discount = 20;
  } else {
    discount = 10;
  }
  const totalDiscount = (purchaseAmount * discount) / 100;
  return purchaseAmount - totalDiscount;
}

console.log(applyDiscount("VIP", 200));
console.log(applyDiscount("NON VIP", 100));
