import csvParse from 'csv-parse';
import fs from 'fs';
import Transaction from '../models/Transaction';

class ImportTransactionsService {
  async execute(filePath: string): Promise<Transaction[]> {
    const contactsReadStream = fs.createReadStream(filePath);

    const parsed = csvParse({
      from_line: 2,
    });
    const parsedCSV = contactsReadStream.pipe(parsed);

    const transactions = {};
    const categories = [];

    parsedCSV.on('data', async line => {
      const [title, type, value, category] = line.map((cell: string) =>
        cell.trim(),
      );

      if (!title || !type || !value) return;
    });
  }
}

export default ImportTransactionsService;
