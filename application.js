(function() {
  function Die() {
    this.value = '-';
  }

  Die.prototype.roll = function() {
    this.value = Math.floor((Math.random()*6)+1);
  };

  $(document).ready(function() {
    var dice = [];
    $('#roller button.add').on('click', function() {
      die = new Die();
      dice.push(die);
      $('.dice').append('<div class="die" data-id='+dice.length+'>'+ die.value + '</div>');
    });

    $('#roller button.roll').on('click', function() {
      for (var i = 0; i < dice.length; i++) {
        var die = dice[i];
        die.roll();
        var index = i + 1;
        $(".die[data-id='" + index + "']").text(die.value);
      };

    });
  });

})();