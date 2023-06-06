import { ITable } from './interfaces';
import { generateObjects } from './utls';

const MOCK_DATA: ITable[] = generateObjects(10);

export { MOCK_DATA };
