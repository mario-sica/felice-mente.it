document.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.getElementById("bottom-nav");
  const header = document.getElementsByTagName("header")[0];
  let bottomNavHeight = bottomNav.clientHeight;
  const headerHeight = header.clientHeight;

  const screenWidth = 576;

  const threshold = 100;

  const handleScroll = () => {
    if (window.innerWidth >= screenWidth && window.scrollY > threshold) {
      bottomNav.classList.add("scroll");
      header.style.height = `${bottomNavHeight}px`;
    } else {
      bottomNav.classList.remove("scroll");
      header.style.height = `${headerHeight}px`;
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
});
