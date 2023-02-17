const button = document.getElementById("button");
        const theme = document.getElementById("theme");

        if (window.outerWidth <= 1200)
            theme.href = "styles/narrowScreens.css";
        else
            theme.href = "styles/wideScreens.css";
            
        window.addEventListener("resize", function() {
            console.log(window.outerWidth)
            if (window.outerWidth <= 1200)
                theme.href = "styles/narrowScreens.css";
            else
                theme.href = "styles/wideScreens.css";
        });
