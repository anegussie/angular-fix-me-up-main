import { AccountSummaryComponent } from '@angular-anim/feature/account-summary';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransfersComponent } from './transfers/transfers.component';

// TODO: 2. We've setup these routes and have them on the page but they aren't working
const routes: Routes = [
  { path: '', component: AccountSummaryComponent },
  { path: 'account', component: AccountDetailsComponent, children: [{path: ':id', component: AccountDetailsComponent}] },
  { path: 'transfers', component: TransfersComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
