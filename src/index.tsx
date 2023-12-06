import { createRoot } from "react-dom/client";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";
import mixpanel from "mixpanel-browser";

mixpanel.init("e6dafb4aa99b6b7bd81719a03b44cd4d", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});
mixpanel.identify("USER_ID");

mixpanel.track("Sign Up", {
  "Signup Type": "Referral",
});

const container = document.querySelector("#main");
const root = createRoot(container!);

root.render(<Router />);

registerServiceWorker();
