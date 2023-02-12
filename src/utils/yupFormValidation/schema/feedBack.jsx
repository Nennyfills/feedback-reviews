import * as yup from 'yup';

const feedBackSchema = yup.object().shape({
 name: yup.string().required(),
 email: yup.string().required().email(),
 rate: yup.string().required(),
 comment: yup.string().required().min(10),
});

export default feedBackSchema;
