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
};

const task3 = () => {
  const result = {
    ["3-1"]: false,
    ["3-2"]: false,
    ["3-3"]: false,
  };

  try {
    const aTag = document.querySelector("a");
    result["3-1"] = !!aTag;

    if (aTag) {
      result["3-2"] = aTag.hasAttribute("href");
      result["3-3"] = aTag.getAttribute("href") === "https://google.com" || aTag.getAttribute("href") === "https://google.com/";
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
      result["4-3"] = childDivs.length > 1 && childDivs[1].textContent.trim() === "This is a second div.";
      result["4-4"] = spans.length > 0 && spans[0].textContent.trim() === "This is a first span.";
      result["4-5"] = spans.length > 1 && spans[1].textContent.trim() === "This is a second span.";
      result["4-6"] =
        childDivs.length > 2 &&
        childDivs[2].textContent.trim() === "This is a piece of the text inside element. And this text won't break to another line.";
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
      result["7-2"] =
        img.getAttribute("src") ===
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/1280px-Larix_decidua_Aletschwald.jpg";
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
      result["8-4"] =
        olItems.length === 3 &&
        olItems.includes("Step 1: Open browser") &&
        olItems.includes("Step 2: Search for HTML tutorials") &&
        olItems.includes("Step 3: Start learning");
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
    en: "Checking if date input field exists with correct placeholder",
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
    result["10-4"] = !!dateInput && dateInput.hasAttribute("placeholder") && dateInput.getAttribute("placeholder").trim() !== "";
    result["10-5"] = !!submitButton;

    // Check if form element exists and all inputs are inside the form
    if (form) {
      result["10-6"] =
        form.contains(nameInput) &&
        form.contains(emailInput) &&
        form.contains(passwordInput) &&
        form.contains(dateInput) &&
        form.contains(submitButton);
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
    result["12-1"] =
      !!paragraph &&
      paragraph.textContent.includes(
        "Learning css makes styling webpages much easier and more effective. It allows developers to control the layout, colors, and overall design of a webpage."
      );

    if (paragraph) {
      const paragraphStyles = window.getComputedStyle(paragraph);
      result["12-2"] = paragraphStyles.fontSize === "18px" && paragraphStyles.color === "rgb(51, 51, 51)" && paragraphStyles.textAlign === "center";

      const span = paragraph.querySelector("span.highlighted-word");
      result["12-3"] = !!span && span.textContent === "css";

      if (span) {
        const spanStyles = window.getComputedStyle(span);
        const correctSpanColor = spanStyles.color === "rgb(255, 0, 0)" || spanStyles.color === "red";
        const correntFontWeight =
          spanStyles.fontWeight === "bold" || spanStyles.fontWeight === "700" || spanStyles.fontWeight === "800" || spanStyles.fontWeight === "900";
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
      result["13-2"] =
        headingStyles.fontSize === "36px" &&
        (headingStyles.color === "rgb(0, 0, 139)" || headingStyles.color === "darkblue") &&
        headingStyles.textAlign === "center" &&
        headingStyles.textTransform === "uppercase";
    }

    const subheading = document.querySelector("h2.sub-heading");
    result["13-3"] = !!subheading && subheading.textContent.includes("Learn how CSS transforms plain text into stunning designs.");

    if (subheading) {
      const subheadingStyles = window.getComputedStyle(subheading);
      result["13-4"] =
        subheadingStyles.fontSize === "24px" &&
        (subheadingStyles.color === "rgb(0, 0, 205)" || subheadingStyles.color === "mediumblue") &&
        subheadingStyles.letterSpacing === "2px" &&
        subheadingStyles.fontStyle === "italic";
    }

    const paragraph = document.querySelector("p.styled-paragraph");
    result["13-5"] =
      !!paragraph &&
      paragraph.textContent.includes(
        "CSS is powerful, flexible, and fun to learn. With just a few commands, you can change how text looks, feels, and interacts with your webpage visitors."
      );

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
    result["8-3"] =
      pTag &&
      pTag.textContent === "This is an example paragraph styled with the Lobster font. Using custom fonts makes webpages more visually appealing.";
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
  },
};
