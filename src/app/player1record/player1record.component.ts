import {Component, OnInit} from '@angular/core';
import {Player1record} from "./player1record";
import {Player1recordService} from "./player1record.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-player1record',
  templateUrl: './player1record.component.html',
  styleUrls: ['./player1record.component.css']
})
export class Player1recordComponent implements OnInit {
  public player1records: Player1record[] | any;
  public editPlayer1record: Player1record | any;
  public deletePlayer1record: Player1record | any;

  constructor(private player1recordService: Player1recordService) {
  }

  ngOnInit() {
    this.getPlayer1records();
  }

  public getPlayer1records(): void {
    this.player1recordService.getPlayer1records()
      .subscribe((response: Player1record[]) => {
          this.player1records = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);

        }
      );
  }


  /** For creating button and hiding it**/
  public onOpenModal(player1record: Player1record, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPlayer1recordModal');
    }
    if (mode === 'edit') {
      this.editPlayer1record = player1record;
      button.setAttribute('data-target', '#updatePlayer1recordModal');
    }
    if (mode === 'delete') {
      this.deletePlayer1record = player1record;
      button.setAttribute('data-target', '#deletePlayer1recordModal');
    }
// @ts-ignore
    container.appendChild(button);
    button.click();
  }


  /** For Adding Player1record**/
  public onAddPlayer1record(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-Player1record-form').click();
    this.player1recordService.addPlayer1record(addForm.value).subscribe(
      (response: Player1record) => {
        console.log(response);
        this.getPlayer1records();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  /** For Updating Player1record**/
  public onUpdatePlayer1record(player1record: Player1record): void {
    this.player1recordService.updatePlayer1record(player1record).subscribe(
      (response: Player1record) => {
        console.log(response);
        this.getPlayer1records();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /** For Deleting Player1record**/
  public onDeletePlayer1record(player1recordId: number): void {
    this.player1recordService.deletePlayer1record(player1recordId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPlayer1records();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /** Searching For Employee**/


  public searchPlayer1records(key: string): void {
    console.log(key);
    const results: Player1record[] = [];

    for (const player1record of this.player1records) {
      if (player1record.player1Name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player1record.player1NoOfMatches.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player1record.player1Wins.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player1record.player1Loss.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player1record.player1WinRatio.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player1record.player1MostPlayedHands.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(player1record);
      }
    }
    this.player1records = results;
    if (results.length === 0 || !key) {
      this.getPlayer1records();
    }
  }

}
