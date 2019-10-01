export const required = value => {
    return !value ? `поле обязательно для заполнения` : undefined;
};

export const maxLength = length => value => {
    return value && value.length > length ? `максимум ${length} символов` : undefined;
};