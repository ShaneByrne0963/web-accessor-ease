function setFontFamily(element, data) {
  const fontFamily = data.fontFamily;

  let existingStyle = document.querySelector(".accessorease-font-style");

  if (existingStyle) {
    existingStyle.remove();
  }

  if (fontFamily !== "Default") {
    // Add style to body
    const styleGlobal = document.createElement("style");
    styleGlobal.innerHTML = `
           * {
               font-family: ${fontFamily} !important;
           }
       `;

    styleGlobal.className = "accessorease-font-style";

    document.head.appendChild(styleGlobal);
  }
}

function setFontSize(element, data) {
  const fontSize = data.fontSize;

  let existingFontSize = document.querySelector(".accessorease-font-size");

  if (existingFontSize) {
    existingFontSize.remove();
  }

  if (data.isMinFontSize) {
    // Add style to body
    const styleGlobal = document.createElement("style");
    styleGlobal.innerHTML = `
           * {
               font-size: ${fontSize}px !important;
           }
       `;
  
    styleGlobal.className = "accessorease-font-size";
  
    document.head.appendChild(styleGlobal);
  }

}
