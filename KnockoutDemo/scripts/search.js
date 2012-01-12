var viewModel = {};

viewModel.query = ko.observable('');
viewModel.searchResults = ko.observableArray();
viewModel.searchEnabled = ko.computed(function () { return viewModel.query().length > 0;});

viewModel.updateLightbox = function () {
    var assetToUpdate = ko.dataFor(this)
    assetToUpdate.InLightbox(!assetToUpdate.InLightbox());
    //$.post('lightbox/addToLightbox', assetToUpdate.AssetId, function(){ alert('yay')});
}

viewModel.search = function () {
    viewModel.searchResults.removeAll();
    $.getJSON('scripts/searchresults_sm.js',
        function (data) {
            ko.utils.arrayForEach(
                data.Assets,
                function (item) {
                    viewModel.searchResults.push(ko.mapping.fromJS(item));
                });
        });
};

ko.bindingHandlers.transform = {

    //    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
    //        var val = valueAccessor();
    //        $(element).text((val) ? "(In Lightbox)" : "(Not In Lightbox)");
    //    },

    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var val = valueAccessor();
        $(element).text((val()) ? "(In Lightbox)" : "(Not In Lightbox)");
    }
};

$(document).ready(function () {
    ko.applyBindings(viewModel);
    $(document).on('click', '.lightboxButton', viewModel.updateLightbox);
});