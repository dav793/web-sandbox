
import { Observable, of, forkJoin, map } from 'rxjs';

export const CURRENCY_CODE = {
    'USD': 'USD', 
    'CRC': 'CRC',
    'EUR': 'EUR'
} as const;
export type CurrencyCode = typeof CURRENCY_CODE[keyof typeof CURRENCY_CODE];

export type Currency = {
    id: string,
    code: CurrencyCode,
    name: string,
    symbol: string
};

export class CurrencyService {

    static GetCurrency(code: CurrencyCode): Observable<Currency | undefined> {
        
        return of(
            mockCurrencies.find( currency => currency.code === code )
        );
    }

    static GetDefaultCurrencyCode(): Observable<string> {
        
        return of( defaultCurrencyCode );
    }

    static GetExchangeRate(code: CurrencyCode): Observable<number | undefined> {

        const currencyRate = exchangeRates[code];

        if ( !currencyRate )
            return of( undefined );
        return of( currencyRate )
    }

    static Convert(from: CurrencyCode, to: CurrencyCode, amount: number): Observable<number> {

        return forkJoin([
            CurrencyService.GetExchangeRate(from),
            CurrencyService.GetExchangeRate(to)
        ]).pipe(
            map(([ fromRate, toRate ]) => {

                // USD to other : multiply by rate
                // Other to USD : divide by rate
                return amount * fromRate / toRate;
            })
        );
    }

};

const mockCurrencies: Currency[] = [
    {
        id: '1',
        code: 'USD',
        name: 'US Dollar',
        symbol: '$'
    },
    {
        id: '2',
        code: 'EUR',
        name: 'Euro',
        symbol: '€'
    },
    {
        id: '3',
        code: 'CRC',
        name: 'Costa Rica Colón',
        symbol: '₡'
    }
];

const defaultCurrencyCode: CurrencyCode = 'USD';

const exchangeRates: { 
    [code: string]: number 
} = {
    'USD': 1,
    'EUR': 1.08,
    'CRC': 0.0019
};