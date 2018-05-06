chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      console.log('theme works');
    }
  }
);

chrome.storage.sync.get(['data'], function(result) {
    for (key in result.data) {
        if (result.data.hasOwnProperty(key)) {
            _toggleBlockVisibility(key, result.data[key])
        }
    }
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
        var storageChange = changes[key];

        if (JSON.stringify(storageChange.oldValue) === JSON.stringify(storageChange.newValue)) {
            break;
        }

        for (key in storageChange.oldValue) {
            if (storageChange.oldValue[key] != storageChange.newValue[key]) {
                _toggleBlockVisibility(key, storageChange.newValue[key])
            }
        }
    }
});

function _toggleBlockVisibility (key, value) {
    var block = document.getElementById(key);
    if (block) {
        block.style.display = value ? 'block' : 'none';
    }
}
