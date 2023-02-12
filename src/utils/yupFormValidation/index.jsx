import { yupResolver } from '@hookform/resolvers/yup';
import feedBackSchema from './schema';

const feedBackOptions = {
 resolver: yupResolver(feedBackSchema),
};

export default feedBackOptions;
