import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Router, NavigationEnd  } from '@angular/router';
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



  accounts: Account[]= <Account[]> {};
  currentRoute = '';
  accountDetail: Account = <Account> {};
  idIndex = 0xFFFFFF;




  constructor(private accountService: AccountService, private activatedRoute : ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.idIndex = Number(this.router.url.split('/').slice(-1).join(''));


     console.log(this.router.url.split('/').slice(-1).join(''));

     this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
    });

    this.accountDetail = (this.idIndex>0 && (this.idIndex <= this.accounts.length))? this.accounts[this.idIndex -1]:<Account>{};


      this.accountService.accountdetails.subscribe((data) => {
      this.accounts=<Account[]> data;
  })

  }

  isValidInput(): boolean {

    const val = parseInt(this.router.url.split('/').slice(-1).join(''));

    console.log(val);

    if ((val >0) && (val <= this.accounts.length )) return true;
    return false;
  }





}



