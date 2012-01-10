$(document).ready(function () {
    ko.applyBindings(viewModel);
});

var viewModel = {};

viewModel.query = ko.observable();
viewModel.searchResults = ko.observableArray();

viewModel.updateLightbox = function () {
    var assetToUpdate = ko.dataFor(this)
    assetToUpdate.InLightbox = !assetToUpdate.InLightbox;
    //$.post('lightbox/addToLightbox', assetToUpdate.AssetId, function(){ alert('yay')});
}

viewModel.search = function () {
    $.getJSON('scripts/searchresults_sm.js', function (data) {
        var observableAssets = (data.Assets);

        for (var i = 0; i < data.Assets.length; i++) {
            viewModel.searchResults.push(ko.observable(data.Assets[i]));
        }

        //ko.utils.arrayPushAll(viewModel.searchResults, observableAssets);
    });
};

        ko.bindingHandlers.mybinding =  {

            init: function (element, valueAccessor, allBindingsAccessor, viewModel) { alert('init called'); },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) { alert('update called'); }
        };

$(document).on('click', '.lightboxButton', viewModel.updateLightbox);