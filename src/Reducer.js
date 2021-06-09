import { initialeState } from "./Component/Task";
import { v4 as uuidv4 } from "uuid";
const reducer = (state = initialeState.task, action) => {
  switch (action.type) {
    case "Delete":
      return state.filter((x) => x.id !== action.playload);
    case "Add":
      if (action.playload.name.trim() && action.playload.description.trim())
        return [
          ...state,
          {
            name: action.playload.name,
            description: action.playload.description,
            id: uuidv4(),
            isDone: false,
          },
        ];
    case "isDone":
      return state.map((x) =>
        x.id !== action.playload ? x : { ...x, isDone: true }
      );

    case "modif":
      return state.map((x) =>
        x.id !== action.playload.id
          ? x
          : {
              ...x,
              name: action.playload.name,
              description: action.playload.description,
            }
      );

    default:
      return state;
  }
};
export default reducer;
