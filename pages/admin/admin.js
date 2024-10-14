Page({
  data: {
    orders: [],
    totalRevenue: 0,
    totalProfit: 0
  },
  onLoad() {
    // 模拟从服务器获取订单数据
    this.fetchOrders()
  },
  fetchOrders() {
    // 这里应该是从服务器获取数据，现在用模拟数据代替
    const mockOrders = [
      { id: 1, merchantName: '商户A', orderQuantity: 100, revenue: 2000, profit: 500 },
      { id: 2, merchantName: '商户B', orderQuantity: 80, revenue: 1600, profit: 400 },
      { id: 3, merchantName: '商户C', orderQuantity: 120, revenue: 2400, profit: 600 }
    ]
    
    const totalRevenue = mockOrders.reduce((sum, order) => sum + order.revenue, 0)
    const totalProfit = mockOrders.reduce((sum, order) => sum + order.profit, 0)
    
    this.setData({
      orders: mockOrders,
      totalRevenue,
      totalProfit
    })
  },
  viewOrderDetail(e) {
    const orderId = e.currentTarget.dataset.id
    // 这里可以跳转到订单详情页面
    wx.showToast({
      title: `查看订单 ${orderId} 详情`,
      icon: 'none'
    })
  }
})