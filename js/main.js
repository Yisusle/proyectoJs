'use_strcit'

$(document).ready(function (){
        
        //Slider
        if(window.location.href.indexOf('index')> -1){
            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200,
                pager: true,
                speed: 800,
            });
        }

        //Posts
        if(window.location.href.indexOf('index')> -1){
            var posts = [
                {
                    title: 'Prueba del Titulo 1',
                    date: 'Publicado el día ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur pulvinar nulla, vitae sodales felis tincidunt sit amet. Maecenas ornare vehicula sapien, eu fringilla ipsum pretium nec. Morbi id lorem urna. Vestibulum consequat iaculis nunc ac bibendum. Sed hendrerit tincidunt placerat. Curabitur placerat, tortor ut scelerisque consectetur, libero ligula fermentum orci, luctus posuere velit quam vitae nunc. Duis iaculis eu ligula eget mattis. Donec iaculis, lacus a laoreet iaculis, nulla turpis condimentum lectus, vitae egestas lorem arcu non libero. Sed dignissim elementum sollicitudin.'
                },
                {
                    title: 'Prueba del Titulo 2',
                    date: 'Publicado el día ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur pulvinar nulla, vitae sodales felis tincidunt sit amet. Maecenas ornare vehicula sapien, eu fringilla ipsum pretium nec. Morbi id lorem urna. Vestibulum consequat iaculis nunc ac bibendum. Sed hendrerit tincidunt placerat. Curabitur placerat, tortor ut scelerisque consectetur, libero ligula fermentum orci, luctus posuere velit quam vitae nunc. Duis iaculis eu ligula eget mattis. Donec iaculis, lacus a laoreet iaculis, nulla turpis condimentum lectus, vitae egestas lorem arcu non libero. Sed dignissim elementum sollicitudin.'
                },
                {
                    title: 'Prueba del Titulo 3',
                    date: 'Publicado el día ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur pulvinar nulla, vitae sodales felis tincidunt sit amet. Maecenas ornare vehicula sapien, eu fringilla ipsum pretium nec. Morbi id lorem urna. Vestibulum consequat iaculis nunc ac bibendum. Sed hendrerit tincidunt placerat. Curabitur placerat, tortor ut scelerisque consectetur, libero ligula fermentum orci, luctus posuere velit quam vitae nunc. Duis iaculis eu ligula eget mattis. Donec iaculis, lacus a laoreet iaculis, nulla turpis condimentum lectus, vitae egestas lorem arcu non libero. Sed dignissim elementum sollicitudin.'
                },
                {
                    title: 'Prueba del Titulo 4',
                    date: 'Publicado el día ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur pulvinar nulla, vitae sodales felis tincidunt sit amet. Maecenas ornare vehicula sapien, eu fringilla ipsum pretium nec. Morbi id lorem urna. Vestibulum consequat iaculis nunc ac bibendum. Sed hendrerit tincidunt placerat. Curabitur placerat, tortor ut scelerisque consectetur, libero ligula fermentum orci, luctus posuere velit quam vitae nunc. Duis iaculis eu ligula eget mattis. Donec iaculis, lacus a laoreet iaculis, nulla turpis condimentum lectus, vitae egestas lorem arcu non libero. Sed dignissim elementum sollicitudin.'
                },
                {
                    title: 'Prueba del Titulo 5',
                    date: 'Publicado el día ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur pulvinar nulla, vitae sodales felis tincidunt sit amet. Maecenas ornare vehicula sapien, eu fringilla ipsum pretium nec. Morbi id lorem urna. Vestibulum consequat iaculis nunc ac bibendum. Sed hendrerit tincidunt placerat. Curabitur placerat, tortor ut scelerisque consectetur, libero ligula fermentum orci, luctus posuere velit quam vitae nunc. Duis iaculis eu ligula eget mattis. Donec iaculis, lacus a laoreet iaculis, nulla turpis condimentum lectus, vitae egestas lorem arcu non libero. Sed dignissim elementum sollicitudin.'
                },
                {
                    title: 'Prueba del Titulo 6',
                    date: 'Publicado el día ' + moment().date()+ ' de '+ moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam efficitur pulvinar nulla, vitae sodales felis tincidunt sit amet. Maecenas ornare vehicula sapien, eu fringilla ipsum pretium nec. Morbi id lorem urna. Vestibulum consequat iaculis nunc ac bibendum. Sed hendrerit tincidunt placerat. Curabitur placerat, tortor ut scelerisque consectetur, libero ligula fermentum orci, luctus posuere velit quam vitae nunc. Duis iaculis eu ligula eget mattis. Donec iaculis, lacus a laoreet iaculis, nulla turpis condimentum lectus, vitae egestas lorem arcu non libero. Sed dignissim elementum sollicitudin.'
                },
            ];

            posts.forEach((item, index) =>{
                var post =  `
                        <article class="post">
                            <h2>${item.title}</h2>
                                <span class="date">${item.date}</span>
                                    <p>
                                        ${item.content}
                                    </p>
                                    <a href="#" class="btn-mas" title="Leer más">Leer más</a>
                        </article>
                `;
                $("#posts").append(post);
            });
        }
        //Tooltips
        $('#selector-theme').tooltip();
        $('.btn-mas').tooltip();
        $('input[type = "submit"]').tooltip();
        $(' #about').tooltip();

        //Selector de Tema
        var theme = $("#theme");
    
        if(sessionStorage.length > 0 && typeof(sessionStorage.temaGuardado) != "undefined"){
            theme.attr('href', sessionStorage.temaGuardado);
        }

        $('#to-green').click(function (){
            var verde = 'css/green.css';

            theme.attr("href", "css/green.css");

            sessionStorage.temaGuardado = verde;
        });

        $('#to-red').click(function(){
            var rojo = 'css/red.css';

            theme.attr("href", "css/red.css");

            sessionStorage.temaGuardado = rojo;
        });

        $('#to-blue').click(function(){
            var azul = 'css/blue.css';

            theme.attr("href", "css/blue.css");

            sessionStorage.temaGuardado = azul;
        });
        
        //Scroll hacia arriba de la pagina
        $('.subir').click(function (e){
            
            e.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 600);

            return false;
        });

        //Login falso
        $('#login form').submit(function name(params) {
            var form_name = $('#form_name').val();
            localStorage.setItem("form_name", form_name);
        });

        var form_name = localStorage.getItem("form_name");

        if(form_name != null && form_name != "undefined"){

            var about_parrafo= $("#about p")

            about_parrafo.html("<br><strong>Bienvenido " +form_name+"</strong> <br>");
            about_parrafo.append("<a href='#' id='logout' title='Cerrar Sesión'>Cerrar Sesión</a>")
            
            $('#login').hide();
            
            $("#logout").click(function () {
                localStorage.clear();
                location.reload();
            })
        }

        //Acordeón 
        if(window.location.href.indexOf('about')> -1){
            $("#acordeon").accordion();
        }

        //RELOJ
        if(window.location.href.indexOf('reloj')> -1){
            
            setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
            }, 1000);
        }

        //Validación
        if(window.location.href.indexOf('contact')> -1){
            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            });

            $("form").validate({
                rules: {
                        field: {
                            required: true,
                            date: true,
                            dateISO: true,
                            email: true,
                            text: true,
                            scrollToTopOnError: true
                        }
                    }
                });
        }
});
