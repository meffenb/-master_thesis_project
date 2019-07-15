import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HabitsCategoryService {
  private headers: HttpHeaders;
  private accessPointUrl: string =
    "https://localhost:5001/api/HabitsCategories";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });
  }

  public getCategory() {
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public addCategory(payload) {
    return this.http.post(this.accessPointUrl, payload, {
      headers: this.headers
    });
  }

  public removeCategory(payload) {
    return this.http.delete(this.accessPointUrl + "/" + payload.id, {
      headers: this.headers
    });
  }

  public updateCategory(payload) {
    return this.http.put(this.accessPointUrl + "/" + payload.id, payload, {
      headers: this.headers
    });
  }
}
