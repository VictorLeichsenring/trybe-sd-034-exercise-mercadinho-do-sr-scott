export function first<Type>(arr: Type[]): Type {
  return arr[0];
}

export function updateItem<Type>(arr: Type[], index: number, ob: Type): Type[] {
  if (index >= 0 && index < arr.length) arr.splice(index, 1, ob);
  return arr;
}