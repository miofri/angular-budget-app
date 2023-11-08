export interface Transaction {
	amount?: number | undefined | null;
	type?: 'income' | 'expense' | undefined | null;
	title?: string | null | undefined;
}

export interface TransactionType {
	type: 'income' | 'expense';
}
