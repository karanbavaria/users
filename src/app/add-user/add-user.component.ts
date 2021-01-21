import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import * as UserActions from "../actions/user.actions";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addUser(username, imageURL) {
    this.store.dispatch(
      new UserActions.AddUser({ id: "12", username, imageURL })
    );
  }
}
