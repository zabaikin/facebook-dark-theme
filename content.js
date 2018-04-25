chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      console.log('theme works');
    }
  }
);

chrome.storage.sync.set({
    'data': {
        'hide_games':false,
        'hide_stories': false
}})

chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
        var storageChange = changes[key];

        if (JSON.stringify(storageChange.oldValue) === JSON.stringify(storageChange.newValue)) {
            break;
        }

        for (key in storageChange.oldValue) {
            if (storageChange.oldValue[key] != storageChange.newValue[key]) {
                _toggleBlockVisibility(key)
            }
        }
    }
});

function _toggleBlockVisibility (key) {
    console.log(key);
}


document.querySelector('#pagelet_canvas_nav_content').style.display = 'none';
