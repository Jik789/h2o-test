interface IButton {
  title: string;
  setClick: () => void;
}

interface ITableMainInfo {
  userName: string;
  userID: number;
  userTelephone: number;
  userSex: string;
  userBirthday: number;
  userMetro: string;
  userAddress: string;
}

interface ITableBankInfo {
  userBank: string;
  userCardNumber: number;
}

interface ITableHrInfo {
  userPost: string;
  userDivision: string;
  userSolution: string;
  userSource: string;
  userSolutionDate: string;
  userNote: string;
}

interface ITable {
  mainInfo: ITableMainInfo;
  bankInfo: ITableBankInfo;
  HrInfo: ITableHrInfo;
}

export type { IButton, ITable };
