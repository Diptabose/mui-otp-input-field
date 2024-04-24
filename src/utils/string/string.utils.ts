export const mutateString = (original: string, value: string, index: number) => {
    const splitString = original.split("");
    splitString[index] = value;
    return splitString.join("");
}


export const isValid = (isNumeric: boolean, value: string) => {
    return isNumeric ? !isNaN(Number(value)) : typeof value === "string";
};

export const split = (value: string) => {
    return value.split("");
}

export const getValidCharacters = (isNumeric: boolean, value: string) => {
    return split(value)
        .filter((value) => isValid(isNumeric, value))
        .join("");
}