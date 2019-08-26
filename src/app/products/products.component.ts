import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  cart;
  constructor(private api: CartService) {}

  ngOnInit(): void {
    this.api
      .getAllItems()
      .subscribe((response: cart) => (this.cart = response));
  }
}
