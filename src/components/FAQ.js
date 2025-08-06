import React from 'react';
import './FAQ.css';

function FAQ() {

    return (
        <>
            <section className="faq">
                <div className="accordion" id="accordionPanelsStayOpen">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseOne">
                                How can you contact us?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>You can do this by email or any other service.</strong> It is strongly recommended
                                to <span className="text-danger">not share any sensitive information.</span> We are not asking for this kind of information.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                How is it working?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>Is is working like it is, no more questions.</strong> It is handy done
                            so don't worry about this stuff <span className="text-warning">just working</span>, just cool, why is there even questions like this?
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                Why is there blocks everywhere?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>We just love blocks why isn't it cool?</strong> Prepeare for even more blocks in
                                the way. <span className="text-success">Blocks is the only right thing</span>.
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default FAQ;
