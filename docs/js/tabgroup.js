var tabContainers = document.getElementsByClassName("tabs");
for (var i = 0; i < tabContainers.length; i++) {
    var container = tabContainers[i];
    var tabs = container.getElementsByClassName("tab");
    for (var j = 0; j < tabs.length; j++) {
        var tab = tabs[j];
        tab.addEventListener("click", function(e){
            e.preventDefault();
            var tabs = this.parentElement.getElementsByClassName("tab");
            for (var k = 0; k < tabs.length; k++) {
                tabs[k].classList.remove("active");
            }
            this.classList.add("active");
            tabContents = this.parentElement.parentElement.getElementsByClassName("tab-content");
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.add("hide");
            }
            document.getElementById(this.getAttribute("data-tab-id")).classList.remove("hide");
        });
    }
}
