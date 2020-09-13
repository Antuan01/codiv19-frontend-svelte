import { compose } from "../utils/functions";

const email = () => (value) =>  (value && !!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Please enter a valid email'

const required = () => (value) => (value !== undefined && value !== null && value !== '') || 'This field is required'

const string = () => (value) => (value && !!value.match(/^[a-zA-Z]*$/)) || 'Only letters'

const numeric = () => (value) => (value && !!value.match(/^[0-9]*$/)) || 'Only numbers'

export {
    email,
    required,
    string,
    numeric
}