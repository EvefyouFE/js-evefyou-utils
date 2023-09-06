import { Recordable } from "@/types";
import { clone } from "ramda";


export function deepSetObjectByKeys(
  keys: readonly any[],
  value: any,
  obj: Recordable,
) {
  const newObj = clone(obj);
  let target = newObj;
  keys.forEach((k, idx) => {
    target[k] = idx === keys.length - 1 ? value : target[k];
    target = target[k];
  });
  return newObj;
}