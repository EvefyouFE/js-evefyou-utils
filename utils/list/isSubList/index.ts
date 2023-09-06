import { Value } from "@/types";

export function isSubList(sub?: Value[], list?: Value[],): boolean {
  return !!sub?.every((v) => list?.includes(v))
}