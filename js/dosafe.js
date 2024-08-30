
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });

        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === "F12" || e.key === "F1" || 
                (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) || 
                (e.shiftKey && (e.key === 'I'))) {
                e.preventDefault();
            }
        });