
import { Component, OnInit } from '@angular/core';
import { AccountSummary } from '../../shared/models/account-summary.type';
import { AccountType } from '../../shared/models/account-type.enum';
import { AccountService } from '../../shared/services/account.service';

@Component({
    selector: 'account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent implements OnInit {
    cashAccounts: AccountSummary[];
    creditAccounts: AccountSummary[];

    constructor(private accountService: AccountService) {
        /*this.cashAccounts = [
            {
                accountNumber: '123-456-789', balance: 123456789, name: 'Checking', type: AccountType.Checking
            },
            {
                accountNumber: '234-789-012', balance: 523456789, name: 'Savings', type: AccountType.Saving
            }]

        this.creditAccounts = [
            {
                accountNumber: '323-756-289', balance: 123456789, name: 'Credit', type: AccountType.Credit
            }]*/
    }

    ngOnInit() {
        this.accountService.getAccountSummaries()
            .then(accounts => {
                this.cashAccounts = accounts.filter(v => v.type == AccountType.Checking || v.type == AccountType.Saving);
                this.creditAccounts = accounts.filter(v => v.type == AccountType.Credit);
            });
    }
}
