// import { useMemo } from "react";

// export const useCurrency = ({ value, currency, locale = 'en-US' }) => {

    
//     const formattedValue = useMemo(() => {
//         if (typeof currency !== 'string' || currency.length !== 3) {
//             return null; // or some default string like 'Invalid currency'
//         }
//         const formatter = new Intl.NumberFormat(locale, {
//             style: 'currency',
//             currency: currency,
//         });

//         return formatter.format(value);
//     }, [value, currency, locale]);

//     return formattedValue;
// }