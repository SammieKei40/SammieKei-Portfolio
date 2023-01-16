import Vue from 'vue'

Vue.directive('clone', {
    inserted: el => {
        el.parentNode.insertBefore(el.cloneNode(true), el.nextSibling);
    }    
})






