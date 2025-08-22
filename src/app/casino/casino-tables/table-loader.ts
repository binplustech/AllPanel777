// table-loader.ts
import { Lucky5 } from './lucky5/lucky5';
import { Lucky7 } from './lucky7/lucky7';
import { Lucky7eu } from './lucky7eu/lucky7eu';
import { Lucky7eu2 } from './lucky7eu2/lucky7eu2';
import { Lucky15 } from './lucky15/lucky15';
import { Andarbahar } from './andarbahar/andarbahar';
import { Andarbahar2 } from './andarbahar2/andarbahar2';
import { Ab3 } from './ab3/ab3';
import { Ab4 } from './ab4/ab4';

export const TABLE_COMPONENTS: Record<string, any> = {
  lucky5: Lucky5,
  lucky7: Lucky7,
  lucky7eu: Lucky7eu,
  lucky7eu2: Lucky7eu2,
  lucky15: Lucky15,
  Andarbahar: Andarbahar,
  Andarbahar2: Andarbahar2,
  ab3: Ab3,
  ab4: Ab4  
};
