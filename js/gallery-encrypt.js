$(document).ready(
  function () {
    let password = String(getCookie(GenerateCookieName()));
    console.log(`Get password from Cookie:${password}`);

    if (password != '') {

      if (!decryptAES(password)) {
        // Delete cookie
        setCookie(COOKIE_NAME, password, -5);
      } else {

        document.getElementById('encrypt-blog').removeAttribute('style');

        $("#encrypt-blog").justifiedGallery({margins: 5, rowHeight: 150});
      }
    }
    document.getElementById('pass').onkeypress = function (keyPressEvent) {

      password = String(document.getElementById('pass').value);
      if (keyPressEvent.keyCode === 13) {

        const result = decryptAES(password);

        if (result) {
          document.getElementById('encrypt-blog').removeAttribute('style');

          $("#encrypt-blog").justifiedGallery({margins: 5, rowHeight: 150});

          setCookie(GenerateCookieName(), password, 30);
        }
      }
    };
    $('#btn_decrypt').on('click', function () {

      password = String(document.getElementById('pass').value);

      const result = decryptAES(password);

      if (result) {

        document.getElementById('encrypt-blog').removeAttribute('style');

        $("#encrypt-blog").justifiedGallery({margins: 5, rowHeight: 150});

        setCookie(GenerateCookieName(), password, 30);
      }
    });
  }
);