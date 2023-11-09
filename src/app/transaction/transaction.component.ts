import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Transaction } from './transaction.model';

@Component({
	selector: 'app-transaction',
	templateUrl: './transaction.component.html',
	styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
	constructor(private formBuilder: FormBuilder) {}

	transactionForm = this.formBuilder.group({
		amount: [0],
		title: '',
		type: <Transaction['type']>'income',
	});

	@Output() onTransactionAdded = new EventEmitter();

	addTransaction() {
		if (
			(this.transactionForm.get('title')?.value &&
				this.transactionForm.get('type')?.value === 'income') ||
			this.transactionForm.get('type')?.value === 'expense'
		) {
			this.onTransactionAdded.emit(this.transactionForm.value);
			this.transactionForm.reset();
		} else {
			window.alert('Please make sure that all fields are filled!');
		}
	}
}
