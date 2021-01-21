import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/models/user.model";
import { UserService } from "src/service/user.service";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AppState } from "./app.state";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = "users";

  columnsToDisplay = ["id", "username"];
  expandedElement: User | null;
  userList: User[];

  userList$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {
    this.userList$ = this.store.select("users");
  }

  ngOnInit() {
    this.userList$.subscribe((users: User[]) => {
      this.userList = [...users];
    });
  }
}
