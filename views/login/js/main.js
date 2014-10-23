$(function() {
    $('#loginForm').submit(function(evt) {
        evt.preventDefault();
        if ($('#login-name').val().length < 5) {
            loginError("Der Benutzername ist zu kurz.");
            return;
        }
        if ($('#login-pass').val().length < 5) {
            loginError("Das Passwort ist zu kurz.");
            return;
        }
        $.post('check_login', $('#loginForm').serialize(),
            function(data) {
                if (data != '') {
                    loginError("Ung&uuml;ltiger Login.");
                    return;
                }
                loginSuccess("Login erfolgreich.");
                location.reload();
            }
        );
    });
});

function loginError(msg) {
    $('#loginSuccess').html("");
    $('#loginError').css({'opacity':'0'});
    setTimeout(function() {
        $('#loginError').html(msg);
        $('#loginError').css({'opacity':'1'});
    }, 200);
}

function loginSuccess(msg) {
    $('#loginError').html("");
    $('#loginSuccess').css({'opacity':'0'});
    setTimeout(function() {
        $('#loginSuccess').html(msg);
        $('#loginSuccess').css({'opacity':'1'});
    }, 200);
}