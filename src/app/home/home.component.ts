import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {
  currentDate: string;
  merchantName: string = '';
  orderTime: string = '上午';
  orderQuantity: number = 0;
  adjustQuantity: number = 0;
  totalQuantity: number = 0;
  groceryCost: number = 0;
  laborCost: number = 0;
  profit: number = 0;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.updateDate();
  }

  updateDate() {
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  calculateTotal() {
    this.totalQuantity = this.orderQuantity + this.adjustQuantity;
  }

  calculateProfit() {
    // 这里可以根据实际情况调整利润计算公式
    const revenue = this.totalQuantity * 20; // 假设每份餐的价格是20元
    this.profit = revenue - this.groceryCost - this.laborCost;
  }
}