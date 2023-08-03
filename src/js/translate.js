import jsonData from './strings.json' assert { type: 'json' };

// Crude filter function to show widget in language of the host site.
const translate = (link, langCode) => {
  const { key } = link;

  // If strings.json doesn't have a translation to match the lang attribute and target key.
  if (jsonData[0][key] === undefined || jsonData[0][key][langCode] === undefined) {
    return link;
  }
  const translatedLink = link;
  // @todo Smart loop through properties instead.
  translatedLink.description = jsonData[0][key][langCode].description;
  translatedLink.linktext = jsonData[0][key][langCode].linktext;
  translatedLink.program = jsonData[0][key][langCode].program;
  translatedLink.url = jsonData[0][key][langCode].url;

  return translatedLink;
};

export { translate };
