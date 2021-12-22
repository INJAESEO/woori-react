import { atom, selector } from "recoil";

export const checkState = atom({
  key: "checkState",
  default: null,
});

export const profileState = atom({
  key: "profileState",
  default: null,
});
