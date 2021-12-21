import { atom } from "recoil";

export const checkState = atom({
  key: "checkState",
  default: null,
});

export const profileState = atom({
  key: "profileState",
  default: null,
});

export const networkState = atom({
  key: "networkState",
  default: null,
});
