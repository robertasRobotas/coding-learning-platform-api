const task1TestNames = {
  ["1-1"]: {
    en: "Checking if text Let's go exists",
  },
};

const task1 = () => {
  const result = {
    "1-1": false,
  };

  result["1-1"] = document.body.textContent.trim() === "Let's go!";
  return result;
};

const task2TestNames = {
  ["2-1"]: {
    en: "Checking if <html> root tag exists",
  },
  ["2-2"]: {
    en: "Checking if <head> section exists",
  },
  ["2-3"]: {
    en: "Checking if <body> section exists",
  },
  ["2-4"]: {
    en: "Checking if heading with text 'Welcome to My Page' exists",
  },
  ["2-5"]: {
    en: "Checking if paragraph with text 'This is my first webpage!' exists",
  },
  ["2-6"]: {
    en: "Checking if <head> is inside <html>",
  },
  ["2-7"]: {
    en: "Checking if <body> is inside <html>",
  },
  ["2-8"]: {
    en: "Checking if heading is inside <body>",
  },
  ["2-9"]: {
    en: "Checking if paragraph is inside <body>",
  },
  ["2-10"]: {
    en: "Checking if <body> does not open in <head> and close after <head>",
  },
  ["2-11"]: {
    en: "Checking if all tags are properly nested and closed",
  },
  ["2-12"]: {
    en: "Checking if <title> is inside <head>",
  },
};

const task2 = ({ html }) => {
  const result = {
    ["2-1"]: /<html[^>]*>[\s\S]*<\/html>/i.test(html),
    ["2-2"]: /<head[^>]*>[\s\S]*<\/head>/i.test(html),
    ["2-3"]: /<body[^>]*>[\s\S]*<\/body>/i.test(html),
    ["2-4"]: /<h1[^>]*>Welcome to My Page<\/h1>/i.test(html),
    ["2-5"]: /<p[^>]*>This is my first webpage!<\/p>/i.test(html),
    ["2-6"]: /<html[^>]*>[\s\S]*<head[^>]*>[\s\S]*<\/head>[\s\S]*<\/html>/i.test(html),
    ["2-7"]: /<html[^>]*>[\s\S]*<body[^>]*>[\s\S]*<\/body>[\s\S]*<\/html>/i.test(html),
    ["2-8"]: /<body[^>]*>[\s\S]*<h1[^>]*>Welcome to My Page<\/h1>[\s\S]*<\/body>/i.test(html),
    ["2-9"]: /<body[^>]*>[\s\S]*<p[^>]*>This is my first webpage!<\/p>[\s\S]*<\/body>/i.test(html),
    ["2-10"]: !/<head[^>]*>[\s\S]*<body[^>]*>[\s\S]*<\/head>/i.test(html),
    ["2-11"]: /<html[^>]*>[\s\S]*<head[^>]*>[\s\S]*<\/head>[\s\S]*<body[^>]*>[\s\S]*<\/body>[\s\S]*<\/html>/i.test(html),
    ["2-12"]: /<head[^>]*>[\s\S]*<title[^>]*>[\s\S]*<\/title>[\s\S]*<\/head>/i.test(html),
  };

  return Object.keys(result).map((key) => ({
    result: result[key],
    name: task2TestNames[key],
  }));
};

const task3TestNames = {
  ["3-1"]: {
    en: "Checking if <a> tag exists",
  },
  ["3-2"]: {
    en: "Checking if <a> tag has href attribute",
  },
  ["3-3"]: {
    en: "Checking if href attribute is 'https://google.com'",
  },
  ["3-4"]: {
    en: "Checking if <a> tag has text inside",
  },
};

const task3 = () => {
  const result = {
    ["3-1"]: false,
    ["3-2"]: false,
    ["3-3"]: false,
    ["3-4"]: false,
  };

  try {
    const aTag = document.querySelector("a");
    result["3-1"] = !!aTag;

    if (aTag) {
      result["3-2"] = aTag.hasAttribute("href");
      result["3-3"] = aTag.getAttribute("href") === "https://google.com" || aTag.getAttribute("href") === "https://google.com/";
      result["3-4"] = aTag.textContent.trim().length > 0;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task4TestNames = {
  ["4-1"]: {
    en: "Checking if parent <div> tag exists",
  },
  ["4-2"]: {
    en: "Checking if first child <div> tag exists with correct text",
  },
  ["4-3"]: {
    en: "Checking if second child <div> tag exists with correct text",
  },
  ["4-4"]: {
    en: "Checking if first <span> tag exists with correct text",
  },
  ["4-5"]: {
    en: "Checking if second <span> tag exists with correct text",
  },
  ["4-6"]: {
    en: "Checking if third child <div> tag exists with correct text",
  },
};

const task4 = () => {
  const result = {
    ["4-1"]: false,
    ["4-2"]: false,
    ["4-3"]: false,
    ["4-4"]: false,
    ["4-5"]: false,
    ["4-6"]: false,
  };

  try {
    const parentDiv = document.querySelector("div");
    result["4-1"] = !!parentDiv;

    if (parentDiv) {
      const childDivs = parentDiv.querySelectorAll("div");
      const spans = parentDiv.querySelectorAll("span");

      result["4-2"] = childDivs.length > 0 && childDivs[0].textContent.trim() === "This is a first div";
      result["4-3"] = childDivs.length > 1 && childDivs[1].textContent.trim() === "This is a second div";
      result["4-4"] = spans.length > 0 && spans[0].textContent.trim() === "This is a first span";
      result["4-5"] = spans.length > 1 && spans[1].textContent.trim() === "This is a second span";
      result["4-6"] = childDivs.length > 2 && childDivs[2].textContent.trim() === "This is a piece of the text inside element. And this text won't break to another line";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task5TestNames = {
  ["5-1"]: {
    en: "Checking if outer <div> tag exists",
  },
  ["5-2"]: {
    en: "Checking if inner <div> tag exists inside outer <div>",
  },
  ["5-3"]: {
    en: "Checking if <span> tag exists inside inner <div>",
  },
  ["5-4"]: {
    en: "Checking if <span> tag has text content",
  },
};

const task5 = () => {
  const result = {
    ["5-1"]: false,
    ["5-2"]: false,
    ["5-3"]: false,
    ["5-4"]: false,
  };

  try {
    const outerDiv = document.querySelector("div");
    result["5-1"] = !!outerDiv;

    if (outerDiv) {
      const innerDiv = outerDiv.querySelector("div");
      result["5-2"] = !!innerDiv;

      if (innerDiv) {
        const span = innerDiv.querySelector("span");
        result["5-3"] = !!span;

        if (span) {
          result["5-4"] = span.textContent.trim().length > 0;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task6TestNames = {
  ["6-1"]: {
    en: "Checking if <div> tag exists",
  },
  ["6-2"]: {
    en: "Checking if comment exists before email <div>",
  },
};

const task6 = (code) => {
  const result = {
    ["6-1"]: false,
    ["6-2"]: false,
  };

  try {
    const htmlCode = code.html;

    // Check if <div> tags exist
    const divRegex = /<div>/g;
    result["6-1"] = divRegex.test(htmlCode);

    // Check if any comment exists before email <div>
    const commentBeforeEmailDivRegex = /<!--[\s\S]*?-->\s*<div>robert@gmail\.com<\/div>/;
    result["6-2"] = commentBeforeEmailDivRegex.test(htmlCode);
  } catch (error) {
    console.log(error);
  }

  // Map results to the specified format
  return Object.keys(result).map((key) => ({
    result: result[key],
    name: task6TestNames[key],
  }));
};

const task7TestNames = {
  ["7-1"]: {
    en: "Checking if <img> tag exists",
  },
  ["7-2"]: {
    en: "Checking if <img> tag has correct src attribute",
  },
  ["7-3"]: {
    en: "Checking if <img> tag has alt attribute",
  },
  ["7-4"]: {
    en: "Checking if <img> tag appears correctly on the webpage",
  },
};

const task7 = () => {
  const result = {
    ["7-1"]: false,
    ["7-2"]: false,
    ["7-3"]: false,
    ["7-4"]: false,
  };

  try {
    const img = document.querySelector("img");
    result["7-1"] = !!img;

    if (img) {
      result["7-2"] = img.getAttribute("src") === "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/1280px-Larix_decidua_Aletschwald.jpg";
      result["7-3"] = img.hasAttribute("alt");
      result["7-4"] = img.complete && img.naturalHeight !== 0;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task8TestNames = {
  ["8-1"]: {
    en: "Checking if <ul> tag exists",
  },
  ["8-2"]: {
    en: "Checking if <ul> has correct items",
  },
  ["8-3"]: {
    en: "Checking if <ol> tag exists",
  },
  ["8-4"]: {
    en: "Checking if <ol> has correct items",
  },
};

const task8 = () => {
  const result = {
    ["8-1"]: false,
    ["8-2"]: false,
    ["8-3"]: false,
    ["8-4"]: false,
  };

  try {
    const ul = document.querySelector("ul");
    result["8-1"] = !!ul;
    if (ul) {
      const ulItems = Array.from(ul.querySelectorAll("li")).map((item) => item.textContent.trim());
      result["8-2"] = ulItems.length === 3 && ulItems.includes("Apple") && ulItems.includes("Banana") && ulItems.includes("Cherry");
    }

    const ol = document.querySelector("ol");
    result["8-3"] = !!ol;
    if (ol) {
      const olItems = Array.from(ol.querySelectorAll("li")).map((item) => item.textContent.trim());
      result["8-4"] = olItems.length === 3 && olItems.includes("Step 1: Open browser") && olItems.includes("Step 2: Search for HTML tutorials") && olItems.includes("Step 3: Start learning");
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task9TestNames = {
  ["9-1"]: {
    en: "Checking if two <p> tags exist",
  },
  ["9-2"]: {
    en: "Checking if <br> tag exists within the first <p> tag",
  },
  ["9-3"]: {
    en: "Checking if <hr> tag exists between the two <p> tags",
  },
};

const task9 = () => {
  const result = {
    ["9-1"]: false,
    ["9-2"]: false,
    ["9-3"]: false,
  };

  try {
    const paragraphs = document.querySelectorAll("p");
    result["9-1"] = paragraphs.length === 2;

    if (paragraphs.length > 0) {
      const firstParagraph = paragraphs[0];
      result["9-2"] = firstParagraph.querySelector("br") !== null;
    }

    const hr = document.querySelector("hr");
    if (paragraphs.length === 2 && hr) {
      const firstParagraph = paragraphs[0];
      const secondParagraph = paragraphs[1];
      result["9-3"] = firstParagraph.nextElementSibling === hr && hr.nextElementSibling === secondParagraph;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task10TestNames = {
  ["10-1"]: {
    en: "Checking if text input field for name exists with correct placeholder",
  },
  ["10-2"]: {
    en: "Checking if email input field exists with correct placeholder",
  },
  ["10-3"]: {
    en: "Checking if password input field exists with correct placeholder",
  },
  ["10-4"]: {
    en: "Checking if date input field exists",
  },
  ["10-5"]: {
    en: "Checking if submit button exists",
  },
  ["10-6"]: {
    en: "Checking if form element exists and all inputs are inside the form",
  },
};

const task10 = () => {
  const result = {
    ["10-1"]: false,
    ["10-2"]: false,
    ["10-3"]: false,
    ["10-4"]: false,
    ["10-5"]: false,
    ["10-6"]: false,
  };

  try {
    const form = document.querySelector("form");
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const dateInput = document.querySelector('input[type="date"]');
    const submitButton = document.querySelector('button[type="submit"]') || document.querySelector('input[type="submit"]');

    result["10-1"] = !!nameInput && nameInput.hasAttribute("placeholder") && nameInput.getAttribute("placeholder").trim() !== "";
    result["10-2"] = !!emailInput && emailInput.hasAttribute("placeholder") && emailInput.getAttribute("placeholder").trim() !== "";
    result["10-3"] = !!passwordInput && passwordInput.hasAttribute("placeholder") && passwordInput.getAttribute("placeholder").trim() !== "";
    result["10-4"] = !!dateInput;
    result["10-5"] = !!submitButton;

    // Check if form element exists and all inputs are inside the form
    if (form) {
      result["10-6"] = form.contains(nameInput) && form.contains(emailInput) && form.contains(passwordInput) && form.contains(dateInput) && form.contains(submitButton);
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task11TestNames = {
  ["11-1"]: {
    en: "Checking if <link> tag exists in <head> section linking to styles.css",
  },
  ["11-2"]: {
    en: "Checking if paragraph with specific text exists",
  },
  ["11-3"]: {
    en: "Checking if styles.css file contains .content-text class with correct style",
  },
  ["11-4"]: {
    en: "Checking if paragraph has .content-text class applied",
  },
};

const task11 = () => {
  const result = {
    ["11-1"]: false,
    ["11-2"]: false,
    ["11-3"]: false,
    ["11-4"]: false,
  };

  try {
    const link = document.querySelector('link[rel="stylesheet"][href="styles.css"]');
    result["11-1"] = !!link;

    const paragraph = document.querySelector("p");
    result["11-2"] = !!paragraph && paragraph.textContent.includes("This text will be styled.");

    // Check if styles.css file contains .content-text class with correct style
    const styleTag = Array.from(document.querySelectorAll("style")).find((style) => style.textContent.includes(".content-text"));
    if (styleTag) {
      const styleSheet = Array.from(document.styleSheets).find((sheet) => sheet.ownerNode === styleTag);
      if (styleSheet) {
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
          const rule = styleSheet.cssRules[i];
          if (rule.selectorText === ".content-text" && rule.style.color === "blue") {
            result["11-3"] = true;
            break;
          }
        }
      }
    }

    if (paragraph) {
      // Check if paragraph has content-text class applied
      const paragraphStyles = window.getComputedStyle(paragraph);
      result["11-4"] = paragraphStyles.color === "rgb(0, 0, 255)";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task12TestNames = {
  ["12-1"]: {
    en: "Checking if paragraph with specific text exists",
  },
  ["12-2"]: {
    en: "Checking if paragraph has .styled-paragraph class applied with correct styles",
  },
  ["12-3"]: {
    en: "Checking if the word 'CSS' is wrapped in a <span> tag with .highlighted-word class",
  },
  ["12-4"]: {
    en: "Checking if .highlighted-word class has correct styles",
  },
};

const task12 = () => {
  const result = {
    ["12-1"]: false,
    ["12-2"]: false,
    ["12-3"]: false,
    ["12-4"]: false,
  };

  try {
    const paragraph = document.querySelector("p.styled-paragraph");
    result["12-1"] = !!paragraph && paragraph.textContent.includes("Learning css makes styling webpages much easier and more effective. It allows developers to control the layout, colors, and overall design of a webpage.");

    if (paragraph) {
      const paragraphStyles = window.getComputedStyle(paragraph);
      result["12-2"] = paragraphStyles.fontSize === "18px" && paragraphStyles.color === "rgb(51, 51, 51)" && paragraphStyles.textAlign === "center";

      const span = paragraph.querySelector("span.highlighted-word");
      result["12-3"] = !!span && span.textContent === "css";

      if (span) {
        const spanStyles = window.getComputedStyle(span);
        const correctSpanColor = spanStyles.color === "rgb(255, 0, 0)" || spanStyles.color === "red";
        const correntFontWeight = spanStyles.fontWeight === "bold" || spanStyles.fontWeight === "700" || spanStyles.fontWeight === "800" || spanStyles.fontWeight === "900";
        const correctBackgroundColor = spanStyles.backgroundColor === "rgb(255, 255, 0)" || spanStyles.backgroundColor === "yellow";
        result["12-4"] = correctSpanColor && correntFontWeight && correctBackgroundColor && spanStyles.textTransform === "uppercase";
      }
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskPracticeWithStylesTestNames = {
  ["13-1"]: {
    en: "Checking if heading with specific text exists",
  },
  ["13-2"]: {
    en: "Checking if heading has .main-heading class applied with correct styles",
  },
  ["13-3"]: {
    en: "Checking if subheading with specific text exists",
  },
  ["13-4"]: {
    en: "Checking if subheading has .sub-heading class applied with correct styles",
  },
  ["13-5"]: {
    en: "Checking if paragraph with specific text exists",
  },
  ["13-6"]: {
    en: "Checking if paragraph has .styled-paragraph class applied with correct styles",
  },
};

const taskPracticeWithStyles = () => {
  const result = {
    ["13-1"]: false,
    ["13-2"]: false,
    ["13-3"]: false,
    ["13-4"]: false,
    ["13-5"]: false,
    ["13-6"]: false,
  };

  try {
    const heading = document.querySelector("h1.main-heading");
    result["13-1"] = !!heading && heading.textContent.includes("Welcome to My Styled Page.");

    if (heading) {
      const headingStyles = window.getComputedStyle(heading);
      result["13-2"] = headingStyles.fontSize === "36px" && (headingStyles.color === "rgb(0, 0, 139)" || headingStyles.color === "darkblue") && headingStyles.textAlign === "center" && headingStyles.textTransform === "uppercase";
    }

    const subheading = document.querySelector("h2.sub-heading");
    result["13-3"] = !!subheading && subheading.textContent.includes("Learn how CSS transforms plain text into stunning designs.");

    if (subheading) {
      const subheadingStyles = window.getComputedStyle(subheading);
      result["13-4"] = subheadingStyles.fontSize === "24px" && (subheadingStyles.color === "rgb(0, 0, 205)" || subheadingStyles.color === "mediumblue") && subheadingStyles.letterSpacing === "2px" && subheadingStyles.fontStyle === "italic";
    }

    const paragraph = document.querySelector("p.styled-paragraph");
    result["13-5"] = !!paragraph && paragraph.textContent.includes("CSS is powerful, flexible, and fun to learn. With just a few commands, you can change how text looks, feels, and interacts with your webpage visitors.");

    if (paragraph) {
      const paragraphStyles = window.getComputedStyle(paragraph);
      const correctFontSize = paragraphStyles.fontSize === "18px";
      const correctFontColor = paragraphStyles.color === "rgb(85, 85, 85)" || paragraphStyles.color === "#555";
      const correctLineHeight = paragraphStyles.lineHeight === "28.8px";

      result["13-6"] = correctFontSize && correctFontColor && correctLineHeight;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const testNamesElementSize = {
  ["6-1"]: {
    en: "Checking if <div> with class 'styled-box' exists",
  },
  ["6-2"]: {
    en: "Checking if 'styled-box' has correct width, height, background color, text color, border, and border-radius",
  },
  ["6-3"]: {
    en: "Checking if <div> with class 'rounded-box' exists",
  },
  ["6-4"]: {
    en: "Checking if 'rounded-box' has correct width, height, background color, text color, border-radius, and text alignment",
  },
};

const taskElementSize = () => {
  const result = {
    ["6-1"]: false,
    ["6-2"]: false,
    ["6-3"]: false,
    ["6-4"]: false,
  };

  try {
    const styledBox = document.querySelector(".styled-box");
    result["6-1"] = !!styledBox;

    if (styledBox) {
      const styledBoxStyles = window.getComputedStyle(styledBox);
      const correctWidth = styledBoxStyles.width === "300px";
      const correctHeight = styledBoxStyles.height === "150px";
      const correctBackgroundColor = styledBoxStyles.backgroundColor === "rgb(173, 216, 230)";
      const correctTextColor = styledBoxStyles.color === "rgb(0, 0, 139)";
      const correctBorder = styledBoxStyles.border === "3px solid rgb(255, 0, 0)";
      const correctBorderRadius = styledBoxStyles.borderRadius === "15px";

      result["6-2"] = correctWidth && correctHeight && correctBackgroundColor && correctTextColor && correctBorder && correctBorderRadius;
      result["6-2"] = styledBoxStyles.border;
    }

    const roundedBox = document.querySelector(".rounded-box");
    result["6-3"] = !!roundedBox;

    if (roundedBox) {
      const roundedBoxStyles = window.getComputedStyle(roundedBox);
      const correctWidth = roundedBoxStyles.width === "100px";
      const correctHeight = roundedBoxStyles.height === "100px";
      const correctBackgroundColor = roundedBoxStyles.backgroundColor === "rgb(144, 238, 144)";
      const correctTextColor = roundedBoxStyles.color === "rgb(0, 100, 0)";
      const correctBorderRadius = roundedBoxStyles.borderRadius === "50%";
      const correctTextAlign = roundedBoxStyles.textAlign === "center";

      result["6-4"] = correctWidth && correctHeight && correctBackgroundColor && correctTextColor && correctBorderRadius && correctTextAlign;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const moreStylesTestNames = {
  ["7-1"]: {
    en: "Checking if <div> with class 'styled-div' exists",
  },
  ["7-2"]: {
    en: "Checking if 'styled-div' has correct width, text alignment, background color, and border radius",
  },
  ["7-3"]: {
    en: "Checking if <img> with class 'styled-image' exists",
  },
  ["7-4"]: {
    en: "Checking if 'styled-image' has correct width, height, object-fit, and border radius",
  },
};

const moreStylesTestNamesString = {
  ["7-5"]: {
    en: "Checking if div has correct width",
  },
};

const moreStylesTaskStringCheck = ({ css }) => {
  const result = {
    ["7-5"]: false,
  };
  const regex = /\.styled-div\s*\{\s*[^}]*\bwidth\s*:\s*50%\s*;[^}]*\}/;
  result["7-5"] = regex.test(css);

  return [
    {
      result: result["7-5"],
      name: moreStylesTestNamesString["7-5"],
    },
  ];
};

const moreStylesTask = () => {
  const result = {
    ["7-1"]: false,
    ["7-2"]: false,
    ["7-3"]: false,
    ["7-4"]: false,
  };
  try {
    const styledDiv = document.querySelector(".styled-div");
    result["7-1"] = !!styledDiv;

    if (styledDiv) {
      const styledDivStyles = window.getComputedStyle(styledDiv);
      const correctTextAlign = styledDivStyles.textAlign === "center";
      const correctBackgroundColor = styledDivStyles.backgroundColor === "rgb(211, 211, 211)";
      const correctBorderRadius = styledDivStyles.borderRadius === "15px";

      result["7-2"] = correctTextAlign && correctBackgroundColor && correctBorderRadius;
    }

    const styledImage = document.querySelector(".styled-image");
    result["7-3"] = !!styledImage;

    if (styledImage) {
      const styledImageStyles = window.getComputedStyle(styledImage);
      const correctWidth = styledImageStyles.width === "300px";
      const correctHeight = styledImageStyles.height === "200px";
      const correctObjectFit = styledImageStyles.objectFit === "cover";
      const correctBorderRadius = styledImageStyles.borderRadius === "20px";

      result["7-4"] = correctWidth && correctHeight && correctObjectFit && correctBorderRadius;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskFontsNames = {
  ["8-1"]: {
    en: "Checking if <link> tag for Google Font 'Lobster' exists",
  },
  ["8-2"]: {
    en: "Checking if <h1> tag exists with correct text",
  },
  ["8-3"]: {
    en: "Checking if <p> tag exists with correct text",
  },
  ["8-4"]: {
    en: "Checking if 'lobster-text' class is applied to <p> tag",
  },
  ["8-5"]: {
    en: "Checking if 'lobster-text' class has correct font-family",
  },
};

const taskFontsTests = () => {
  const result = {
    ["8-1"]: false,
    ["8-2"]: false,
    ["8-3"]: false,
    ["8-4"]: false,
    ["8-5"]: false,
  };

  try {
    const linkTag = document.querySelector("link[href='https://fonts.googleapis.com/css2?family=Lobster&display=swap']");
    result["8-1"] = !!linkTag;

    const h1Tag = document.querySelector("h1");
    result["8-2"] = h1Tag && h1Tag.textContent === "Welcome to My Styled Page";

    const pTag = document.querySelector("p.lobster-text");
    result["8-3"] = pTag && pTag.textContent === "This is an example paragraph styled with the Lobster font. Using custom fonts makes webpages more visually appealing.";
    result["8-4"] = !!pTag;

    if (pTag) {
      const pTagStyles = window.getComputedStyle(pTag);
      const correctFontFamily = pTagStyles.fontFamily.includes("Lobster");
      result["8-5"] = correctFontFamily;
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskCSSPrioritiesTestNames = {
  ["14-1"]: {
    en: "Checking if global <div> element exists with correct text and style",
  },
  ["14-2"]: {
    en: "Checking if class <div> element exists with correct text and style",
  },
  ["14-3"]: {
    en: "Checking if ID <div> element exists with correct text and style",
  },
  ["14-4"]: {
    en: "Checking if high-priority <div> element exists with correct text and style",
  },
};

const taskCSSPriorities = () => {
  const result = {
    ["14-1"]: false,
    ["14-2"]: false,
    ["14-3"]: false,
    ["14-4"]: false,
  };

  try {
    const globalDiv = document.querySelector("div");
    result["14-1"] = !!globalDiv && globalDiv.textContent.includes("This is a global element.");
    if (globalDiv) {
      const globalDivStyles = window.getComputedStyle(globalDiv);
      result["14-1"] = result["14-1"] && globalDivStyles.backgroundColor === "rgb(211, 211, 211)"; // lightgray
    }

    const classDiv = document.querySelector("div.styled-box");
    result["14-2"] = !!classDiv && classDiv.textContent.includes("This is a class element.");
    if (classDiv) {
      const classDivStyles = window.getComputedStyle(classDiv);
      result["14-2"] = result["14-2"] && classDivStyles.backgroundColor === "rgb(173, 216, 230)"; // lightblue
    }

    const idDiv = document.querySelector("div#unique-box");
    result["14-3"] = !!idDiv && idDiv.textContent.includes("This is an ID element.");
    if (idDiv) {
      const idDivStyles = window.getComputedStyle(idDiv);
      result["14-3"] = result["14-3"] && idDivStyles.backgroundColor === "rgb(255, 255, 0)"; // yellow
    }

    const highPriorityDiv = document.querySelector("div.styled-box#unique-box");
    result["14-4"] = !!highPriorityDiv && highPriorityDiv.textContent.includes("This is a high-priority element.");
    if (highPriorityDiv) {
      const highPriorityDivStyles = window.getComputedStyle(highPriorityDiv);
      result["14-4"] = result["14-4"] && highPriorityDivStyles.backgroundColor === "rgb(255, 192, 203)"; // pink
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskCSSBoxModelTestNames = {
  ["15-1"]: {
    en: "Checking if card <div> element exists with correct text",
  },
  ["15-2"]: {
    en: "Checking if card <div> element has correct padding",
  },
  ["15-3"]: {
    en: "Checking if card <div> element has correct margin",
  },
  ["15-4"]: {
    en: "Checking if card <div> element has correct border",
  },
  ["15-5"]: {
    en: "Checking if card <div> element has correct border-radius",
  },
  ["15-6"]: {
    en: "Checking if card <div> element has correct background color",
  },
};

const taskCSSBoxModel = () => {
  const result = {
    ["15-1"]: false,
    ["15-2"]: false,
    ["15-3"]: false,
    ["15-4"]: false,
    ["15-5"]: false,
    ["15-6"]: false,
  };

  try {
    const cardDiv = document.querySelector("div.card");
    result["15-1"] = !!cardDiv && cardDiv.textContent.includes("This is an information card. It demonstrates padding, margin, border, and border-radius styling.");

    if (cardDiv) {
      const cardDivStyles = window.getComputedStyle(cardDiv);
      result["15-2"] = cardDivStyles.padding === "16px";
      result["15-3"] = cardDivStyles.margin === "16px";
      result["15-4"] = cardDivStyles.border === "1px solid rgb(128, 128, 128)"; // gray
      result["15-5"] = cardDivStyles.borderRadius === "5px";
      result["15-6"] = cardDivStyles.backgroundColor === "rgb(173, 216, 230)"; // lightblue
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskCSSCardWithImageTestNames = {
  ["16-1"]: {
    en: "Checking if card <div> element exists with correct structure",
  },
  ["16-2"]: {
    en: "Checking if card <div> element has correct box-sizing",
  },
  ["16-3"]: {
    en: "Checking if card <div> element has correct padding",
  },
  ["16-4"]: {
    en: "Checking if card <div> element has correct margin",
  },
  ["16-5"]: {
    en: "Checking if card <div> element has correct border",
  },
  ["16-6"]: {
    en: "Checking if card <div> element has correct border-radius",
  },
  ["16-7"]: {
    en: "Checking if card <div> element has correct background color",
  },
  ["16-9"]: {
    en: "Checking if image inside card has correct height",
  },
  ["16-10"]: {
    en: "Checking if image inside card has correct object-fit",
  },
};

const taskCSSCardWithImage = () => {
  const result = {
    ["16-1"]: false,
    ["16-2"]: false,
    ["16-3"]: false,
    ["16-4"]: false,
    ["16-5"]: false,
    ["16-6"]: false,
    ["16-7"]: false,
    ["16-9"]: false,
    ["16-10"]: false,
  };

  try {
    const cardDiv = document.querySelector("div.card");
    const img = cardDiv.querySelector("img");
    const heading = cardDiv.querySelector("h4");
    const paragraph = cardDiv.querySelector("p");

    result["16-1"] = !!cardDiv && !!img && !!heading && !!paragraph && heading.textContent === "Card Title" && paragraph.textContent === "This is an example card created using the CSS Box Model.";

    if (cardDiv) {
      const cardDivStyles = window.getComputedStyle(cardDiv);
      result["16-2"] = cardDivStyles.boxSizing === "border-box";
      result["16-3"] = cardDivStyles.padding === "16px";
      result["16-4"] = cardDivStyles.margin === "16px";
      result["16-5"] = cardDivStyles.border === "1px solid rgb(128, 128, 128)"; // gray
      result["16-6"] = cardDivStyles.borderRadius === "10px";
      result["16-7"] = cardDivStyles.backgroundColor === "rgb(173, 216, 230)"; // lightblue
    }

    if (img) {
      const imgStyles = window.getComputedStyle(img);
      result["16-9"] = imgStyles.height === "200px";
      result["16-10"] = imgStyles.objectFit === "cover";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskCSSCardsSideBySideTestNames = {
  ["17-1"]: {
    en: "Checking if both card <div> elements exist with correct structure",
  },
  ["17-2"]: {
    en: "Checking if both card <div> elements have correct display property",
  },
  ["17-3"]: {
    en: "Checking if both card <div> elements have correct box-sizing",
  },
  ["17-4"]: {
    en: "Checking if both card <div> elements have correct padding",
  },
  ["17-5"]: {
    en: "Checking if both card <div> elements have correct margin",
  },
  ["17-6"]: {
    en: "Checking if both card <div> elements have correct border",
  },
  ["17-7"]: {
    en: "Checking if both card <div> elements have correct border-radius",
  },
  ["17-8"]: {
    en: "Checking if both card <div> elements have correct background color",
  },
  ["17-10"]: {
    en: "Checking if images inside cards have correct height",
  },
  ["17-11"]: {
    en: "Checking if images inside cards have correct object-fit",
  },
};

const taskCSSCardsSideBySide = () => {
  const result = {
    ["17-1"]: false,
    ["17-2"]: false,
    ["17-3"]: false,
    ["17-4"]: false,
    ["17-5"]: false,
    ["17-6"]: false,
    ["17-7"]: false,
    ["17-8"]: false,
    ["17-10"]: false,
    ["17-11"]: false,
  };

  try {
    const cards = document.querySelectorAll("body > div");
    const card1 = cards[0];
    const card2 = cards[1];
    const img1 = card1.querySelector("img");
    const img2 = card2.querySelector("img");
    const heading1 = card1.querySelector("h4");
    const heading2 = card2.querySelector("h4");
    const paragraph1 = card1.querySelector("p");
    const paragraph2 = card2.querySelector("p");

    result["17-1"] = cards.length === 2 && !!img1 && !!heading1 && !!paragraph1 && !!img2 && !!heading2 && !!paragraph2 && heading1.textContent === "Short Title" && heading2.textContent === "This is a longer title to demonstrate alignment.";

    if (card1 && card2) {
      const card1Styles = window.getComputedStyle(card1);
      const card2Styles = window.getComputedStyle(card2);
      result["17-2"] = card1Styles.display === "inline-block" && card2Styles.display === "inline-block";
      result["17-3"] = card1Styles.boxSizing === "border-box" && card2Styles.boxSizing === "border-box";
      result["17-4"] = card1Styles.padding === "16px" && card2Styles.padding === "16px";
      result["17-5"] = card1Styles.margin === "16px" && card2Styles.margin === "16px";
      result["17-6"] = card1Styles.border === "1px solid rgb(128, 128, 128)" && card2Styles.border === "1px solid rgb(128, 128, 128)"; // gray
      result["17-7"] = card1Styles.borderRadius === "10px" && card2Styles.borderRadius === "10px";
      result["17-8"] = card1Styles.backgroundColor === "rgb(211, 211, 211)" && card2Styles.backgroundColor === "rgb(211, 211, 211)"; // lightgray
    }

    if (img1 && img2) {
      const img1Styles = window.getComputedStyle(img1);
      const img2Styles = window.getComputedStyle(img2);
      result["17-10"] = img1Styles.height === "150px" && img2Styles.height === "150px";
      result["17-11"] = img1Styles.objectFit === "cover" && img2Styles.objectFit === "cover";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskSemanticHTMLStructureTestNames = {
  ["18-1"]: {
    en: "Checking if <div> element with class page-wrapper exists with correct structure",
  },
  ["18-2"]: {
    en: "Checking if <div> element with class page-wrapper has correct font-size",
  },
  ["18-3"]: {
    en: "Checking if <header> and <footer> elements have correct height and background color",
  },
  ["18-4"]: {
    en: "Checking if <main> and <aside> elements have correct width, height, and background color",
  },
  ["18-5"]: {
    en: "Checking if <main> and <aside> elements have correct display property",
  },
};

const taskSemanticHTMLStructure = () => {
  const result = {
    ["18-1"]: false,
    ["18-2"]: false,
    ["18-3"]: false,
    ["18-4"]: false,
    ["18-5"]: false,
  };

  try {
    const pageWrapper = document.querySelector("div.page-wrapper");
    const header = pageWrapper.querySelector("header");
    const main = pageWrapper.querySelector("main");
    const aside = pageWrapper.querySelector("aside");
    const footer = pageWrapper.querySelector("footer");

    result["18-1"] = !!pageWrapper && !!header && !!main && !!aside && !!footer;

    if (pageWrapper) {
      const pageWrapperStyles = window.getComputedStyle(pageWrapper);
      result["18-2"] = pageWrapperStyles.fontSize === "0px";
    }

    if (header && footer) {
      const headerStyles = window.getComputedStyle(header);
      const footerStyles = window.getComputedStyle(footer);
      result["18-3"] =
        headerStyles.height === "80px" &&
        footerStyles.height === "80px" &&
        headerStyles.backgroundColor === "rgb(211, 211, 211)" && // lightgray
        footerStyles.backgroundColor === "rgb(169, 169, 169)"; // darkgray
    }

    if (main && aside) {
      const mainStyles = window.getComputedStyle(main);
      const asideStyles = window.getComputedStyle(aside);
      const pageWrapperRect = pageWrapper.getBoundingClientRect();
      const mainRect = main.getBoundingClientRect();
      const asideRect = aside.getBoundingClientRect();

      const mainWidthPercentage = Math.round((mainRect.width / pageWrapperRect.width) * 100);
      const asideWidthPercentage = Math.round((asideRect.width / pageWrapperRect.width) * 100);

      result["18-4"] = mainWidthPercentage === 70 && mainStyles.height === "50px" && asideWidthPercentage === 30 && asideStyles.height === "50px" && mainStyles.backgroundColor !== asideStyles.backgroundColor;
      result["18-5"] = mainStyles.display === "inline-block" && asideStyles.display === "inline-block";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskDivCombinationsTestNames = {
  ["1-1"]: {
    en: "Checking if outermost <div> exists",
  },
  ["1-2"]: {
    en: "Checking if first child <div> exists with correct text '111111'",
  },
  ["1-3"]: {
    en: "Checking if second child <div> exists and contains nested <div> elements",
  },
  ["1-4"]: {
    en: "Checking if nested <div> exists with correct text '222222'",
  },
  ["1-5"]: {
    en: "Checking if nested <div> exists with correct text '333333'",
  },
  ["1-6"]: {
    en: "Checking if third child <div> exists and contains nested <div> elements",
  },
  ["1-7"]: {
    en: "Checking if nested <div> exists with correct text '444444'",
  },
  ["1-8"]: {
    en: "Checking if nested <div> exists with correct text '555555'",
  },
};

const taskDivCombinations = () => {
  const result = {
    ["1-1"]: false,
    ["1-2"]: false,
    ["1-3"]: false,
    ["1-4"]: false,
    ["1-5"]: false,
    ["1-6"]: false,
    ["1-7"]: false,
    ["1-8"]: false,
  };

  try {
    const outerDiv = document.querySelector("div");
    result["1-1"] = !!outerDiv;

    if (outerDiv) {
      const firstChildDiv = outerDiv.children[0];
      const secondChildDiv = outerDiv.children[1];
      result["1-2"] = firstChildDiv && firstChildDiv.children[0].textContent.trim() === "111111";
      result["1-3"] = firstChildDiv && firstChildDiv.children[1];

      if (firstChildDiv && firstChildDiv.children[1]) {
        const nestedDiv1 = firstChildDiv.children[1].children[0];
        const nestedDiv2 = firstChildDiv.children[1].children[1];
        result["1-4"] = nestedDiv1 && nestedDiv1.textContent.trim() === "222222";
        result["1-5"] = nestedDiv2 && nestedDiv2.textContent.trim() === "333333";
      }

      result["1-6"] = secondChildDiv;

      if (secondChildDiv) {
        const nestedDiv3 = secondChildDiv.children[0];
        const nestedDiv4 = secondChildDiv.children[1];
        result["1-7"] = nestedDiv3 && nestedDiv3.textContent.trim() === "444444";
        result["1-8"] = nestedDiv4 && nestedDiv4.textContent.trim() === "555555";
      }
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const taskDivAndSpanCombinationsTestNames = {
  ["1-1"]: {
    en: "Checking if outermost <div> exists",
  },
  ["1-2"]: {
    en: "Checking if first child <div> exists and contains nested <div> and <span> elements",
  },
  ["1-3"]: {
    en: "Checking if nested <span> exists with correct text '111111'",
  },
  ["1-4"]: {
    en: "Checking if nested <span> exists with correct text '222222'",
  },
  ["1-5"]: {
    en: "Checking if nested <span> exists with correct text '333333'",
  },
  ["1-6"]: {
    en: "Checking if second nested <div> exists with correct text '444444'",
  },
  ["1-7"]: {
    en: "Checking if second child <div> exists and contains nested <div> and <span> elements",
  },
  ["1-8"]: {
    en: "Checking if nested <div> exists with correct text '555555'",
  },
  ["1-9"]: {
    en: "Checking if nested <span> exists with correct text '666666'",
  },
  ["1-10"]: {
    en: "Checking if nested <span> exists with correct text '777777'",
  },
};

const taskDivAndSpanCombinations = () => {
  const result = {
    ["1-1"]: false,
    ["1-2"]: false,
    ["1-3"]: false,
    ["1-4"]: false,
    ["1-5"]: false,
    ["1-6"]: false,
    ["1-7"]: false,
    ["1-8"]: false,
    ["1-9"]: false,
    ["1-10"]: false,
  };

  try {
    const outerDiv = document.querySelector("div");
    result["1-1"] = !!outerDiv;

    if (outerDiv) {
      const firstChildDiv = outerDiv.children[0];
      const secondChildDiv = outerDiv.children[1];
      result["1-2"] = firstChildDiv && firstChildDiv.children[0] && firstChildDiv.children[0].querySelectorAll("span").length === 3;

      if (firstChildDiv && firstChildDiv.children[0]) {
        const spans = firstChildDiv.children[0].querySelectorAll("span");
        result["1-3"] = spans[0] && spans[0].textContent.trim() === "111111";
        result["1-4"] = spans[1] && spans[1].textContent.trim() === "222222";
        result["1-5"] = spans[2] && spans[2].textContent.trim() === "333333";
      }

      result["1-6"] = firstChildDiv && firstChildDiv.children[1] && firstChildDiv.children[1].textContent.trim() === "444444";

      result["1-7"] = secondChildDiv && secondChildDiv.children[0] && secondChildDiv.children[1] && secondChildDiv.children[1].querySelectorAll("span").length === 2;

      if (secondChildDiv && secondChildDiv.children[1]) {
        const spans = secondChildDiv.children[1].querySelectorAll("span");
        result["1-9"] = spans[0] && spans[0].textContent.trim() === "666666";
        result["1-10"] = spans[1] && spans[1].textContent.trim() === "777777";
      }

      result["1-8"] = secondChildDiv && secondChildDiv.children[0] && secondChildDiv.children[0].textContent.trim() === "555555";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const finalTestNames = {
  ["1-1"]: {
    en: "finishing Course",
  },
};

const finalTest = () => {
  const result = {
    ["1-1"]: true,
  };

  return [
    {
      result: result["1-1"],
      name: finalTestNames["1-1"],
    },
  ];
};

export default {
  ["362abec3-81b2-4361-870c-a4e054781d73"]: {
    test: task1,
    testNames: task1TestNames,
  },
  ["46ae62bc-0db1-4e99-94af-d52d3f2cdfd5"]: { test: task3, testNames: task3TestNames },
  ["d7639a1a-f9a1-4604-84b4-6d4f64396fc2"]: { test: task4, testNames: task4TestNames },
  ["0b4f7b3e-38c3-46e9-aa57-886a427cdd72"]: { test: task5, testNames: task5TestNames },

  ["a07344b4-d6a2-47b5-bbcb-a7bb6c3a6b7c"]: { test: task7, testNames: task7TestNames },
  ["25372cee-4261-4922-9d10-7ac323b8072d"]: { test: task8, testNames: task8TestNames },
  ["04eb14f8-cf36-4e24-a0a7-48a6de26f604"]: { test: task9, testNames: task9TestNames },
  ["f47d4836-b14f-472f-aa98-175c596d92f8"]: { test: task10, testNames: task10TestNames },
  ["e7d0092c-324f-4879-8fc7-df9ddbccdbe2"]: { test: task11, testNames: task11TestNames },
  ["9c5cfae4-07a5-4302-829c-d0981558e4d5"]: { test: task12, testNames: task12TestNames },
  ["d5bbf42d-8396-4bc3-a974-5fa4a94a0f2b"]: { test: taskPracticeWithStyles, testNames: taskPracticeWithStylesTestNames },
  ["91f1beff-ccfb-4e58-a610-681d0c0cb004"]: { test: taskElementSize, testNames: testNamesElementSize },
  ["5c9cebf8-a4ba-49b4-8b99-1bd50add8fa9"]: { test: moreStylesTask, testNames: moreStylesTestNames },
  ["47eb8acf-e1d5-435c-b53c-bd90d8ce1d93"]: { test: taskFontsTests, testNames: taskFontsNames },
  ["24906b81-dc65-44fa-9cce-940935ded21d"]: { test: taskCSSPriorities, testNames: taskCSSPrioritiesTestNames },
  ["100d0335-b9fb-476f-bfe6-a0d4ee0125e0"]: { test: taskCSSBoxModel, testNames: taskCSSBoxModelTestNames },
  ["c372bb5a-f392-4b4a-b8e8-f23a42d33a2d"]: { test: taskCSSCardWithImage, testNames: taskCSSCardWithImageTestNames },
  ["ef53c5ae-1d38-45c8-b24e-69ac25bfd249"]: { test: taskCSSCardsSideBySide, testNames: taskCSSCardsSideBySideTestNames },
  ["138ebf7c-6a6f-4af2-a97a-8a365cbf3a9e"]: { test: taskSemanticHTMLStructure, testNames: taskSemanticHTMLStructureTestNames },
  ["b877c620-7def-479c-93c6-1461d8d63b1a"]: { test: taskDivCombinations, testNames: taskDivCombinationsTestNames },
  ["0c0771cb-18fa-4aac-9390-062e718948d7"]: { test: taskDivAndSpanCombinations, testNames: taskDivAndSpanCombinationsTestNames },
  codeCheckTasks: {
    ["423cfe50-9982-4ebd-9c82-b9f8e126a7c8"]: { test: task6, testNames: task6TestNames },
    ["f038e5bc-1cff-4f1f-acb6-03f24becf1ed"]: {
      test: task2,
      testNames: task2TestNames,
    },
    ["5c9cebf8-a4ba-49b4-8b99-1bd50add8fa9"]: {
      testNames: moreStylesTestNamesString,
      test: moreStylesTaskStringCheck,
    },
    ["c3c38276-8058-447a-a022-c8d20492fe25"]: {
      testNames: finalTestNames,
      test: finalTest,
    },
  },
};
