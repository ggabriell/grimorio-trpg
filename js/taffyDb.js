        var magias = TAFFY();

        function removeSpell(a) {
            console.log("Removed " + a), magias({
                ___id: a
            }).remove(), updateSpelllist()
        }

        function addSpell(a, b) {
            magias.insert({
                name: a ,                
                link: b
            }), console.log("added " + a + " and " + b), updateSpelllist()
        }

        function updateSpelllist() {
            $(".quadradoMagias").empty();
            var a = magias({}).get();
            JSON.stringify(magias({}).get());
            console.log(a);
            for (var c in a) {
                let d = a[c].link.split('/');
                d = d[d.length-1];

                console.log(d);
                $('<tr><td><a href="/spells/' + d + '">' + a[c].name + '</a></td> <td><button id="delete" data-delete="' + a[c].___id + '">DELETE</button></td></tr>').appendTo(".quadradoMagias")
            }
        }
        jQuery(function(a) {
            a(".menu-btn").click(function() {
                a(".responsive-menu").toggleClass("expand")
            })
        });

        magias.store("spells"), $("body").on("click", "#listspells", function() {
            console.log("listspells"), $("#myspells").toggle("slow", function() {})
        }), 

        $(document).on("click","#grimorio", function(){
            $('.quadradoDireito').toggle();
            $('.quadradoMagias').toggle();
        });

        $(document).on("click", "#add-spell", function() {
                        
            let a = $(this).prev()[0].text;
            let b = $(this).prev()[0].href;

            $(this).attr('class','fa fa-star');
            $(this).attr('id','delete-spell');

            addSpell(a,b);//, $(this).text("(added successfully!)")
        }), 

        $(document).on("click", "#delete-spell", function() {
            console.log("nop");

            $(this).attr('class','fa fa-star-o');
            $(this).attr('id','add-spell');

            var a = $(this).data("delete");
            removeSpell(a)
        }), 
        
        $(document).on("click", "#delete", function() {
            console.log("nop");
            var a = $(this).data("delete");
            removeSpell(a)
        }), updateSpelllist();