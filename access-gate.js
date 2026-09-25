(function () {
    const accessPassword = 'Anmol@PixelGuard26';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sessionKey = 'cryptaUnlocked';

    document.documentElement.classList.add('crypta-locked');

    const style = document.createElement('style');
    style.textContent = `
        html.crypta-locked body > *:not(#crypta-access-gate) { visibility: hidden; }
        #crypta-access-gate {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            min-height: 100vh;
            padding: 1rem;
            overflow-y: auto;
            background: #020617;
            color: #f8fafc;
            font: 16px/1.5 Inter, Segoe UI, sans-serif;
        }
        #crypta-access-gate .gate-card {
            width: 100%;
            max-width: 56rem;
            padding: 1.5rem;
            border: 1px solid #334155;
            border-radius: .75rem;
            background: #1e293b;
            box-shadow: 0 25px 50px rgba(0, 0, 0, .5);
            margin: 1rem auto;
        }
        #crypta-access-gate .gate-grid {
            display: grid;
            gap: 2rem;
        }
        #crypta-access-gate .gate-brand { text-align: center; }
        #crypta-access-gate .gate-logo { width: 11rem; height: 11rem; margin: 0 auto; border-radius: 1rem; object-fit: cover; box-shadow: 0 20px 30px rgba(0, 0, 0, .3); outline: 1px solid rgba(129, 140, 248, .4); }
        #crypta-access-gate .gate-brand-name { margin: 1rem 0 0; color: #a5b4fc; font-size: .875rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; }
        #crypta-access-gate .gate-brand-copy { margin: .5rem 0 0; color: #94a3b8; font-size: .75rem; line-height: 1.6; }
        #crypta-access-gate .gate-symbol { position: relative; display: flex; width: 4rem; height: 4rem; margin: 0 auto 1.25rem; align-items: center; justify-content: center; border-radius: 999px; background: rgba(99, 102, 241, .2); color: #818cf8; }
        #crypta-access-gate .gate-symbol svg { width: 2rem; height: 2rem; }
        #crypta-access-gate h1 { margin: .5rem 0 0; color: #fff; font-size: 1.5rem; font-weight: 700; }
        #crypta-access-gate .gate-copy { margin: .75rem 0 0; color: #94a3b8; font-size: .875rem; line-height: 1.6; }
        #crypta-access-gate .gate-details { margin-top: 1.5rem; padding: 1rem; border: 1px solid #334155; border-radius: .75rem; background: rgba(15, 23, 42, .6); color: #cbd5e1; font-size: .875rem; text-align: left; }
        #crypta-access-gate .gate-row { display: flex; flex-direction: column; gap: .25rem; padding: .75rem 0; }
        #crypta-access-gate .gate-row + .gate-row { border-top: 1px solid #334155; }
        #crypta-access-gate .gate-row strong { color: #fbbf24; }
        #crypta-access-gate label { display: block; margin-bottom: .25rem; color: #cbd5e1; font-size: .875rem; font-weight: 500; }
        #crypta-access-gate input { box-sizing: border-box; width: 100%; padding: .75rem 1rem; border: 1px solid #475569; border-radius: .5rem; background: #0f172a; color: #fff; font: inherit; }
        #crypta-access-gate input:focus { outline: 2px solid #6366f1; outline-offset: 1px; }
        #crypta-access-gate button { width: 100%; margin-top: 1rem; padding: .75rem 1rem; border: 0; border-radius: .5rem; background: #4f46e5; color: #fff; cursor: pointer; font: 600 1rem Segoe UI, sans-serif; box-shadow: 0 10px 20px rgba(99, 102, 241, .2); }
        #crypta-access-gate button:hover { background: #6366f1; }
        #crypta-access-gate .gate-error { min-height: 1.5em; margin: .6rem 0 0; color: #fb7185; font-size: .9rem; }
        @media (min-width: 768px) {
            #crypta-access-gate .gate-card { padding: 2rem; }
            #crypta-access-gate .gate-grid { grid-template-columns: 220px 1fr; align-items: center; }
            #crypta-access-gate .gate-row { flex-direction: row; align-items: center; gap: .75rem; }
            #crypta-access-gate .gate-row strong { min-width: 8rem; }
        }
    `;
    document.head.appendChild(style);

    if (sessionStorage.getItem(sessionKey) === 'true') {
        document.documentElement.classList.remove('crypta-locked');
        return;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const gate = document.createElement('section');
        gate.id = 'crypta-access-gate';
        gate.setAttribute('aria-labelledby', 'crypta-gate-title');
        gate.innerHTML = `
            <div class="gate-card">
                <div class="gate-grid">
                    <div class="gate-brand">
                        <img src="Fantastic Four Main Logo.jpeg" alt="Crypta project logo" class="gate-logo">
                        <p class="gate-brand-name">Crypta</p>
                        <p class="gate-brand-copy">A private workspace for encrypting digital information locally.</p>
                    </div>
                    <div>
                        <div class="gate-symbol" aria-label="Crypta secure access symbol"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                        <h1 id="crypta-gate-title">Unlock Crypta</h1>
                        <p class="gate-copy">Crypta is an all-purpose local encryption and decryption tool for protecting digital information in your browser.</p>
                        <div class="gate-details">
                            <div class="gate-row"><strong>Project Name:</strong><span>Crypta - All-purpose local encryption and decryption tool</span></div>
                            <div class="gate-row"><strong>Team Name:</strong><span>Fantastic 4</span></div>
                            <div class="gate-row"><strong>Section:</strong><span>A (G2)</span></div>
                            <div class="gate-row"><strong>Team Members:</strong><span>Anmol Kumar, Aryan Mishra, Anshuman Singh, Arjun Sharma</span></div>
                        </div>
                        <form>
                            <label for="crypta-access-password">Access password</label>
                            <input id="crypta-access-password" type="password" autocomplete="current-password" required placeholder="Enter the access password">
                            <p class="gate-error" role="alert"></p>
                            <button type="submit">Unlock tool</button>
                        </form>
                    </div>
                </div>
            </div>
        `;
        document.body.prepend(gate);

        const form = gate.querySelector('form');
        const passwordInput = gate.querySelector('input');
        const error = gate.querySelector('.gate-error');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (passwordInput.value !== accessPassword) {
                error.textContent = 'That access password is incorrect.';
                passwordInput.select();
                return;
            }

            sessionStorage.setItem(sessionKey, 'true');
            if (currentPage !== 'index.html') {
                window.location.href = 'index.html';
                return;
            }

            document.documentElement.classList.remove('crypta-locked');
            gate.remove();
            passwordInput.value = '';
        });
    });
}());
