import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BalanceComponent } from './balance/balance.component';
import { SavingComponent } from './saving/saving.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		TransactionComponent,
		BalanceComponent,
		SavingComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		FormsModule,
		MatProgressBarModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
