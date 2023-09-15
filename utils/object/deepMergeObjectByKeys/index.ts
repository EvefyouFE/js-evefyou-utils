import { Recordable } from "@/types";
import { mergeDeepRight } from "ramda";

export function deepMergeObjectByKeys(
  keys: readonly any[],
  value: any,
  obj: Recordable,
) {
  const newObj = {} as typeof obj;
  let target = newObj;
  keys.forEach((k, idx) => {
    target[k] = idx === keys.length - 1 ? value : target[k];
    target = target[k];
  });
  return mergeDeepRight(obj, newObj);
}