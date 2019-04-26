const app = new Vue({
    el: '#application',
    data: {
        message: 'hello',
        greeting: 'Vue Course',
        showName: true
    },
    methods: {
        toggleName(){
            this.showName = !this.showName
        }
    }
})