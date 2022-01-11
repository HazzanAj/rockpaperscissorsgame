import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player1record} from "./player1record";

@Injectable()

export class Player1recordService {

  /*Setting  Player1recordService class attributes and assigned value */
  private apiServerUrl = environment.apibaseUrl;

  /*constructor */
  constructor(private http: HttpClient) {
  }

  /* Setting get Method */
  public getPlayer1records(): Observable<any> {
    return this.http.get<Player1record>(`${this.apiServerUrl}player1bad-api-rps/history`);
  }

  /* Setting get Post Method */
  public addPlayer1record(player1record: Player1record): Observable<Player1record> {
    return this.http.post<Player1record>(`${this.apiServerUrl}player1bad-api-rps/live`, player1record);
  }

  /* Setting get Update Method */
  public updatePlayer1record(player1record: Player1record): Observable<Player1record> {
    return this.http.put<Player1record>(`${this.apiServerUrl}player1bad-api-rps/update`, player1record);
  }

  /* Setting get Delete Method */
  public deletePlayer1record(player1recordId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}player1bad-api-rps/delete/${player1recordId}`);
  }

}

