import { allFakers } from '@faker-js/faker';

const counterCodes = () => {
    const fakerCodes = Object.keys(allFakers)

    const res = fakerCodes.map(code => {
        const parts = code.split('_')
        if (parts.length === 1 && parts[0].length === 2) {
            return parts[0]
        } else if (parts.length >= 2 && parts.length <= 3 && parts[1].length === 2) {
            return parts[1]
        }
        return ""
    })
    .filter(Boolean)
    .map(s => s.toLowerCase())

    // a set to remove duplicates
    return [...(new Set(res))]
}

console.log(counterCodes())

// for (let key of Object.keys(allFakers)) {
//   try {
//     console.log(
//       `In locale ${key}, a sample name is ${allFakers[key].person.fullName()}`
//     );
//   } catch (e) {
//     console.log(`In locale ${key}, an error occurred: ${e}`);
//   }
// }


// import { firstName } from 'full-name-generator';


// const name = firstName('fr', 1);
// console.log(name)

// function getCatName(country) {

// }


// const localesMap = {
//     "af_ZA": {
        
//     }
// }