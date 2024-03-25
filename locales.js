//
//
//
// Locale Code
//
//
//
const handleLocale = () => {
  // Grab each locale link
  const localesList = document.querySelector(".localization_list");
  const locales = document.querySelectorAll(".localization_link");
  // Clear out all HTML in localesList
  // localesList.innerHTML = "";
  // Convert the Text content of the locale link to the iso code
  locales.forEach((locale) => {
    const localeHreflang = locale.getAttribute("hreflang");
    locale.textContent = splitByDash(localeHreflang);
    /*
    
    const localeAriaCurrent = locale.getAttribute("aria-current");
    const localeHREF = locale.getAttribute("href");
    const localeClass = locale.getAttribute("class");
    console.log(localeClass);
    // Create a new list item and append it to the localesList using HTML template
    const listItemHTML = `
      <div role="listitem" class="${localeClass}">
        <svg class="localization_check" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 20" fill="none">
          <path d="M2 11.2647L8.375 17L19 2" stroke="currentColor" stroke-width="4"></path>
        </svg>
        <a data-name="en-GB" data-isocode="English" hreflang="en-GB" href="/?r=0" aria-current="page" class="localization_link w--current" tabindex="0">
          ${splitByDash(localeHreflang)}
        </a>
      </div>
    `;
    */
    // localesList.insertAdjacentHTML("beforeend", listItemHTML);
  });

  // Grab the current locale link and set the dropdown button's text to the current locale
  const currentLocale = document.querySelector("[hreflang].w--current");

  // Set the text content of the dropdown button
  document.querySelector("[data-element='current-locale']").textContent =
    currentLocale.textContent;
};

const splitByDash = (string) => {
  const parts = string.split("-");
  return parts[0];
};

// call on page load
handleLocale();
