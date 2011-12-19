$(document).ready(function () {
    ko.applyBindings(viewModel);
});

var viewModel = {};

viewModel.query = ko.observable();

viewModel.searchResults = ko.observableArray();

viewModel.updateLightbox = function () {
    alert(this.Caption + ((this.InLightbox) ? ' removed.' : ' added.'));
}

viewModel.search = function () {
    $.getJSON('scripts/searchresults_sm.js', function (data) {
        ko.utils.arrayPushAll(viewModel.searchResults, data.Assets);
    });
};