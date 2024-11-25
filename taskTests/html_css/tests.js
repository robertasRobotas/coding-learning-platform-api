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
    en: "Checking if a tag exists",
  },
  ["2-2"]: {
    en: "Checking if href attribute exists",
  },
  ["2-3"]: {
    en: "Checking if href attribute is google",
  },
};

const task2 = () => {
  const result = {
    ["2-1"]: false,
    ["2-2"]: false,
    ["2-3"]: false,
  };
  try {
    const aTag = document.querySelector("a");
    result["2-1"] = !!aTag;
    result["2-2"] = aTag.href !== "";
    result["2-3"] = aTag.href.includes("https://www.google.com") || aTag.href.includes("https://google.com");
  } catch (error) {
    console.log(error);
  }
  return result;
};

const task3TestNames = {
  divExists: {
    en: "Checking if div exists",
  },
  spanExists: {
    en: "Checking if span exists",
  },
  divStylesCorrect: {
    en: "Checking if div styles are correct",
  },
  spanStylesCorrect: {
    en: "Checking if span styles are correct",
  },
};

const task3 = () => {
  const result = {
    divExists: {
      result: false,
      testName: task3TestNames.divExists,
    },
    spanExists: {
      result: false,
      testName: task3TestNames.spanExists,
    },
    divStylesCorrect: {
      result: false,
      testName: task3TestNames.divStylesCorrect,
    },
    spanStylesCorrect: {
      result: false,
      testName: task3TestNames.spanStylesCorrect,
    },
  };

  try {
    const div = document.querySelector("div");
    result.divExists.result = !!div;
    if (div) {
      const span = div.querySelector("span");
      result.spanExists.result = !!span;
      result.divStylesCorrect.result = div.style.backgroundColor === "blue" && div.style.color === "red";
      if (span) {
        result.spanStylesCorrect.result = span.style.backgroundColor === "blue" && span.style.color === "red";
      }
    }
  } catch (error) {
    console.log(error);
  }
  return result;
};

const task4 = () => {
  const result = {
    outerDivExists: false,
    innerDivExists: false,
    spanExists: false,
    spanHasText: false,
  };
  try {
    const outerDiv = document.querySelector("div");
    result.outerDivExists = !!outerDiv;
    if (outerDiv) {
      const innerDiv = outerDiv.querySelector("div");
      result.innerDivExists = !!innerDiv;
      if (innerDiv) {
        const span = innerDiv.querySelector("span");
        result.spanExists = !!span;
        if (span) {
          result.spanHasText = span.textContent.trim().length > 0;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return result;
};

// TODO fix this shit
const task5 = () => {
  const result = {
    commentExists: false,
  };
  try {
    const divs = document.querySelectorAll("div");
    if (divs.length > 1) {
      const emailDiv = divs[1];
      if (emailDiv) {
        let previousSibling = emailDiv.previousSibling;
        // Traverse previous siblings until a comment node is found
        while (previousSibling) {
          console.log(previousSibling.nodeValue.trim());

          if (previousSibling.nodeValue.trim().toLowerCase() === "this is a comment") {
            result.commentExists = true;
            break;
          }
          previousSibling = previousSibling.previousSibling;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return result;
};

const task6 = () => {
  const result = {
    imageTagExists: false,
    imageHasCorrectSrc: false,
    imageHasSrc: false,
  };

  try {
    const image = document.querySelector("img");
    result.imageTagExists = true;
    result.imageHasSrc = image.href !== "";
    result.imageHasCorrectSrc = image.src === "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Larix_decidua_Aletschwald.jpg/1280px-Larix_decidua_Aletschwald.jpg";
  } catch (error) {
    console.log(error);
  }
  return result;
};

const task7 = () => {
  const result = {
    ulExists: false,
    olExists: false,
    ulHasCorrectItems: false,
    olHasCorrectItems: false,
  };

  try {
    const ul = document.querySelector("ul");
    result.ulExists = !!ul;
    if (ul) {
      const ulItems = ul.querySelectorAll("li");
      result.ulHasCorrectItems = ulItems.length === 3;
    }

    const ol = document.querySelector("ol");
    result.olExists = !!ol;
    if (ol) {
      const olItems = ol.querySelectorAll("li");
      result.olHasCorrectItems = olItems.length === 3;
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
  ["362abec3-81b2-4361-870c-a4e054781d73"]: { test: task1, testNames: task1TestNames },
  ["f038e5bc-1cff-4f1f-acb6-03f24becf1ed"]: { test: task2, testNames: task2TestNames },
  ["46ae62bc-0db1-4e99-94af-d52d3f2cdfd5"]: task3,
  ["d7639a1a-f9a1-4604-84b4-6d4f64396fc2"]: task4,
  ["0b4f7b3e-38c3-46e9-aa57-886a427cdd72"]: task5,
  ["423cfe50-9982-4ebd-9c82-b9f8e126a7c8"]: task6,
  ["a07344b4-d6a2-47b5-bbcb-a7bb6c3a6b7c"]: task7,
  ["25372cee-4261-4922-9d10-7ac323b8072d"]: task8,
  ["04eb14f8-cf36-4e24-a0a7-48a6de26f604"]: task9,
  ["f47d4836-b14f-472f-aa98-175c596d92f8"]: task10,
};
