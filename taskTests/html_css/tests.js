const task1 = () => {
  const elementExists = !!document.querySelector("h2");
  return {
    elementExists,
  };
};

const task2 = () => {
  const result = {
    aTagExists: false,
    hrefAttributeExists: false,
    hrefIsGoogle: false,
  };
  try {
    const aTag = document.querySelector("a");
    result.aTagExists = !!aTag;
    result.hrefAttributeExists = aTag.href !== "";
    result.hrefIsGoogle = aTag.href.includes("https://www.google.com") || aTag.href.includes("https://google.com");
  } catch (error) {
    console.log(error);
  }
  return result;
};

const task3 = () => {
  const result = {
    divExists: false,
    spanExists: false,
    divStylesCorrect: false,
    spanStylesCorrect: false,
  };
  try {
    const div = document.querySelector("div");
    result.divExists = !!div;
    if (div) {
      const span = div.querySelector("span");
      result.spanExists = !!span;
      result.divStylesCorrect = div.style.backgroundColor === "blue" && div.style.color === "red";
      if (span) {
        result.spanStylesCorrect = span.style.backgroundColor === "blue" && span.style.color === "red";
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
}

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
}

export default {
  ["362abec3-81b2-4361-870c-a4e054781d73"]: task1,
  ["46ae62bc-0db1-4e99-94af-d52d3f2cdfd5"]: task2,
  ["d7639a1a-f9a1-4604-84b4-6d4f64396fc2"]: task3,
  ["0b4f7b3e-38c3-46e9-aa57-886a427cdd72"]: task4,
  ["423cfe50-9982-4ebd-9c82-b9f8e126a7c8"]: task5
};
