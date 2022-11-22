function test(){
    var config = { attributeFilter: [ "disabled", "value" ], attributeOldValue: true, subtree: false };
   
        var targetNode = document.querySelector(".delete_ip");
    var observer = new MutationObserver(function(mutations) {
        console.log(mutations)
        mutations.forEach(function(mutation) {
        
        if (mutation.type == `attributes`) {
            switch(mutation.attributeName) {
                case `disabled`:
                    mutation.target.setAttribute("disabled", true);
                    break;
                case `value`:
                    mutation.target.setAttribute("value", mutation.oldValue);
                    break;
            }
            observer.disconnect();
            observer.observe(targetNode, config);
        }
        });   
    });
    observer.observe(targetNode, config);
}
