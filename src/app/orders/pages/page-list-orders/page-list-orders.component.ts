import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public myTitle: string = 'list orders';

  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = "My Order's list";
  }
}
