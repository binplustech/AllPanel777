export interface ICasino {
  success: boolean;
  msg: string;
  status: number;
  data: IData;
}

export interface IData {
  mid: number;
  lt: number;
  ft: number;
  card: string;
  gtype: string;
  remark: string;
  grp: number;
  aall: string;
  ball: string;
  ares: string;
  bres: string;
  sub: ISub[];
  child: ISub[];
}

export interface ISub {
  sid: number;
  nat: string;
  b: number;
  bs: number;
  l: number;
  ls: number;
  sr: number;
  gstatus: string;
  visible: number;
  min: number;
  max: number;
  subtype: string;
  etype: string;
}
