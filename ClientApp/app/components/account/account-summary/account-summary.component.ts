
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AccountSummary } from '../../shared/models/account-summary.type';

@Component({
    selector: 'account-summary',
    templateUrl: './account-summary.component.html'
})
export class AccountSummaryComponent {
    @Input() accountSummary: AccountSummary;

    constructor(private router: Router) {

    }

    navigateToDetail() {
        this.router.navigate(["detail", "12345"]);
    }
}
