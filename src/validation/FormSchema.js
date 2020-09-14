import * as yup from 'yup'

const FormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    number: yup.number().required(),
});

export { FormSchema }