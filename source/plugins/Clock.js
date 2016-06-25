var React = require('react');
//global.jQuery = require('jquery');
//$=global.jQuery
//require('../assets/external/flipclock/flipclock.js');
require('../../node_modules/flipclock/compiled/flipclock.js');
require('../../node_modules/flipclock/compiled/flipclock.css');


module.exports = React.createClass({
  componentDidMount: function() {
    var clock = $('.clock').FlipClock({
      clockFace: 'TwentyFourHourClock',
      showSeconds: false
    });

    $(".clock").css({"display":"inline-block","width":"auto" });
    $(".clockContainer").css({"text-align":"center"});

  },
  render: function() {
    return (
      <div className='clockContainer'>
        <div  className='clock' />
      </div>

    );
  }
});
