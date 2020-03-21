export const required = (value: string): string | undefined => {
  return !value ? `поле обязательно для заполнения` : undefined
}

export const maxLength = (length: number) => (value: string): string | undefined => {
  return value && value.length > length ? `максимум ${length} символов` : undefined
}
