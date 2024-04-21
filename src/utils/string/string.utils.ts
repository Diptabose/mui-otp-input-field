export const mutateString = (original: string, value: string, index: number) => {
    const splitString = original.split("");
    splitString[index] = value;
    return splitString.join("");
}