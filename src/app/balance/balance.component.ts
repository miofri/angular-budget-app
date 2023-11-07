import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-balance',
	templateUrl: './balance.component.html',
	styleUrls: ['./balance.component.css'],
})
export class BalanceComponent {
	@Input() currentBalance: number | undefined;
	@Output() onTransferToSaving = new EventEmitter();

	transferToSavings(amount: number) {
		if (this.currentBalance != undefined && this.currentBalance - amount > 0) {
			this.onTransferToSaving.emit(amount);
		} else {
			console.error(
				'Invalid amount: balance will fall below 0 with this amount.'
			);
		}
	}
}
