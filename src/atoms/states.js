import { atom } from "recoil";

/*
	DEV NOTE:
	If you're not familiar to recoil, this file
	will contain all the initial global states.
	components will import them from this file.
*/

export const windowState = atom({
  key: "windowState",
  default: {
    width: 0,
    height: 0,
    scroll: 0,
  },
});

export const menuState = atom({
  key: "menuState",
  default: false,
});

export const fullSreenState = atom({
  key: "fullSreenState",
  default: {
    active: false,
    image: "",
  },
});
