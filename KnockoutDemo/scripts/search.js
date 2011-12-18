var viewModel = {};

viewModel.query = ko.observable('');
viewModel.searchResults = ko.observableArray();
viewModel.search = function () {
    $.getJSON('scripts/searchresults_sm.js', function (data) {
        ko.utils.arrayPushAll(viewModel.searchResults, data.Assets);
    });
};

$(document).ready(function () {
    ko.applyBindings(viewModel);
});