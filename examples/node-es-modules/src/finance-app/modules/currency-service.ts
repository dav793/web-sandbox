
import { Observable, of } from 'rxjs';

export type Currency = {
    id: string,
    code: string,
    name: string,
    symbol: string
};

export class CurrencyService {

    static GetCurrency(code: string): Observable<Currency | undefined> {
        
        return of(
            mockCurrencies.find( currency => currency.code === code )
        );
    }

    static GetDefaultCurrencyCode(): Observable<string> {
        
        return of( defaultCurrencyCode );
    }

    static GetExchangeRate(code: string): Observable<number | undefined> {

        const currencyRate = exchangeRates[code];

        if ( !currencyRate )
            return of( undefined );
        return of( currencyRate )
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

const defaultCurrencyCode = 'USD';

const exchangeRates: { 
    [code: string]: number 
} = {
    'USD': 1,
    'EUR': 1.08,
    'CRC': 0.0019
};