var panorama, viewer, container, infospot;
var icon = "./assets/image/info-button.png";

container = document.querySelector('#container');

// background Image
panorama = new PANOLENS.ImagePanorama('./assets/image/plane.jpg');

// Viewer
viewer = new PANOLENS.Viewer({
    container: container,
    output: 'console',
    controlBar: false,
});
viewer.add(panorama);


// close popup
function closePopup() {
    document.getElementById("popup").classList.remove("active");
}

document.querySelector(".close-btn").addEventListener('click', closePopup);


var hotSpot = [
    {
        id: 1,
        name: "name1",
        des: "block1 content",
        coord: { x: 0, y: -2000, z: -5000 },
    },
    {
        id: 2,
        name: "name2",
        des: "block2 content",
        coord: { x: 200, y: -1500, z: -5000 },
    },
    {
        id: 3,
        name: "name3",
        des: "block3 content",
        coord: { x: 1000, y: -500, z: -5000 },
    },
    {
        id: 4,
        name: "name4",
        des: "block4 content",
        coord: { x: 2000, y: -500, z: -5000 },
    }
];

initHotSpot = () => {
    var infospot = [];
    for (let i = 0; i < hotSpot.length; i++) {
        var obj = hotSpot[i];
        infospot[i] = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
        infospot[i].position.set(obj.coord.x, obj.coord.y, obj.coord.z);
        infospot[i].addHoverText(i);
        panorama.add(infospot[i]);
        infospot[i].addEventListener("click", function (e) {
            // this.focus();
            console.log(e.target.element.innerHTML);
            var get_id = e.target.element.innerHTML;
            callEvent(get_id);
            infospot[i].removeHoverElement();
        });

    }
};

function callEvent(id) {
    document.getElementById("popup").classList.add("active");
    var html0 = `<div class="name">` + hotSpot[id].name + `</div>`
        + `<div class="description">` + hotSpot[id].des + `</div>`;

    document.querySelector(".popup-inner").innerHTML = "";
    document.querySelector(".popup-inner").innerHTML = html0;
    console.log(html0);
}


initHotSpot();