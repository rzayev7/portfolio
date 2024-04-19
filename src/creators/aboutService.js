const boxes = document.querySelectorAll(".services .box");

export function bindServicesData(data) {

  boxes.forEach((box, index) => {
    const { id,cardName, cardContent } = data[index];

    const heading = box.querySelector("h3");
    const paragraph = box.querySelector("p");
    heading.textContent = cardName;
    paragraph.textContent = cardContent;

  });

}
