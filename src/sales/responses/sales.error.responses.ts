const SalesErrors = {
    SALES_400_NOT_EMPTY_NAME: {
        status: 400,
        code: "SALES_400_NOT_EMPTY_NAME",
        message: "User name cannot be empty!",
    },
    SALES_400_NOT_EMPTY_EMAIL: {
        status: 400,
        code: "SALES_400_NOT_EMPTY_EMAIL",
        message: "User email cannot be empty!",
    },
    SALES_400_NOT_EMPTY_ORG: {
        status: 400,
        code: "SALES_400_NOT_EMPTY_ORG",
        message: "Organization cannot be empty!",
    },
    SALES_400_NOT_EMPTY_PHONE: {
        status: 400,
        code: "SALES_400_NOT_EMPTY_PHONE",
        message: "Phone cannot be empty!",
    },
    SALES_400_NOT_EMPTY_MESSAGE: {
        status: 400,
        code: "SALES_400_NOT_EMPTY_MESSAGE",
        message: "Message cannot be empty!",
    },
    SALES_400_INVALID_EMAIL: {
        status: 400,
        code: "SALES_400_INVALID_EMAIL",
        message: "Invalid value for user email!",
    },
};

export { SalesErrors };
