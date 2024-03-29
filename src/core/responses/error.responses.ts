const Errors = {
    E_400_NOT_EMPTY_NAME: {
        status: 400,
        code: "#{upperSnakeCase}_400_NOT_EMPTY_NAME",
        message: "#{sentenceCase} name cannot be empty!",
    },
    E_400_NOT_EMPTY_EMAIL: {
        status: 400,
        code: "#{upperSnakeCase}_400_NOT_EMPTY_EMAIL",
        message: "#{sentenceCase} email cannot be empty!",
    },
    E_400_NOT_EMPTY_PASSWORD: {
        status: 400,
        code: "#{upperSnakeCase}_400_NOT_EMPTY_PASSWORD",
        message: "#{sentenceCase} password cannot be empty!",
    },
    E_400_NOT_EMPTY_PHONE: {
        status: 400,
        code: "#{upperSnakeCase}_400_NOT_EMPTY_PHONE",
        message: "#{sentenceCase} phone cannot be empty!",
    },
    E_400_INVALID_EMAIL: {
        status: 400,
        code: "#{upperSnakeCase}_400_INVALID_EMAIL",
        message: "Invalid value for #{lowerCase} email!",
    },
};

export { Errors };
