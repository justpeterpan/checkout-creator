const finalCssArray = [];

const mapBodyProperties = (selector, values) => {
  if (selector === "body") {
    let bodyValues = [];
    for (const value in values) {
      bodyValues.push(`${value}: ${values[value]};`);
    }
    bodyValues = bodyValues.join("");
    const body = `body {${bodyValues}};`;
    return (finalCssArray[0] = body);
  }
};

const mapHeadlineProperties = (selector, values) => {
  if (selector === "headline") {
    const headlineValues = JSON.stringify(values);
    const headlines = `h1,h2,h3,h4,h5,h6 ${headlineValues};`;
    return (finalCssArray[1] = headlines);
  }
};

const mapTextMutedProperties = (selector, values) => {
  if (selector === "text--muted") {
    const textMutedValues = JSON.stringify(values);
    const textMuted = `.text--muted ${textMutedValues};`;
    return (finalCssArray[2] = textMuted);
  }
};

const mapSuprButtonPrimaryProperties = (selector, values) => {
  if (selector === "supr-button--primary") {
    const suprButtonPrimaryValues = JSON.stringify(values);
    const suprButtonPrimary = `.supr-button--primary ${suprButtonPrimaryValues};`;
    return (finalCssArray[3] = suprButtonPrimary);
  }
};

const mapSuprButtonSecondaryProperties = (selector, values) => {
  if (selector === "supr-button--secondary") {
    const suprButtonSecondaryValues = JSON.stringify(values);
    const suprButtonSecondary = `.supr-button--secondary ${suprButtonSecondaryValues};`;
    return (finalCssArray[4] = suprButtonSecondary);
  }
};

const mapIconProperties = (selector, values) => {
  if (selector === "icon") {
    const iconValues = JSON.stringify(values);
    const icon = `.icon ${iconValues};`;
    return (finalCssArray[5] = icon);
  }
};

export const convertJsonToCss = (jsonObject) => {
  for (const selector in jsonObject) {
    mapBodyProperties(selector, jsonObject[selector]);
    mapHeadlineProperties(selector, jsonObject[selector]);
    mapTextMutedProperties(selector, jsonObject[selector]);
    mapSuprButtonPrimaryProperties(selector, jsonObject[selector]);
    mapSuprButtonSecondaryProperties(selector, jsonObject[selector]);
    mapIconProperties(selector, jsonObject[selector]);
  }
  return finalCssArray.join("");
};
