import removeAllMaskValues from "./removeAllMaskValues";

const maskCPF = (cpf: string): string => {
    const cleanStr = removeAllMaskValues(cpf);
    if (cleanStr.length === 11) {
        const firstGroup = cleanStr.substring(0, 3);
        const secondGroup = cleanStr.substring(3, 6);
        const thirdGroup = cleanStr.substring(6, 9);
        const fourthGroup = cleanStr.substring(9, 11);

        const masked = `${firstGroup}.${secondGroup}.${thirdGroup}-${fourthGroup}`;

        return masked;
    } else {
        return cleanStr;
    }
};

export default maskCPF;
