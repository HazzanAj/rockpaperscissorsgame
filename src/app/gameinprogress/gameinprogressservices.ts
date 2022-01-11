import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GameInprogress} from "./gameinprogress";


@Injectable()

export class GameInProgressServices {

  /*Setting   GameInProgressServices class attributes and assigned value */
  private apiServerUrl = environment.apibaseUrl;

  /*constructor */
  constructor(private http: HttpClient) {
  }

  /* Setting get Method */
  public getGameinprogress(): Observable<any> {
    return this.http.get<GameInprogress>(`${this.apiServerUrl}rps/history`);
  }

  /* Setting get Post Method */
  public addGameinprogress(gameinprogress: GameInprogress): Observable<GameInprogress> {
    return this.http.post<GameInprogress>(`${this.apiServerUrl}rps/live`, gameinprogress);
  }

  /* Setting get Update Method */
  public updateGameinprogress(gameinprogress: GameInprogress): Observable<GameInprogress> {
    return this.http.put<GameInprogress>(`${this.apiServerUrl}rps/update`, gameinprogress);
  }

  /* Setting get Delete Method */
  public deleteGameinprogress(gameinprogressId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}rps/delete/${gameinprogressId}`);
  }

}

