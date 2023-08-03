import jsonData from './strings.json' assert { type: 'json' };

// Crude filter function to show widget in language of the host site.
const translate = (link, langCode) => {
  const { key } = link;

  // If strings.json doesn't have a translation to match the lang attribute and target key.
  if (jsonData[0][key] === undefined || jsonData[0][key][langCode] === undefined) {
    return link;
  }

  // Loop through properties in strings.json and set them to translatedLink.
  const translatedLink = link;
  const properties = Object.getOwnPropertyNames(jsonData[0][key][langCode]);
  properties.forEach((property) => {
    translatedLink[property] = jsonData[0][key][langCode][property];
  });

  return translatedLink;
};

export { translate };
