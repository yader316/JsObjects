/**
 * @author Charlie Calvert
 */

/*jshint devel: true, browser: true, jquery: true, strict: true */

var App = (function() {
    'use strict';

    function App() {
        $('#buttonSignIn').click(signIn);
        $('#buttonCookieData').click(cookieData);
    }

    var signIn = function() {
        $.ajax({
            type: "POST",
            url: '/addUser',
            dataType: "json",
            cache: 'False',
            data: {
                userName: $('#userName').val()
            },
            success: function(json) {
                $('#debug').html(json.Result);
            },
            error: function(error) {
                alert(error.responseText);
            }
        });
    };

    var cookieData = function() {
        $.ajax({
            type: "GET",
            url: '/cookieData',
            dataType: "json",
            cache: 'False',
            data: {
                cookieData: $('#cookieData').val()
            },
            success: function(json) {
                $('#debug').html(json.Result);
            },
            error: function(error) {
                alert(error.responseText);
            }
        });
    };

    return App;
})();

$(document).ready(function() {
    "use strict";

    new App();
});
