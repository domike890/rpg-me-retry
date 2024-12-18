import { html, fixture, expect } from '@open-wc/testing';
import "../rpg-me-retry.js";

describe("RpgNew test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <rpg-me-retry
        title="title"
      ></rpg-me-retry>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
