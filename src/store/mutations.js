export const setHeadlineFontColor = (state, color) => {
  state.config.headline.color = color;
};

export const setHeadlineIconColor = (state, color) => {
  state.config.icon.color = color;
};

export const setBodyFontFamily = (state, fontFamily) => {
  state.config.body["font-family"] = fontFamily;
};

export const setBodyBackgroundColor = (state, color) => {
  state.config.body["background-color"] = color;
};

export const setBodyFontColor = (state, color) => {
  state.config.body.color = color;
};

export const setTextMutedFontColor = (state, color) => {
  state.config["text--muted"].color = color;
};

export const setSuprButtonPrimaryFontColor = (state, color) => {
  state.config["supr-button--primary"].color = color;
};

export const setSuprButtonSecondaryFontColor = (state, color) => {
  state.config["supr-button--secondary"].color = color;
};

export const setDataFromApi = (state, data) => {
  state.config = data.config;
};
