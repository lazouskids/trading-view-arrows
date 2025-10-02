console.log("TVA: Extension has started");

window.onload = () => {
  console.log("TVA: Page is loaded");

  const isTradingView = window.location.href.includes("tradingview.com");
  const timeframeContainer = document.querySelector("#header-toolbar-intervals > div");

  if (isTradingView && timeframeContainer) {
    console.log("TVA: Chart page is verified");

    const buttons = timeframeContainer.querySelectorAll("button");

    console.log("TVA: Timeframes are found");

    let selectedIndex = -1;

    buttons.forEach((button, index) => {
      if (button.getAttribute("aria-checked") === "true") {
        selectedIndex = index;
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.shiftKey || event.ctrlKey) return;

      if (event.key === "ArrowRight") {
        if (selectedIndex < buttons.length - 1) {
          selectedIndex++;
        } else {
          selectedIndex = 0;
        }

        buttons[selectedIndex].click();
      }
      if (event.key === "ArrowLeft") {
        if (selectedIndex > 0) {
          selectedIndex--;
        } else {
          selectedIndex = buttons.length - 1;
        }

        buttons[selectedIndex].click();
      }
    });
  }
};
