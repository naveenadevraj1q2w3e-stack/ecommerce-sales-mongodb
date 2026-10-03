db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      total_sales: { $sum: "$total_amount" }
    }
  }
]);
