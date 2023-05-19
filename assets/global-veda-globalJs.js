function veda_fn_1c779bc53b9b49d7ae04d42a08514368 () {
      
  if (window.veda_fn_1c779bc53b9b49d7ae04d42a08514368Cleanup === undefined) {
    window.veda_fn_1c779bc53b9b49d7ae04d42a08514368Cleanup = {
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
  window.veda_fn_1c779bc53b9b49d7ae04d42a08514368Cleanup.cleanup();

      const uniqueId = "id_3df7e0dc-3b67-4bf6-8556-e493fa8a4535";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { animatedSlider } = veda.plugins;

const slider = animatedSlider(container.querySelector(".veda-animated-slider"));

window.veda_fn_1c779bc53b9b49d7ae04d42a08514368Cleanup.push(() => {
  slider.destroy();
});
      });
    }
veda_fn_1c779bc53b9b49d7ae04d42a08514368();
function veda_fn_4ce7782e30054fac806256769a0303a8 () {
        
  if (window.veda_fn_4ce7782e30054fac806256769a0303a8Cleanup === undefined) {
    window.veda_fn_4ce7782e30054fac806256769a0303a8Cleanup = {
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
  window.veda_fn_4ce7782e30054fac806256769a0303a8Cleanup.cleanup();

        const uniqueIds = ["id_9ee2783c-d72b-49ba-b321-53ccaae854c9","id_332739a8-00d2-4864-9ab7-4284e8e4c66b"];
        uniqueIds.forEach(uniqueId => {
          const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
          containers.forEach(container => {
            if (!container) {
              return;
            }
            veda.plugins.videoCover(container);
            
          });
        });
      }
veda_fn_4ce7782e30054fac806256769a0303a8();
function veda_fn_ea7af49b1b1b4fe0b0c7326798586d3e () {
      
  if (window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup === undefined) {
    window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup = {
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
  window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.cleanup();

      const uniqueId = "id_72fbfc22-b4fe-42ca-bd9b-72aef24b0a7b";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl?.style?.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_ea7af49b1b1b4fe0b0c7326798586d3eCleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
      });
    }
veda_fn_ea7af49b1b1b4fe0b0c7326798586d3e();
function veda_fn_f94c2128ae294b789adde2074c09a8bf () {
      
  if (window.veda_fn_f94c2128ae294b789adde2074c09a8bfCleanup === undefined) {
    window.veda_fn_f94c2128ae294b789adde2074c09a8bfCleanup = {
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
  window.veda_fn_f94c2128ae294b789adde2074c09a8bfCleanup.cleanup();

      const uniqueId = "id_36824ec1-ac39-4da8-a6ed-859e76fc6cfb";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { offset } = veda.utils;
const productEls = Array.from(container.querySelectorAll(".veda-product-js"));
const hotspotEls = container.querySelectorAll(".veda-hotspot-item-js");

function getId(el) {
  if (!el) {
    return "";
  }
  return el.getAttribute("data-item-id");
}

function handleContainerMousemove(event) {
  const currentTarget = event.target.classList.contains("veda-hotspot-item-js")
    ? event.target
    : event.target.closest(".veda-hotspot-item-js");
  const currentId = getId(currentTarget);

  if (
    event.target.classList.contains("veda-hotspot-item-js") ||
    event.target.closest(".veda-hotspot-item-js") ||
    event.target.classList.contains("veda-product-js") ||
    event.target.closest(".veda-product-js")
  ) {
    if (currentTarget) {
      productEls.forEach((hotspotProductEl) => {
        const id = getId(hotspotProductEl);
        if (currentId === id) {
          const top =
            offset(currentTarget).top -
            offset(container).top -
            hotspotProductEl.clientHeight;
          const left =
            offset(currentTarget).left -
            offset(container).left -
            (hotspotProductEl.clientWidth - currentTarget.clientWidth) / 2;
          hotspotProductEl.classList.remove("v:hidden", "op:0");
          hotspotProductEl.style.top = `${top}px`;
          hotspotProductEl.style.left = `${left}px`;
        }
      });
    }
  } else {
    productEls.forEach((hotspotProductEl) => {
      hotspotProductEl.classList.add("v:hidden", "op:0");
    });
  }
}

container.addEventListener("mousemove", handleContainerMousemove);

window.veda_fn_f94c2128ae294b789adde2074c09a8bfCleanup.push(() => {
  container.removeEventListener("mousemove", handleContainerMousemove);
});
      });
    }
veda_fn_f94c2128ae294b789adde2074c09a8bf();
function veda_fn_201e91bac469434bac0b3ba06377b3ec () {
      
  if (window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup === undefined) {
    window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup = {
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
  window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.cleanup();

      const uniqueId = "id_ecfdac69-8ec6-4708-968a-5d00a41947d0";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  sticky,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty(
      "background-color",
      "var(--color-primary)",
      "important"
    );
    el.style.setProperty("color", "var(--color-light-freeze)", "important");
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("background-color");
    el.style.removeProperty("color");
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          iconEl.style.display = "none";
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_201e91bac469434bac0b3ba06377b3ecCleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

const sidebarEl = container.querySelector(".sidebar-js");
sticky.subscribe((height) => {
  sidebarEl.style.top = `${height + 10}px`;
});

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
      });
    }
veda_fn_201e91bac469434bac0b3ba06377b3ec();
function veda_fn_549c0541e6584c5393d3e63ff9dacc54 () {
      
  if (window.veda_fn_549c0541e6584c5393d3e63ff9dacc54Cleanup === undefined) {
    window.veda_fn_549c0541e6584c5393d3e63ff9dacc54Cleanup = {
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
  window.veda_fn_549c0541e6584c5393d3e63ff9dacc54Cleanup.cleanup();

      const uniqueId = "id_c0f09fb2-eca3-43dc-b1dd-4714531d21ba";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { offset } = veda.utils;
const { backgroundParallax } = veda.plugins;
const videoButtonEls = container.querySelectorAll(".veda-video-button-js");
const videosEl = document.querySelector(`.veda-videos-${uniqueId}-js`);
const videoEls = videosEl.querySelectorAll(".veda-video-js");
const videoCloseEls = videosEl.querySelectorAll(
  ".veda-video-close-js, .veda-video-overlay-js"
);
const parallaxEls = container.querySelectorAll(".veda-parallax-js");

function checkPointInCircle(x, y, cx, cy, r) {
  return Math.pow(x - cx, 2) + Math.pow(y - cy, 2) <= Math.pow(r, 2);
}

if (document.querySelector(`body > .veda-videos-${uniqueId}-js`)) {
  document.querySelector(`body > .veda-videos-${uniqueId}-js`).remove();
}
document.body.appendChild(videosEl);

parallaxEls.forEach((parallaxEl) => {
  const speed = parallaxEl.getAttribute("data-parallax-speed");
  const destroy = backgroundParallax(parallaxEl, {
    speed: speed ?? 0.3,
  });
  window.veda_fn_549c0541e6584c5393d3e63ff9dacc54Cleanup.push(() => {
    destroy();
  });
});

videoButtonEls.forEach((videoButtonEl) => {
  const childEl = videoButtonEl.querySelector(".veda-video-button-child-js");

  function handleMouseMove(event) {
    const { top, left, width, height } = videoButtonEl.getBoundingClientRect();
    const cx = left + width / 2;
    const cy = top + height / 2;
    const lx = Math.max(cx - event.clientX, 0);
    const rx = Math.max(event.clientX - cx, 0);
    const ty = Math.max(cy - event.clientY, 0);
    const by = Math.max(event.clientY - cy, 0);
    const r = 150;
    const c = 1.3;

    if (checkPointInCircle(event.clientX, event.clientY, cx, cy, r)) {
      let translateX = 0;
      let translateY = 0;
      if (lx > 0) {
        translateX = lx / -c;
      } else if (rx > 0) {
        translateX = rx / c;
      }
      if (ty > 0) {
        translateY = ty / -c;
      } else if (by > 0) {
        translateY = by / c;
      }
      childEl.style.transform = `translate(${translateX}px, ${translateY}px)`;
    } else {
      childEl.style.transform = `translate(0, 0)`;
    }
  }

  function handleClick() {
    const id = videoButtonEl.getAttribute("data-button-video-id");
    const videoEl = videosEl.querySelector(`[data-video-id="${id}"`);
    if (videoEl) {
      const videoContentEl = videoEl.querySelector(".veda-video-content-js");
      const embedEl = videoEl.querySelector(".veda-embed-js");
      const src = embedEl.getAttribute("data-src");
      embedEl.innerHTML = `<iframe src="${src}" frameborder="0"></iframe>`;
      videoEl.style.visibility = "visible";
      videoContentEl.style.opacity = 1;
      videoContentEl.style.transform = "scale(1)";
    }
  }

  document.addEventListener("mousemove", handleMouseMove);
  videoButtonEl.addEventListener("click", handleClick);

  window.veda_fn_549c0541e6584c5393d3e63ff9dacc54Cleanup.push(() => {
    document.removeEventListener("mousemove", handleMouseMove);
    videoButtonEl.removeEventListener("click", handleClick);
  });
});

videoCloseEls.forEach((videoCloseEl) => {
  function handleClose() {
    const videoEl = videoCloseEl.closest(".veda-video-js");
    const videoContentEl = videoEl.querySelector(".veda-video-content-js");
    const embedEl = videoEl.querySelector(".veda-embed-js");
    videoEl.style.removeProperty("visibility");
    videoContentEl.style.removeProperty("opacity");
    videoContentEl.style.removeProperty("transform");
    embedEl.innerHTML = "";
  }

  videoCloseEl.addEventListener("click", handleClose);

  window.veda_fn_549c0541e6584c5393d3e63ff9dacc54Cleanup.push(() => {
    videoCloseEl.removeEventListener("click", handleClose);
  });
});
      });
    }
veda_fn_549c0541e6584c5393d3e63ff9dacc54();
function veda_fn_28092e68b8684e40976288e217bf7827 () {
      
  if (window.veda_fn_28092e68b8684e40976288e217bf7827Cleanup === undefined) {
    window.veda_fn_28092e68b8684e40976288e217bf7827Cleanup = {
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
  window.veda_fn_28092e68b8684e40976288e217bf7827Cleanup.cleanup();

      const uniqueId = "id_9481935f-96c1-424d-81ff-c140f8a8ff81";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const instance = veda.plugins.swiper(container);
window.veda_fn_28092e68b8684e40976288e217bf7827Cleanup.push(() => {
  instance.destroy();
})
      });
    }
veda_fn_28092e68b8684e40976288e217bf7827();function veda_fn_d2fccb18736249f79ca2efdf84364982 () {
        
  if (window.veda_fn_d2fccb18736249f79ca2efdf84364982Cleanup === undefined) {
    window.veda_fn_d2fccb18736249f79ca2efdf84364982Cleanup = {
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
  window.veda_fn_d2fccb18736249f79ca2efdf84364982Cleanup.cleanup();

        const uniqueIds = ["id_f67ac258-8c50-4a4f-9d81-80dbfc272cd2","id_08b19805-77e9-43a1-b1dc-a591ed0e35ff"];
        uniqueIds.forEach(uniqueId => {
          const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
          containers.forEach(container => {
            if (!container) {
              return;
            }
            veda.plugins.videoCover(container);
            
          });
        });
      }
veda_fn_d2fccb18736249f79ca2efdf84364982();
function veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3e () {
      
  if (window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup === undefined) {
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup = {
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
  window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.cleanup();

      const uniqueId = "id_f338ced8-d46b-4440-8c7b-2d02bc0e7454";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        let loading = false;
const {
  cart,
  productWishList,
  productCompare,
  photoSwipe,
  message,
  toggleGroup,
  collapse,
  imageZoom,
  sticky,
} = veda.plugins;
const {
  objectParse,
  imageUrl,
  getObjectAttributes,
  random,
  store,
  findAtomicCss,
} = veda.utils;
let iconType = "";

const wishListDataEl = container.querySelector(".product-card-data-js");
const sidebarEl = container.querySelector(".sidebar-js");
const productData = objectParse(wishListDataEl.textContent);

sticky.subscribe((height) => {
  sidebarEl.style.top = `${height + 10}px`;
});

let initialPickUp = false;
store.create("@visiblePickup", {
  initialState: false,
});
let unsubscribePickUp = () => {};

store.create("@@productRecentlyViewed", {
  initialState: [],
  useStorage: true,
});
let productRecentlyViewed = store.get("@@productRecentlyViewed");
if (productRecentlyViewed?.length) {
  productRecentlyViewed = productRecentlyViewed.filter(
    (item) => item !== `id:${productData.id}`
  );
  store.set("@@productRecentlyViewed", () => {
    return [`id:${productData.id}`, ...productRecentlyViewed];
  });
} else {
  store.set("@@productRecentlyViewed", () => {
    return [`id:${productData.id}`];
  });
}
class PageProduct {
  constructor() {
    this.data = productData;
    this.option = productData.selected_or_first_available_variant.options;
    this.variantId = productData.selected_or_first_available_variant.id;
    this.pickupLoading = false;
    this.toggleGroup = [];
    this.init();
  }

  async handleClickDraw() {
    if (builderMode) {
      const pickUpEl = container.querySelector(".pickup-js");
      const overlayEl = pickUpEl.querySelector(".pickup-close-js");
      overlayEl.classList.remove("pe:none", "op:0");
      initialPickUp = true;
      store.set("@visiblePickup", true);
    } else {
      initialPickUp = true;
      store.set("@visiblePickup", true);
    }
  }

  handleUpdateJsPickUp(el) {
    const btnPickUpCloseEls = el.querySelectorAll(".pickup-close-js");
    btnPickUpCloseEls.forEach((btnPickUpCloseEl) => {
      const handleClick = () => {
        store.set("@visiblePickup", false);
      };
      btnPickUpCloseEl.addEventListener("click", handleClick);
      window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
        btnPickUpCloseEl.removeEventListener("click", handleClick);
      });
    });
  }

  async updatePickUp() {
    const btnTogglePickUp = container.querySelector(".veda-pickup-toggle-js");
    if (!!btnTogglePickUp) {
      try {
        const res = await fetch(
          `${window.location.href}?variant=${this.variantId}`
        );
        const html = await res.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const pickupContainerEl = doc.querySelector(".pickup-container-js");
        const pickupInformationEl = doc.querySelector(
          ".pickup-availability-information"
        );
        const newContainerHtml = pickupContainerEl.innerHTML;
        const newInformationHtml = pickupInformationEl.innerHTML;
        const realEl = container.querySelector(".pickup-container-js");
        const realInformationEl = container.querySelector(
          ".pickup-availability-information"
        );
        realEl.innerHTML = newContainerHtml;
        realInformationEl.innerHTML = newInformationHtml;
        const testEl = document.querySelector(".pickup-draw-js");
        if (!testEl) {
          const contentPickUp = document.createElement("div");
          contentPickUp.className = "pickup-draw-js pos:relative z:9999999";
          const pickUpContentEl = container.querySelector(".pickup-js");
          contentPickUp.innerHTML = pickUpContentEl.innerHTML;
          handleUpdateJsPickUp(contentPickUp);
        } else {
          const pickUpContentEl = container.querySelector(".pickup-js");
          testEl.innerHTML = pickUpContentEl.innerHTML;
          handleUpdateJsPickUp(testEl);
        }
        const currentBtn = realInformationEl.querySelector(
          ".veda-pickup-toggle-js"
        );
        currentBtn.addEventListener("click", this.handleClickDraw);
        window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
          currentBtn.removeEventListener("click", this.handleClickDraw);
        });
        this.pickupLoading = false;
        findAtomicCss(newContainerHtml);
        findAtomicCss(newInformationHtml);
      } catch (e) {
        console.log(e);
      }
    }
  }

  handleChangeVariant(variant) {
    const btnAddCart = container.querySelector(".product-card-add-js");
    const btnBuyNow = container.querySelector(".btn-buy-now-js");
    if (!!variant) {
      btnAddCart?.classList?.remove(..."pe:none op:0.5".split(" "));
      btnBuyNow?.parentNode?.classList?.remove(..."pe:none op:0.5".split(" "));
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      availableEl?.classList?.remove("d:none");
      skuEl?.classList?.remove("d:none");
      const onSaleEl = priceEl.querySelector(".product-price-on-sale-js");
      const notSaleEl = priceEl.querySelector(".product-price-not-sale-js");
      if (priceEl.classList.contains("d:none")) {
        priceEl?.classList?.remove("d:none");
      }
      const currentSelectedIdEl = container.querySelector(
        ".veda-product-variant-select-id-js"
      );
      this.variantId = variant.id;
      currentSelectedIdEl.value = `${this.variantId}`;
      if (!builderMode && !this.pickupLoading) {
        this.pickupLoading = true;
        this.updatePickUp();
      }
      // change available
      if (!!availableEl) {
        const availableTitle = availableEl.getAttribute("data-title");
        const availableInStockText =
          availableEl.getAttribute("data-instock-text");
        const availableOutOfStockText = availableEl.getAttribute(
          "data-outofstock-text"
        );
        if (variant.available) {
          const inStockText = availableInStockText.replace(
            /\d+/g,
            `${variant.inventory_quantity}`
          );
          availableEl.textContent = `${availableTitle}: ${inStockText}`;
        } else {
          availableEl.textContent = `${availableTitle}: ${availableOutOfStockText}`;
        }
      }
      // change price
      if (!!priceEl) {
        const regularPriceValue =
          Number(`${variant.compare_at_price}`.replaceAll(/\W/g, "")) | 0;
        const salePriceValue =
          Number(`${variant.price}`.replaceAll(/\W/g, "")) | 0;
        if (regularPriceValue > salePriceValue) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!skuEl && !!variant.sku) {
        skuEl.textContent = `SKU: ${variant.sku}`;
      }
      this.data.options_with_values.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    } else {
      const availableEl = container.querySelector(".veda-product-available-js");
      const skuEl = container.querySelector(".veda-product-sku-js");
      const priceEl = container.querySelector(".product-content-price-js");
      if (!btnAddCart.classList.contains("pe:none")) {
        btnAddCart.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!!btnBuyNow && !btnBuyNow?.classList?.contains?.("pe:none")) {
        btnBuyNow.parentNode.classList.add(..."pe:none op:0.5".split(" "));
      }
      if (!availableEl.classList.contains("d:none") && !!availableEl) {
        availableEl.classList.add("d:none");
      }
      if (!!skuEl && !skuEl.classList.contains("d:none")) {
        skuEl.classList.add("d:none");
      }
      if (!priceEl.classList.contains("d:none") && !!priceEl) {
        priceEl.classList.add("d:none");
      }
      this.data.options_with_values.forEach((option) => {
        const titleEl = container.querySelector(
          `.veda-option-title-${option.position}`
        );
        titleEl.textContent = `${option.name}: ${
          this.option[option.position - 1]
        }`;
      });
    }
  }

  handleSelectOption() {
    const checkEl = container.querySelector(".veda-toggle-group-1");
    if (!this.data.has_only_default_variant && !!checkEl) {
      this.data.options_with_values.forEach((option, index) => {
        const position = Number(option.position) - 1;
        const currentActiveIndex = option.values.findIndex(
          (item) => item === this.option[index]
        );
        const el = container.querySelector(
          `.veda-toggle-group-${option.position}`
        );
        const itemDataCss = getObjectAttributes(
          el.getAttribute("data-item-css")
        );
        const itemActiveDataCss = getObjectAttributes(
          el.getAttribute("data-item-active-css")
        );
        let classItemAdd = "c:color-light bgc:color-gray9";
        let classItemRemove = "c:color-gray9 bgc:color-gray2";
        if (option.name === "Color") {
          classItemAdd = "bd:1px_solid_color-gray9";
          classItemRemove = "bd:1px_solid_color-gray3";
        }
        const currentToggle = toggleGroup(el, {
          activeIndex: Number(currentActiveIndex) || 0,
          onChange: (index) => {
            const itemEls = el.querySelectorAll(".veda-toggle-group__item");
            this.option.splice(position, 1, option.values[index]);
            const currentVariant = this.data.variants.filter(
              (variant) =>
                variant.options.length === this.option.length &&
                variant.options.every((value, index) => {
                  return value === this.option[index];
                })
            )[0];
            this.handleChangeVariant(currentVariant);
            itemEls.forEach((itemEl, currentIndex) => {
              if (index != currentIndex) {
                itemEl.setAttribute("data-css", itemDataCss["data-css"]);
              }
            });
            itemEls[index].setAttribute(
              "data-css",
              itemActiveDataCss["data-css"]
            );
          },
          addClassName: classItemAdd,
          removeClassName: classItemRemove,
        });
        currentToggle.go(Number(currentActiveIndex));
        this.toggleGroup = [...this.toggleGroup, currentToggle];
      });
    }
  }

  checkHasItem(productData, storeData) {
    return storeData?.some((item) => item.id === productData.id);
  }

  changeStatus(el, hasItem) {
    if (!el) {
      return;
    }
    /** @type HTMLElement */
    const iconEl = el.querySelector('i[class^="fa"]');
    if (!iconType) {
      iconType = Array.from(iconEl.classList).find((className) =>
        /fa\w/g.test(className)
      );
    }
    if (hasItem()) {
      el.setAttribute("data-tooltip-active", true);
      el.style.setProperty("color", "var(--color-primary)", "important");
      if (iconType.includes("fa")) {
        iconEl.classList.remove(iconType);
        iconEl.classList.add("fas");
      }
    } else {
      el.setAttribute("data-tooltip-active", false);
      el.style.removeProperty("color");
      if (iconType.includes("fa")) {
        iconEl.classList.remove("fas");
        iconEl.classList.add(iconType);
      }
    }
    return hasItem;
  }

  handleQuantity() {
    const quantityEl = container.querySelector(".veda-counter");
    if (!quantityEl) {
      return;
    }
    veda.plugins.counter(container, {
      min: 1,
      max: Infinity,
      step: 1,
      value: 1,
      onChange: (value) => {},
    });
  }

  handleWishList() {
    const btnWishListEl = container.querySelector(".wishlist-toggle-js");
    const wishListDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(wishListDataEl.textContent);
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productWishList.getData());
    this.changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      const hasItem = () =>
        this.checkHasItem(productData, productWishList.getData());
      const addText = btnWishListEl.getAttribute("data-add-text");
      const removeText = btnWishListEl.getAttribute("data-remove-text");
      productWishList.toggleWishList(productData);
      this.changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        message.success(addText);
      } else {
        message.error(removeText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
    let unsubscribeWishList = productWishList.subscribe((state) => {
      const btnWishListEl = container.querySelector(".wishlist-toggle-js");
      const wishListDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(wishListDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnWishListEl, hasItem);
    });
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      unsubscribeWishList();
    });
  }

  handleCompare() {
    const btnCompareEl = container.querySelector(".compare-toggle-js");
    const compareDataEl = container.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const ratingCustom = container.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () =>
      this.checkHasItem(productData, productCompare.getData());
    this.changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const addText = btnCompareEl.getAttribute("data-add-text");
      const removeText = btnCompareEl.getAttribute("data-remove-text");
      this.changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        addText && message.success(addText);
      } else {
        removeText && message.error(removeText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    let unsubscribeCompare = productCompare.subscribe((state) => {
      const btnCompareEl = container.querySelector(".compare-toggle-js");
      const compareDataEl = container.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const hasItem = () => this.checkHasItem(productData, state);
      this.changeStatus(btnCompareEl, hasItem);
    });
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      unsubscribeCompare();
      btnCompareEl.removeEventListener("click", handleClick);
    });
  }

  addCartSuccess(el) {
    const check = `
      <svg class="checkmark w:14px h:14px mr:10px bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
    el.insertAdjacentHTML("afterbegin", check);
    setTimeout(() => {
      const checkEl = el.querySelector(".checkmark");
      const iconEl = el.querySelector(".product-cart-add-icon-js");
      if (!!checkEl) {
        checkEl.remove();
        iconEl?.style?.removeProperty("display");
      }
      loading = false;
    }, 2000);
  }

  handleAddCart() {
    const btnAddCart = container.querySelector(".product-card-add-js");
    if (!btnAddCart) {
      return;
    }
    const handleClick = () => {
      if (!loading) {
        const iconEl = btnAddCart.querySelector(".product-cart-add-icon-js");
        const quantityEl = container.querySelector(".veda-product-quantity-js");
        loading = true;
        const spinner =
          "<div class='veda-spinner bdw:2px mr:10px' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
        btnAddCart.insertAdjacentHTML("afterbegin", spinner);
        if (iconEl) {
          iconEl.style.display = "none";
        }
        if (builderMode) {
          setTimeout(() => {
            const currentSpinner = btnAddCart.querySelector(".veda-spinner");
            currentSpinner.remove();
            this.addCartSuccess(btnAddCart);
          }, 2000);
        } else {
          const currentVariantId = container.querySelector(
            ".veda-product-variant-select-id-js"
          ).value;
          cart
            .addToCart(
              Number(currentVariantId.trim()),
              Number(quantityEl.value)
            )
            .then(() => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              this.addCartSuccess(btnAddCart);
            })
            .catch((err) => {
              const currentSpinner = btnAddCart.querySelector(".veda-spinner");
              currentSpinner.remove();
              loading = false;
              message.error(err.toString());
            });
        }
      }
    };
    btnAddCart.addEventListener("click", handleClick);
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      btnAddCart.removeEventListener("click", handleClick);
    });
  }

  handleViewing() {
    const viewingEl = container.querySelector(".quantity-viewing-js");
    if (!viewingEl) {
      return;
    }
    const min = viewingEl.getAttribute("data-min");
    const max = viewingEl.getAttribute("data-max");
    const text = viewingEl.getAttribute("data-text");
    const time = viewingEl.getAttribute("data-time");
    const intervalID = setInterval(() => {
      viewingEl.textContent = `${text.replace(
        /\d/g,
        `${random(Number(min), Number(max))}`
      )}`;
    }, Number(time) * 1000);
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      clearInterval(intervalID);
    });
  }

  handleDOM() {
    this.handleSelectOption();
    this.handleQuantity();
    this.handleWishList();
    this.handleCompare();
    this.handleAddCart();
    this.handleViewing();
    collapse(container, {
      activeClass: "collapse-active",
    });
  }

  init() {
    this.handleDOM();
  }
}

new PageProduct();
const photo = photoSwipe({
  gallery: ".veda-photo-swipe",
});
window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
  photo();
});
imageZoom(container);
async function handleClickDraw() {
  if (builderMode) {
    const pickUpEl = container.querySelector(".pickup-js");
    const overlayEl = pickUpEl.querySelector(".pickup-close-js");
    overlayEl.classList.remove("pe:none", "op:0");
    initialPickUp = true;
    store.set("@visiblePickup", true);
  } else {
    initialPickUp = true;
    store.set("@visiblePickup", true);
  }
}

function handleUpdateJsPickUp(el) {
  const btnPickUpCloseEls = el.querySelectorAll(".pickup-close-js");
  btnPickUpCloseEls.forEach((btnPickUpCloseEl) => {
    const handleClick = () => {
      store.set("@visiblePickup", false);
    };
    btnPickUpCloseEl.addEventListener("click", handleClick);
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      btnPickUpCloseEl.removeEventListener("click", handleClick);
    });
  });
}

async function renderPickUp() {
  const btnTogglePickUp = container.querySelector(".veda-pickup-toggle-js");
  if (!btnTogglePickUp) {
    return;
  }

  if (builderMode) {
    const pickUpEl = container.querySelector(".pickup-js");
    const overlayEl = pickUpEl.querySelector(".pickup-close-js");
    const unsubscribePickUp = store.subscribe("@visiblePickup", (visible) => {
      if (visible) {
        if (initialPickUp) {
          overlayEl.classList.remove("pe:none", "op:0");
          const pickUpContaierEls = pickUpEl.querySelectorAll(
            ".pickup-container-js"
          );
          pickUpContaierEls.forEach((pickUpContaier) =>
            pickUpContaier.classList.add("trf:translateX(0)!")
          );
        } else {
          initialPickUp = true;
        }
      } else {
        const pickUpContaierEls = pickUpEl.querySelectorAll(
          ".pickup-container-js"
        );
        if (!overlayEl.classList.contains("op:0")) {
          overlayEl.classList.add("op:0", "pe:none");
        }
        const id = setTimeout(() => {
          pickUpContaierEls.forEach((pickUpContaier) => {
            pickUpContaier.classList.remove("trf:translateX(0)!");
          });
          clearTimeout(id);
        }, 0);
      }
    });
    handleUpdateJsPickUp(container);
    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      unsubscribePickUp();
    });
  } else {
    const pickUpInitialized = document.querySelector(".pickup-draw-js");
    if (!pickUpInitialized) {
      const contentPickUp = document.createElement("div");
      contentPickUp.className = "pickup-draw-js pos:relative z:9999999";
      const pickUpContentEl = container.querySelector(".pickup-js");
      contentPickUp.innerHTML = pickUpContentEl.innerHTML;
      const body = document.querySelector("body");
      body.append(contentPickUp);
      unsubscribevisiblePickup = store.subscribe(
        "@visiblePickup",
        (visible) => {
          if (visible) {
            const contentPickUpEl = document.querySelector(".pickup-draw-js");
            const overlayEl = contentPickUpEl.querySelector(".pickup-close-js");
            const id = setTimeout(() => {
              overlayEl.classList.remove("op:0", "pe:none");
              const pickUpContaierEls = contentPickUpEl.querySelectorAll(
                ".pickup-container-js"
              );
              pickUpContaierEls.forEach((pickUpContaier) => {
                if (!pickUpContaier.classList.contains("trf:translateX(0)!")) {
                  pickUpContaier.classList.add("trf:translateX(0)!");
                }
              });
              clearTimeout(id);
            }, 100);
            window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            const contentPickUpEl = document.querySelector(".pickup-draw-js");
            const pickUpContaierEls = contentPickUpEl.querySelectorAll(
              ".pickup-container-js"
            );
            const overlayEl = contentPickUpEl.querySelector(".pickup-close-js");
            if (!overlayEl.classList.contains("op:0")) {
              overlayEl.classList.add("op:0", "pe:none");
            }
            pickUpContaierEls.forEach((pickUpContaier) => {
              pickUpContaier.classList.remove("trf:translateX(0)!");
            });
          }
        }
      );
      contentPickUp.innerHTML = pickUpContentEl.innerHTML;
      handleUpdateJsPickUp(contentPickUp);
    }

    window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
      unsubscribevisiblePickup();
    });
  }
  btnTogglePickUp.addEventListener("click", handleClickDraw);
  window.veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3eCleanup.push(() => {
    btnTogglePickUp.removeEventListener("click", handleClickDraw);
  });
}
renderPickUp();
      });
    }
veda_fn_3ea1ebf0dfa84ff5a723338bb424ad3e();
function veda_fn_2b7b5d0b134d43339c9855e8ee53a90a () {
      
  if (window.veda_fn_2b7b5d0b134d43339c9855e8ee53a90aCleanup === undefined) {
    window.veda_fn_2b7b5d0b134d43339c9855e8ee53a90aCleanup = {
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
  window.veda_fn_2b7b5d0b134d43339c9855e8ee53a90aCleanup.cleanup();

      const uniqueId = "id_806dfa47-2549-4861-84d7-d54b6b55b44d";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { getObjectAttributes, storage } = veda.utils;
const tabEl = container.querySelector(".veda-tabs");
const cssLink = getObjectAttributes(tabEl.getAttribute("tabs-data-css"));
const cssActiveLink = getObjectAttributes(
  tabEl.getAttribute("tabs-data-css-active")
);
const tabLinkEls = tabEl.querySelectorAll(".veda-tabs__link");
const tabCollapseEls = tabEl.querySelectorAll(".veda-tabs__collapse-button");

function handleChange(els, currentIndex) {
  els.forEach((el, index) => {
    if (index != currentIndex) {
      el.setAttribute("data-css", cssLink["data-css"]);
    }
  });
  els[currentIndex].setAttribute("data-css", cssActiveLink["data-css"]);
}

const instance = veda.plugins.tabs(tabEl, {
  activeIndex: Number(storage.getItem("current-tab-detail")) || 0,
  onChange: (currentIndex) => {
    handleChange(tabLinkEls, currentIndex);
    handleChange(tabCollapseEls, currentIndex);
    if (builderMode) {
      storage.setItem("current-tab-detail", `${currentIndex}`);
    }
  },
});
if (builderMode) {
  instance.go(Number(storage.getItem("current-tab-detail")) || 0);
}
window.veda_fn_2b7b5d0b134d43339c9855e8ee53a90aCleanup.push(() => {
  instance.destroy();
});

function handleActiveAddOn() {
  const paneItems = container.querySelectorAll(".veda-tabs__pane");
  const currentIndexTab =
    Array.from(paneItems)?.findIndex(
      (item) => !!item?.querySelector(".veda-review_widget")
    ) || 0;
  const ratingItem = document.querySelector(".veda-review_rating");
  const reviewItem = document.querySelector(".veda-review_widget");
  if (!!ratingItem && !!reviewItem) {
    function handleClickAddon() {
      const currentSection = reviewItem.closest("section");
      if (instance.index != currentIndexTab) {
        instance.go(Number(currentIndexTab));
      }
      const id = setTimeout(() => {
        if (!!currentSection) {
          window.scrollTo({
            top: currentSection.getBoundingClientRect().top,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: reviewItem.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
        clearTimeout(id);
      }, 300);
    }
    ratingItem.addEventListener("click", handleClickAddon, true);
    window.veda_fn_2b7b5d0b134d43339c9855e8ee53a90aCleanup.push(() => {
      ratingItem.removeEventListener("click", handleClickAddon, true);
    });
  }
}
handleActiveAddOn();

if (builderMode) {
  function handleMessage(event) {
    if (event.data?.type == "Veda:AddonToggle") {
      const currentSection = document.querySelector(
        `[data-id="${event.data?.payload?.sectionIds?.[0]}"`
      );
      if (!!currentSection) {
        const paneItems = container.querySelectorAll(".veda-tabs__pane");
        const currentIndexTab = Array.from(paneItems)?.findIndex(
          (item) =>
            !!item?.querySelector(`[data-id="${event.data?.payload?.id}"]`)
        );
        if (currentIndexTab) {
          if (instance.index != currentIndexTab) {
            instance.go(Number(currentIndexTab));
          }
        }
        const id = setTimeout(() => {
          const currentSection1 = document.querySelector(
            `[data-id="${event.data?.payload?.sectionIds?.[0]}"`
          );
          window.scrollTo({
            top: currentSection1.getBoundingClientRect().top,
            behavior: "smooth",
          });
          clearTimeout(id);
        }, 300);
      }
    }
  }
  window.addEventListener("message", handleMessage);
  window.veda_fn_2b7b5d0b134d43339c9855e8ee53a90aCleanup.push(() => {
    window.removeEventListener("message", handleMessage);
  });
}
      });
    }
veda_fn_2b7b5d0b134d43339c9855e8ee53a90a();
function veda_fn_b689cff2d8664629841ed896ce6cb205 () {
      
  if (window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup === undefined) {
    window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup = {
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
  window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.cleanup();

      const uniqueId = "id_e483e5f2-2ce7-47e2-837c-4d51f650bac8";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  swiper,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes, findAtomicCss } =
  veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl?.style?.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleSwiper() {
  const instance = swiper(container);
  window.veda_fn_b689cff2d8664629841ed896ce6cb205Cleanup.push(() => {
    instance.destroy();
  });
}
if (builderMode) {
  handleCompare();
  handleWishList();
  handleQuickView();
  handleCart();
  handleColor();
  handleSwiper();
} else {
  const productRecommendationsSection = container.querySelector(
    ".veda-swiper-wrapper"
  );
  const url = productRecommendationsSection.getAttribute("data-url");
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      const html = document.createElement("div");
      html.innerHTML = text;
      const recommendations = html.querySelector(".veda-swiper-wrapper");

      if (recommendations && recommendations.innerHTML.trim().length) {
        productRecommendationsSection.innerHTML = recommendations.innerHTML;
        findAtomicCss(recommendations.innerHTML);
        handleCompare();
        handleWishList();
        handleQuickView();
        handleCart();
        handleColor();
        handleSwiper();
      } else {
        container.style.display = "none";
      }
    });
}
      });
    }
veda_fn_b689cff2d8664629841ed896ce6cb205();function veda_fn_1edbe645a55a470a9a760d8a0a5c6aec () {
        
  if (window.veda_fn_1edbe645a55a470a9a760d8a0a5c6aecCleanup === undefined) {
    window.veda_fn_1edbe645a55a470a9a760d8a0a5c6aecCleanup = {
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
  window.veda_fn_1edbe645a55a470a9a760d8a0a5c6aecCleanup.cleanup();

        const uniqueIds = ["id_e5e42e51-3291-40f9-81fa-288b19bec147","id_315e7936-8649-46be-a7e4-7efc31af0a9b","id_ff7bd83c-d19b-421f-9e9f-fe2ee79aca9d"];
        uniqueIds.forEach(uniqueId => {
          const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
          containers.forEach(container => {
            if (!container) {
              return;
            }
            veda.plugins.videoCover(container);
            
          });
        });
      }
veda_fn_1edbe645a55a470a9a760d8a0a5c6aec();
function veda_fn_c24e407aa1554cbe831c975f6c87a24e () {
      
  if (window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup === undefined) {
    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup = {
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
  window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.cleanup();

      const uniqueId = "id_5aa720ba-d3b6-43be-9319-cb5cb53394ed";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  collectionsFilters,
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  modal,
  toggleGroup,
} = veda.plugins;
const {
  objectParse,
  imageUrl,
  getObjectAttributes,
  store,
  queryString,
  storage,
  findAtomicCss,
  offset,
} = veda.utils;
const { html } = veda.utils.csr;
const toggleGroupEl = container.querySelector(".veda-toggle-group");
const emptyEl = container.querySelector(".veda-empty");

let loading = false;
function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl?.style?.removeProperty("display");
    }
    loading = false;
  }, 2000);
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-primary); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (!!iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
            }, 2000);
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}
function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleLayout() {
  const LAYOUT_ACTION = `@@collectionFilters/layout/${uniqueId}`;
  const dataFilterVariant = container.getAttribute("data-filter-variant");
  const isFixed = ["top_left_fixed", "top_right_fixed"].includes(
    dataFilterVariant
  );
  store.create(LAYOUT_ACTION, {
    initialState: {
      desktop: { layout: "grid", index: isFixed ? 4 : 3 },
      tablet: { layout: "grid", index: 2 },
      mobile: { layout: "grid", index: 1 },
    },
    useStorage: !builderMode,
  });

  // cannot delete the following 4 lines of variable declarations
  const toggleGroupEl = container.querySelector(".veda-toggle-group");
  const rowGridEl = container.querySelector(".row-grid-js");
  const rowListEl = container.querySelector(".row-list-js");
  const toggleItemEls = container.querySelectorAll(".veda-toggle-group__item");

  function getDevice() {
    if (window.innerWidth > 992) {
      return "desktop";
    } else if (window.innerWidth > 768 && window.innerWidth <= 992) {
      return "tablet";
    } else {
      return "mobile";
    }
  }

  function getActiveIndex() {
    const currentTabs = store.get(LAYOUT_ACTION);
    return currentTabs[getDevice()].index;
  }

  function removeClass() {
    rowGridEl.className = "";
  }

  function addClass() {
    const currentCol = toggleItemEls[getActiveIndex()].getAttribute("data-col");
    rowGridEl.classList.add(
      "row-grid-js",
      "row",
      `row-cols-lg-${currentCol}`,
      `row-cols-md-${currentCol}`,
      `row-cols-sm-${currentCol}`,
      `row-cols-${currentCol}`
    );
  }

  function toggleLayout(type) {
    if (type === "grid") {
      rowListEl.style.display = "none";
      rowGridEl.style.display = "flex";
      removeClass();
      addClass();
    } else {
      rowListEl.style.display = "flex";
      rowGridEl.style.display = "none";
    }
  }

  const unsubscribe = store.subscribe(LAYOUT_ACTION, (state) => {
    const layout = toggleItemEls[getActiveIndex()].getAttribute("data-type");
    toggleLayout(layout);
  });

  const instance = toggleGroup(toggleGroupEl, {
    activeIndex: getActiveIndex(),
    onChange: (index) => {
      const layout = toggleItemEls[index].getAttribute("data-type");
      const desktop = getDevice() === "desktop";
      const tablet = getDevice() === "tablet";
      const mobile = getDevice() === "mobile";
      store.set(LAYOUT_ACTION, (state) => {
        return {
          desktop: desktop ? { layout, index } : state.desktop,
          tablet: tablet ? { layout, index } : state.tablet,
          mobile: mobile ? { layout, index } : state.mobile,
        };
      });
    },
    addClassName: toggleGroupEl.getAttribute("data-active-class"),
    removeClassName: toggleGroupEl.getAttribute("data-deactive-class"),
  });

  function handleResize() {
    instance.go(getActiveIndex());
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
    unsubscribe();
    window.removeEventListener("resize", handleResize);
  });
}

let modalInstance;

function handleFilter() {
  const portalEl = document.querySelector(`[data-portal-id="${uniqueId}"`);
  const filterContainer =
    container.querySelector(".filter-container-js") ||
    portalEl.querySelector(".filter-container-js");
  const btnVisibleFilter = container.querySelector(".btn-visible-filter-js");
  const btnCloseFilter =
    container.querySelector(".btn-close-filter-js") ||
    portalEl.querySelector(".btn-close-filter-js");
  const dataFilterVariant = container.getAttribute("data-filter-variant");
  const isFixed = ["top_left_fixed", "top_right_fixed"].includes(
    dataFilterVariant
  );

  if (dataFilterVariant !== "horizontal") {
    modalInstance = modal({
      trigger: [btnVisibleFilter, btnCloseFilter],
      content: filterContainer,
      portal: portalEl,
      targetScreenSize: isFixed ? Infinity : 991,
    });
    const handleClick = (event) => {
      if (
        !btnVisibleFilter.contains(event.target) &&
        !filterContainer.contains(event.target)
      ) {
        modalInstance.close();
      }
    };
    container.addEventListener("click", handleClick);
    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
      container.removeEventListener("click", handleClick);
    });

    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
      modalInstance.destroy();
    });
  }
}

function productActions() {
  const rowGridEl = container.querySelector(".row-grid-js");
  if (rowGridEl.children.length) {
    handleCompare();
    handleWishList();
    handleQuickView();
    handleCart();
    handleColor();
    handleLayout();
    handleFilter();
  }
}
productActions();

// FILTER
function setRefineMargin(url, collection = "") {
  const refineWrapperEl = container.querySelector(".filter-refine-wrapper-js");
  const searchParams = queryString.parse(url.search, true);
  const { sort_by, section_id, page, ...searchParamIgNoreSortBy } =
    searchParams;
  if (!!Object.keys(searchParamIgNoreSortBy).length || !!collection) {
    refineWrapperEl.style.marginBottom = "15px";
  } else {
    refineWrapperEl.style.removeProperty("margin-bottom");
  }
}

function scrollToTop() {
  if (container.getAttribute("data-scroll-top") === "true" && !builderMode) {
    window.scrollTo({ top: 0 });
  }
}

if (!builderMode) {
  setRefineMargin(window.location);
}

collectionsFilters(container, {
  formSelector: ".filter-form-js",
  sortBySelector: ".filter-sort-by-js",
  refineRootSelector: ".filter-refine-js",
  clearAllRootSelector: ".filter-clear-all-js",
  clearSelector: ".filter-clear-js",
  priceStep: 0.01,
  renderRefineItem({ item, onRemove }) {
    const refineScript =
      container.querySelector(".refine-data-js")?.textContent;
    const refineData = objectParse(refineScript);
    return html`
      <div
      ...${getObjectAttributes(refineData.item_design)}
      key=${item.value}
      onClick=${onRemove}
      class="pos:relative d:inline-flex ai:center w:fit-content p:3px_10px mr:5px mb:5px c:color-gray8 ff:font-primary bgc:color-light bd:1px_solid_color-gray3 cur:pointer"
    >
      <span class="c:color-gray8">${item.label}</span>
      <span
        class="ml:10px"
      >
        <i class="fal fa-times c:color-gray8 c:color-gray9!|h"></i>
      </span>
    </div>
      `;
  },
  renderClearAllButton({ onClear }) {
    const refineScript =
      container.querySelector(".refine-data-js")?.textContent;
    const refineData = objectParse(refineScript);
    const textEl = container.querySelector(".filter-clear-all-js");
    const text = textEl?.getAttribute("data-text") ?? "Clear All";
    return html`<div class="refine-clear mb:5px c:color-gray9 ff:font-primary bd:none! c:color-gray9|h! p:0! c:color-primary|h! cur:pointer td:underline trs:0.3s" 
    ...${getObjectAttributes(
      refineData.clear_design
    )} onClick=${onClear}>${text}</div>`;
  },
  async onChange({ url, collection, done }) {
    try {
      if (modalInstance) {
        modalInstance.close();
      }
      if (builderMode) {
        done();
        scrollToTop();
        setRefineMargin(url, collection);
        return;
      }
      const sectionId = container
        .querySelector("[data-shopify-id]")
        ?.getAttribute("data-shopify-id");
      const urlRequest = new URL(url.href);
      if (sectionId) {
        const searchArr = queryString.parse(urlRequest.search);
        searchArr.push(["section_id", sectionId]);
        const newSearch = queryString.stringify(searchArr);
        urlRequest.search = `?${newSearch}`;
      }
      const contentEl = container.querySelector(".content-collections-js");
      const filterCountEls = container.querySelectorAll(".veda-filter-count");
      contentEl.style.opacity = 0.6;
      const res = await fetch(urlRequest);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const newContentEl = doc.querySelector(".content-collections-js");
      const newRowGridEl = doc.querySelector(".row-grid-js");
      const newContentHtml = newContentEl.innerHTML;
      findAtomicCss(newContentHtml);

      if (newRowGridEl.children.length > 0) {
        contentEl.innerHTML = newContentHtml;
        filterCountEls.forEach((filterCountEl) => {
          const type = filterCountEl.getAttribute("data-type");
          const newFilterCountEl = doc.querySelector(
            `.veda-filter-count[data-type="${type}"]`
          );
          if (newFilterCountEl) {
            const count =
              Number(
                newFilterCountEl.textContent.trim().replace(/\(|\)/g, "")
              ) || 0;
            filterCountEl.textContent = newFilterCountEl.textContent;
            const filterLabelEl = filterCountEl.closest(".veda-filter-label");
            if (filterLabelEl) {
              const classes = [
                "op:0.5",
                "pe:none",
                "td:line-through",
                "veda-filter-field-disabled",
              ];
              if (count === 0) {
                filterLabelEl.classList.add(...classes);
              } else {
                filterLabelEl.classList.remove(...classes);
              }
            }
          }
        });
        productActions();
      } else {
        contentEl.innerHTML = emptyEl.outerHTML;
      }
      contentEl.style.opacity = 1;
      done();
      scrollToTop();
      setRefineMargin(url, collection);
    } catch (err) {
      scrollToTop();
      setRefineMargin(url, collection);
      console.log(err);
    }
  },
  onChangePrice({ min, max }) {
    const priceViewEl = container.querySelector(".filter-price-view-js");
    priceViewEl.textContent = `${min} - ${max}`;
  },
  refineListener(items) {
    const refineWrapperEl = container.querySelector(
      ".filter-refine-wrapper-js"
    );
    if (items.length) {
      refineWrapperEl.classList.add("d:block");
    } else {
      refineWrapperEl.classList.remove("d:block");
    }
  },
});

function popover() {
  const popoverBtnEls = Array.from(
    container.querySelectorAll("[data-modal-button-id]")
  );
  const portalEl = container.querySelector(".popover-wrapper-js");

  popoverBtnEls.forEach((btnEl) => {
    const id = btnEl.getAttribute("data-modal-button-id");
    const btnCloseEl = container.querySelector(
      `[data-modal-button-close-id="${id}"]`
    );
    const contentEl = container.querySelector(
      `[data-modal-content-id="${id}"]`
    );
    const popover = modal({
      visible: false,
      trigger: btnCloseEl ? [btnEl, btnCloseEl] : [btnEl],
      content: contentEl,
      portal: portalEl,
      onChange({ visible, buttonElement, modalElement }) {
        if (visible && buttonElement) {
          const { top, left } = offset(buttonElement);
          const portalTop = offset(portalEl).top;
          const portalLeft = offset(portalEl).left;
          const height = buttonElement.offsetHeight;
          modalElement.style.top = `${top + height - portalTop}px`;
          modalElement.style.left = `${left - portalLeft}px`;
        }
      },
    });

    const handleClick = (event) => {
      if (!btnEl.contains(event.target) && !contentEl.contains(event.target)) {
        popover.close();
      }
    };
    container.addEventListener("click", handleClick);
    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
      container.removeEventListener("click", handleClick);
    });

    window.veda_fn_c24e407aa1554cbe831c975f6c87a24eCleanup.push(() => {
      popover.destroy();
      portalEl.innerHTML = "";
    });
  });
}

popover();
      });
    }
veda_fn_c24e407aa1554cbe831c975f6c87a24e();function veda_fn_1819709de9114c9ea630aeca4dba1ab9 () {
      
  if (window.veda_fn_1819709de9114c9ea630aeca4dba1ab9Cleanup === undefined) {
    window.veda_fn_1819709de9114c9ea630aeca4dba1ab9Cleanup = {
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
  window.veda_fn_1819709de9114c9ea630aeca4dba1ab9Cleanup.cleanup();

      const uniqueId = "id_d5667285-4687-4529-a760-7c19abe40af0";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_1819709de9114c9ea630aeca4dba1ab9();
function veda_fn_4f1cf00383524df3978dff2cc59f081b () {
      
  if (window.veda_fn_4f1cf00383524df3978dff2cc59f081bCleanup === undefined) {
    window.veda_fn_4f1cf00383524df3978dff2cc59f081bCleanup = {
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
  window.veda_fn_4f1cf00383524df3978dff2cc59f081bCleanup.cleanup();

      const uniqueId = "id_e1baf923-7036-46e6-9464-84dcc0f59ac2";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        function handleTags() {
  const btnShowMore = container.querySelector(".btn-more-tag-check");
  if (!btnShowMore) {
    return;
  }
  const checkBoxShow = btnShowMore.querySelector("input");
  const contentShow = btnShowMore.querySelector("div");
  const showText = contentShow.getAttribute("text-show");
  const hiddenText = contentShow.getAttribute("text-show-active");
  const handleChange = () => {
    const moreTagItems = container.querySelectorAll(".more-tag-item-js");
    if (checkBoxShow.checked) {
      moreTagItems.forEach((moreTagItem) => {
        moreTagItem.style.display = "block";
        contentShow.innerHTML = `${hiddenText}<i class="fal fa-minus ml:5px"></i>`;
      });
    } else {
      moreTagItems.forEach((moreTagItem) => {
        moreTagItem.style.display = "none";
        contentShow.innerHTML = `${showText}<i class="fal fa-plus ml:5px"></i>`;
      });
    }
  };
  checkBoxShow.addEventListener("change", handleChange);
  window.veda_fn_4f1cf00383524df3978dff2cc59f081bCleanup.push(() => {
    checkBoxShow.removeEventListener("change", handleChange);
  });
}

handleTags();
      });
    }
veda_fn_4f1cf00383524df3978dff2cc59f081b();
function veda_fn_dd4293703c854f7bb8c3b270e6a17627 () {
      
  if (window.veda_fn_dd4293703c854f7bb8c3b270e6a17627Cleanup === undefined) {
    window.veda_fn_dd4293703c854f7bb8c3b270e6a17627Cleanup = {
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
  window.veda_fn_dd4293703c854f7bb8c3b270e6a17627Cleanup.cleanup();

      const uniqueId = "id_057adea2-d769-4411-86c3-6e344512c0cb";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const instance = veda.plugins.swiper(container);
window.veda_fn_dd4293703c854f7bb8c3b270e6a17627Cleanup.push(() => {
  instance.destroy();
});
      });
    }
veda_fn_dd4293703c854f7bb8c3b270e6a17627();function veda_fn_2d7dfa0b786f4b3a899fe527e6eb1c1c () {
        
  if (window.veda_fn_2d7dfa0b786f4b3a899fe527e6eb1c1cCleanup === undefined) {
    window.veda_fn_2d7dfa0b786f4b3a899fe527e6eb1c1cCleanup = {
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
  window.veda_fn_2d7dfa0b786f4b3a899fe527e6eb1c1cCleanup.cleanup();

        const uniqueIds = ["id_55ab5150-f862-41b8-9273-de9bc93ed24d","id_798fde1a-747f-4caa-9293-5037dbd898d0"];
        uniqueIds.forEach(uniqueId => {
          const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
          containers.forEach(container => {
            if (!container) {
              return;
            }
            veda.plugins.videoCover(container);
            
          });
        });
      }
veda_fn_2d7dfa0b786f4b3a899fe527e6eb1c1c();
function veda_fn_e5cd917faebb41569e4ea58b7e5fd661 () {
      
  if (window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup === undefined) {
    window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup = {
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
  window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup.cleanup();

      const uniqueId = "id_24460593-ec08-43b3-acc7-6f286930dda9";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes, csr } = veda.utils;
const { html, render } = csr;
let loading = false;
let updating = false;

const schemaEl = container.querySelector(".schema-settings-js");
const translateTextEl = container.querySelector(".translate-text-js");
const schemaData = objectParse(schemaEl.textContent);
const translateText = objectParse(translateTextEl.textContent);

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare(e) {
  const btnCompareEl = e.currentTarget;
  const card = btnCompareEl.closest(".product-card-js");
  const compareDataEl = card.querySelector(".product-card-data-js");
  const productData = objectParse(compareDataEl.textContent);
  const ratingCustom = card.querySelector(".compare-rating-js");
  const hasItem = () => checkHasItem(productData, productCompare.getData());
  changeStatus(btnCompareEl, hasItem);
  productCompare.toggleProduct({
    ...productData,
    rating: ratingCustom?.innerHTML,
  });
  const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
  const tooltipActiveText = btnCompareEl.getAttribute(
    "data-tooltip-active-text"
  );
  changeStatus(btnCompareEl, hasItem);
  if (hasItem()) {
    tooltipText && message.success(tooltipText);
  } else {
    tooltipActiveText && message.error(tooltipActiveText);
  }
}

function handleWishList(e) {
  const btnWishListEl = e.currentTarget;
  const card = btnWishListEl.closest(".product-card-js");
  const compareDataEl = card.querySelector(".product-card-data-js");
  const productData = objectParse(compareDataEl.textContent);
  const hasItem = () => checkHasItem(productData, productWishList.getData());
  changeStatus(btnWishListEl, hasItem);
  productWishList.toggleWishList(productData);
  const tooltipActiveText = btnWishListEl.getAttribute(
    "data-tooltip-active-text"
  );
  tooltipActiveText && message.error(tooltipActiveText);
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart(e) {
  const btnAddCartEl = e.currentTarget;
  const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
  const currentVariantIdEl = btnAddCartEl
    .closest(".product-card-js")
    .querySelector(".current-variant-id");
  e.preventDefault();
  if (!loading) {
    loading = true;
    const spinner =
      "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
    btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
    iconEl.style.display = "none";
    if (builderMode) {
      const id = setTimeout(() => {
        const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
        currentSpinner.remove();
        addCartSuccess(btnAddCartEl);
        clearTimeout(id);
      }, 2000);
      window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup.push(() => {
        clearTimeout(id);
      });
    } else {
      cart
        .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
        .then(() => {
          const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
          currentSpinner.remove();
          addCartSuccess(btnAddCartEl);
        })
        .catch((err) => {
          const currentSpinner = btnAddCartEl.querySelector(".veda-spinner");
          currentSpinner.remove();
          loading = false;
          message.error(err.toString());
        });
    }
  }
}

function handleQuickView(e) {
  const btnQuickViewEl = e.currentTarget;
  const card = btnQuickViewEl.closest(".product-card-js");
  const cartDataEl = card.querySelector(".product-card-data-js");
  const productData = objectParse(cartDataEl.textContent);
  productQuickView.togglePopup({
    ...productData,
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

const renderScript = (product) => {
  let price_compare = product.compare_at_price;
  if (!price_compare) {
    price_compare = 0;
  }
  const data = {
    id: product.id,
    title: product.title,
    vendor: product.vendor,
    handle: product.handle,
    available: product.available,
    content: product.content,
    description: product.description,
    featured_image: product.featured_image,
    images: product.images,
    options: product.options,
    selected_or_first_available_variant:
      product.selected_or_first_available_variant
        ? product.selected_or_first_available_variant
        : product.variants[0],
    price_max: product.price_max,
    price_min: product.price_min,
    type: product.type,
    tags: product.tags,
    variants: product.variants,
    price: product.price,
    compare_at_price: price_compare,
    options_with_values: product.options_with_values,
    url: product.url,
  };
  return html`   
    <script class="product-card-data-js" type="application/json">
      ${JSON.stringify(data)}
    </script>
    
    <script type="application/json" class="current-variant-id">
      ${
        product.selected_or_first_available_variant
          ? product.selected_or_first_available_variant.id
          : product.variants[0]?.id
      }
    </script>
  `;
};

const renderImage = (product) => {
  let aspectRatio = 130;
  let imageRadius = "";
  if (schemaData.product_settings.aspect_ratio) {
    aspectRatio = schemaData.product_settings.aspect_ratio;
  }
  if (schemaData.product_settings.image_border_radius) {
    imageRadius = `border-radius: ${schemaData.product_settings.image_border_radius}px`;
  }
  return html`
      <div class="ov:hidden w:100%" style="${imageRadius}">
        <a
          href="${product.url}"
          style="--aspect-ratio: ${aspectRatio}"
          class="veda-image-cover pos:relative d:block trs:opacity_0.3s z:1 ${
            !!product.images[1] ? "op:0*group-hover" : ""
          }"
        >
          <img
            class="product-card-image-js veda-lazyload"
             src="${
               product?.featured_image?.src
                 ? imageUrl(product?.featured_image?.src, 10)
                 : imageUrl(product?.featured_image, 10)
             }"
            alt="${product.title}"
            data-intrinsic-width="${product.featured_image.width}"
            data-intrinsic-height="${product.featured_image.height}"
            width="${product.featured_image.width}"
            height="${product.featured_image.height}"
            loading="lazy"
            > </img>
        </a>
        ${
          !!product.images[1] &&
          html`
            <a
            href="${product.url}"
            class="veda-image-cover pos:absolute t:0 l:-100000px w:100% z:9 op:0 trs:opacity_0.4s,left_0s_0.4s trs:opacity_0.4s,left_0s_0s*group-hover op:1*group-hover l:0*group-hover"
            style="--aspect-ratio:${aspectRatio}"
            >
              <img
                class="veda-lazyload"
                src="${
                  product.images[1]?.src
                    ? imageUrl(product.images[1]?.src, 10)
                    : imageUrl(product.images[1], 10)
                }"
                alt="${product.title}"
                data-intrinsic-width="${product.images[1].width}"
                data-intrinsic-height="${product.images[1].height}"
                width="${product.images[1].width}"
                height="${product.images[1].height}"
                loading="lazy"
              ></img>
            </a>
          `
        }
      </div>
  `;
};

const renderProductSale = (product) => {
  const saleCss = schemaData.sale?.design?.css
    ? getObjectAttributes(schemaData.sale.design.css)["data-css"]
    : "";
  let regularPrice = 0,
    salePrice = 0;

  if (!!product.compare_at_price && product.compare_at_price > product.price) {
    regularPrice =
      Number(`${product.compare_at_price}`.replaceAll(/\W/g, "")) | 0;
    salePrice = Number(`${product.price}`.replaceAll(/\W/g, "")) | 0;
  }
  return (
    !!product.compare_at_price &&
    regularPrice > salePrice &&
    schemaData.sale.enable &&
    html`
      <div
        class="p:3px_10px bdrs:3px bgc:#eb4747 lh:normal fz:12px ff:font-secondary tt:uppercase lts:1px c:color-light-freeze"
        data-css="${saleCss}">
        -${Math.ceil(100 - (salePrice / regularPrice) * 100)}%
      </div>
    `
  );
};

const renderProductNew = (product) => {
  const productDate = new Date(product.published_at);
  const date = (Date.now() - productDate) / 68400000;
  const isNew = 10 > date;
  const newCss = schemaData.new.design?.css
    ? getObjectAttributes(schemaData.new.design.css)["data-css"]
    : "";
  return (
    isNew &&
    !!schemaData.new.enable &&
    html`
      <div
        class="p:3px_10px bdrs:3px bgc:#17c478 lh:normal fz:12px ff:font-secondary tt:uppercase lts:1px c:color-light-freeze mb:5px"
        data-css="${newCss}"
      >
        ${translateText.new_text}
      </div>
    `
  );
};

const renderSoldOut = (product) => {
  let isSoldOut = true;
  let poiterEvent = "";
  let variant = product.selected_or_first_available_variant
    ? product.selected_or_first_available_variant
    : product.variants[0];
  if (variant.available) {
    isSoldOut = false;
  }
  if (builderMode) {
    poiterEvent = "";
  } else {
    poiterEvent = "pe:none";
  }
  const soldOutCss = schemaData.sold_out?.design?.css
    ? getObjectAttributes(schemaData.sold_out.design.css)["data-css"]
    : "";
  return (
    isSoldOut &&
    schemaData.sold_out.enable &&
    html`
    <div
      class="sold-out-js pos:absolute t:50% l:0 p:pfs(5px,20px) w:100% h:fit-content trf:translateY(-50%) bg:transparent!*span z:10 ${poiterEvent}"
    >
      <div
        class="pos:absolute t:0 l:0 w:100% h:100% bgc:color-gray9 op:0.4 z:-1"
        data-css="${soldOutCss}"
      ></div>
      <span
        class="fz:pfs(13px,20px) fw:500 c:color-light"
        style="background: transparent !important; background-color: transparent !important"
        data-css="${soldOutCss}"
      >
        ${translateText.sold_out}
      </span>
    </div>
  `
  );
};

const renderAction = (product) => {
  const quickViewCss = schemaData.quick_view.design?.css
    ? getObjectAttributes(schemaData.quick_view.design.css)["data-css"]
    : "";
  const cartCss = schemaData.add_to_cart.design?.css
    ? getObjectAttributes(schemaData.add_to_cart.design.css)["data-css"]
    : "";
  const wishlistCss = schemaData.wish_list_action?.design?.css
    ? getObjectAttributes(schemaData.wish_list_action.design.css)["data-css"]
    : "";
  const compareCss = schemaData.compare_action.design?.css
    ? getObjectAttributes(schemaData.compare_action.design.css)["data-css"]
    : "";
  return html`
    <div class="pos:absolute l:0 b:0 r:0 z:12 h:50px m:auto ov:hidden ov:visible|h">
      <div class="pos:absolute l:10px b:10px b:-5px@md r:10px h:30px h:38px@md d:flex cur:pointer trf:translateY(100%)@md trs:0.3s trf:translateY(0)*group-hover b:10px*group-hover">
        ${
          schemaData.quick_view.enable &&
          html`<span
            class="quickview-toggle-js mr:5px w:30px w:38px@md h:100% pos:relative fz:14px bgc:color-gray9-freeze c:color-light-freeze trs:0.3s c:color-primary|h d:flex ai:center jc:center bdrs:4px|be fz:12px|be"
            data-tooltip-position="top"
            data-tooltip-active="false"
            data-tooltip-text="${translateText.quickview_text}"
            data-css="${quickViewCss}"
            onClick=${handleQuickView}
          >
            <i class="far fa-eye"></i>
          </span>`
        }
        ${html`
            <span
              class="product-card-add-js lines-1 w:30px@+md flx:1@md h:100% pos:relative fz:14px ff:font-secondary bgc:color-gray9-freeze c:color-light-freeze trs:0.3s c:color-primary|h d:flex ai:center jc:center us:none"
              data-cart-success-text="${translateText.add_to_cart_text}"
              data-tooltip-position="top"
              data-tooltip-text="${translateText.add_to_cart_text}"
              data-css="${cartCss}"
              onClick=${handleCart}
            >
              <div class="product-cart-add-icon-js mr:10px@md"><i class="far fa-shopping-cart"></i></div>
              <span class="d:none@+md">${translateText.add_to_cart_text}</span>
            </span>
          `}
      </div>
    </div>
    <div class="pos:absolute t:0 r:0 b:0 z:12 w:44px m:auto ov:hidden ov:visible|h">
      <div class="pos:absolute r:5px r:-5px@md t:50% w:34px d:flex fld:column ai:center cur:pointer trf:translate(100%,-50%)@md trs:0.3s trf:translate(0,-50%)*group-hover r:10px*group-hover">
        ${
          schemaData.wish_list_action.enable &&
          html`
            <span
              class="wishlist-toggle-js mb:8px w:34px h:34px pos:relative fz:14px bdrs:50% bgc:color-light c:color-gray9 trs:0.3s c:color-primary|h d:flex ai:center jc:center bdrs:4px|be fz:12px|be"
              data-tooltip-text="${translateText.add_wish_list}"
              data-tooltip-active-text="${translateText.remove_wish_list}"
              data-tooltip-position="left"
              data-tooltip-active="${checkHasItem(
                product,
                productWishList.getData()
              )}"
              data-css="${wishlistCss}"
              onClick=${handleWishList}
              style="${
                checkHasItem(product, productWishList.getData())
                  ? "color:var(--color-primary)"
                  : ""
              }"
            >
              <i class="fas fa-heart"></i>
            </span>
          `
        }
        ${
          schemaData.compare_action.enable &&
          html`
            <span
              class="compare-toggle-js w:34px h:34px pos:relative fz:14px bdrs:50% bgc:color-light c:color-gray9 trs:0.3s c:color-primary|h d:flex ai:center jc:center bdrs:4px|be fz:12px|be"
              component="compare_action"
              data-tooltip-position="left"
              data-tooltip-active="${checkHasItem(
                product,
                productCompare.getData()
              )}"
              data-tooltip-text="${translateText.add_compare}"
              data-tooltip-active-text="${translateText.remove_compare}"
              data-css="${compareCss}"
              onClick=${handleCompare}
              style="${
                checkHasItem(product, productCompare.getData())
                  ? "color:var(--color-primary)"
                  : ""
              }"
            >
              <i class="fas fa-repeat-alt"></i>
            </span>
          `
        }
      </div>
    </div>
  `;
};

const renderContent = (product) => {
  return html`
    <div class="w:100% d:flex fld:column pt:10px"
      style="text-align: ${schemaData.product_settings.align}"
    >
      ${
        schemaData.product_settings.enable_vendor &&
        html`
        <div style="order:${schemaData.product_settings.sortable.vendor}">
          <a
            class="d:block fz:12px ff:font-secondary c:color-gray7 trs:0.3s"
            data-css="${
              schemaData.product_settings?.vendor_design?.css
                ? getObjectAttributes(
                    schemaData.product_settings.vendor_design.css
                  )["data-css"]
                : ""
            }"
            href="/collections/vendors?q=${product.vendor}"
          >
            ${product.vendor}
          </a>
        </div>
      `
      }
      <h3 style="order:${schemaData.product_settings.sortable.name}">
        <a
          class="d:block mt:5px fz:14px ff:font-secondary fw:400 c:color-gray9 trs:0.3s"
          href="${product.url}"
          data-css="${
            schemaData.product_settings?.name_design?.css
              ? getObjectAttributes(
                  schemaData.product_settings.name_design.css
                )["data-css"]
              : ""
          }"
        >
          ${product.title}
        </a>
      </h3>
      <div style="order:${schemaData.product_settings.sortable.price}">
        ${
          product.compare_at_price > product.price
            ? html`
            <div class="product-content-price-js d:inline-flex mt:5px">
              <div class="product-price-on-sale-js">
                <ins
                  class="fw:400 ff:font-secondary fz:18px c:color-primary td:none mr:5px"
                  data-css="${
                    schemaData.product_settings?.sale_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.sale_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.price}
                </ins>
                <del
                  class="fw:400 ff:font-secondary fz:16px c:color-gray6"
                  data-css="${
                    schemaData.product_settings?.regular_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.regular_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.compare_at_price}
                </del>
              </div>
              <ins
                class="fw:400 ff:font-secondary fz:18px c:color-primary td:none product-price-not-sale-js d:none"
                data-css="${
                  schemaData.product_settings?.regular_price_design?.css
                    ? getObjectAttributes(
                        schemaData.product_settings.regular_price_design.css
                      )["data-css"]
                    : ""
                }"
              >
              </ins>
            </div>
          `
            : html`
             <div class="product-content-price-js d:inline-flex mt:5px">
              <div class="product-price-on-sale-js d:none">
                <ins
                  class="fw:400 ff:font-secondary fz:18px c:color-primary td:none mr:5px"
                  data-css="${
                    schemaData.product_settings?.sale_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.sale_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.price}
                </ins>
                <del
                  class="fw:400 ff:font-secondary fz:16px c:color-gray6"
                  data-css="${
                    schemaData.product_settings?.regular_price_design?.css
                      ? getObjectAttributes(
                          schemaData.product_settings.regular_price_design.css
                        )["data-css"]
                      : ""
                  }"
                >
                  ${product.compare_at_price}
                </del>
              </div>
              <ins
                class="fw:400 ff:font-secondary fz:18px c:color-primary td:none product-price-not-sale-js"
                data-css="${
                  schemaData.product_settings?.regular_price_design?.css
                    ? getObjectAttributes(
                        schemaData.product_settings.regular_price_design.css
                      )["data-css"]
                    : ""
                }"
              >
              ${product.price}
              </ins>
            </div>
          `
        }
      </div>
      ${
        schemaData.product_settings.enable_color &&
        html`<div style="order:${schemaData.product_settings.sortable.color}">
        <div class="product-card-colors-js d:flex mt:8px mt:0|e ml:-2px mr:-2px" style="${
          schemaData.product_settings.align == "center"
            ? "justify-content:center"
            : schemaData.product_settings.align == "right"
            ? "justify-content:flex-end"
            : ""
        }"></div>
      </div>`
      }
    </div>
  `;
};

function initAction() {
  productQuickView.customQuickView(translateText);
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const wrapper = container.querySelector(".veda-wishlist-wrapper");
    productWishList.renderWishList(wrapper);
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
    handleColor();
  });
  window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup.push(() => {
    unsubscribeCompare();
    unsubscribeWishList();
  });

  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
}

const wrapper = container.querySelector(".veda-wishlist-wrapper");
veda.plugins.productWishList.customWishList({
  renderProduct: (product, index) => {
    return html`
      <div class="col" key="${product.id}">
        <div
          class="product-card-js group* pos:relative d:flex fld:column ai:center ta:center mih:100% ov:hidden"
          data-css="${
            schemaData.product_settings?.content_design?.css
              ? getObjectAttributes(
                  schemaData.product_settings.content_design.css
                )["data-css"]
              : ""
          }"
          component="product_settings"
        >
          ${renderScript(product)}
          <div class="pos:absolute t:10px l:10px z:12 d:flex fld:column">
            ${renderProductNew(product)}
            ${renderProductSale(product)}
          </div>
          <div class="w:100% pos:relative">
            ${renderImage(product)}
            ${renderAction(product)}
            ${renderSoldOut(product)}
          </div>
          ${renderContent(product)}
        </div>
      </div>`;
  },
});
productWishList.renderWishList(wrapper);
initAction();
handleColor();
const unSubWishlist = productWishList.subscribe((state) => {
  if (!!state.length) {
    const emptyEl = container.querySelector(".veda-wishlist-empty-js");
    if (!emptyEl?.classList?.contains("d:none")) {
      emptyEl?.classList?.add("d:none");
    }
  } else {
    const emptyEl = container.querySelector(".veda-wishlist-empty-js");
    if (emptyEl?.classList?.contains("d:none")) {
      emptyEl?.classList?.remove("d:none");
    }
  }
});
window.veda_fn_e5cd917faebb41569e4ea58b7e5fd661Cleanup.push(() => {
  unSubWishlist();
});
if (!!productWishList.getData()?.length) {
  const emptyEl = container.querySelector(".veda-wishlist-empty-js");
  if (!emptyEl?.classList?.contains("d:none")) {
    emptyEl?.classList?.add("d:none");
  }
} else {
  const emptyEl = container.querySelector(".veda-wishlist-empty-js");
  if (emptyEl?.classList?.contains("d:none")) {
    emptyEl?.classList?.remove("d:none");
  }
}
      });
    }
veda_fn_e5cd917faebb41569e4ea58b7e5fd661();
function veda_fn_493d50a8ab6842eb88da88e929333b7e () {
      
  if (window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup === undefined) {
    window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup = {
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
  window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.cleanup();

      const uniqueId = "id_b76d56df-68f4-4004-8992-92a17a58e6e1";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  swiper,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl?.style?.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleSwiper() {
  const id = setTimeout(() => {
    const instance = swiper(container);
    const el = container.querySelector(".swiper-wrapper");
    el.style.alignItems = "stretch";
    window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
      instance.destroy();
    });
    clearTimeout(id);
  }, 0);
  window.veda_fn_493d50a8ab6842eb88da88e929333b7eCleanup.push(() => {
    clearTimeout(id);
  });
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
handleSwiper();
      });
    }
veda_fn_493d50a8ab6842eb88da88e929333b7e();function veda_fn_3288296332af4e66959f64a8908b14be () {
      
  if (window.veda_fn_3288296332af4e66959f64a8908b14beCleanup === undefined) {
    window.veda_fn_3288296332af4e66959f64a8908b14beCleanup = {
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
  window.veda_fn_3288296332af4e66959f64a8908b14beCleanup.cleanup();

      const uniqueId = "id_76ee5754-1d10-4f6d-8bce-2481fcd31555";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_3288296332af4e66959f64a8908b14be();function veda_fn_c67bc8445b234fc393f543fc09973d30 () {
      
  if (window.veda_fn_c67bc8445b234fc393f543fc09973d30Cleanup === undefined) {
    window.veda_fn_c67bc8445b234fc393f543fc09973d30Cleanup = {
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
  window.veda_fn_c67bc8445b234fc393f543fc09973d30Cleanup.cleanup();

      const uniqueId = "id_74349b3c-a97c-48a9-831a-d5cf30c2e733";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_c67bc8445b234fc393f543fc09973d30();function veda_fn_52cf3ea9108e469e8be9669ae17fc945 () {
      
  if (window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup === undefined) {
    window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup = {
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
  window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup.cleanup();

      const uniqueId = "id_be0fac9f-ebef-47a3-9b3e-8e7a38912e71";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const addressTextEl = container.querySelector(".address-delete-form-js");
const btnEditEls = container.querySelectorAll(".btn-edit-address-js");
const btnAddEls = container.querySelectorAll(".btn-add-address-js");
const btnDelEls = container.querySelectorAll(".btn-del-address-js");
let visibleAdd = false;

function setSelectorByValue(selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
}

function clearOptions(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}

function countryHandler(countryEl, provinceEl, provinceContainer) {
  var opt = countryEl.options[countryEl.selectedIndex];
  var raw = opt.getAttribute("data-provinces");
  var provinces = JSON.parse(raw);
  clearOptions(provinceEl);
  if (provinces && provinces.length == 0) {
    provinceContainer.style.display = "none";
  } else {
    for (var i = 0; i < provinces.length; i++) {
      var opt = document.createElement("option");
      opt.value = provinces[i][0];
      opt.innerHTML = provinces[i][1];
      provinceEl.appendChild(opt);
    }

    provinceContainer.style.display = "";
  }
}

function initCountry(countryEl, provinceEl, provinceContainer) {
  const value = countryEl.getAttribute("data-default");
  setSelectorByValue(countryEl, value);
  countryHandler(countryEl, provinceEl, provinceContainer);
}

function initProvince(provinceEl) {
  const value = provinceEl.getAttribute("data-default");
  if (value && provinceEl.options.length > 0) {
    setSelectorByValue(provinceEl, value);
  }
}

function countryProvinceSelector(countrySelector, provinceSelector, options) {
  const countryEl = container.querySelector(countrySelector);
  const provinceEl = container.querySelector(provinceSelector);
  const provinceContainer = container.querySelector(
    options["hideElement"] || provinceSelector
  );
  const handleChange = () => {
    countryHandler(countryEl, provinceEl, provinceContainer);
  };
  countryEl.addEventListener("change", handleChange);
  window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup.push(() => {
    countryEl.removeEventListener("change", handleChange);
  });
  initCountry(countryEl, provinceEl, provinceContainer);
  initProvince(provinceEl);
}

function handleSelectContryProvince() {
  countryProvinceSelector("#address-country-new", "#address-province-new", {
    hideElement: ".address-province-container-new",
  });
  const countrySelects = container.querySelectorAll(
    "[data-address-country-select]"
  );

  countrySelects.forEach((select) => {
    const formId = select.getAttribute("data-form-id");
    countryProvinceSelector(
      `#address-country-${formId}`,
      `#address-province-${formId}`,
      {
        hideElement: `.address-province-container-${formId}`,
      }
    );
  });
}

if (!builderMode) {
  handleSelectContryProvince();
}

btnEditEls.forEach((btnEdit) => {
  const handleClick = (event) => {
    const currentButton = event.currentTarget;
    const formEdits = container.querySelectorAll(".form-update-address-js");
    const visible = currentButton.getAttribute("data-form-active");
    const index = Number(currentButton.getAttribute("data-index"));
    if (visible == "true") {
      formEdits[index - 1].style.display = "none";
      currentButton.setAttribute("data-form-active", "false");
    } else {
      formEdits[index - 1].style.display = "block";
      currentButton.setAttribute("data-form-active", "true");
    }
  };
  btnEdit.addEventListener("click", handleClick);
  window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup.push(() => {
    btnEdit.removeEventListener("click", handleClick);
  });
});
btnAddEls.forEach((btnAdd) => {
  const handleClick = () => {
    const formAdd = container.querySelector(".form-add_address-js");
    if (visibleAdd) {
      formAdd.style.display = "none";
      visibleAdd = false;
    } else {
      formAdd.style.display = "block";
      visibleAdd = true;
    }
  };
  btnAdd.addEventListener("click", handleClick);
  window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup.push(() => {
    btnAdd.removeEventListener("click", handleClick);
  });
});

btnDelEls.forEach((btnDel) => {
  const handleClick = () => {
    const message = btnDel.getAttribute("data-confirm-message");
    confirm(message);
  };
  btnDel.addEventListener("click", handleClick);
  window.veda_fn_52cf3ea9108e469e8be9669ae17fc945Cleanup.push(() => {
    btnDel.removeEventListener("click", handleClick);
  });
});
      });
    }
veda_fn_52cf3ea9108e469e8be9669ae17fc945();function veda_fn_8ee4cfe52c0b485a996231dd1310b48e () {
      
  if (window.veda_fn_8ee4cfe52c0b485a996231dd1310b48eCleanup === undefined) {
    window.veda_fn_8ee4cfe52c0b485a996231dd1310b48eCleanup = {
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
  window.veda_fn_8ee4cfe52c0b485a996231dd1310b48eCleanup.cleanup();

      const uniqueId = "id_90e3816c-3319-455f-a48b-e9e40e7c4f37";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_8ee4cfe52c0b485a996231dd1310b48e();
function veda_fn_4c3d2f9533cf4d44afba89674dca946d () {
      
  if (window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup === undefined) {
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup = {
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
  window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.cleanup();

      const uniqueId = "id_d0512115-5a18-4cc3-a395-55204c123697";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { debounce, objectParse, store, formatMoney, storage, money } =
  veda.utils;
const { cart, replaceSectionElement, message, select, selectCountryProvince } =
  veda.plugins;
let initialSubscribeCart = false;
let renderLoadingCart = false;
let loadingCalculateShipping = false;

store.create("@@productCart", {
  initialState: {},
  useStorage: true,
});

storage.setItem("@discountCode", "");
store.create("@visibleNoteCart", {
  initialState: false,
});

store.create("@visibleShippingCart", {
  initialState: false,
});

store.create("@visibleDiscountCart", {
  initialState: false,
});

store.set("@visibleNoteCart", () => false);
store.set("@visibleShippingCart", () => false);
store.set("@visibleDiscountCart", () => false);

let unsubscribeNote = () => {};
let unsubscribeShipping = () => {};
let unsubscribeDiscount = () => {};

function handleSelectContryProvince() {
  selectCountryProvince(
    container,
    "#address-country-shipping",
    "#address-province-shipping",
    {
      hideElement: ".address-province-container-shipping",
    }
  );
}

async function updateNote(note) {
  try {
    const res = await fetch(`${window.Shopify.routes.root}cart/update.js`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: `${note}`,
      }),
    });
    if (res.status !== 200) {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

async function calculateShipping(country, state, zip) {
  try {
    const res = await fetch(
      `${window.Shopify.routes.root}cart/shipping_rates.json?shipping_address%5Bzip%5D=${zip}&shipping_address%5Bcountry%5D=${country}&shipping_address%5Bprovince%5D=${state}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function handleNote(el) {
  const btnNote = el.querySelector(".mini-cart-btn-note-js");
  const btnSaveNoteEl = el.querySelector(".mini-cart-btn-save-note-js");
  const btnCancelEls = el.querySelectorAll(".mini-cart-btn-cancel-action-js");
  const txtNoteEl = el.querySelector("textarea[name='note']");
  if (!!btnNote) {
    unsubscribeNote();
    unsubscribeNote = store.subscribe("@visibleNoteCart", (state) => {
      const noteContent = el.querySelector(".mini-cart-note-js");
      if (!state) {
        noteContent.classList.remove("d:block");
        noteContent.classList.add("d:none");
      } else {
        noteContent.classList.remove("d:none");
        noteContent.classList.add("d:block");
      }
    });
    const handleClick = () => {
      store.set("@visibleShippingCart", (state) => false);
      store.set("@visibleDiscountCart", () => false);
      store.set("@visibleNoteCart", (state) => !state);
    };
    btnNote.addEventListener("click", handleClick);
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      unsubscribeNote();
      btnNote.removeEventListener("click", handleClick);
    });
  }
  btnCancelEls.forEach((btnCancelEl) => {
    const handleClickCancel = () => {
      store.set("@visibleNoteCart", () => false);
      store.set("@visibleShippingCart", () => false);
      store.set("@visibleDiscountCart", () => false);
    };
    btnCancelEl.addEventListener("click", handleClickCancel);
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      btnCancelEl.removeEventListener("click", handleClickCancel);
    });
  });
  const handleClickSave = () => {
    store.set("@visibleNoteCart", (state) => !state);
    store.set("@visibleShippingCart", () => false);
    store.set("@visibleDiscountCart", () => false);
    if (!builderMode) {
      updateNote(txtNoteEl.value);
    }
  };
  btnSaveNoteEl.addEventListener("click", handleClickSave);
  window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
    btnSaveNoteEl.removeEventListener("click", handleClickSave);
  });
}

function renderResultShipping(calculateData, resultCaculateEl) {
  const shippingRatesResult =
    "We found {{count}} shipping rate(s) for your address";
  const noShippingRate = "Not found shipping rate";
  if (!!calculateData.shipping_rates) {
    const { shipping_rates } = calculateData;
    if (shipping_rates.length > 0) {
      resultCaculateEl.textContent = "";
      resultCaculateEl.insertAdjacentHTML(
        "afterbegin",
        `
            <div>
              ${shippingRatesResult.replace(
                "{{count}}",
                shipping_rates.length
              )} :
            </div>
            ${shipping_rates
              .map(
                (rate) => `
              <div>${rate.name}: ${money(rate.price)}</div>
            `
              )
              .join(" ")}
          `
      );
    } else {
      resultCaculateEl.innerHTML = `
        ${noShippingRate}
      `;
    }
  } else {
    resultCaculateEl.innerHTML = "";
    Object.entries(calculateData).map((error) => {
      console.log(error, "error");
      if (!!error[1][0]) {
        message.error(error[1][0]);
      }
      resultCaculateEl.insertAdjacentHTML(
        "afterbegin",
        `
          <div
            class="d:flex ai:center fz:14px p:10px m:10px_0 bgc:color-error.1 c:color-error ls:none*ul p:0*ul m:0*ul"
          >
            <span><i class="far fa-exclamation-circle mr:10px"></i></span>
            <div class="errors">${error[1][0]}</div>
          </div>
        `
      );
    });
  }
}

async function handleShipping(el) {
  const btnShipping = el.querySelector(".mini-cart-btn-shipping-js");
  const txtZipEl = el.querySelector("input[name='address[zip]']");
  const resultCaculateEl = el.querySelector(".mini-cart-shipping-value");
  const btnSubmitShippingEl = el.querySelector(
    ".mini-cart-btn-submit-shipping-js"
  );
  if (!!btnShipping) {
    unsubscribeShipping();
    unsubscribeShipping = store.subscribe("@visibleShippingCart", (state) => {
      const shippingContent = el.querySelector(".mini-cart-shipping-js");
      if (!state) {
        shippingContent.classList.remove("d:block");
        shippingContent.classList.add("d:none");
      } else {
        shippingContent.classList.remove("d:none");
        shippingContent.classList.add("d:block");
      }
    });

    const handleClickShip = () => {
      store.set("@visibleShippingCart", (state) => !state);
      store.set("@visibleNoteCart", () => false);
      store.set("@visibleDiscountCart", () => false);
    };
    btnShipping.addEventListener("click", handleClickShip);
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      unsubscribeShipping();
      btnShipping.removeEventListener("click", handleClickShip);
    });
    handleSelectContryProvince();
  }
  const handleClickSubmit = async () => {
    if (!loadingCalculateShipping) {
      loadingCalculateShipping = true;
      const countryEl = container.querySelector("#address-country-shipping");
      const provinceEl = container.querySelector("#address-province-shipping");
      let calculateData;
      const spinner =
        "<div class='veda-spinner bdw:2px mr:10px' style='--spinner-color: var(--color-secondary); --spinner-size: 14px'></div>";
      btnSubmitShippingEl.insertAdjacentHTML("afterbegin", spinner);
      if (!builderMode) {
        calculateData = await calculateShipping(
          countryEl.value,
          provinceEl.value,
          txtZipEl.value
        );
        const currentSpinner =
          btnSubmitShippingEl.querySelector(".veda-spinner");
        currentSpinner.remove();
        loadingCalculateShipping = false;
        renderResultShipping(calculateData, resultCaculateEl);
      } else {
        setTimeout(() => {
          const currentSpinner =
            btnSubmitShippingEl.querySelector(".veda-spinner");
          currentSpinner.remove();
          loadingCalculateShipping = false;
          calculateData = {
            shipping_rates: [
              {
                name: "Standard",
                presentment_name: "Standard",
                code: "Standard",
                price: "0.00",
                markup: "0.00",
                source: "shopify",
                currency: "USD",
              },
            ],
          };
          renderResultShipping(calculateData, resultCaculateEl);
        }, 1000);
      }
    }
  };
  btnSubmitShippingEl.addEventListener("click", handleClickSubmit);
  window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
    btnSubmitShippingEl.removeEventListener("click", handleClickSubmit);
  });
}

async function handleDiscount(el) {
  const btnDiscount = el.querySelector(".mini-cart-btn-discount-js");
  const btnSaveDiscountEl = el.querySelector(".mini-cart-btn-save-discount-js");
  const txtDiscountEl = el.querySelector("input[name='discount']");
  const currentCode = storage.getItem("@discountCode");
  if (!!currentCode) {
    txtDiscountEl.value = currentCode;
  }
  if (!!btnDiscount) {
    unsubscribeDiscount();
    unsubscribeDiscount = store.subscribe("@visibleDiscountCart", (state) => {
      const discountContent = el.querySelector(".mini-cart-discount-js");
      if (!state) {
        discountContent.classList.remove("d:block");
        discountContent.classList.add("d:none");
      } else {
        discountContent.classList.remove("d:none");
        discountContent.classList.add("d:block");
      }
    });
    const handleClick = () => {
      store.set("@visibleDiscountCart", (state) => !state);
      store.set("@visibleNoteCart", () => false);
      store.set("@visibleShippingCart", () => false);
    };
    btnDiscount.addEventListener("click", handleClick);
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      unsubscribeDiscount();
      btnDiscount.removeEventListener("click", handleClick);
    });
  }
  const handleClickSave = async () => {
    storage.setItem("@discountCode", txtDiscountEl.value);
    store.set("@visibleDiscountCart", (state) => !state);
  };
  btnSaveDiscountEl.addEventListener("click", handleClickSave);
  window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
    btnSaveDiscountEl.removeEventListener("click", handleClickSave);
  });
}

function onChangeQuantity() {
  return async function (event) {
    const dataId = event.target
      .closest(".veda-counter")
      .getAttribute("data-id");
    const quantityEl = event.target
      .closest(".veda-counter")
      .querySelector(".veda-counter__input");
    const quantityValue = quantityEl.value;
    if (!builderMode) {
      renderLoading();
    }
    cart.updateCart(Number(dataId), Number(quantityValue));
  };
}

function handleRemoveCartItem() {
  const removeCartEls = container.querySelectorAll(".cart-remove-item-js");
  removeCartEls.forEach((removeCartEl) => {
    const id = removeCartEl.getAttribute("data-id");
    const handleClick = async () => {
      cart.removeCart(id);
    };
    removeCartEl.addEventListener("click", handleClick);
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      removeCartEl.removeEventListener("click", handleClick);
    });
  });
}

function handleInitCounter() {
  veda.plugins.counter(container, {
    min: 0,
    max: Infinity,
    step: 1,
    value: 0,
    onChange: (value) => {},
  });

  const btnDecrementEls = container.querySelectorAll(
    ".veda-counter__decrement"
  );
  btnDecrementEls.forEach((btnDecrementEl) => {
    btnDecrementEl.addEventListener("click", debounce(onChangeQuantity()));
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      btnDecrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const btnIncrementEls = container.querySelectorAll(
    ".veda-counter__increment"
  );
  btnIncrementEls.forEach((btnIncrementEl) => {
    btnIncrementEl.addEventListener("click", debounce(onChangeQuantity()));
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      btnIncrementEl.removeEventListener("click", debounce(onChangeQuantity()));
    });
  });

  const inputCounterEls = container.querySelectorAll(".veda-counter__input");
  inputCounterEls.forEach((inputCounterEl) => {
    inputCounterEl.addEventListener("change", debounce(onChangeQuantity()));
    window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
      inputCounterEl.removeEventListener(
        "change",
        debounce(onChangeQuantity())
      );
    });
  });
}

function forceUpdate(actions) {
  return replaceSectionElement({
    selector: "[data-id='cartcontainer']",
    requestUrl: "/cart",
    ...actions,
    onSuccess() {
      actions.onSuccess?.();
      handleUpdateJsCart();
    },
    onFailure() {
      actions.onFailure?.();
    },
  });
}

function renderLoading() {
  if (!renderLoadingCart) {
    renderLoadingCart = true;
    const loadingContainer = document.createElement("div");
    loadingContainer.className = "cart-loading-container";
    loadingContainer.innerHTML = `
      <div class="pos:fixed t:0 l:0 w:100vw h:100vh z:999999">
        <div class="pos:absolute t:0 l:0 w:100% h:100% z:-1 bgc:color-gray9.4"></div>
        <div class="w:100% h:100% d:flex jc:center ai:center">
          <div class='veda-spinner' style='--spinner-color:var(--color-light);--spinner-size:30px'></div>
        </div>
      </div>
    `;
    document.body.append(loadingContainer);
  }
}

async function updateCart() {
  forceUpdate({
    onSuccess() {
      const cartLoadingEl = document.querySelector(".cart-loading-container");
      if (cartLoadingEl) {
        cartLoadingEl.remove();
      }
      renderLoadingCart = false;
      console.log("updateCart Success");
    },
    onFailure() {
      const cartLoadingEl = document.querySelector(".cart-loading-container");
      if (cartLoadingEl) {
        cartLoadingEl.remove();
      }
      renderLoadingCart = false;
      console.log("updateCart Failure");
    },
  });
}

function handleUpdateJsCart() {
  handleInitCounter();
  handleRemoveCartItem();
  handleNote(container);
  handleShipping(container);
  handleDiscount(container);
}

handleUpdateJsCart();

if (!builderMode) {
  const unSubCart = cart.subscribe(async (state) => {
    if (initialSubscribeCart) {
      renderLoading();
      await updateCart();
    } else {
      initialSubscribeCart = true;
    }
  });
  window.veda_fn_4c3d2f9533cf4d44afba89674dca946dCleanup.push(() => {
    unSubCart();
  });
}
      });
    }
veda_fn_4c3d2f9533cf4d44afba89674dca946d();
function veda_fn_d2bbd2c53b5043eea948cde7c6817569 () {
      
  if (window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup === undefined) {
    window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup = {
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
  window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.cleanup();

      const uniqueId = "id_598ef26d-2154-482a-b5cd-3e820d4229a1";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  swiper,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl?.style?.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          if (iconEl) {
            iconEl.style.display = "none";
          }
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  if (!!quickViewDataEl) {
    const quickViewData = objectParse(quickViewDataEl.textContent);
    productQuickView.customQuickView(quickViewData);
  }
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };

      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}

function handleSwiper() {
  const id = setTimeout(() => {
    const instance = swiper(container);
    const el = container.querySelector(".swiper-wrapper");
    el.style.alignItems = "stretch";
    window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
      instance.destroy();
    })
    clearTimeout(id);
  }, 0);
  window.veda_fn_d2bbd2c53b5043eea948cde7c6817569Cleanup.push(() => {
    clearTimeout(id);
  });
}

handleCompare();
handleWishList();
handleQuickView();
handleCart();
handleColor();
handleSwiper();
      });
    }
veda_fn_d2bbd2c53b5043eea948cde7c6817569();function veda_fn_05049ca4e7074357a68e185fdfc0f440 () {
        
  if (window.veda_fn_05049ca4e7074357a68e185fdfc0f440Cleanup === undefined) {
    window.veda_fn_05049ca4e7074357a68e185fdfc0f440Cleanup = {
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
  window.veda_fn_05049ca4e7074357a68e185fdfc0f440Cleanup.cleanup();

        const uniqueIds = ["id_aea1351a-fd00-4ac0-a150-56e815948bd9","id_7553dfc5-8c20-4a74-b6c8-a6586f1bf495"];
        uniqueIds.forEach(uniqueId => {
          const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
          containers.forEach(container => {
            if (!container) {
              return;
            }
            veda.plugins.videoCover(container);
            
          });
        });
      }
veda_fn_05049ca4e7074357a68e185fdfc0f440();function veda_fn_be3a35eaec6c4e8a9c44b21444c246ff () {
      
  if (window.veda_fn_be3a35eaec6c4e8a9c44b21444c246ffCleanup === undefined) {
    window.veda_fn_be3a35eaec6c4e8a9c44b21444c246ffCleanup = {
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
  window.veda_fn_be3a35eaec6c4e8a9c44b21444c246ffCleanup.cleanup();

      const uniqueId = "id_01ee64cf-c917-414e-b302-48dccf88648d";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { message } = veda.plugins;
const { objectParse } = veda.utils;

function createQRCode() {
  const qrInfortEl = container.querySelector(".qr-infor-js");
  const qrInfor = objectParse(qrInfortEl.textContent);
  if (!builderMode) {
    new QRCode(container.querySelector("#qr-code"), {
      text: `${qrInfor.qr_identifier}`,
      width: Number(qrInfor.width ?? 150),
      height: Number(qrInfor.height ?? 150),
    });
  }
}

function copyGiftCode() {
  const copyCodeDataEl = container.querySelector(".copy-code-data-js");
  const copyCodeData = objectParse(copyCodeDataEl.textContent);
  const btnCopyEl = container.querySelector(".btn-copy-gift-code-js");
  const giftCodeValueEl = container.querySelector(".gift-code-value-js");
  const handleClick = () => {
    navigator.clipboard.writeText(giftCodeValueEl.textContent);
    message.success(copyCodeData.copy_code_success);
  };
  btnCopyEl.addEventListener("click", handleClick);
  window.veda_fn_be3a35eaec6c4e8a9c44b21444c246ffCleanup.push(() => {
    btnCopyEl.removeEventListener("click", handleClick);
  });
}

function printGiftCard() {
  const btnPrintGiftCard = container.querySelector(".btn-print-gift-card-js");
  const handleClick = () => {
    var html = "<html>";
    html += container.querySelector(".print-gift-card-content-js").innerHTML;
    html += "</html>";
    var printWin = window.open(
      "",
      "",
      "width=600,height=400,toolbar=0,scrollbars=0,status=0"
    );
    printWin.document.write(html);
    printWin.document.close();
    printWin.focus();
    printWin.print();
  };
  btnPrintGiftCard.addEventListener("click", handleClick);
  window.veda_fn_be3a35eaec6c4e8a9c44b21444c246ffCleanup.push(() => {
    btnPrintGiftCard.removeEventListener("click", handleClick);
  });
}

copyGiftCode();
printGiftCard();
createQRCode();
      });
    }
veda_fn_be3a35eaec6c4e8a9c44b21444c246ff();function veda_fn_1748521398674404a2e930ed9d8a6305 () {
      
  if (window.veda_fn_1748521398674404a2e930ed9d8a6305Cleanup === undefined) {
    window.veda_fn_1748521398674404a2e930ed9d8a6305Cleanup = {
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
  window.veda_fn_1748521398674404a2e930ed9d8a6305Cleanup.cleanup();

      const uniqueId = "id_39114f7a-3f26-4a0d-8c2a-3f15fa5c6929";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const loginForm = container.querySelector(".login-form-js");
const recoverForm = container.querySelector(".recover-form-js");
const btnRecover = container.querySelector(".btn-recover-password-js");
const btnCancel = container.querySelector(".btn-recover-password-cancel-js");
const btnLoginToRecover = container.querySelector(".btn-login-to-recover-js");

function visibleLogin() {
  loginForm.style.display = "block";
  recoverForm.style.display = "none";
}

function visibleRecover() {
  loginForm.style.display = "none";
  recoverForm.style.display = "block";
}

function loadVisibleForm() {
  if (!builderMode && location.hash === "#recover") {
    visibleRecover();
  } else {
    visibleLogin();
  }
}

btnRecover.addEventListener("click", visibleLogin);
btnCancel.addEventListener("click", visibleLogin);
btnLoginToRecover.addEventListener("click", visibleRecover);
window.addEventListener("load", loadVisibleForm);
window.veda_fn_1748521398674404a2e930ed9d8a6305Cleanup.push(() => {
  btnRecover.removeEventListener("click", visibleLogin);
  btnCancel.removeEventListener("click", visibleLogin);
  btnLoginToRecover.removeEventListener("click", visibleRecover);
  window.removeEventListener("load", loadVisibleForm);
});
      });
    }
veda_fn_1748521398674404a2e930ed9d8a6305();function veda_fn_00872aa1d818498b9f8328ed3b9315e5 () {
      
  if (window.veda_fn_00872aa1d818498b9f8328ed3b9315e5Cleanup === undefined) {
    window.veda_fn_00872aa1d818498b9f8328ed3b9315e5Cleanup = {
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
  window.veda_fn_00872aa1d818498b9f8328ed3b9315e5Cleanup.cleanup();

      const uniqueId = "id_1017db53-7ca4-4816-a0b6-00f05008ba6d";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_00872aa1d818498b9f8328ed3b9315e5();function veda_fn_cb408196bdf645cda3752e6392da0cf5 () {
      
  if (window.veda_fn_cb408196bdf645cda3752e6392da0cf5Cleanup === undefined) {
    window.veda_fn_cb408196bdf645cda3752e6392da0cf5Cleanup = {
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
  window.veda_fn_cb408196bdf645cda3752e6392da0cf5Cleanup.cleanup();

      const uniqueId = "id_044aa2c8-2fe6-48a2-a712-62849014bb25";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_cb408196bdf645cda3752e6392da0cf5();function veda_fn_60b6849a1c784aadb9cf8331aed8917a () {
      
  if (window.veda_fn_60b6849a1c784aadb9cf8331aed8917aCleanup === undefined) {
    window.veda_fn_60b6849a1c784aadb9cf8331aed8917aCleanup = {
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
  window.veda_fn_60b6849a1c784aadb9cf8331aed8917aCleanup.cleanup();

      const uniqueId = "id_b5fb6ef8-49b8-406a-875d-7ad633774e3b";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const { modal } = veda.plugins;

const passwordForm = container.querySelector(".password-form-js");
const btnToggle = container.querySelector(".toggle-password-form-js");
const btnClose = container.querySelector(".password-close-js");
const overlayEl = container.querySelector(".overlay-password-js");
const isError = passwordForm.querySelector(".errors");

if (!!isError) {
  const instance = veda.plugins.modal({
    visible: true,
    trigger: [btnToggle, btnClose, overlayEl],
    content: passwordForm,
    portal: container,
  });
  window.veda_fn_60b6849a1c784aadb9cf8331aed8917aCleanup.push(() => {
    instance.destroy();
  });
} else {
  const instance = veda.plugins.modal({
    trigger: [btnToggle, btnClose, overlayEl],
    content: passwordForm,
    portal: container,
  });
  window.veda_fn_60b6849a1c784aadb9cf8331aed8917aCleanup.push(() => {
    instance.destroy();
  });
}
function initHeight() {
  const headerSection = document.querySelector(".veda-password-header-js");
  const contentSection = document.querySelector(".veda-password-content-js");
  const footerSection = document.querySelector(".veda-password-footer-js");

  let spacing = 0;

  if (!!headerSection) {
    spacing += 71;
  }
  if (!!footerSection) {
    spacing += 170;
  }

  contentSection.style.height = `calc(100vh - ${spacing}px)`;
}

if (/comp|inter/.test(document.readyState)) {
  initHeight();
} else {
  window.addEventListener("DOMContentLoaded", initHeight);
  window.veda_fn_60b6849a1c784aadb9cf8331aed8917aCleanup.push(() => {
    window.removeEventListener("DOMContentLoaded", initHeight);
  });
}
      });
    }
veda_fn_60b6849a1c784aadb9cf8331aed8917a();function veda_fn_83a8af9d0f6448d5a8fdd590cae20645 () {
      
  if (window.veda_fn_83a8af9d0f6448d5a8fdd590cae20645Cleanup === undefined) {
    window.veda_fn_83a8af9d0f6448d5a8fdd590cae20645Cleanup = {
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
  window.veda_fn_83a8af9d0f6448d5a8fdd590cae20645Cleanup.cleanup();

      const uniqueId = "id_16fc657e-aeaa-437b-afa6-010e5add27bb";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_83a8af9d0f6448d5a8fdd590cae20645();function veda_fn_17776cccfebb4cae889868c7daadc091 () {
      
  if (window.veda_fn_17776cccfebb4cae889868c7daadc091Cleanup === undefined) {
    window.veda_fn_17776cccfebb4cae889868c7daadc091Cleanup = {
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
  window.veda_fn_17776cccfebb4cae889868c7daadc091Cleanup.cleanup();

      const uniqueId = "id_53198d00-1589-4dd8-b688-f30f66386b68";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        
      });
    }
veda_fn_17776cccfebb4cae889868c7daadc091();function veda_fn_6b1f03de795d425e9288d9c100aa7183 () {
      
  if (window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup === undefined) {
    window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup = {
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
  window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.cleanup();

      const uniqueId = "id_0aafdd87-ea9b-41f2-a834-7fceecc4db0a";
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        const {
  message,
  productCompare,
  productWishList,
  productQuickView,
  productColor,
  cart,
  predictiveSearch,
} = veda.plugins;
const { objectParse, imageUrl, getObjectAttributes } = veda.utils;
let loading = false;

function checkHasItem(productData, storeData) {
  return storeData?.some((item) => item.id === productData.id);
}

let iconType = "";
function changeStatus(el, hasItem) {
  if (!el) {
    return;
  }
  /** @type HTMLElement */
  const iconEl = el.querySelector('i[class^="fa"]');
  if (!iconType) {
    iconType = Array.from(iconEl.classList).find((className) =>
      /fa\w/g.test(className)
    );
  }
  if (hasItem()) {
    el.setAttribute("data-tooltip-active", true);
    el.style.setProperty("color", "var(--color-primary)", "important");
    if (iconType.includes("fa")) {
      iconEl.classList.remove(iconType);
      iconEl.classList.add("fas");
    }
  } else {
    el.setAttribute("data-tooltip-active", false);
    el.style.removeProperty("color");
    if (iconType.includes("fa")) {
      iconEl.classList.remove("fas");
      iconEl.classList.add(iconType);
    }
  }
  return hasItem;
}

function handleCompare() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnCompareEl = card.querySelector(".compare-toggle-js");
    const ratingCustom = card.querySelector(".compare-rating-js");
    if (!btnCompareEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productCompare.getData());
    changeStatus(btnCompareEl, hasItem);
    const handleClick = () => {
      productCompare.toggleProduct({
        ...productData,
        rating: ratingCustom?.innerHTML,
      });
      const tooltipText = btnCompareEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnCompareEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnCompareEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnCompareEl.addEventListener("click", handleClick);
    window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
      btnCompareEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeCompare = productCompare.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const compareDataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(compareDataEl.textContent);
      const btnCompareEl = card.querySelector(".compare-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnCompareEl, hasItem);
    });
  });
  window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
    unsubscribeCompare();
  });
}

function handleWishList() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const compareDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(compareDataEl.textContent);
    const btnWishListEl = card.querySelector(".wishlist-toggle-js");
    if (!btnWishListEl) {
      return;
    }
    const hasItem = () => checkHasItem(productData, productWishList.getData());
    changeStatus(btnWishListEl, hasItem);
    const handleClick = () => {
      productWishList.toggleWishList(productData);
      const tooltipText = btnWishListEl.getAttribute("data-tooltip-text");
      const tooltipActiveText = btnWishListEl.getAttribute(
        "data-tooltip-active-text"
      );
      changeStatus(btnWishListEl, hasItem);
      if (hasItem()) {
        tooltipText && message.success(tooltipText);
      } else {
        tooltipActiveText && message.error(tooltipActiveText);
      }
    };
    btnWishListEl.addEventListener("click", handleClick);
    window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
      btnWishListEl.removeEventListener("click", handleClick);
    });
  });
  let unsubscribeWishList = productWishList.subscribe((state) => {
    const listCard = container.querySelectorAll(".product-card-js");
    listCard.forEach((card) => {
      const dataEl = card.querySelector(".product-card-data-js");
      const productData = objectParse(dataEl.textContent);
      const btnWishList = card.querySelector(".wishlist-toggle-js");
      const hasItem = () => checkHasItem(productData, state);
      changeStatus(btnWishList, hasItem);
    });
  });
  window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
    unsubscribeWishList();
  });
}

function addCartSuccess(el) {
  const check = `
      <svg class="checkmark w:14px h:14px mr:10px@md bdrs:50% d:block stkw:2 stk:#fff stroke-miterlimit:10 bxsh:inset_0px_0px_0px_#7ac142 anim:fill_0.4s_ease-in-out_0.4s_forwards,scale_0.3s_ease-in-out_0.9s_both" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class='checkmark__circle sd:166 stroke-dasharray:166 stkw:2 stroke-miterlimit:10 stk:#7ac142 fill:none anim:stroke_0.6s_cubic-bezier(0.65,0,0.45,1)_forwards' cx='26' cy='26' r='25' fill='none'/> 
        <path class='checkmark__check trfo:50%_50% stroke-dasharray:48 sd::48 anim:stroke_0.3s_cubic-bezier(0.65,0,0.45,1)_0.8s_forwards' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8'/>
      </svg>`;
  el.insertAdjacentHTML("afterbegin", check);
  const id = setTimeout(() => {
    const checkEl = el.querySelector(".checkmark");
    const iconEl = el.querySelector(".product-cart-add-icon-js");
    if (!!checkEl) {
      checkEl.remove();
      iconEl.style.removeProperty("display");
    }
    loading = false;
    clearTimeout(id);
  }, 2000);
  window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
    clearTimeout(id);
  });
}

function handleCart() {
  const listCard = container.querySelectorAll(".product-card-js");
  listCard.forEach((card) => {
    const btnAddCartEls = card.querySelectorAll(".product-card-add-js");
    if (!btnAddCartEls) {
      return;
    }
    btnAddCartEls.forEach((btnAddCartEl) => {
      const iconEl = btnAddCartEl.querySelector(".product-cart-add-icon-js");
      const currentVariantIdEl = btnAddCartEl
        .closest(".product-card-js")
        .querySelector(".current-variant-id");
      const handleClick = async (event) => {
        event.preventDefault();
        if (!loading) {
          loading = true;
          const spinner =
            "<div class='veda-spinner bdw:2px mr:10px@md' style='--spinner-color: var(--color-light-freeze); --spinner-size: 14px'></div>";
          btnAddCartEl.insertAdjacentHTML("afterbegin", spinner);
          iconEl.style.display = "none";
          if (builderMode) {
            const id = setTimeout(() => {
              const currentSpinner =
                btnAddCartEl.querySelector(".veda-spinner");
              currentSpinner.remove();
              addCartSuccess(btnAddCartEl);
              clearTimeout(id);
            }, 2000);
            window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
              clearTimeout(id);
            });
          } else {
            cart
              .addToCart(Number(currentVariantIdEl.textContent.trim()), 1)
              .then(() => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                addCartSuccess(btnAddCartEl);
              })
              .catch((err) => {
                const currentSpinner =
                  btnAddCartEl.querySelector(".veda-spinner");
                currentSpinner.remove();
                loading = false;
                message.error(err.toString());
              });
          }
        }
      };
      btnAddCartEl.addEventListener("click", handleClick);
      window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
        btnAddCartEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleQuickView() {
  const listCard = container.querySelectorAll(".product-card-js");
  const quickViewDataEl = container.querySelector(".quickview-data-js");
  const quickViewData = objectParse(quickViewDataEl.textContent);
  productQuickView.customQuickView(quickViewData);
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const btnQuickViewEls = card.querySelectorAll(".quickview-toggle-js");
    if (!btnQuickViewEls) {
      return;
    }
    btnQuickViewEls.forEach((btnQuickViewEl) => {
      const handleClick = () => {
        productQuickView.togglePopup({
          ...productData,
        });
      };
      btnQuickViewEl.addEventListener("click", handleClick);
      window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
        btnQuickViewEl.removeEventListener("click", handleClick);
      });
    });
  });
}

function handleColor() {
  const listCard = container.querySelectorAll(".product-card-js");
  productColor.init({
    onChange: (_color, image, currentEl, _, variant) => {
      const currentPriceEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-content-price-js");
      const currentVariantIdEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".current-variant-id");
      const soldOutEl = currentEl
        .closest(".product-card-js")
        ?.querySelector(".sold-out-js");
      if (!!currentVariantIdEl) {
        currentVariantIdEl.textContent = variant.id;
      }
      if (!!currentPriceEl) {
        const onSaleEl = currentPriceEl.querySelector(
          ".product-price-on-sale-js"
        );
        const notSaleEl = currentPriceEl.querySelector(
          ".product-price-not-sale-js"
        );
        if (variant.compare_at_price > variant.price) {
          const regularPrice = onSaleEl.querySelector("ins");
          const salePrice = onSaleEl.querySelector("del");
          onSaleEl.classList.remove("d:none");
          if (!notSaleEl.classList.contains("d:none")) {
            notSaleEl.classList.add("d:none");
          }
          regularPrice.textContent = variant.price;
          salePrice.textContent = variant.compare_at_price;
        } else {
          notSaleEl.classList.remove("d:none");
          if (!onSaleEl.classList.contains("d:none")) {
            onSaleEl.classList.add("d:none");
          }
          notSaleEl.textContent = variant.price;
        }
      }
      if (!!soldOutEl) {
        if (!variant.available) {
          soldOutEl.style.display = "block";
        } else {
          soldOutEl.style.display = "none";
        }
      }
      const currentImage = currentEl
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      currentImage.src = imageUrl(image, 10);
    },
    onMouseEnter: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.setProperty("opacity", "1");
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "opacity",
          "0"
        );
        currentImage.parentNode.nextElementSibling?.style?.setProperty(
          "left",
          "-10000px"
        );
      }
    },
    onMouseLeave: (event) => {
      const currentImage = event.target
        .closest(".product-card-js")
        ?.querySelector(".product-card-image-js");
      if (!!currentImage) {
        currentImage.parentNode.style.removeProperty("opacity");
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "opacity"
        );
        currentImage.parentNode.nextElementSibling?.style.removeProperty(
          "left"
        );
      }
    },
  });
  listCard.forEach((card) => {
    const cartDataEl = card.querySelector(".product-card-data-js");
    const productData = objectParse(cartDataEl.textContent);
    const colorWrapper = card.querySelector(".product-card-colors-js");
    if (!colorWrapper) {
      return;
    }
    productColor.render(colorWrapper, productData);
  });
}
function handlePredictiveSearch() {
  const el = container.querySelector(".veda-search-form-js");
  const resultText = el.getAttribute("data-text-result");
  let predictiveSearchOptions;
  if (!!resultText) {
    predictiveSearchOptions = {
      viewAllText: resultText,
    };
  } else {
    predictiveSearchOptions = {};
  }
  const destroy = predictiveSearch(el, predictiveSearchOptions);
  window.veda_fn_6b1f03de795d425e9288d9c100aa7183Cleanup.push(() => {
    destroy();
  });
}

handlePredictiveSearch();

const dataProduct = container.querySelector(".product-card-data-js");
if (!!dataProduct) {
  handleCompare();
  handleWishList();
  handleQuickView();
  handleCart();
  handleColor();
}
      });
    }
veda_fn_6b1f03de795d425e9288d9c100aa7183();function veda_fn_7c9c4946461c479ea8f6826e08edaea4 () {
        
  if (window.veda_fn_7c9c4946461c479ea8f6826e08edaea4Cleanup === undefined) {
    window.veda_fn_7c9c4946461c479ea8f6826e08edaea4Cleanup = {
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
  window.veda_fn_7c9c4946461c479ea8f6826e08edaea4Cleanup.cleanup();

        const uniqueIds = ["id_a64a6719-24fc-44fb-b51c-4ee77e877179","id_3715909d-cbee-46cb-bc42-b17d9b30ecce","id_d4254253-64c4-4d87-a45f-67a08dc8df1f"];
        uniqueIds.forEach(uniqueId => {
          const containers = document.querySelectorAll(`[data-id="${uniqueId}"]`);
          containers.forEach(container => {
            if (!container) {
              return;
            }
            veda.plugins.videoCover(container);
            
          });
        });
      }
veda_fn_7c9c4946461c479ea8f6826e08edaea4();