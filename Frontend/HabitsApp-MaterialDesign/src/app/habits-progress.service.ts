import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class HabitsProgressService {
  private headers: HttpHeaders;
  private accessPointUrl: string =
    "https://localhost:5001/api/HabitsProgresses";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });
  }

  public getProgress() {
    return this.http.get(this.accessPointUrl, { headers: this.headers });
  }

  public addProgress(payload) {
    return this.http.post(this.accessPointUrl, payload, {
      headers: this.headers
    });
  }

  public removeProgress(payload) {
    return this.http.delete(this.accessPointUrl + "/" + payload.id, {
      headers: this.headers
    });
  }

  public updateProgress(payload) {
    return this.http.put(this.accessPointUrl + "/" + payload.id, payload, {
      headers: this.headers
    });
  }
}
