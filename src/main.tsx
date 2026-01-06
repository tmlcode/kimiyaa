import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import posthog from "posthog-js";

posthog.init('phc_nqA4Rsex6hig8VdhgTTOy9PzRj8IgjxLyUyCyO8Hb0P', {
  api_host: 'https://us.i.posthog.com',
});


createRoot(document.getElementById("root")!).render(<App />);
