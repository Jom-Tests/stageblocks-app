export function createEnumOptions<Value extends string>(theEnum: Record<string, Value>, labels: Record<Value, string>) {
  return Object.entries(theEnum).map(([, value]) => ({
    value,
    label: labels[value]
  }))
}
