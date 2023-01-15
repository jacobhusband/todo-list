import { format, differenceInMilliseconds } from "date-fns";

export default class TimeController {
  constructor() {}

  getCurrentLocalTime() {
    this.currentLocalTime = format(new Date(), "h:mm a");
    return this.currentLocalTime;
  }

  getCurrentLocalDate() {
    this.currentLocalDate = format(new Date(), "yyyy-MM-dd");
    return this.currentLocalDate;
  }

  getCurrentDateAndTime() {
    this.currentDate = new Date();
    return this.currentDate;
  }

  getDifferenceBetweenTimes(time1, time2) {
    this.difference = differenceInMilliseconds(time2, time1);
    return this.difference;
  }
}
