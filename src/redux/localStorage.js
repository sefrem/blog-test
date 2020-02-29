import posts from "../assets/posts";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("posts");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("posts", serializedState);
  } catch (err) {
    console.log("Could not serialize the state");
  }
};

export const populateState = () => {
  let persistedState;
  if (!localStorage.getItem("posts")) {
    saveState(posts);
    persistedState = loadState();
  } else {
    persistedState = loadState();
  }
  return persistedState;
};
