import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperimentService {
  public API = 'http://localhost:8080';
  public experiment_API = this.API + '/experiments';

  constructor(public http: HttpClient) {
  }

  getExperiments(): Observable<any> {
    return this.http.get(this.experiment_API);
  }
}