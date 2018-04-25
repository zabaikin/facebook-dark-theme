function _getStorageValueByKey (key, callback, prop) {
    chrome.storage.sync.get([key], function(result) {
        callback(result, prop);
    });
}

function toggleStorageData (result, prop) {
    result.data[prop] = !result.data[prop];
    chrome.storage.sync.set({'data': result.data})
}

function toggle_block_visibility (block) {
    _getStorageValueByKey('data', toggleStorageData, block);
}





document.getElementById('hide_games').addEventListener('click', toggle_block_visibility.bind(this,'hide_games'));
document.getElementById('hide_stories').addEventListener('click', toggle_block_visibility.bind(this,'hide_stories'));
