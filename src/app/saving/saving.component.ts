import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-saving',
	templateUrl: './saving.component.html',
	styleUrls: ['./saving.component.css'],
})
export class SavingComponent {
	constructor(private formBuilder: FormBuilder) {}

	progressValue: number = 0;
	targetAmount: number = 0;
	transferForm = this.formBuilder.group({
		amount: <number>0,
	});
	@Input() savingAmount: number | undefined;
	@Output() onTransferToSaving = new EventEmitter();

	updateProgressValue() {
		console.log(this.targetAmount);

		this.progressValue = (this.savingAmount! / this.targetAmount) * 100;
	}
	setTarget(amount: number) {
		this.targetAmount = amount;
		this.updateProgressValue();
	}
	transferToBalance() {
		if (
			this.savingAmount !== undefined &&
			this.transferForm.value.amount! > 0 &&
			this.savingAmount - this.transferForm.value.amount! > 0
		) {
			this.onTransferToSaving.emit(this.transferForm.value.amount);
		} else {
			console.error('Invalid transfer amount!');
		}
	}
}
