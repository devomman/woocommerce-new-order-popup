jQuery(document).ready(function($) {
    let audioContext;
    let soundSource;
    let isPlaying = false;

    // Function to play the sound
    function playSound() {
        if (!isPlaying) {
            let soundFile = wc_new_order_popup_params.sound_base64; // Use the sound from settings

            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            fetch(soundFile)
                .then(response => response.arrayBuffer())
                .then(data => audioContext.decodeAudioData(data))
                .then(buffer => {
                    soundSource = audioContext.createBufferSource();
                    soundSource.buffer = buffer;
                    soundSource.loop = true;
                    soundSource.connect(audioContext.destination);
                    soundSource.start();
                    isPlaying = true;
                });
        }
    }

    // Function to stop the sound
    function stopSound() {
        if (soundSource) {
            soundSource.stop();
            soundSource.disconnect();
            isPlaying = false;
        }
    }

    // Check for new orders every 5 seconds
    setInterval(function() {
        $.ajax({
            url: wc_new_order_popup_params.ajax_url,
            type: 'POST',
            data: {
                action: 'wc_new_order_popup_check_orders'
            },
            success: function(response) {
                if (response.success && response.data.length > 0) {
                    $('#wc-new-order-list').empty();
                    response.data.forEach(function(order) {
                        $('#wc-new-order-list').append('<li>Order #' + order.id + ' - Total: ' + order.total + ' - Date: ' + order.date + '</li>');
                    });
                    $('#wc-new-order-popup').fadeIn();
                    playSound(); // Play sound
                }
            }
        });
    }, 5000);

    // Close the popup, stop the sound, and redirect to the orders page
    $('#wc-new-order-close').click(function() {
        $('#wc-new-order-popup').fadeOut();
        stopSound(); // Stop the sound
        window.location.href = `${wc_new_order_popup_params.admin_url}edit.php?post_type=shop_order`; // Redirect to orders page
    });
});