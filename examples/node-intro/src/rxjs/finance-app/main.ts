
import { retry, timer } from 'rxjs';

import { HolderService } from './modules/holder-service';
import { AccountService } from './modules/account-service';
import { TransferService } from './modules/transfer-service';
import { CurrencyService } from './modules/currency-service';

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

