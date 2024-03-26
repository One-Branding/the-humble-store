export default function handleLocale() {
  // Function used to grab the first two letter of each locale
  const splitByDash = (string) => {
    const parts = string.split("-");
    return parts[0];
  };
  // Change locale full name to iso code with only two letters
  const modifyLocaleLinksText = () => {
    // Grab each locale link
    const locales = document.querySelectorAll(".localization_link");
    // Convert the Text content of the locale link to the iso code
    locales.forEach((locale) => {
      const localeHreflang = locale.getAttribute("hreflang");
      const localeText = locale.querySelector(".localization_text");
      // Set the text content of the locale links
      localeText.textContent = splitByDash(localeHreflang);
    });
  };

  // Set the active locale text and flag for the dropdown menu
  const setActiveLocale = () => {
    // Grab the current locale text
    const currentLocale = document.querySelector("[hreflang].w--current");
    // Grab the current locale flag and it's URL
    const currentLocaleFlag = document.querySelector(
      "[hreflang].w--current .localization_flag"
    );
    const currentLocaleFlagUrl = currentLocaleFlag.getAttribute("src");
    // Grab the active locale text and flag elements
    const activeLocaleText = document.querySelector(
      "[data-element='current-locale']"
    );
    const activeLocaleFlag = document.querySelector(
      "[data-element='locale-flag']"
    );
    // Set the text content of the dropdown button
    activeLocaleText.textContent = currentLocale.textContent;
    // Set the flag of the current locale
    activeLocaleFlag.setAttribute("src", currentLocaleFlagUrl);
  };

  // Call Functions
  modifyLocaleLinksText();
  setActiveLocale();
}
