AFRAME.registerComponent("comics", {
  init: function () {
    this.placesContainer = this.el;
    this.createPosters();
  },

  createPosters: function () {
    const thumbNailsRef = [
      {
        id: "Flash",
        title: "Flash",
        url: "./assets/flash.jpg",
      },
      {
        id: "Batman",
        title: "Batman",
        url: "./assets/batman.jpg",
      },

      {
        id: "Superman",
        title: "Superman",
        url: "./assets/superman.jpg",
      },
      {
        id: "Wonder-Woman",
        title: "Wonder Woman",
        url: "./assets/wonder woman.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbnail = this.createThumbnail(item);
      borderEl.appendChild(thumbnail);

      // Title Text Element
      const titleEl = this.createTitle(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visble", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", {
      src: item.url
    });

    return entityEl;
  },


  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 8.75,
      radiusOuter: 9.5
    });
    entityEl.setAttribute("material", {
      color: "#4942c9",
      opacity: 0.5,
    });

    this.el.setAttribute("cursor-listener", {});
    return entityEl;
  },

  createTitle: function (position, item) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#000",
      value: item.title
    });

    const elPosition = position;
    elPosition.y = -20;

    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);

    return entityEl;
  }
});