/**
 * @fileoverview Molecule related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.molecules = { //Config
    debug: true,
    next_page_num: 2, //Page number for the next query 
    max_page_num: -1, //Max number of searches to perform
    active_requests: 0,
    max_active_requests: 5, //Threshold of active requests 
    results: [], //Loaded reuslts (not displayed)
    max_loaded_results: 5, //Threshold of number of loaded results
    query: null,
    scrollLimit: 5000, 
    total_requests: 0, //Total number of requests made (try to limit as much as possible)
};

/**
 * Ajax Search Function. As items are returned they are added to the results array
 * and displayed as the user scrolls down. 
 * 
 * @return {Boolean}             If results are sent
 */
pqr.molecules.ajax_search = function() {

    //Get the max page number to determine the limit of searches to perform
    if (this.max_page_num == -1) {
        this.max_page_num = parseInt($('.meta-data').attr('data-max-pages'));
    }

    if (this.next_page_num < this.max_page_num) {
        query_object = this.getQuery();
        this.active_requests++;
        this.total_requests++;

        $('#molecule-ajax-loader').hide(300);
        $('.pagination .cogs').show(300);
        

        if (pqr.debug || pqr.molecules.debug) console.log("Making Request");

        $.ajax({
            method: "GET",
            url: "/browse/" + this.next_page_num + "/",
            data: query_object
        }).done(function(response) {

            if (pqr.debug || pqr.molecules.debug) console.log("Trying to add Items");
            pqr.molecules.results.push(response);
            pqr.molecules.active_requests--;

            //If there are not active requests show it as load more
            if(pqr.molecules.active_requests === 0){
                $('#molecule-ajax-loader').show(300);
                $('.pagination .cogs').hide(300);
            }

            pqr.molecules.show_results(1);
        }).fail(function() {
            //If the search fails for some reason 
            console.log("Search Results Failed"); //Always show this
            return false;
        });

        this.next_page_num++;
        return true;

    } else {
        //Show end of results output 
        if (pqr.debug || pqr.molecules.debug) console.log("No More");

        //Deactive button and show message that all are loaded 
        $('#molecule-ajax-loader').addClass('disabled').html('No More Results!');
        $('.pagination .cogs').hide();


        return false;
    }
};
/**
 * Show the results saved from ajax searches
 * @return {[type]} [description]
 */
pqr.molecules.show_results = function(max_results) {
    if (this.results.length > 0) {
        $.each(this.results.splice(0, max_results), function(key, value) {
            // if (pqr.debug || pqr.molecules.debug) console.log("Adding item: ", value);
            $('#grid').append(value);
            pqr.masonary.animateOnScroll(); //Allow the new items to be animated 
            pqr.bindevents.result_touch_helper(); //Add the event to the new items 
        });
    } else {
        if (pqr.debug || pqr.molecules.debug) console.log("No More Results");
    }
};

/**
 * Get the current query
 * @return Object The query in an object 
 */
pqr.molecules.getQuery = function() {
    if (this.query == null) {
        var element = $('#molecule-browser');
        this.query = {
            ajax: true,
            query: element.attr('data-query'),
            type: element.attr('data-type')
        };
    }
    if (pqr.debug || pqr.molecules.debug) console.log(this.query);
    return this.query;
};

/**
 * Determine if it is a good time to load more 
 * @return Boolean 
 */
pqr.molecules.request_to_load = function() {
    //User hasn't scrolled enough 
    if(($('body').height() - $(window).scrollTop()) > this.scrollLimit){
        if (pqr.debug || pqr.molecules.debug) console.log("Not Scrolled Enough");
        return false; 
    }
    

    //To many simulatenous requests 
    if(this.active_requests > this.max_active_requests){
        if (pqr.debug || pqr.molecules.debug) console.log("Too many requests!");
        return false; 
    }

    //Too many loaded results
    if(this.results.length > this.max_loaded_results){
        if (pqr.debug || pqr.molecules.debug) console.log("Backlog of results");
        return false;
    }


    //Turn to false to disable ajax
    return true; 
};