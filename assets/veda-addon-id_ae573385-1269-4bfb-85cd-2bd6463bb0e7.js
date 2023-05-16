function veda_fn_id_ae57338512694bfb85cd2bd6463bb0e7() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_ae573385-1269-4bfb-85cd-2bd6463bb0e7"/* _____End/Id_____ */;
      const containers = document.querySelectorAll(`[data-id="${uniqueId}"]:not(addons, megamenu)`);
      containers.forEach(container => {
        if (!container) {
          return;
        }
        veda.plugins.videoCover(container);
        /* _____Start/Content_____ */
        
        /* _____End/Content_____ */
      });
    } catch (error) {
      console.log(error);
    }
  };
veda_fn_id_ae57338512694bfb85cd2bd6463bb0e7();
