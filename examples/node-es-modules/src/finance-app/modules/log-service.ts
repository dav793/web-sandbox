import { Observable, of } from 'rxjs';

export type TransferLog = {
    id: string,
    transferId: string,
    senderId: string,
    finalSenderBalance: number,      
    recipientId: string,       
    finalRecipientBalance: number, 
    amount: number,
    timestamp: Date
};

export class LogService {

    static LogTransfer(logEntry: TransferLog): Observable<TransferLog> {
        
        mockTransferLogs.push( logEntry );
        console.log( `Logged transfer: `, logEntry );

        return of( logEntry );
    }

}

const mockTransferLogs: TransferLog[] = [];