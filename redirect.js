var urls = {
    1: "http://www.daanhenke.me/EngePortfolio"
};

var defaultUrl = 1;

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

window.onload = function () {
    var uuid = findGetParameter("c");

    if (uuid === null) {
        window.location.href = urls[defaultUrl];
    }

    else {
        console.log(uuid);

        if (urls.hasOwnProperty(uuid)) {
            window.location.href = urls[uuid];
        }
    }
};