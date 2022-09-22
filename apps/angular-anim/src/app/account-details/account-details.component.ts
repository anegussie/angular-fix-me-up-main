import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
// eslint-disable-next-line
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { Account } from 'libs/shared/services/src/lib/account';




@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AccountDetailsComponent implements OnInit {
//export class AccountDetailsComponent {
  accounts: Account[]= <Account[]> {};
  accountsFilter = '';

  constructor(private accountService: AccountService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
      this.accountService.accountdetails.subscribe((data) => {
      this.accounts=<Account[]> data;
  })



  }
}



