import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "ps-pricing",
  styleUrl: "ps-pricing.css"
})
export class PsPricing {
  @Prop() tier: string;
  @Prop() persona: string;
  @Prop() currency: string = "$";
  @Prop() price: number = 19;
  @Prop() billingDuration: string = "month";
  render() {
    return (
      <div class="container">
        <p class="plan-tier">{this.tier}</p>
        <p class="plan-desc">For {this.persona}</p>
        <div class="plan-billing-btns">
          <button class="plan-billing-btn plan-billing-monthly">Monthly</button>
          <button class="plan-billing-btn plan-billing-annualy">Annualy</button>
        </div>
        <div class="billing-container">
          <p class="billing-details">
            {this.currency}
            {this.price} / {this.billingDuration}
          </p>
          <input
            class="billing-slider"
            type="range"
            id="points"
            name="points"
            min="1"
            max="4"
          ></input>
        </div>
        <p class="price-unit">Upto 1000 captures / month</p>
        <div class="seperator"></div>
        <ul>
          <li>All Particles</li>
          <li>All Integrations</li>
          <li>Unlimited websites</li>
        </ul>
      </div>
    );
  }
}
