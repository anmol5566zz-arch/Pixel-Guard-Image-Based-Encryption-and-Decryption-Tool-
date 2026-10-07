(function() {
    const sessionKey = 'crypta_google_auth';
    const isAuthPage = window.location.pathname.endsWith('login.html');
    
    if (!sessionStorage.getItem(sessionKey)) {
        if (!isAuthPage) {
            window.location.href = 'login.html';
        }
    } else {
        if (isAuthPage) {
            window.location.href = 'index.html';
        }
    }
})();
