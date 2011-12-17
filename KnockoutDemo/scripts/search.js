var viewModel = {
    query: ko.observable('water'),

    search: function () {
        $.getJSON('scripts/searchresults.js', this.showResults);
    },

    searchResults: ko.observableArray([]),

    showResults: function (data) {
        this.searchResults = ko.observableArray(data.Assets);
    }
};

$(document).ready(function () {
    ko.applyBindings(viewModel); 
});