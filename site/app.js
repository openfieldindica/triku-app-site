(function () {
  "use strict";

  const segments = window.location.pathname.split("/").filter(Boolean);
  const safeId = /^[A-Za-z0-9_-]+$/;
  let appUrl = "triku://";
  let destination = "Triku";

  if (segments.length === 2 && segments[0] === "contests" && safeId.test(segments[1])) {
    appUrl = `triku://contests/${encodeURIComponent(segments[1])}`;
    destination = "this contest";
  } else if (segments.length === 2 && segments[0] === "events" && safeId.test(segments[1])) {
    appUrl = `triku://events/${encodeURIComponent(segments[1])}`;
    destination = "this event";
  } else if (segments.length === 1 && segments[0] === "wallet") {
    appUrl = "triku://wallet";
    destination = "your wallet";
  }

  const destinationNode = document.querySelector("[data-destination]");
  const openButton = document.querySelector("[data-open-app]");
  if (destinationNode) destinationNode.textContent = destination;
  if (openButton) openButton.setAttribute("href", appUrl);
})();
