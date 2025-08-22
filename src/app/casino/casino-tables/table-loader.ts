// table-loader.ts
import { Lucky7 } from './lucky7/lucky7';
import { Lucky7eu } from './lucky7eu/lucky7eu';

export const TABLE_COMPONENTS: Record<string, any> = {
  lucky7: Lucky7,
  lucky7eu: Lucky7eu
};
