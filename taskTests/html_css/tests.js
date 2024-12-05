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
    en: "Checking if <div> tag exists",
  },
  ["4-2"]: {
    en: "Checking if <span> tag exists inside <div>",
  },
  ["4-3"]: {
    en: "Checking if <span> tag has text content",
  },
};

const task4 = () => {
  const result = {
    ["4-1"]: false,
    ["4-2"]: false,
    ["4-3"]: false,
  };

  try {
    const div = document.querySelector("div");
    result["4-1"] = !!div;

    if (div) {
      const span = div.querySelector("span");
      result["4-2"] = !!span;

      result["4-3"] = !!(span && span.textContent.trim());
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
};

const task10 = () => {
  const result = {
    ["10-1"]: false,
    ["10-2"]: false,
    ["10-3"]: false,
    ["10-4"]: false,
    ["10-5"]: false,
  };

  try {
    const nameInput = document.querySelector('input[type="text"]');
    result["10-1"] = !!nameInput && nameInput.getAttribute("placeholder") === "Enter your name";

    const emailInput = document.querySelector('input[type="email"]');
    result["10-2"] = !!emailInput && emailInput.getAttribute("placeholder") === "Enter your email";

    const passwordInput = document.querySelector('input[type="password"]');
    result["10-3"] = !!passwordInput && passwordInput.getAttribute("placeholder") === "Enter your password";

    const dateInput = document.querySelector('input[type="date"]');
    result["10-4"] = !!dateInput && dateInput.getAttribute("placeholder") === "Enter your birthdate";

    const submitButton = document.querySelector('button[type="submit"]');
    result["10-5"] = !!submitButton;
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
    en: "Checking if styles.css file contains .text-blue class with correct style",
  },
  ["11-4"]: {
    en: "Checking if paragraph has text-blue class applied",
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

    // Check if styles.css file contains .text-blue class with correct style
    if (link) {
      const styleSheet = document.styleSheets[0];
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.selectorText === ".text-blue" && rule.style.color === "blue") {
          result["11-3"] = true;
          break;
        }
      }
    }

    if (paragraph) {
      // Check if paragraph has text-blue class applied
      const paragraphStyles = window.getComputedStyle(paragraph);
      result["11-4"] = paragraphStyles.color === "rgb(0, 0, 255)";
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
  codeCheckTasks: {
    ["423cfe50-9982-4ebd-9c82-b9f8e126a7c8"]: { test: task6, testNames: task6TestNames },
    ["f038e5bc-1cff-4f1f-acb6-03f24becf1ed"]: {
      test: task2,
      testNames: task2TestNames,
    },
  },
};
