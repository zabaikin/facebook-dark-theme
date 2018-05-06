document.body.addEventListener('click',buttonClicked,false);

function buttonClicked(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match('toggle_visibility'))
    {
        toggle_block_visibility(target.id)
    }
}

function _getStorageValueByKey (key, callback, blockId) {
    chrome.storage.sync.get([key], function(result) {
        callback(result, blockId);
    });
}

function toggleStorageData (result, blockId) {
    result.data[blockId] = !result.data[blockId];
    chrome.storage.sync.set({'data': result.data})
}

function toggle_block_visibility (blockId) {
    _getStorageValueByKey('data', toggleStorageData, blockId);
}
