const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      para: true,
      bgColor: '',
    }
  },

  methods: {
    toggleShow() {
      return this.para = !this.para;
    },
    bgColors() {
      return this.bgColor
    },
  },

  computed: {
    userClasses() {
      return {
        user1: this.userInput === "user1", // add user1 class if userInput equals "user1"
        user2: this.userInput === "user2" // add user2 class if userInput equals "user2"
      }
    },
    paraClasses() {
      return {
        visible: this.para, // add visible class if para is true
        hidden: !this.para  // add hidden class if para is false
      }
    },
  }
}).mount('#assignment');