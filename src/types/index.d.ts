export interface IOrders {
  name?: string;
  surname?: string;
  telephone?: number;
  email?: string;
  pizza?: string;
}

export interface HistoryInfo {
  history: HistoryInfoItems;
}
export interface HistoryInfoItems {
  items: HistoryInfoItem[];
}

export interface HistoryInfoItem {
  name?: string;
  surname?: string;
  telephone?: number;
  email?: string;
  pizza?: string;
}

 