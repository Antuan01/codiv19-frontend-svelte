import { compose } from "../utils/functions";

const checkField =  (splitStr) => compose(splitStr);

const splitStr =  (str) => str.split('|');

const emailV = (value) => !(!required(value) && value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));

const required = (value) => !(value !== undefined && value !== null && value !== '');

const stringV = (value) => (required(value) && !!value.match(/^[a-zA-Z]*$/));

// const numericV = (value) => (required(value) && !!value.match(/^[0-9]*$/));

const numericV = (value) => (!(typeof value == 'number'));

export {
    checkField,
    splitStr,
    emailV,
    required,
    stringV,
    numericV
}