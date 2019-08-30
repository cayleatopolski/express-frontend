import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:5000/cart-items");
  }

  addItem(item: object): Observable<any> {
    return this.http.post("http://localhost:5000/cart-items", item);
  }

  removeItem(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/cart-items/${id}`);
  }

  updateItem(item: number, id: number): Observable<any> {
    return this.http.put(`http://localhost:5000/cart-items/${id}`, item);
  }
}
