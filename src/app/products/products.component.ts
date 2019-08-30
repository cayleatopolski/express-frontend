import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  cart: object[];
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  itemToEdit: object;

  constructor(private api: CartService) {}

  ngOnInit() {
    this.api.getAllItems().subscribe(response => (this.cart = response));
  }

  addItem(form: NgForm): void {
    this.api.addItem(form.value).subscribe(response => (this.cart = response));
  }

  removeItem(id: number) {
    this.api.removeItem(id).subscribe(response => (this.cart = response));
  }

  updateItem(form: NgForm, id: number) {
    this.api
      .updateItem(form.value, id)
      .subscribe(response => (this.cart = response));
  }

  setItemToEdit(item: object) {
    this.itemToEdit = item;
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  toggleEditForm(): void {
    this.showEditForm = !this.showEditForm;
  }
}
