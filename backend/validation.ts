import { ArchiveItem, Order } from "./models";

export function isValidOrder(maybeOrder: Order | ArchiveItem): boolean {
  if (maybeOrder.hasOwnProperty("phoneNumber")) {
    if (typeof maybeOrder.phoneNumber === "number") {
      return false;
    }
  } else {
    return false;
  }

  if (maybeOrder.hasOwnProperty("customer")) {
    if (typeof maybeOrder.customer !== "string" || maybeOrder.customer === "") {
      return false;
    }
  } else {
    return false;
  }

  if (maybeOrder.hasOwnProperty("customerComment")) {
    if (typeof maybeOrder.customerComment !== "string") {
      return false;
    }
  } else {
    return false;
  }
  
  return true;
}
