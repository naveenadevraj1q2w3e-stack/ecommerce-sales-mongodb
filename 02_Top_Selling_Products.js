db.sales.aggregate([
  {
    $group: {
      _id: "$product",
      total_quantity: { $sum: "$quantity" }
    }
  },
  {
    $sort: {
      total_quantity: -1
    }
  },
  {
    $limit: 5
  }
]);
