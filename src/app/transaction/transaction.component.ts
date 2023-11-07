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

	transaction: Transaction | undefined;
	transactionForm = this.formBuilder.group({
		amount: 0,
		title: '',
		type: <Transaction['type']>'income',
	});

	// @Input() transactionType: Transaction['type'] | undefined;
	@Output() onTransactionAdded = new EventEmitter();

	addTransaction() {
		if (this.transactionForm.get('title')?.value) {
			this.onTransactionAdded.emit(this.transactionForm.value);
		} else {
			window.alert('Please enter a title.');
		}
	}
}
