const task1 = () => {
  const elementExists = !!document.querySelector("h2");
  return {
    elementExists,
  };
}

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
    result.hrefIsGoogle = aTag.href.includes("https://www.google.com") || aTag.href.includes("https://google.com") ;
  } catch (error) {
    console.log(error);
  }
  return result;
}

export default {
  ["362abec3-81b2-4361-870c-a4e054781d73"] : task1,
  ["46ae62bc-0db1-4e99-94af-d52d3f2cdfd5"] : task2,
};