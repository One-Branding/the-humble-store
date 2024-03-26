export default function handleLocale() {
  const splitByDash = (string) => {
    const parts = string.split("-");
    return parts[0];
  };
  // Grab each locale link
  //const localesList = document.querySelector(".localization_list");
  const locales = document.querySelectorAll(".localization_link");
  // Convert the Text content of the locale link to the iso code
  locales.forEach((locale) => {
    const localeHreflang = locale.getAttribute("hreflang");
    locale.textContent = splitByDash(localeHreflang);
  });
  // Grab the current locale link and set the dropdown button's text to the current locale
  const currentLocale = document.querySelector("[hreflang].w--current");

  // Set the text content of the dropdown button
  document.querySelector("[data-element='current-locale']").textContent =
    currentLocale.textContent;
}
