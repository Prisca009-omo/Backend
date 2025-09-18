export const bookingValidation = (myData) => {
  const {
    service,
    customerName,
    customerEmail,
    customerPhoneNumber,
    additionalInformation,
  } = myData;

  if (
    typeof service !== "string" ||
    typeof customerName !== "string" ||
    typeof customerEmail !== "string" ||
    typeof customerPhoneNumber !== "string" ||
    typeof additionalInformation !== "string"
  ) {
    return false;
  }

  if (
    !service.trim() ||
    !customerName.trim() ||
    !customerEmail.trim() ||
    !customerPhoneNumber.trim() ||
    !additionalInformation.trim()
  ) {
    return false;
  }

  return true;
};
