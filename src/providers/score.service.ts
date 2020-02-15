import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScoreService {
  public API = 'http://localhost:8080';
  //public experiment_API = this.API + '/experiments';

  constructor(public http: HttpClient) {
  }

  addScore(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.API+'/scoretable/new',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  async getScores():Promise<any>{
    const response = await this.http.get(this.API + '/scoretable').toPromise();
    return response;
}
  /*getScores(): Observable<any> {
    return this.http.get(this.API + '/scoretable');
  }*/



}