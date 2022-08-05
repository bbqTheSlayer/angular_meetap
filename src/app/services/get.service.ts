import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private urlCat = 'https://api.thecatapi.com/v1/images/search?limit=10';
  private urlDog = 'https://dog.ceo/api/breeds/image/random/10';

  constructor(private httpClient: HttpClient) {
  }

  getCat() {
    return this.httpClient.get(this.urlCat);
  }

  getDog() {
    return this.httpClient.get(this.urlDog);
  }
}
