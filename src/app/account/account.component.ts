import { AccountsService } from './../accounts.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;


  constructor(private loggingService:LoggingService,private accountService:AccountsService){
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id,status);
    this.loggingService.logStatusChanged(status);
  }
}
