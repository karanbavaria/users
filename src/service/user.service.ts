import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "src/app/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  readonly URL = `http://localhost:3000/users`;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL).pipe(
      map((users: any) => {
        return users.map(
          (user: any) =>
            ({
              id: user._id,
              username: user.username,
              imageURL: user.imageURL,
            } as User)
        );
      })
    );
  }
}
