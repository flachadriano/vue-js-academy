new Vue({
  el: '#app',
  data: {
    title: 'My guest list',
    guest: '',
    guests: [],
    formClass: '',
    styles: {
      marginTop: '25px'
    }
  },
  methods: {
    add: function() {
      if (this.guest.trim().length > 0) {
        this.guests.push(this.guest);
        this.guest = '';
        this.formClass = 'submitted';
      }
    }
  }
});