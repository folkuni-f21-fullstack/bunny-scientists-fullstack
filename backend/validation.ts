import { ArchiveItem, Order } from "./models";

//här läggs all validering
// export function isValidOrder/isValid etc etc

export function isValidOrder(maybeOrder: Order | ArchiveItem): boolean {
  if (maybeOrder.hasOwnProperty("orderNumber")) {
    if (
      typeof maybeOrder.orderNumber !== "number" ||
      maybeOrder.orderNumber < 0
    ) {
      return false;
    }
  } else {
    return false;
  }

  if (maybeOrder.hasOwnProperty("phoneNumber")) {
    if (
      typeof maybeOrder.phoneNumber !== "number" ||
      maybeOrder.phoneNumber < 0
    ) {
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

//   if (
//     maybeOrder.hasOwnProperty(maybeOrder.customer) &&
//     maybeOrder.hasOwnProperty(maybeOrder.orderNumber) &&
//     maybeOrder.hasOwnProperty(maybeOrder.phoneNumber)
//   ) {
//   } else {
//   }
