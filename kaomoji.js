function onMessageSend(message) {
    //Happy
    message = replaceKaomojiCode(message, ";uwu;", "(´･ω･`)")
    message = replaceKaomojiCode(message, ";yay;", "o(>ω<)o")
    message = replaceKaomojiCode(message, ";sparkle;", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
    message = replaceKaomojiCode(message, ";smile;", "(´･ᴗ･ ` )");

    //dissatisfied
    message = replaceKaomojiCode(message, ";fucku;", "凸(￣ヘ￣)")
    message = replaceKaomojiCode(message, ";seriously;", "(；⌣̀_⌣́)")
    message = replaceKaomojiCode(message, ";wtf;", "(」°ロ°)」");

    //anger
    message = replaceKaomojiCode(message, ";angry;", "(・`ω´・)")
    message = replaceKaomojiCode(message, ";ikillyou;", "↑_(ΦwΦ)Ψ")
    message = replaceKaomojiCode(message, ";rage;", "٩(╬ʘ益ʘ╬)۶");

    //empathy
    message = replaceKaomojiCode(message, ";pat;", "(ｏ・_・)ノ”(ノ_<、)");

    //embarassment
    message = replaceKaomojiCode(message, ";sweat;", "(⌒_⌒;)")
    message = replaceKaomojiCode(message, ";embarassed;", "(⁄ ⁄•⁄ω⁄•⁄ ⁄)");

    //love
    message = replaceKaomojiCode(message, ";love;", "(❤ω❤)");

    //sadness
    message = replaceKaomojiCode(message, ";doh;", "(>_<)")
    message = replaceKaomojiCode(message, ";cry;", ".｡･ﾟﾟ･(＞_＜)･ﾟﾟ･｡.");

    //fear
    message = replaceKaomojiCode(message, ";waaa;", "＼(º □ º l|l)/")
    message = replaceKaomojiCode(message, ";ohfuck;", "＼(〇_ｏ)／");

    //indifference
    message = replaceKaomojiCode(message, ";shrug;", "¯\\_(ツ)_/¯")
    message = replaceKaomojiCode(message, ";iamout;", "ᕕ( ᐛ )ᕗ");

    //confused
    message = replaceKaomojiCode(message, ";wat;", "(・・ ) ?");

    //doubt
    message = replaceKaomojiCode(message, ";doubt;", "(⇀_⇀)");

    //suprised
    message = replaceKaomojiCode(message, ";wow;", "w(°ｏ°)w")
    message = replaceKaomojiCode(message, ";oof;", "(⊙_⊙)");

    //greeting
    message = replaceKaomojiCode(message, ";hey;", "＼(⌒▽⌒)")
    message = replaceKaomojiCode(message, ";oiii;", "(≧▽≦)/");

    //hugging
    message = replaceKaomojiCode(message, ";happyhug;", "(つ≧▽≦)つ")
    message = replaceKaomojiCode(message, ";sadhug;", "(つ . •́ _ʖ •̀ .)つ");

    //winking
    message = replaceKaomojiCode(message, ";wink;", "(^_<)〜☆");

    //hiding
    message = replaceKaomojiCode(message, ";lurk;", "|д･)");

    //running
    message = replaceKaomojiCode(message, ";retreat;", "ε=ε=┌( >_<)┘");

    //sleeping
    message = replaceKaomojiCode(message, ";tired;", "(＿ ＿*) Z z z");

    //cats
    message = replaceKaomojiCode(message, ";cat;", "(=⌒‿‿⌒=)");

    return message;
}

function replaceKaomojiCode(message, code, kaomoji) {
    codeEscaped = escapeRegExp(code)
    //Escape backticks, since they are part of markdown
    kaomojiEscaped = kaomoji.split("`").join("\\`")
    return message.replace(new RegExp(codeEscaped, 'g'), kaomojiEscaped)
}

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}