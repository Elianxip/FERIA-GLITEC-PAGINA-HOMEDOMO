document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    
   

    // Modo Oscuro
    document.getElementById("modoOscuro").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Botón Volver Arriba
    const scrollTop = document.getElementById("volverArriba");
    window.addEventListener("scroll", function() {
        scrollTop.style.display = window.scrollY > 200 ? "block" : "none";
    });
    scrollTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Música
    const music = document.getElementById("musica");
    document.getElementById("playMusic").addEventListener("click", function() {
        music.paused ? music.play() : music.pause();
    });

    // Chatbot
    document.getElementById("toggleChat").addEventListener("click", function() {
        document.getElementById("chatContent").classList.toggle("active");
    });

    // Login (Simulado)
    document.getElementById("loginBtn").addEventListener("click", function() {
        localStorage.setItem("user", document.getElementById("username").value);
        alert("Inicio de sesión exitoso");
    });

    // Compartir
    document.getElementById("compartir").addEventListener("click", function() {
        navigator.share({ title: "Mi Página Avanzada", url: window.location.href });
    });
    console.log("Script cargado correctamente");

    document.addEventListener("DOMContentLoaded", function() {
        AOS.init({
            duration: 50, // Duración de la animación
        });
    });
    

});

    document.getElementById("compartir").addEventListener("click", function() {
        // URL de la página actual
        const url = window.location.href;
        // Título de la página (si lo deseas cambiar)
        const title = document.title;
    
        // Enlaces de compartir en redes sociales
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`;
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
    
        // Abre las ventanas de compartir para cada red social
        window.open(facebookUrl, "_blank", "width=600, height=400");
        window.open(twitterUrl, "_blank", "width=600, height=400");
        window.open(whatsappUrl, "_blank", "width=600, height=400");
        window.open(linkedinUrl, "_blank", "width=600, height=400");
        window.open(emailUrl, "_blank", "width=600, height=400");
    });
    

