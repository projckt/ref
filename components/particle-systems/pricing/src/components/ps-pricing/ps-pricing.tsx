import { Component, State, h } from "@stencil/core";

@Component({
  tag: "ps-pricing",
  styleUrl: "ps-pricing.css"
})
export class PsPricing {
  @State() billingPeriod: string = "monthly";
  @State() sliderIndex: number = 3;
  @State() price: number;

  private tier: string;
  private desc: string;
  private currency: string = "$";
  private billingDuration: string;
  private captures: string;
  private postLimit: string;
  private features = [
    "Use all Particles",
    "Use all Integrations",
    "Use on unlimited websites"
  ];

  handleMonthlyBtnClick(event) {
    event.preventDefault();
    this.billingPeriod = "monthly";
  }

  handleYearlyBtnClick(event) {
    event.preventDefault();
    this.billingPeriod = "yearly";
  }

  handleSliderInput(event) {
    this.sliderIndex = event.target.value;
  }

  componentWillLoad() {
    console.log(`features: ${this.features}`);
    this.updateUIData();
  }

  componentWillUpdate() {
    this.updateUIData();
  }

  updateUIData() {
    if (this.sliderIndex == 1) {
      if (this.billingPeriod === "monthly") {
        this.price = 0;
        this.billingDuration = "month";
        this.captures = "100 captures";
        this.postLimit = "$0 per capture";
      } else if (this.billingPeriod === "yearly") {
        this.price = 0;
        this.billingDuration = "year";
        this.captures = "100 captures";
        this.postLimit = "$0 per capture";
      }
      this.tier = "Trial";
      this.desc = "Full & free access";
    } else if (this.sliderIndex == 2) {
      if (this.billingPeriod === "monthly") {
        this.price = 19;
        this.billingDuration = "month";
        this.captures = "500 captures / month";
        this.postLimit = "$0.05 per capture";
      } else if (this.billingPeriod === "yearly") {
        this.price = 199;
        this.billingDuration = "year";
        this.captures = "6000 captures / year";
        this.postLimit = "$0.005 per capture";
      }
      this.tier = "Starter";
      this.desc = "Ideal for low volume";
    } else if (this.sliderIndex == 3) {
      if (this.billingPeriod === "monthly") {
        this.price = 49;
        this.billingDuration = "month";
        this.captures = "1500 captures / month";
        this.postLimit = "$0.03 per capture";
      } else if (this.billingPeriod === "yearly") {
        this.price = 499;
        this.billingDuration = "year";
        this.captures = "18000 captures / year";
        this.postLimit = "$0.003 per capture";
      }
      this.tier = "Growth";
      this.desc = "Ideal for Startups";
    } else if (this.sliderIndex == 4) {
      if (this.billingPeriod === "monthly") {
        this.price = 99;
        this.billingDuration = "month";
        this.captures = "3000 captures / month";
        this.postLimit = "$0.02 per capture";
      } else if (this.billingPeriod === "yearly") {
        this.price = 999;
        this.billingDuration = "year";
        this.captures = "36000 captures / year";
        this.postLimit = "$0.002 per capture";
      }
      this.tier = "Mature";
      this.desc = "Ideal for small companies";
    }
  }

  render() {
    return (
      <div class="container">
        <p class="tier">{this.tier}</p>
        <p class="desc">{this.desc}</p>
        <div class="billcycle-btn-container">
          <button
            onClick={(event: UIEvent) => this.handleMonthlyBtnClick(event)}
            class={
              this.billingPeriod === "monthly"
                ? "billcycle-btn billcycle-btn-left-active"
                : "billcycle-btn billcycle-btn-left-inactive"
            }
          >
            MONTHLY
          </button>
          <button
            onClick={(event: UIEvent) => this.handleYearlyBtnClick(event)}
            class={
              this.billingPeriod === "yearly"
                ? "billcycle-btn billcycle-btn-right-active"
                : "billcycle-btn billcycle-btn-right-inactive"
            }
          >
            YEARLY
          </button>
        </div>
        <div class="billing-details-container">
          <p class="billing-details">
            <span class="billing-cost">
              {this.currency}
              {this.price}
            </span>{" "}
            / {this.billingDuration}
          </p>
          <p class="price-unit">
            <span class="highlight">Limit</span>
            <br />
            Upto {this.captures}
          </p>
          <p class="price-unit">
            <span class="highlight">After exceeding Limit</span>
            <br />
            {this.postLimit}
          </p>
          <input
            onInput={event => this.handleSliderInput(event)}
            class="billing-slider"
            type="range"
            id="points"
            name="points"
            min="1"
            max="4"
            value={this.sliderIndex}
          ></input>
        </div>
        <div class="seperator"></div>
        <ul class="pricing-features">
          {this.features.map(feature => (
            <li>
              <span class="green-tick">✓</span> {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
