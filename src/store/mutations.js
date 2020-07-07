export const setHeadlineFontColor = (state, color) => {
  state.config.headlineFontColor.color = color;
};

export const setDataFromApi = (state, data) => {
  state.config = data.config;
};
