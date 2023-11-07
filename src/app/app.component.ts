import { Component } from '@angular/core';
import { Transaction } from './transaction/transaction.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'budget-app';
	savingAmount: number | undefined = 5000;
	currentBalance: number | undefined = 2000;

	handleAddTransaction(transaction: Transaction) {}
	handleTransferToBalance(amount: number) {}
	handleTransferToSaving(amount: number) {}
}
