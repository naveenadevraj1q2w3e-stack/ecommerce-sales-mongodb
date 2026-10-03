db.sales.aggregate([
  {
    $group: {
      _id: "$payment_method",
      total_sales: { $sum: "$total_amount" }
    }
  }
]);
