import React from "react";

const FAQ = () => {
  return (
    <div className="container">
      <h2 className="text-center pb-4">Frequently Asked Questions</h2>
      <div className="row">
        <div className="col-12 col-md-7 col-sm-4 mx-auto">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseOne"
                  aria-expanded="true"
                  aria-controls="faqCollapseOne"
                >
                  Frequently Asked Question #1
                </button>
              </h2>
              <div
                id="faqCollapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident saepe sunt obcaecati autem, nemo asperiores porro
                  officiis possimus eum fuga ullam velit, explicabo voluptatibus
                  aperiam quaerat expedita quisquam, rerum nam!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseTwo"
                  aria-expanded="true"
                  aria-controls="faqCollapseTwo"
                >
                  Frequently Asked Question #2
                </button>
              </h2>
              <div
                id="faqCollapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident saepe sunt obcaecati autem, nemo asperiores porro
                  officiis possimus eum fuga ullam velit, explicabo voluptatibus
                  aperiam quaerat expedita quisquam, rerum nam!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseThree"
                  aria-expanded="true"
                  aria-controls="faqCollapseThree"
                >
                  Frequently Asked Question #3
                </button>
              </h2>
              <div
                id="faqCollapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident saepe sunt obcaecati autem, nemo asperiores porro
                  officiis possimus eum fuga ullam velit, explicabo voluptatibus
                  aperiam quaerat expedita quisquam, rerum nam!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faqCollapseFour"
                  aria-expanded="false"
                  aria-controls="faqCollapseFour"
                >
                  Frequently Asked Question #4
                </button>
              </h2>
              <div
                id="faqCollapseFour"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident saepe sunt obcaecati autem, nemo asperiores porro
                  officiis possimus eum fuga ullam velit, explicabo voluptatibus
                  aperiam quaerat expedita quisquam, rerum nam!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
