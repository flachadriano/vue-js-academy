new Vue({
  el: '#app',
  data: {
    title: 'My guest list',
    subtitle: 'Invite your <b>friends<b>',
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
    }
  }
});