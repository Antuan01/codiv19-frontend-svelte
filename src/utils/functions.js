export const compose = (...funcs) => initialArg => funcs.reduce((acc, func) => func(acc), initialArg);

export const composeR = (...funcs) => initialArg => funcs.reduceRight((acc, func) => func(acc), initialArg);

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));