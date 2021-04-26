import WordpressApiClient from '../class/WordpressApiClient';
import Configuration from '../_configuration/Development';

const configuration = new Configuration();
const client = new WordpressApiClient(configuration);
export default client;

