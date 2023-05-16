function veda_fn_id_b432149a9f8e4f3cbf719ad5300aec8b() {
    
    try {
      const uniqueId = /* _____Start/Id_____ */"id_b432149a-9f8e-4f3c-bf71-9ad5300aec8b"/* _____End/Id_____ */;
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
veda_fn_id_b432149a9f8e4f3cbf719ad5300aec8b();
