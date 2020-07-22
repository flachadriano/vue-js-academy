const app = new Vue({
  el: '#app',
  data: {
    guest: '',
    guests: [],
    capacity: 25,
    capacityPercentage: 0,
    styles: {
      marginTop: '25px'
    }
  },
  methods: {
    add: function() {
      if (this.guest.trim().length > 0 && this.capacityPercentage < 100) {
        this.guests.push(this.guest);
        this.guest = '';
        this.capacityPercentage = this.guests.length / (this.capacity / 100);
      }
    },
    keyPressed: function() {
      console.log('Space bar pressed');
    }
  },
  computed: {
    sortNames: function() {
      return this.guests.sort();
    }
  },
  watch: {
    guest: function(data) {
      console.log('Watch triggered');
    }
  },
  filters: {
    formatName: function(name) {
      return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    }
  }
});

const header = new Vue({
  el: '#header',
  data: {
    title: 'My guest list',
    subtitle: 'Invite your <b>friends<b>',
    navLinks: [
      {name: 'Home', id: 1},
      {name: 'Upcoming events', id: 2},
      {name: 'Guest benefits', id: 3},
      {name: 'Latest news', id: 4}
    ]
  },
  methods: {
    changeCapacity() {
      app.capacity = 15;
    },
    changeMyListFriends() {
      this.$refs.myListFriends.innerText = 'My list friends [clicked]';
    }
  }
});

const phrase = new Vue({
  template: '<h6>My list now</h6>'
});

phrase.$mount('#replaceable');

// Lifecycle
new Vue({
  beforeCreate() {
    // This is executed before anything
  },
  created() {
    // This is executed after data observe and event initialization
    // You already have here: Watchers, Computed properties, All methods
    // DOM does not exists yet
  },
  beforeMount() {
    // Here have already read the template and compiled
    // Execute it right before the applying on DOM
    // Controls the first render
  },
  mounted() {
    // The template is completed to attach the DOM
    // applyed all the properties Vue properties and state
    // Controls the first render
  },
  beforeUpdate() {
    // When any data has been changed
    // This is fired before apply any data change
  },
  updated() {
    // After the data changed applyed on template
  },
  beforeDestroy() {
    // Component is still functional
    // Nothing have changed yet to destroy it
  },
  destroyed() {
    // The component is already destroyed
  },
})
