(function () {
        if ($('input[type=button]').hasClass('delete_ip')) {
            $(document.querySelectorAll(".delete_ip")).each(function (index, element) {
                var targetNode = element;
                var config = { attributeFilter: ["disabled", "data-id"], attributeOldValue: true, subtree: false };
                var observer = new MutationObserver(function (mutations) {
                    mutations.forEach(function (mutation) {
                        if (mutation.type == `attributes`) {
                            switch (mutation.attributeName) {
                                case `disabled`:
                                    mutation.target.setAttribute("disabled", true);
                                    break;
                                case `data-id`:
                                    mutation.target.setAttribute("data-id", mutation.oldValue);
                                    break;
                            }
                            observer.disconnect();
                            observer.observe(targetNode, config);
                        }
                    });
                });
                observer.observe(targetNode, config);
            });
        }
    })()
