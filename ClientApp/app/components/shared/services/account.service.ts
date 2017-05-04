
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AccountSummary } from '../models/account-summary.type';
import { AccountDetail } from '../models/account-details.type';
import 'rxjs/Rx';

@Injectable()
export class AccountService {
    constructor(private http: Http) {

    }

    getAccountSummaries() {
        return this.http.get('api/Bank/GetAccountSummaries')
            .map(response => response.json() as AccountSummary[])
            .toPromise();
    }

    getAccountDetail() {
        return this.http.get('api/Bank/GetAccountDetail/${id}')
            .map(response => response.json() as AccountDetail)
            .toPromise();
    }
}
