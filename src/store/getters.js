export const headline = (state) => state.config.headline;
export const headlineFontColorValue = (state) => state.config.headline.color;
export const headlineIconColor = (state) => state.config["icon"];
export const headlineIconColorValue = (state) => state.config["icon"].fill;
export const headlineFontWeight = (state) =>
  state.config.headline["font-weight"];
export const headlineTextTransform = (state) =>
  state.config.headline["text-transform"];

export const bodyFontFamily = (state) => state.config.body["font-family"];
export const bodyFontBackgroundColor = (state) =>
  state.config.body["background-color"];
export const bodyFontColor = (state) => state.config.body.color;

export const textMutedFontColor = (state) => state.config["text--muted"];

export const suprButtonPrimary = (state) =>
  state.config["supr-btn--primary"];
export const suprButtonPrimaryFontColor = (state) =>
  state.config["supr-btn--primary"].color;
export const suprButtonPrimaryBackgroundColor = (state) =>
  state.config["supr-btn--primary"]["background-color"];

export const suprButtonSecondary = (state) =>
  state.config["supr-btn--secondary"];
export const suprButtonSecondaryFontColor = (state) =>
  state.config["supr-btn--secondary"].color;
export const suprButtonSecondaryBackgroundColor = (state) =>
  state.config["supr-btn--secondary"]["background-color"];

export const stateConfig = (state) => state.config;
export const state = (state) => state;
export const saveButtonText = (state) => state.saveButtonText;
