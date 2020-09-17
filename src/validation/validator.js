
const checkField =  (splitStr) => compose(splitStr);

const splitStr =  (str) => str.split('|');

const required = (value) => !(value !== undefined && value !== null && value !== '');

const stringV = (value) => (required(value) && !!value.match(/^[a-zA-Z]*$/));

const numericV = (value) => (required(value) && !(typeof value == 'number'));

export {
    checkField,
    splitStr,
    required,
    stringV,
    numericV
}