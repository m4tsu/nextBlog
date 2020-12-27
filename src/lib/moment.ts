import moment from "moment";

export const toDate = (dateStr: string) => {
  return moment(dateStr).format("YYYY-MM-DD");
};
export const toDateTime = (datetimeStr: string) => {
  return moment(datetimeStr).format("YYYY-MM-DD HH:mm:ss");
};
