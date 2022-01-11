import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player2record} from "./player2record";

@Injectable()

export class Player2recordService {

  /*Setting  Player2recordService class attributes and assigned value */
  private apiServerUrl = environment.apibaseUrl;

  /*constructor */
  constructor(private http: HttpClient) {
  }

  /* Setting get Method */
  public getPlayer2records(): Observable<any> {
    return this.http.get<Player2record>(`${this.apiServerUrl}player2bad-api-rps/history`);
  }

  /* Setting get Post Method */
  public addPlayer2record(player2record: Player2record): Observable<Player2record> {
    return this.http.post<Player2record>(`${this.apiServerUrl}player2bad-api-rps/live`, player2record);
  }

  /* Setting get Update Method */
  public updatePlayer2record(player2record: Player2record): Observable<Player2record> {
    return this.http.put<Player2record>(`${this.apiServerUrl}player2bad-api-rps/update`, player2record);
  }

  /* Setting get Delete Method */
  public deletePlayer2record(player2recordId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}player2bad-api-rps/delete/${player2recordId}`);
  }

}

