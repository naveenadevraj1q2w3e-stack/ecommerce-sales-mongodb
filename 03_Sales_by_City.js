db.sales.aggregate([
  {
    $group: {
      _id: "$city",
      total_sales: { $sum: "$total_amount" }
    }
  },
  {
    $sort: {
      total_sales: -1
    }
  },
  {
    $limit: 5
  }
]);
