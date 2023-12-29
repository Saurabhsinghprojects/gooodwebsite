jQuery(function() {
    $ = jQuery;

    $(".industries_info_list .industries_list").hover(function() {
        $(this).removeClass("industries_list_dark");
        $(this).addClass("industries_list_big");
        $(this).parents(".industries_info").find(".industries_list_dark").addClass("industries_list_open");
    }, function() {
        $(this).addClass("industries_list_dark");
        $(this).removeClass("industries_list_big");
        $(this).parents(".industries_info").find(".industries_list_dark").removeClass("industries_list_open");
    });

    // $('.sf-input-select').selectpicker({
    //   size: 8
    // });

    $(".ourwork_searchfilter_list ul").html(" ");

    var categorylenght = 1;

    $('.sf-field-taxonomy-work_industry .sf-input-select option').each(
        function() {
            var thislength = $(this).index();
            if (thislength <= 3) {
                $('#industry_searchfilter_list').append('<li namevalue="' + $(this).val() + '" class="' + $(this).val() + '">' + $(this).text() + '</li>');
            } else {
                if (categorylenght == 1) {
                    $('#industry_searchfilter_list').append('<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Others <span class="caret"></span></button><ul class="dropdown-menu"><li namevalue="' + $(this).val() + '" class="' + $(this).val() + '">' + $(this).text() + '</li></ul></div>');
                    categorylenght++;
                } else {
                    $('#industry_searchfilter_list .dropdown-menu').append('<li namevalue="' + $(this).val() + '" class="' + $(this).val() + '">' + $(this).text() + '</li>');
                }
            }
        }
    );

    var industrylistval;
    $(document).on('click', '#industry_searchfilter_list li', function(event) {
        //event.preventDefault();
        industrylistval = $(this).attr("namevalue");
        $("#industry_searchfilter_list li").removeClass('active');
        $("#industry_searchfilter_list .dropdown .btn-primary").removeClass('active');
        $(this).addClass('active')
        $('.sf-field-taxonomy-work_industry .sf-input-select option').each(
            function() {
                if ($(this).val() == industrylistval) {
                    $('.sf-field-taxonomy-work_industry .sf-input-select').val(industrylistval);
                    $('.sf-field-taxonomy-work_industry .sf-input-select').trigger('change');
                    return false;
                }
            }
        );
    });

    var industrieslenght = 1;
    $('.sf-field-taxonomy-work_function .sf-input-select option').each(
        function() {
            var thislength = $(this).index();
            if (thislength <= 3) {
                $('#function_searchfilter_list').append('<li namevalue="' + $(this).val() + '" class="' + $(this).val() + '">' + $(this).text() + '</li>');
            } else {
                if (industrieslenght == 1) {
                    $('#function_searchfilter_list').append('<div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Others <span class="caret"></span></button><ul class="dropdown-menu"><li namevalue="' + $(this).val() + '" class="' + $(this).val() + '">' + $(this).text() + '</li></ul></div>');
                    industrieslenght++;
                } else {
                    $('#function_searchfilter_list .dropdown-menu').append('<li namevalue="' + $(this).val() + '" class="' + $(this).val() + '">' + $(this).text() + '</li>');
                }
            }
        }
    );

    var functionlistval;
    $(document).on('click', '#function_searchfilter_list li', function(event) {
        //event.preventDefault();
        functionlistval = $(this).attr("namevalue");
        $("#function_searchfilter_list li").removeClass('active');
        $("#function_searchfilter_list .dropdown .btn-primary").removeClass('active');
        $(this).addClass('active')
        $('.sf-field-taxonomy-work_function .sf-input-select option').each(
            function() {
                if ($(this).val() == functionlistval) {
                    $('.sf-field-taxonomy-work_function .sf-input-select').val(functionlistval);
                    $('.sf-field-taxonomy-work_function .sf-input-select').trigger('change');
                    return false;
                }
            }
        );
    });

    $(document).on('click', '.ourwork_searchfilter_list .dropdown .dropdown-menu li', function(event) {
        //event.preventDefault();
        $(this).parents(".dropdown").find('.btn').addClass('active');
    });



    $(document).on('click', '.ourwork_searchreasult_list ul li .ourwork_searchreasult_cont .download_arrow .download_arrowimg', function(event) {
        //event.preventDefault();
        $(".ourwork_searchreasult_list ul li .download_form").hide();
        $(this).parents("li").find('.download_form').show();
    });

    $(document).on('click', '.ourwork_searchreasult_list ul li .download_form .close_btn', function(event) {
        $(this).parents('.download_form').hide();
    });

    $(document).on('click', '.ourwork_search_form .ourwork_search_icon', function(event) {
        $(this).hide();
        $(".ourwork_search_form .searchandfilter ul li.sf-field-search").addClass('open');
        $(".ourwork_search_form .ourwork_close_icon").show();
    });

    $(document).on('click', '.ourwork_search_form .ourwork_close_icon', function(event) {
        $(this).hide();
        $(".ourwork_search_form .searchandfilter ul li.sf-field-search").removeClass('open');
        $(".ourwork_search_form .ourwork_search_icon").show();
    });

    $(document).on('click', '.freedownload_btn span', function(event) {
        $('.individualcasestudy_down_cont .email_form').show();
    });

    $(document).on('click', '.individualcasestudy_down_cont .email_form .close_btn', function(event) {
        $(this).parents('.email_form').hide();
    });

    var swiper = new Swiper('.emerging_list .swiper-container', {
        pagination: '.emerging_list .swiper-pagination',
        paginationClickable: true
    });


    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    });

    wow.init();

    $(".ourwork_searchreasult_list ul li:nth-child(1), .ourwork_searchreasult_list ul li:nth-child(2), .ourwork_searchreasult_list ul li:nth-child(3)").removeClass('wow animated fadeInUp');

});
