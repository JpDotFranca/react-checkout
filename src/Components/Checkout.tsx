import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = () => {
  return (
    <div className="container mt-5" style={{ padding: "10px" }}>
      <div className="row">
        {/* Checkout Details */}
        <div className="col-md-8">
          <h1 className="display-5">Modern Kitchen</h1>
          <p>
            Shopping cart &gt; Client Information &gt; Shipping &gt;{" "}
            <strong>Payment</strong>
          </p>

          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Contact</h4>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>paola@gmail.com</span>
                  <a href="#" className="text-primary">
                    Edit
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Kopernikusstr. 78</span>
                  <a href="#" className="text-primary">
                    Edit
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Standard shipping - 4,99 €</span>
                  <a href="#" className="text-primary">
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion for Payment Methods */}
          <div className="accordion" id="accordionExample">
            {/* Credit Card Payment Option */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Credit Card
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <input
                    type="text"
                    className="form-control my-2"
                    placeholder="Credit card number"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name on the credit card"
                  />
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM / DD"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PayPal Payment Option */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  PayPal
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    When you click "Pay Now," you will be redirected to PayPal
                    to complete your purchase securely.
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Payment Option */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Invoice
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    You will receive an invoice and instructions on how to
                    complete the payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Le Creuset Pot"
                  className="img-fluid rounded"
                />
                <div>
                  <p className="mb-0">Le Creuset Pot</p>
                  <p>219 €</p>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promotional code"
                />
                <button className="btn btn-outline-secondary" type="button">
                  Apply
                </button>
              </div>

              <div className="d-flex justify-content-between">
                <span>Zwischensumme</span>
                <span>219 €</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Versand</span>
                <span>6,99 €</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total</span>
                <span className="h5 text-danger">225,99 €</span>
              </div>

              <button className="btn btn-primary w-100 mt-3">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
