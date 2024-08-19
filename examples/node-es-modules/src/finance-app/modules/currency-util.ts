import Dinero from 'dinero.js';

import { CurrencyService, CurrencyCode } from './currency-service';

export class CurrencyUtil {

    static Format(amount: number, currencyCode: CurrencyCode): string {
        return Dinero({
            amount: Math.ceil(amount * 100),
            precision: 2,
            currency: currencyCode as Dinero.Currency
        }).toFormat(`$0,0.00`);
    }

}
