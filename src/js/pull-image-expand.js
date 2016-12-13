const pulledImages = document.querySelectorAll('.pull-out');
[].forEach.call(pulledImages, function (item) {
  bindOneTimeListener('click', item, function (e) {
    if (window.innerWidth < 640) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    expandPulledImage(item);
  });
});

function bindOneTimeListener(type, node, callback) {
  node.addEventListener(type, function () {
    node.removeEventListener('click', arguments.callee);
    callback.apply(this, arguments);
  });
}

function expandPulledImage(item) {
  item.classList.add('pull-out--expanded');
  var expandableImage = item.querySelector('[data-src-expanded]');
  if (!expandableImage) {
    return;
  }

  var expandedSrc = expandableImage.dataset.srcExpanded;
  expandableImage.setAttribute('src', expandedSrc);
}
