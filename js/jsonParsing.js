let parser = {
    getFile(fileName, callback) {
        let xmlhttp = new XMLHttpRequest();
        let res;
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    let content = JSON.parse(xmlhttp.responseText);
                    let length = Object.keys(content).length+1;
                    let elementId = Math.floor(Math.random() * (length - 1)) + 1;
                    callback(content[elementId]);
                }
            }
        }
        xmlhttp.open('GET', "./quotes.json");
        xmlhttp.send(null);
    },
}