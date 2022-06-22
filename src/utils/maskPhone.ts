import removeAllMaskValues from "./removeAllMaskValues";

const maskPhone = (phone: string): string => {
    const cleanStr = removeAllMaskValues(phone);
    if (cleanStr.length === 11) {
        const firstGroup = cleanStr.substring(0, 2);
        const secondGroup = cleanStr.substring(2, 7);
        const thirdGroup = cleanStr.substring(7, 11);
        // const fourthGroup = cleanStr.substring(9, 11);

        const masked = `(${firstGroup}) ${secondGroup}-${thirdGroup}`;

        return masked;
    } else {
        return cleanStr;
    }
};

export default maskPhone;
