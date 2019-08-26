import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:5000/cart-items");
  }
}
