import { Action } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const ADD_USER = "[USER] Add";
export const DELETE_USER = "[DELETE] Delete";

export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class DeleteUser implements Action {
  readonly type = DELETE_USER;

  constructor(public payload: number) {}
}

export type Actions = AddUser | DeleteUser;
