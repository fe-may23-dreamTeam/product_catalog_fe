export const getTotalProductsCost = (product: any[]) => {
  const totalAmount = product.reduce((total, item) => {
    const price = item.priceDiscount ? item.priceDiscount : item.priceRegular;

    return total + price; // Check if you need to multiply the price by the number of items in the database.
  }, 0);

  return totalAmount;
};
