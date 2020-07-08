export const setHeadlineFontColor = (state, color) => {
  state.config.headline.color = color;
};

export const setHeadlineIconColor = (state, color) => {
  state.config["icon"].color = color;
};

export const setBodyFontFamily = () => {}

export const setBodyBackgroundColor = () => {}

export const setBodyFontColor = () => {}

export const setTextMutedFontColor = () => {}

export const setSuprButtonPrimaryFontColor = () => {}

export const setSuprButtonSecondaryFontColor = () => {}

export const setDataFromApi = (state, data) => {
  state.config = data.config;
};
