import { ITable } from './interfaces';
import { generateObjects } from './utls';

const MOCK_DATA: ITable[] = generateObjects(99);

export { MOCK_DATA };
