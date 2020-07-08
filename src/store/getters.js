export const headlineFontColor = state => state.config.headline;
export const headlineFontColorValue = state => state.config.headline.color;
export const headlineIconColor = state => state.config['icon']
export const headlineIconColorValue = state => state.config['icon'].color;
export const headlineFontWeight = state => state.config.headline["font-weight"];
export const headlineTextTransform = state => state.config.headline["text-transform"];

export const bodyFontFamily = state => state.config.body["font-family"]
export const bodyFontBackgroundColor = state => state.config.body["background-color"]
export const bodyFontColor = state => state.config.body.color

export const textMutedFontColor = state => state.config["text--muted"].color
export const suprButtonPrimaryColor = state => state.config["supr-button--primary"].color
export const suprButtonSecondaryColor = state => state.config["supr-button--secondary"].color

export const stateConfig = state => state.config;
export const state = state => state;
export const saveButtonText = state => state.saveButtonText;