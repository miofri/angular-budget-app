export interface Transaction {
	amount: number;
	type: 'income' | 'expense';
	title: string;
}

export interface TransactionType {
	type: 'income' | 'expense';
}
