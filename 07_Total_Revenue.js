db.sales.aggregate([
  {
    $group: {
      _id: null,
      total_revenue: { $sum: "$total_amount" }
    }
  }
]);
