import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Transaction } from './transaction.model';

@Component({
	selector: 'app-transaction',
	templateUrl: './transaction.component.html',
	styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
	transaction: Transaction | undefined;

	@Output() onTransactionAdded = new EventEmitter();
	@Input() transactionType: Transaction['type'] | undefined;

	addTransaction(amount: number, title: string) {
		if (
			this.transactionType === 'income' ||
			this.transactionType === 'expense'
		) {
			const newTransaction: Transaction = {
				amount: amount,
				title: title,
				type: this.transactionType,
			};
			this.onTransactionAdded.emit(newTransaction);
		} else console.error('Invalid transaction type!');
	}
}
