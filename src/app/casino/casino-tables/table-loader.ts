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
import { Card32A } from './card32-a/card32-a';
import { Card32B } from './card32-b/card32-b';
import { Dragontigert20 } from './dragontigert20/dragontigert20';
import { Dragontigeroneday } from './dragontigeroneday/dragontigeroneday';
import { Dragontigerliont20 } from './dragontigerliont20/dragontigerliont20';
import { Dragontigert202 } from './dragontigert202/dragontigert202';
import { Pokeroneday } from './pokeroneday/pokeroneday';
import { Pokert20 } from './pokert20/pokert20';
import { Poker6player } from './poker6player/poker6player';

export const TABLE_COMPONENTS: Record<string, any> = {
  lucky5: Lucky5,
  lucky7: Lucky7,
  lucky7eu: Lucky7eu,
  lucky7eu2: Lucky7eu2,
  lucky15: Lucky15,
  andarbahar: Andarbahar, //ab20
  andarbahar2: Andarbahar2, //abj
  ab3: Ab3,
  ab4: Ab4,
  'Card32-A': Card32A, //card32
  'Card32-B': Card32B, //card32eu
  dragontigert20: Dragontigert20,
  dragontigeroneday: Dragontigeroneday,
  dragontigerliont20: Dragontigerliont20,
  dragontigert202: Dragontigert202,
  pokeroneday: Pokeroneday, //poker6
  pokert20: Pokert20, //poker20
  poker6player : Poker6player
};
