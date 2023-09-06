export type Recordable<T = any> = Record<string, T>;
export type Value = string | number | object | Recordable;
export type TreeList<
  T,
  IDN extends string = 'id',
  PIDN extends string = 'pId',
  ID extends string | number = number
> = { [Key in IDN | PIDN]: ID; } & T;
export type TreeNode<T> = { children?: TreeNode<T>[]; } & T;