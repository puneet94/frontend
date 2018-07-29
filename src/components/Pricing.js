import React, { Component } from "react";

class Pricing extends Component {
  render() {
    return (

        <main>
  <div className="section hero p-b-0">
    <div className="container pricing-page-container">
      <div className="mw-490">
        <h1 className="m-b-24">Simple, fair pricing</h1>
        <p className="sub-title m-b-125">Supercharge your email marketing with Nuel. Select your email volume and make sure that your audience gets the message you deliver.</p>
        <div id="price-slider-container" className="container p-t-15">
          <div>
            <div className="pricing-filters">
              <div className="filters-wrap">
                <button className="filter-btn">Monthly</button>
                <button className="filter-btn active">Annually <span>(save 20%)</span></button>
              </div>
            </div>
            <div className="pricing-content-wrap">
              <div className="pricing-content">
                <h3 className="content-title">Select your email volume</h3>
                <div className="pricing-rate">
                  <div className="recepients">
                    <p className="recepients-amount">500K</p>
                    <p className="recepients-subtitle">monthly email volume</p>
                  </div>
                  <div className="money">
                    <div className="money-amount">
                      <p className="m-0">1,090<span>/year.</span></p>
                    </div>
                    <p className="money-subtitle">billed annually when trial ends</p>
                  </div>
                </div>
                <div className="rc-slider rc-slider-with-marks">
                  <div className="rc-slider-rail" />
                  <div className="rc-slider-track" style={{width: '57.1428%'}} />
                  <div className="rc-slider-step"><span className="rc-slider-dot rc-slider-dot-active" data-plan-id={527469} data-plan-ind={0} style={{left: '0%'}} /><span className="rc-slider-dot rc-slider-dot-active" data-plan-id={527470} data-plan-ind={1} style={{left: '14.2857%'}} /><span className="rc-slider-dot rc-slider-dot-active" data-plan-id={527471} data-plan-ind={2} style={{left: '28.5714%'}} /><span className="rc-slider-dot rc-slider-dot-active" data-plan-id={527472} data-plan-ind={3} style={{left: '42.8571%'}} /><span className="rc-slider-dot" data-plan-id={527473} data-plan-ind={4} style={{left: '57.1428%'}} /><span className="rc-slider-dot" data-plan-id={527474} data-plan-ind={5} style={{left: '71.4285%'}} /><span className="rc-slider-dot" data-plan-id={529675} data-plan-ind={6} style={{left: '85.7142%'}} /><span className="rc-slider-dot" data-plan-id={527475} data-plan-ind={7} style={{left: '99.9999%'}} /></div>
                  <div role="slider" tabIndex={0} className="rc-slider-handle" style={{left: '57.1428%'}} />
                  <div className="rc-slider-mark"><span className="rc-slider-mark-text" data-plan-id={527469} data-plan-ind={0} style={{left: '0%'}}>25K</span><span className="rc-slider-mark-text" data-plan-id={527470} data-plan-ind={1} style={{left: '14.2857%'}}>50K</span><span className="rc-slider-mark-text" data-plan-id={527471} data-plan-ind={2} style={{left: '28.5714%'}}>100K</span><span className="rc-slider-mark-text" data-plan-id={527472} data-plan-ind={3} style={{left: '42.8571%'}}>250K</span><span className="rc-slider-mark-text" data-plan-id={527473} data-plan-ind={4} style={{left: '57.1428%'}}>500K</span><span className="rc-slider-mark-text" data-plan-id={527474} data-plan-ind={5} style={{left: '71.4285%'}}>1M</span><span className="rc-slider-mark-text" data-plan-id={529675} data-plan-ind={6} style={{left: '85.7142%'}}>3M</span><span className="rc-slider-mark-text" data-plan-id={527475} data-plan-ind={7} style={{left: '99.9999%'}}>5M</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="price-slider-container-mobile" className="container p-t-15">
          <div>
            <div className="pricing-content-wrap">
              <div className="pricing-content">
                <h3 className="content-title">Select your email volume</h3></div>
            </div>
            <div className="pricing-rate swiper-container">
              <div className="swiper-wrapper" />
            </div>
            <div>
              <div className="pricing-filters">
                <div className="filters-wrap">
                  <button className="filter-btn">Monthly</button>
                  <button className="filter-btn active">Annually</button>
                </div><span>(save 20%)</span></div>
            </div>
          </div>
        </div>
        <div className="tips-wrap">
          <p className="tip">Get automatically created and updated ad audiences.</p>
          <p className="tip">Track unlimited amount of campaigns.</p>
        </div>
        <div className="target-screens m-t-10">
          <div className="avatar"><img src="/images/pricing_face-2x.png" alt="avatar" width={54} />
            <p className="reaction m-b-0">If you treat email marketing seriously,
              <br />there’s no doubt you should try Nuel.
              <br /><strong>Martijn Verbove, Founder and CEO at History Search</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section p-b-0 m-b-100">
    <div className="container pricing-page-container">
      <div className="email-subscribe mt-5">
        <form id="top-subscription-form" className="form-inline">
          <div className="form-group mx-sm-3">
            <label htmlFor="email" className="sr-only">Email</label>
            <input name="email" className="form-control" id="email" placeholder="ENTER YOUR REAL EMAIL" required type="email" />
          </div>
          <button name="submit" type="submit" className="btn btn-primary">START FREE TRIAL</button>
        </form>
        <div className="email-error">Email is incorrect, please check</div><span className="lbl">We value your privacy</span></div>
    </div>
  </div>
  <div className="section p-t-50 p-b-0 m-b-65 pricing-faq">
    <div className="container">
      <div className="text-center">
        <h3 className="m-b-100">FAQ</h3></div>
      <div className="pricing-faq-questions">
        <div className="pricing-faq-question m-b-50">
          <h5>How long is trial term?</h5>
          <p>Nuel is free to use for first 14 days. Trial is absolutely secure — you are able to stop trial at any moment.</p>
        </div>
        <div className="pricing-faq-question m-b-50">
          <h5>Could I change my pricing plan?</h5>
          <p>Sure, you can make it in any moment. After changing pricing play, you pay for the previous month.</p>
        </div>
        <div className="pricing-faq-question m-b-50">
          <h5>What happens when trial ends?</h5>
          <p>If you will like Nuel, we will offer you pricing package with monthly payments.</p>
        </div>
        <div className="pricing-faq-question m-b-50">
          <h5>Do you store my credit card info?</h5>
          <p>No. Our payment provider Paddle makes sure to securely charge your bank while you’re staing subsctibed.</p>
        </div>
      </div>
    </div>
  </div>
</main>


    );
  }
}


export default Pricing;
