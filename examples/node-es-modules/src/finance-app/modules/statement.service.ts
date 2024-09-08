import { TransferService } from "./transfer-service"; // Make sure to import your services correctly
import { AccountService } from "./account-service";
import { Observable, of, switchMap, map } from 'rxjs';

export type TransactionInfo = {
    date: Date;
    account: AccountService;
    transfer: TransferService;
};

export class StatementService {

    private transactionHistory: TransactionInfo[] = [];

    listenTransfers(account: AccountService, transfer: TransferService): Observable<TransactionInfo> {
        // How to subscribe a class?
        return transfer.subscribe().pipe(
            switchMap((transactions) => {
                return of(transactions).pipe(
                    map(transaction => {
                        const transactionRecord: TransactionInfo = {
                            date: new Date(),
                            account: account,
                            transfer: transfer,
                        };

                        this.transactionHistory.push(transactionRecord);
                        
                        return transactionRecord;
                    })
                );
            }),
        );
    }

    getTransactionHistory(): TransactionInfo[] {
        return this.transactionHistory;
    }
}
