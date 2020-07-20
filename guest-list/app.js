new Vue({
  el: '#app',
  data: {
    guest: '',
    guests: [],
    capacity: 25,
    capacityPercentage: 0,
    styles: {
      marginTop: '25px'
    },
    navLinks: [
      {name: 'Home', id: 1},
      {name: 'Upcoming events', id: 2},
      {name: 'Guest benefits', id: 3},
      {name: 'Latest news', id: 4}
    ]
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

new Vue({
  el: '#header',
  data: {
    title: 'My guest list',
    subtitle: 'Invite your <b>friends<b>'
  }
});