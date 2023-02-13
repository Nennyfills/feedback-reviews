import * as yup from 'yup';

const feedBackSchema = yup.object().shape({
 name: yup.string().required().matches(/^[aA-zZ\s]+$/, 'only alphabets are allowed for this field').min(4).max(30),
 email: yup.string().required().email(),
 rate: yup.string().required(),
 comment: yup.string().required().min(8),
});

export default feedBackSchema;
