import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-balance',
	templateUrl: './balance.component.html',
	styleUrls: ['./balance.component.css'],
})
export class BalanceComponent {
	constructor(private formBuilder: FormBuilder) {}

	transferForm = this.formBuilder.group({
		amount: <number>0,
	});

	@Input() currentBalance: number | undefined;
	@Output() onTransferToSaving = new EventEmitter();

	transferToSavings() {
		if (
			this.currentBalance != undefined &&
			this.transferForm.value.amount! > -1 &&
			this.currentBalance - this.transferForm.value.amount! > -1
		) {
			this.onTransferToSaving.emit(this.transferForm.value.amount);
		} else {
			window.alert(
				'Invalid amount: balance will fall below 0 with this amount.'
			);
		}
	}
}
