import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

import {GameInProgressServices} from "./gameinprogressservices";
import {GameInprogress} from "./gameinprogress";

@Component({
  selector: 'app-gameinprogress',
  templateUrl: './gameinprogress.component.html',
  styleUrls: ['./gameinprogress.component.css']
})
export class GameinprogressComponent implements OnInit {
  public gameinprogresses: GameInprogress[] | any;
  public editGameinprogress: GameInprogress | any;
  public deleteGameinprogress: GameInprogress | any;

  constructor(private gameInProgressServices: GameInProgressServices) {
  }

  ngOnInit() {
    this.getGameinprogress();
  }

  public getGameinprogress(): void {
    this.gameInProgressServices.getGameinprogress()
      .subscribe((response: GameInprogress[]) => {
          this.gameinprogresses = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);

        }
      );
  }


  /** For creating button and hiding it**/
  public onOpenModal(gameinprogress: GameInprogress, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGameinprogressModal');
    }
    if (mode === 'edit') {
      this.editGameinprogress = gameinprogress;
      button.setAttribute('data-target', '#updateGameinprogressModal');
    }
    if (mode === 'delete') {
      this.deleteGameinprogress = gameinprogress;
      button.setAttribute('data-target', '#deleteGameinprogressModal');
    }
// @ts-ignore
    container.appendChild(button);
    button.click();
  }


  /** For Adding Player1record**/
  public onAddGameinprogress(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-gameinprogress-form').click();
    this.gameInProgressServices.addGameinprogress(addForm.value).subscribe(
      (response: GameInprogress) => {
        console.log(response);
        this.getGameinprogress();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  /** For Updating Player1record**/
  public onUpdateGameinprogress(gameinprogress: GameInprogress): void {
    this.gameInProgressServices.updateGameinprogress(gameinprogress).subscribe(
      (response: GameInprogress) => {
        console.log(response);
        this.getGameinprogress();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /** For Deleting Player1record**/
  public onDeleteGameinprogress(gameinprogressId: number): void {
    this.gameInProgressServices.deleteGameinprogress(gameinprogressId).subscribe(
      (response: void) => {
        console.log(response);
        this.getGameinprogress();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /** Searching For Employee**/

  public searchGameinprogress(key: string): void {
    console.log(key);
    const results: GameInprogress[] = [];

    for (const gameinprogress of this.gameinprogresses) {
      if (gameinprogress.gameStage.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || gameinprogress.player1Name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || gameinprogress.player2Name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || gameinprogress.player1Scores.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || gameinprogress.player2Scores.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || gameinprogress.leadingPlayer.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(gameinprogress);
      }
    }
    this.gameinprogresses = results;
    if (results.length === 0 || !key) {
      this.getGameinprogress();
    }
  }

}
