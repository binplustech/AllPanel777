// table-loader.ts
import { Lucky5 } from './lucky5/lucky5';
import { Lucky7 } from './lucky7/lucky7';
import { Lucky7eu } from './lucky7eu/lucky7eu';
import { Lucky7eu2 } from './lucky7eu2/lucky7eu2';
import { Lucky15 } from './lucky15/lucky15';

export const TABLE_COMPONENTS: Record<string, any> = {
  lucky5: Lucky5,
  lucky7: Lucky7,
  lucky7eu: Lucky7eu,
  lucky7eu2: Lucky7eu2,
  lucky15: Lucky15
};
