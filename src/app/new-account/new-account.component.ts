import { AccountsService } from './../accounts.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {

  constructor(private loggingService:LoggingService,private accountService:AccountsService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChanged(accountStatus);
  }

}
