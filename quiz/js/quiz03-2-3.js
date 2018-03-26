Vue.component('todo-footer', {
    template: "<p>This is another global child</p>"
})

var cmp = {
    template: '<p>This is another local child</p>'
}

new Vue({
    el: "#app",
    data: { message: "test" },
    components: {
        'todo-list': cmp
    }
});
