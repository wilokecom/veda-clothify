function veda_fn_1346d58f5aea49229040983346812eed () {
      
  if (window.veda_fn_1346d58f5aea49229040983346812eedCleanup === undefined) {
    window.veda_fn_1346d58f5aea49229040983346812eedCleanup = {
      listeners: [],
      push(listener) {
        this.listeners.push(listener);
      },
      cleanup() {
        this.listeners.forEach(listener => listener());
        this.listeners = [];
      }
    }
  }
  window.veda_fn_1346d58f5aea49229040983346812eedCleanup.cleanup();

      const uniqueId = "id_77c2808a-4c7f-4284-ab5d-9e70ce8c0f9a";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        function setBackground() {
  const separatorEl = container.querySelector(".separator-js");
  const sectionEls = Array.from(document.querySelectorAll('[data-id^="id_"]'));
  const currentSectionIndex = sectionEls.findIndex((el) => el === container);
  const prevSectionEl = sectionEls[currentSectionIndex - 1];
  if (prevSectionEl) {
    const { backgroundColor } = window.getComputedStyle(prevSectionEl);
    separatorEl.style.backgroundColor = backgroundColor;
  }
}
setBackground();

if (builderMode) {
  const observer = new MutationObserver(() => {
    setBackground();
  });
  observer.observe(document.querySelector("#veda-root"), {
    childList: true,
    attributes: true,
  });
  window.veda_fn_1346d58f5aea49229040983346812eedCleanup.push(() => {
    observer.disconnect();
  });
}
      });
    }
veda_fn_1346d58f5aea49229040983346812eed();