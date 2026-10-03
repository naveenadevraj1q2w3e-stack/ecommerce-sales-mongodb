db.sales.aggregate([
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m",
          date: "$order_date"
        }
      },
      total_sales: { $sum: "$total_amount" }
    }
  }
]);
