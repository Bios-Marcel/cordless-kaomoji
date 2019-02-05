function onMessageSend(message) {
    //Happy
    message = message
        .split(";uwu;").join("(´･ω･`)")
        .split(";yay;").join("o(>ω<)o")
        .split(";sparkle;").join("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
        .split(";smile;").join("(´･ᴗ･ ` )");

    //dissatisfied
    message = message
        .split(";fucku;").join("凸(￣ヘ￣)")
        .split(";seriously;").join("(；⌣̀_⌣́)")
        .split(";wtf;").join("(」°ロ°)」");

    //anger
    message = message
        .split(";angry;").join("(・`ω´・)")
        .split(";ikillyou;").join("↑_(ΦwΦ)Ψ")
        .split(";rage;").join("٩(╬ʘ益ʘ╬)۶");

    //empathy
    message = message
        .split(";pat;").join("(ｏ・_・)ノ”(ノ_<、)");

    //embarassment
    message = message
        .split(";sweat;").join("(⌒_⌒;)")
        .split(";embarassed;").join("(⁄ ⁄•⁄ω⁄•⁄ ⁄)");

    //love
    message = message
        .split(";love;").join("(❤ω❤)");

    //sadness
    message = message
        .split(";doh;").join("(>_<)")
        .split(";cry;").join(".｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.");

    //fear
    message = message
        .split(";waaa;").join("＼(º □ º l|l)/")
        .split(";ohfuck;").join("＼(〇_ｏ)／");

    //indifference
    message = message
        .split(";shrug;").join("¯\\_(ツ)_/¯")
        .split(";iamout;").join("ᕕ( ᐛ )ᕗ");

    //confused
    message = message
        .split(";wat;").join("(・・ ) ?");

    //doubt
    message = message
        .split(";doubt;").join("(⇀_⇀)");

    //suprised
    message = message
        .split(";wow;").join("w(°ｏ°)w")
        .split(";oof;").join("(⊙_⊙)");

    //greeting
    message = message
        .split(";hey;").join("＼(⌒▽⌒)")
        .split(";oiii;").join("(≧▽≦)/");

    //hugging
    message = message
        .split(";happyhug;").join("(つ≧▽≦)つ")
        .split(";sadhug;").join("(つ . •́ _ʖ •̀ .)つ");

    //winking
    message = message
        .split(";wink;").join("(^_<)〜☆");

    //hiding
    message = message
        .split(";lurk;").join("|д･)");

    //running
    message = message
        .split(";retreat;").join("ε=ε=┌( >_<)┘");

    //sleeping
    message = message
        .split(";tired;").join("(＿ ＿*) Z z z");

    //cats
    message = message
        .split(";cat;").join("(=⌒‿‿⌒=)");

    //Escape backticks, since they are part of markdown
    message = message
        .split("`").join("\\`");

    return message;
}
