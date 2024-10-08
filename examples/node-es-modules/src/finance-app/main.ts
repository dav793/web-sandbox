
import { retry, switchMap, timer, forkJoin } from 'rxjs';

import { HolderService } from './modules/holder-service.js';
import { AccountService } from './modules/account-service.js';
import { TransferService } from './modules/transfer-service.js';
import { CurrencyService, CurrencyCode, CURRENCY_CODE } from './modules/currency-service.js';
import { CurrencyUtil } from './modules/currency-util.js';

// AccountService.PrintAllAccounts()
//     .subscribe(() => {});

// AccountService.GetAccountErrorProne('1')
//     .pipe(
//         retry({
//             count: 10,
//             delay: (error, retryCount) => {
//                 console.log(`Request failed ${retryCount} times. Retrying...`);
//                 return timer(1000);
//             }
//         })
//     )
//     .subscribe({
//         next: x => console.log(x),
//         error: err => console.error(err)
//     });

// TransferService.CreateTransfer('1', '2', 50000).pipe(
//     switchMap(transfer => {

//         console.log('========= TRANSFER =========');
//         console.log(transfer);

//         console.log('========= ACCOUNTS =========');
//         return AccountService.PrintAllAccounts();
//     })
// ).subscribe({
//     next: () => {},
//     error: err => console.log(err.message)
// });

// @ts-ignore
// forkJoin([
//     CurrencyService.Convert('USD', 'CRC', 5000),
//     CurrencyService.Convert('CRC', 'USD', 100000),
//     CurrencyService.Convert('EUR', 'CRC', 100)
// ]).subscribe(([r1, r2, r3]) => {
//     console.log(
//         CurrencyUtil.Format( r1, 'CRC' ),
//         CurrencyUtil.Format( r2, 'USD' ),
//         CurrencyUtil.Format( r3, 'CRC' )
//     );
// });

// console.log( CurrencyUtil.Format( 10000, CURRENCY_CODE.USD ) );

TransferService.CreateTransfer('2', '3', 5000).pipe(
    switchMap(transfer => {

        console.log('========= TRANSFER =========');
        console.log(transfer);

        console.log('========= ACCOUNTS =========');
        return AccountService.PrintAllAccounts();
    })
).subscribe({
    next: () => {},
    error: err => console.log(err.message)
});