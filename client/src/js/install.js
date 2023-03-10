const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //Store the triggered events
    window.deferredPrompt = event;

    // TODO: Implement a click event handler on the `butInstall` element
    //Remove the hidden class from the button
    butInstall.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt;

        if (!promptEvent) {
            return;
        }

        //Show prompt
        promptEvent.prompt();

        //Reset the deferred prompt variable
        window.deferredPrompt = null;

        butInstall.classList.toggle('hidden', true);
    });
    
    // TODO: Add an handler for the `appinstalled` event
    window.addEventListener('appinstalled', (event) => {
        //Clear prompt
        window.deferredPrompt = null;
    });
});

