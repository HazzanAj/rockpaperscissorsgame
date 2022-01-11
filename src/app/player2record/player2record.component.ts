import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Player2record} from "./player2record";
import {Player2recordService} from "./player2record.service";

@Component({
  selector: 'app-player2record',
  templateUrl: './player2record.component.html',
  styleUrls: ['./player2record.component.css']
})
export class Player2recordComponent implements OnInit {
  public player2records: Player2record[] | any;
  public editPlayer2record: Player2record | any;
  public deletePlayer2record: Player2record | any;

  constructor(private player2recordService: Player2recordService) {
  }

  ngOnInit() {
    this.getPlayer2records();
  }

  public getPlayer2records(): void {
    this.player2recordService.getPlayer2records()
      .subscribe((response: Player2record[]) => {
          this.player2records = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);

        }
      );
  }


  /** For creating button and hiding it**/
  public onOpenModal(player2record: Player2record, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPlayer2recordModal');
    }
    if (mode === 'edit') {
      this.editPlayer2record = player2record;
      button.setAttribute('data-target', '#updatePlayer2recordModal');
    }
    if (mode === 'delete') {
      this.deletePlayer2record = player2record;
      button.setAttribute('data-target', '#deletePlayer2recordModal');
    }
// @ts-ignore
    container.appendChild(button);
    button.click();
  }


  /** For Adding Player2record**/
  public onAddPlayer2record(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-Player2record-form').click();
    this.player2recordService.addPlayer2record(addForm.value).subscribe(
      (response: Player2record) => {
        console.log(response);
        this.getPlayer2records();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  /** For Updating Player2record**/
  public onUpdatePlayer2record(player2record: Player2record): void {
    this.player2recordService.updatePlayer2record(player2record).subscribe(
      (response: Player2record) => {
        console.log(response);
        this.getPlayer2records();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /** For Deleting Player2record**/
  public onDeletePlayer2record(player2recordId: number): void {
    this.player2recordService.deletePlayer2record(player2recordId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPlayer2records();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /** Searching For Employee**/


  public searchPlayer2records(key: string): void {
    console.log(key);
    const results: Player2record[] = [];

    for (const player2record of this.player2records) {
      if (player2record.player2Name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player2record.player2NoOfMatches.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player2record.player2Wins.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player2record.player2Loss.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player2record.player2WinRatio.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player2record.player2MostPlayedHands.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(player2record);
      }
    }
    this.player2records = results;
    if (results.length === 0 || !key) {
      this.getPlayer2records();
    }
  }

}
