import { User } from "src/app/models/user.model";
import * as UserActions from "../actions/user.actions";

export function reducer(state: User[], action: UserActions.Actions): User[] {
  switch (action.type) {
    case UserActions.ADD_USER:
      return [...state, action.payload];

    case UserActions.DELETE_USER:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
