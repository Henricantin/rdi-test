function sendOrderToABS(drinkType, drinkFlavor, drinkSize, orderType, withIce = true) {
    const sodas = ["Coca", "Guaraná"];
    const juices = ["Suco de Uva", "Suco de Laranja"];
    const sodaSizes = [300, 500, 700];
    const juiceSizes = [300, 500];

    if (
        (drinkType === "Refrigerante" && !sodas.includes(drinkFlavor)) ||
        (drinkType === "Suco" && !juices.includes(drinkFlavor))
    ) {
        console.log("Bebida Inválida");
        return;
    }

    if (
        (drinkType === "Refrigerante" && !sodaSizes.includes(drinkSize)) ||
        (drinkType === "Suco" && !juiceSizes.includes(drinkSize))
    ) {
        console.log("Bebida Inválida");
        return;
    }

    const cup = drinkType === "Refrigerante" ? "Copo de Papel" : "Copo de Plástico";

    let ice;
    if (!withIce) {
        ice = "sem gelo";
    } else {
        ice = drinkType === "Refrigerante" ? "6 pedras de gelo" : "12 pedras de gelo";
    }

    const lid = orderType === "Para Viagem" ? "Tampa sem Furo" : "Tampa com Furo";

    console.log(
        `A bebida selecionada, foi servida em: ${cup}, Contendo: ${ice}, com ${drinkSize}ml, e ${lid}`
    );
}

sendOrderToABS("Refrigerante", "Coca", 500, "Para Viagem", false);
sendOrderToABS("Refrigerante", "Guaraná", 700, "Comer Aqui", true);
sendOrderToABS("Suco", "Suco de Laranja", 300, "Comer Aqui", true);
sendOrderToABS("Suco", "Coca", 500, "Comer Aqui", true);