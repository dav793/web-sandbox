
import { Observable, of, map, throwError, switchMap, tap } from 'rxjs';

import { CurrencyCode } from './currency-service.js';
import { CurrencyUtil } from './currency-util.js';

export type Account = {
    id: string,
    holder: string,
    currency: CurrencyCode,
    balance: number
};

export class AccountService {

    static GetAccounts(): Observable<Account[]> {
        
        return of( mockAccounts );
    }

    static GetAccount(id: string): Observable<Account | undefined> {

        const account = mockAccounts.find( acc => acc.id === id );
        if (!account)
            return of( undefined );
        return of( account );
    }

    static GetAccountErrorProne(id: string): Observable<Account | undefined> {
        
        return of( undefined ).pipe(
            switchMap(() => {

                if ( Math.random() < 0.3 )
                    return AccountService.GetAccount(id);
                return throwError( () => new Error(`Connection error!`) );
            })
        );
    }

    static SetBalance(accountId: string, balance: number): Observable<Account | undefined> {

        return AccountService.GetAccount(accountId).pipe(
            map(account => {
                if ( !account )
                    return undefined;

                account.balance = balance;
                return account;
            })
        );
    }

    static AccountToString(account: Account | undefined): string {
        if ( !account )
            return `Invalid account`;
        return `
            ACC: (${ account.id }), 
            currency: ${ account.currency }, 
            balance: ${ CurrencyUtil.Format( account.balance, account.currency ) }
        `.replace(/\n/g, '').replace(/\s+/g, ' ');
    }

    static PrintAllAccounts(): Observable<void> {
        return AccountService.GetAccounts()
            .pipe(
                tap(accounts => {
                    for( let account of accounts ) {
                        console.log( AccountService.AccountToString( account ) );
                    }
                }),
                map(() => {})
            );
    }

}

const mockAccounts: Account[] = [
    {
        id: '1',
        holder: '1',
        currency: 'USD',
        balance: 100000
    },
    {
        id: '2',
        holder: '2',
        currency: 'USD',
        balance: 5530
    },
    {
        id: '3',
        holder: '3',
        currency: 'CRC',
        balance: 2500000
    },
    {
        id: '4',
        holder: '4',
        currency: 'USD',
        balance: 332000
    },
    {
        id: '5',
        holder: '5',
        currency: 'EUR',
        balance: 250
    },
    {
        id: '6',
        holder: '6',
        currency: 'CRC',
        balance: 42000
    }
];