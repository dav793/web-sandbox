
import { Observable, of, forkJoin, switchMap, map } from 'rxjs';
// import { nanoid } from 'nanoid';

import { Account, AccountService } from './account-service';

export type Transfer = {
    id: string,
    senderId: string,           // debit        credit
    recipientId: string,        // credit       debit
    amount: number              // 10,000       -10,000
};

export class TransferService {

    static GetTransfer(id: string): Observable<Transfer | undefined> {

        return of(
            mockTransfers.find( transfer => transfer.id === id )
        );
    }

    static CreateTransfer(senderId: string, recipientId: string, amount: number): Observable<Transfer> {

        // forkJoin ejecuta de forma paralela varios observables
        // https://rxjs.dev/api/index/function/forkJoin
        return forkJoin({
            sender: AccountService.GetAccount(senderId),
            recipient: AccountService.GetAccount(recipientId)
        }).pipe(
            switchMap(({ sender, recipient }) => {

                return forkJoin([
                    AccountService.SetBalance(sender.id, sender.balance - amount),
                    AccountService.SetBalance(recipient.id, recipient.balance + amount)
                ]);
            }),
            switchMap(([ sender, recipient ]) => {

                return of({
                    id: '',
                    senderId: sender.id,
                    recipientId: recipient.id,
                    amount
                });
            })
        );
    }
}

const mockTransfers: Transfer[] = [];
