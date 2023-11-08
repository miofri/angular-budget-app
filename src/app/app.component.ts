import { Component } from '@angular/core';
import { Transaction } from './transaction/transaction.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'budget-app';
	savingAmount: number = 5000;
	currentBalance: number = 2000;

	handleAddTransaction(transaction: Transaction) {
		if (transaction.type === 'income' && transaction.amount) {
			this.currentBalance = this.currentBalance + transaction.amount;
		} else if (transaction.type === 'expense' && transaction.amount) {
			this.currentBalance = this.currentBalance - transaction.amount;
		}
	}
	handleTransferToBalance(amount: number) {
		this.currentBalance = this.currentBalance + amount;
		this.savingAmount = this.savingAmount - amount;
	}
	handleTransferToSaving(amount: number) {
		this.currentBalance = this.currentBalance - amount;
		this.savingAmount = this.savingAmount + amount;
	}
}
