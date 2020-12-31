export enum itemStatus {
  NOT_START = 1,
  DOING = 2,
  FINISHED = 3
}

export const itemStatusName = {
  [itemStatus.NOT_START]: '未开始',
  [itemStatus.DOING]: '进行中',
  [itemStatus.FINISHED]: '已完成'
}
