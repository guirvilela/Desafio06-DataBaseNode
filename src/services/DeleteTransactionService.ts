import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Transaction from '../models/Transaction';
import TransactionRepostory from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepostory = getCustomRepository(TransactionRepostory);

    const transaction = await transactionRepostory.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not Exist');
    }

    await transactionRepostory.remove(transaction);
  }
}

export default DeleteTransactionService;
