function checkStock(item, requestQuantity) {
<<<<<<< HEAD
    let Stock = 50;
    if (requestQuantity > Stock) {
      return `Stock Inssuficient for item ${item}!`;
    } else {
      return `Stock sufficient for item ${item}!`;
    }
  }
  console.log(checkStock("milk", 50));
  
  function restockItem(item, additionalStock) {
    let stock = 50; // Stok barang awal
    stock += additionalStock; // Menambahkan stok baru
    if (stock >= 60) {
      // Misalnya, kita ingin memenuhi pesanan 60 unit
      return `Restock complete for ${item}`;
    } else {
      return `Restock needed for ${item}`;
    }
  }
  
  console.log(restockItem("milk", 20));
=======
  let Stock = 50;
  if (requestQuantity > Stock) {
    return `Stock Inssuficient for item ${item}!`;
  } else {
    return `Stock sufficient for item ${item}!`;
  }
}
console.log(checkStock("milk", 50));

function restockItem(item, additionalStock) {
  let stock = 50; // Stok barang awal
  stock += additionalStock; // Menambahkan stok baru
  if (stock >= 60) {
    // Misalnya, kita ingin memenuhi pesanan 60 unit
    return `Restock complete for ${item}`;
  } else {
    return `Restock needed for ${item}`;
  }
}

console.log(restockItem("milk", 20));

>>>>>>> b3d60680055a088ac472b5274e5f42f669fc6358
