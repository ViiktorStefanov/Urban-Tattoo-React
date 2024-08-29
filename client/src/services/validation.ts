const registerValidator = {
    email: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    firstName: (value: string) => value.trim() != "" && value.length >= 3,
    lastName: (value: string) => value.trim() != "" && value.length >= 3,
    phone: (value: string) => value.trim() != "" && value.length >= 10 && /^359[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}[ -]?\d{2}$/.test(value),
    password: (value: string) => value.trim() != "" && value.length >= 8,
    repeatPassword: (value: string, currentValues: { password: string }) => value.trim() != "" &&
                            value === currentValues.password &&
                            registerValidator.password(currentValues.password)
};

const loginValidator = {
    email: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    password: (value: string) => value.trim() != "",
};

const commentsValidator = {
    comment: (value: string) => value.trim() != "" && value.length <= 100 && value.length >= 4,
};

const editProfileValidator = {
    firstName: (value: string) => value.trim() != "" && value.length >= 3,
    lastName: (value: string) => value.trim() != "" && value.length >= 3,
    phone: (value: string) => value.trim() != "" && value.length >= 10 && /^359[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}[ -]?\d{2}$/.test(value),
};

export {
    registerValidator,
    loginValidator,
    commentsValidator,
    editProfileValidator
};



