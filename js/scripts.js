

  // Instantiate MixItUp:

  $('#container-1').mixItUp({
    controls: {
      enable: true //Enable controls
    },
    pagination: {
      limit: 6, //How many items per page
      loop: false, //Endless page scrolling
      generatePagers: true, //Generate pagination in the div
      maxPagers: 5, 
      pagerClass: 'btn-default',
      prevButtonHTML: '«',
      nextButtonHTML: '»',
    },
    selectors:{
          filter: '.filter-btn',

        },
    animation: {
    enable: false   
  },
  callbacks: {
    onMixLoad: function(){
      $(this).mixItUp('setOptions', {
        animation: {
          enable: true,
          effects: 'fade', 
        },
      });
    }
  }
});

$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName')
      var email = $('#inputEmail')
      var message = $('#inputMessage')
    
      if(name.val() == "" || email.val() == "" || message.val() == "") {
        $('.submit-fail').fadeToggle(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/laurasiegel10@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeToggle(400);
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
  

