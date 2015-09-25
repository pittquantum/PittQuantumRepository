/**
 * @fileoverview Molecule related functions 
 * @author JoshJRogan@gmail.com (Josh Rogan)
 * @author ritwikg2004@live.com (Ritwik Gupta)
 */
pqr.molecules = { //Config
    debug: false,
    next_page_num: 2, //Page number for the next query 
    max_page_num: -1, //Max number of searches to perform
    active_requests: 0, 
    max_active_requests: 5, 
    results: [], 
    max_loaded_results: 5,
    query: null
};
/**
 * Ajax Search Function 
 * @param  String query_string Query String for molecule search
 * @param  {integer} page_num     [description]
 * @return {[type]}              [description]
 */
pqr.molecules.ajax_search = function() {
    if (this.max_page_num == -1) {
        this.max_page_num = parseInt($('#max_num_pages').html());
    }
    if (this.next_page_num < this.max_page_num) {
        query_object = this.getQuery();
        this.active_requests++;
        $.ajax({
            method: "GET",
            url: "/browse/" + this.next_page_num + "/",
            data: query_object
        }).done(function(response) {
            if (pqr.masonary.grid) {
                if (pqr.debug || pqr.molecules.debug) console.log("Trying to add Items");
                pqr.molecules.results.push(response);
            } else {
                if (pqr.debug || pqr.molecules.debug) console.log("No Masonary");
            }
            pqr.molecules.active_requests--;
        });
        this.next_page_num++;
        
        return true;
    } else {
        //Show end of results output 
        if (pqr.debug || pqr.molecules.debug) console.log("No More");
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
            $('.grid').append(value);
            pqr.masonary.grid.masonry('reloadItems');
            pqr.masonary.grid.masonry();
        });
    }
    else{
        if (pqr.debug || pqr.molecules.debug) console.log("No More Results");
    }
};

/**
 * Get the current query
 * @return Object The query in an object 
 */
pqr.molecules.getQuery = function(){
    if(this.query == null){
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
pqr.molecules.request_to_load = function(){
    return this.active_requests < this.max_active_requests && this.results.length < this.max_loaded_results; 
}