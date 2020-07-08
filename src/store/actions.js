export const setHeadlineFontColor = ({ commit }, color) => {
  commit("setHeadlineFontColor", color);
};

export const setHeadlineIconColor = ({ commit }, color) => {
  commit("setHeadlineIconColor", color);
};

export const setBodyFontFamily = () => {}

export const setBodyBackgroundColor = () => {}

export const setBodyFontColor = () => {}

export const setTextMutedFontColor = () => {}

export const setSuprButtonPrimaryFontColor = () => {}

export const setSuprButtonSecondaryFontColor = () => {}

export const fetchDataFromApi = ({ commit }) => {
  fetch("https://checkout-creator.firebaseio.com/data.json")
    .then(res => res.json())
    .then(data => {
      const config = [];
      if (data) {
        for (let key in data) {
          config.push(data[key]);
        }
        commit("setDataFromApi", config[0]);
      }
    });
};
