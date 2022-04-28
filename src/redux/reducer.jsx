import { FB_DATA } from "./actions";

const init_data = { user: {} };

export const fbReducer = (store = init_data, { type, payload }) => {
  if (type === FB_DATA) {
    return { ...store, user: payload };
  } else {
    return store;
  }
};
