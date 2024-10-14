Page({
  data: {
    currentDate: '',
    merchantName: '',
    orderTime: '上午',
    orderQuantity: 0,
    adjustQuantity: 0,
    totalQuantity: 0,
    groceryCost: 0,
    laborCost: 0,
    profit: 0
  },
  onLoad() {
    this.setData({
      currentDate: this.formatDate(new Date())
    })
  },
  formatDate(date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  },
  onOrderTimeChange(e) {
    this.setData({
      orderTime: e.detail.value
    })
  },
  onInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [field]: e.detail.value
    }, () => {
      this.calculateTotal()
      this.calculateProfit()
    })
  },
  calculateTotal() {
    const { orderQuantity, adjustQuantity } = this.data
    const total = Number(orderQuantity) + Number(adjustQuantity)
    this.setData({
      totalQuantity: total
    })
  },
  calculateProfit() {
    const { totalQuantity, groceryCost, laborCost } = this.data
    const revenue = totalQuantity * 20 // 假设每份餐的价格是20元
    const profit = revenue - Number(groceryCost) - Number(laborCost)
    this.setData({
      profit: profit.toFixed(2)
    })
  },
  submitOrder() {
    // 这里可以实现提交订单的逻辑，例如发送到服务器
    wx.showToast({
      title: '订单已提交',
      icon: 'success'
    })
  }
})