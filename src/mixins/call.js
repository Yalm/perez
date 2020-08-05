export default {
    methods: {
        clickPhone() {
            this.$ga.event({
                eventCategory: "call",
                eventAction: "click",
                eventLabel: "Call Phone",
                eventValue: "phone"
            });
        }
    }
};