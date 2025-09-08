export const bookingValidation = (myData) => {
  const { service, customerName, customerEmail, status } = myData;
  if (
    typeof service !== "string" ||
    typeof customerName !== "string" ||
    typeof customerEmail !== "string"
  ) {
    return false;
  }

  if (!service.trim() || !customerName.trim() || !customerEmail.trim()) {
    return false;
  }

  return true;
};
