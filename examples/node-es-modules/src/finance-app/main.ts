
import { retry, switchMap, timer } from 'rxjs';

import { HolderService } from './modules/holder-service.js';
import { AccountService } from './modules/account-service.js';
import { TransferService } from './modules/transfer-service.js';
import { CurrencyService } from './modules/currency-service.js';

// AccountService.PrintAllAccounts()
//     .subscribe(() => {});

AccountService.GetAccountErrorProne('1')
    .pipe(
        retry({
            count: 10,
            delay: (error, retryCount) => {
                console.log(`Request failed ${retryCount} times. Retrying...`);
                return timer(1000);
            }
        })
    )
    .subscribe({
        next: x => console.log(x),
        error: err => console.error(err)
    });
