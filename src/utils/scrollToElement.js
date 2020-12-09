const scrollToElement = (id) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - 100,
  });
};

export default scrollToElement;
