var fortunes = [
    "**Oczywiście, że tak ;)**",
    "**Pfff, Nigdy w życiu.. NIE!**",
    "**Głupie pytanie...**",
    "**Chyba sobie żartujesz, takie pytania do mnie? Dostajesz Bana..**",
    "**To pytanie jest na tyle dziwne, że nie znam odpowiedzi**",
    "**Zostałem zaprogramowany przez udoskonalonego Szundera EZ?**",
    "**Nie Jestem Pewien**",
    "**Na Pewno**",
    "**Nie wiem jak odpowiedzieć",
    "**Zostałem zaprogramowany przez udoskonalonego Szundera, lubię każdego, nawet ciebie niestety..**"
];

module.exports = {
    name: "8ball",
    description: "Odpowiada na pytania. Użycie: Wymyśl pytanie i napisz:`*8ball`",


    run(msg) {
        const { channel } = msg
        var wynik = msg.channel.send(fortunes[Math.floor(Math.random() * 8)]);
        msg.channel.send  
    },
}
