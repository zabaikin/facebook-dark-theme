function toggle_games_block_visibility() {
    getStorageValueByKey('hide_games', toggleStorageData);
}

function toggleStorageData(result) {
    //just for test
    var key = Object.keys(result)[0];
    result[key] = !result[key];
    chrome.storage.local.set(result)
}

function getStorageValueByKey (key, callback) {
    chrome.storage.local.get([key], function(result) {
        callback(result);
    });
}

document.getElementById('hide_games').addEventListener('click', toggle_games_block_visibility);
