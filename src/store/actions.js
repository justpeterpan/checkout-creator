export const setBodyFontFamily = ({ commit }, fontFamily) => {
    commit("setBodyFontFamily", fontFamily);
};

export const setBodyBackgroundColor = ({ commit }, color) => {
    commit("setBodyBackgroundColor", color);
};

export const setBodyFontColor = ({ commit }, color) => {
    commit("setBodyFontColor", color);
};

export const setHeadlineFontFamily = ({ commit }, fontFamily) => {
    commit("setHeadlineFontFamily", fontFamily);
};

export const setHeadlineFontColor = ({ commit }, color) => {
    commit("setHeadlineFontColor", color);
};

export const setHeadlineIconColor = ({ commit }, fill) => {
    commit("setHeadlineIconColor", fill);
};

export const setHeadlineFontWeight = ({ commit }, fontWeight) => {
    commit("setHeadlineFontWeight", fontWeight);
};

export const setHeadlineTextTransform = ({ commit }, textTransform) => {
    commit("setHeadlineTextTransform", textTransform);
};

export const setTextMutedFontColor = ({ commit }, color) => {
    commit("setTextMutedFontColor", color);
};

export const setSuprButtonPrimaryFontColor = ({ commit }, color) => {
    commit("setSuprButtonPrimaryFontColor", color);
};

export const setSuprButtonPrimaryBackgroundColor = ({ commit }, color) => {
    commit("setSuprButtonPrimaryBackgroundColor", color);
};

export const setSuprButtonSecondaryFontColor = ({ commit }, color) => {
    commit("setSuprButtonSecondaryFontColor", color);
};

export const setSuprButtonSecondaryBackgroundColor = ({ commit }, color) => {
    commit("setSuprButtonSecondaryBackgroundColor", color);
};

export const fetchDataFromApi = ({ commit }) => {
    fetch("https://sandbox.supr.com/api/checkout-config")
        .then(res => res.json())
        .then(data => {
            if (data) {
                commit("setDataFromApi", data.config);
            }
        });
};

export const setActiveSection = ({ commit }, section) => {
    commit("setActiveSection", section);
};

export const setActiveTab = ({ commit }, tab) => {
    commit("setActiveTab", tab);
};
