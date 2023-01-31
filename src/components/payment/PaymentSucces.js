function PaymentSucces() {
  return (
    <div className="payment-message">
      {" "}
      {localStorage.getItem("paymentMessage")}{" "}
    </div>
  );
}

export default PaymentSucces;
