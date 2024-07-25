
import { Observable, of } from 'rxjs';

export type Holder = {
    id: string,
    name: string
}

export class HolderService {

    static GetHolder(id: string): Observable<Holder | undefined> {

        return of(
            mockHolders.find( holder => holder.id === id )
        );
    } 

}

const mockHolders: Holder[] = [
    {
        id: '1',
        name: 'Brody Wiggins'
    },
    {
        id: '2',
        name: 'Nash Bradford'
    },
    {
        id: '3',
        name: 'Brenden Buchanan'
    },
    {
        id: '4',
        name: 'Dax Meyer'
    },
    {
        id: '5',
        name: 'Zachariah Odom'
    },
    {
        id: '6',
        name: 'Issac Branch'
    }
];
