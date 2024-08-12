
import { Observable, of, forkJoin, switchMap, map, throwError } from 'rxjs';
import { nanoid } from 'nanoid';

import { Account, AccountService } from './account-service.js';

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

        return of(undefined).pipe(

            switchMap(() => {
                if (amount <= 0)
                    return throwError( () => new Error(`Invalid amount`) );
                return of(undefined);
            }),

            switchMap(() => {

                // forkJoin ejecuta de forma paralela varios observables
                // https://rxjs.dev/api/index/function/forkJoin
                return forkJoin({
                    sender: AccountService.GetAccount(senderId),
                    recipient: AccountService.GetAccount(recipientId)
                });
            }),

            // monedas

            switchMap(({ sender, recipient }) => {

                if (sender.balance < amount)
                    return throwError( () => new Error('Insufficient funds') );
                return of({ sender, recipient });
            }),

            switchMap(({ sender, recipient }) => {
                return forkJoin([
                    AccountService.SetBalance(sender.id, sender.balance - amount),
                    AccountService.SetBalance(recipient.id, recipient.balance + amount)
                ]);
            }),

            switchMap(([ sender, recipient ]) => {

                const transfer = {
                    id: nanoid(8),
                    senderId: sender.id,
                    recipientId: recipient.id,
                    amount
                };

                mockTransfers.push(transfer);

                return of(transfer);
            })

        );
    }
}

const mockTransfers: Transfer[] = [];
