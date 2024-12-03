const task1TestNames = {
  ["1-1"]: {
    en: "Checking if text let's go exists",
  },
};

const task1 = () => {
  const result = {
    "1-1": false,
  };

  result["1-1"] = /let's go/i.test(document.body.textContent);
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
};

const task2 = () => {
  const result = {
    ["2-1"]: false,
    ["2-2"]: false,
    ["2-3"]: false,
    ["2-4"]: false,
    ["2-5"]: false,
    ["2-6"]: false,
    ["2-7"]: false,
    ["2-8"]: false,
    ["2-9"]: false,
  };

  try {
    // Check if <html> root tag exists
    const htmlTag = document.querySelector("html");
    result["2-1"] = !!htmlTag;

    // Check if <head> section exists
    const headTag = document.querySelector("head");
    result["2-2"] = !!headTag;

    // Check if <body> section exists
    const bodyTag = document.querySelector("body");
    result["2-3"] = !!bodyTag;

    // Check if heading with text 'Welcome to My Page' exists
    const heading = document.querySelector("h1");
    result["2-4"] = !!heading && heading.textContent.includes("Welcome to My Page");

    // Check if paragraph with text 'This is my first webpage!' exists
    const paragraph = document.querySelector("p");
    result["2-5"] = !!paragraph && paragraph.textContent.includes("This is my first webpage");

    // Check if <head> is inside <html>
    result["2-6"] = htmlTag && headTag && htmlTag.contains(headTag);

    // Check if <body> is inside <html>
    result["2-7"] = htmlTag && bodyTag && htmlTag.contains(bodyTag);

    // Check if heading is inside <body>
    result["2-8"] = bodyTag && heading && bodyTag.contains(heading);

    // Check if paragraph is inside <body>
    result["2-9"] = bodyTag && paragraph && bodyTag.contains(paragraph);
  } catch (error) {
    console.log(error);
  }

  return result;
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
    en: "Checking if <a> tag leads to a valid website",
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
      result["3-3"] = aTag.getAttribute("href") === "https://google.com";

      // Check if <a> tag leads to a valid website
      const link = document.createElement("a");
      link.href = aTag.getAttribute("href");
      result["3-4"] = link.protocol === "https:" && link.hostname === "google.com";
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
  ["4-4"]: {
    en: "Checking if <span> has correct inline styles",
  },
};

const task4 = () => {
  const result = {
    ["4-1"]: false,
    ["4-2"]: false,
    ["4-4"]: false,
  };

  try {
    const div = document.querySelector("div");
    result["4-1"] = !!div;

    if (div) {
      const span = div.querySelector("span");
      result["4-2"] = !!span;

      if (span) {
        // Check if <span> has correct inline styles
        const spanStyles = span.getAttribute("style");
        result["4-4"] = spanStyles && (spanStyles.includes("background: blue") || spanStyles.includes("background-color: blue")) && spanStyles.includes("color: red;");
      }
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

const task8 = () => {
  const result = {
    paragraphsExist: false,
    paragraphsAreNotInsideEachPOther: false,
    firstParagraphHasBrTagInside: false,
    paragraphsAreSeperatedByHrTag: false,
  };

  try {
    const paragraphs = document.querySelectorAll("p");
    result.paragraphsExist = paragraphs.length === 2;
    if (paragraphs.length === 2) {
      result.paragraphsAreNotInsideEachPOther = paragraphs[1].parentElement.tagName !== "p" && paragraphs[0].parentElement.tagName !== "p";
      result.firstParagraphHasBrTagInside = paragraphs[0].querySelector("br") !== null;
      result.paragraphsAreSeperatedByHrTag = paragraphs[1].nextElementSibling.tagName === "HR" || paragraphs[0].nextElementSibling.tagName === "HR";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task9 = () => {
  const result = {
    formElementExists: false,
    formElementHas5InputsInside: false,
    firstInputIsText: false,
    secondInputIsEmail: false,
    thirdInputIsPassword: false,
    fourthInputIsDate: false,
    fifthInputIsSubmit: false,
    first4InputsHavePlaceholder: false,
  };

  try {
    const form = document.querySelector("form");
    result.formElementExists = !!form;
    if (form) {
      const inputs = form.querySelectorAll("input");
      result.formElementHas5InputsInside = inputs.length === 5;
      result.firstInputIsText = inputs[0].type === "text";
      result.secondInputIsEmail = inputs[1].type === "email";
      result.thirdInputIsPassword = inputs[2].type === "password";
      result.fourthInputIsDate = inputs[3].type === "date";
      result.fifthInputIsSubmit = inputs[4].type === "submit";
      result.first4InputsHavePlaceholder = inputs[0].placeholder !== "" && inputs[1].placeholder !== "" && inputs[2].placeholder !== "" && inputs[3].placeholder !== "";
    }
  } catch (error) {
    console.log(error);
  }

  return result;
};

const task10 = () => {
  const result = {};
};

export default {
  ["362abec3-81b2-4361-870c-a4e054781d73"]: {
    test: task1,
    testNames: task1TestNames,
  },
  ["f038e5bc-1cff-4f1f-acb6-03f24becf1ed"]: {
    test: task2,
    testNames: task2TestNames,
  },
  ["46ae62bc-0db1-4e99-94af-d52d3f2cdfd5"]: { test: task3, testNames: task3TestNames },
  ["d7639a1a-f9a1-4604-84b4-6d4f64396fc2"]: { test: task4, testNames: task4TestNames },
  ["0b4f7b3e-38c3-46e9-aa57-886a427cdd72"]: { test: task5, testNames: task5TestNames },

  ["a07344b4-d6a2-47b5-bbcb-a7bb6c3a6b7c"]: { test: task7, testNames: task7TestNames },
  ["25372cee-4261-4922-9d10-7ac323b8072d"]: task8,
  ["04eb14f8-cf36-4e24-a0a7-48a6de26f604"]: task9,
  ["f47d4836-b14f-472f-aa98-175c596d92f8"]: task10,

  codeCheckTasks: {
    ["423cfe50-9982-4ebd-9c82-b9f8e126a7c8"]: { test: task6, testNames: task6TestNames },
  },
};
