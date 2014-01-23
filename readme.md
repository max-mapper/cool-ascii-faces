# cool-ascii-faces

get some cool ascii faces

[![NPM](https://nodei.co/npm/cool-ascii-faces.png)](https://nodei.co/npm/cool-ascii-faces/)

you can use this on the CLI or from Node or client-side JS programs

there are also a number of projects built on top of the `cool-ascii-face` platform:

- https://github.com/kid-icarus/web-cool-ascii-faces
- https://npmjs.org/package/hubot-cool-ascii-faces
- https://github.com/btford/alfred-cool-ascii-faces

### CLI Usage

```
npm install cool-ascii-faces -g
cool-face [-a | --all]
```

### JS Usage

```
var cool = require('cool-ascii-faces')

console.log(cool())
ᕙ༼ຈل͜ຈ༽ᕗ

console.log(cool())
( ͝° ͜ʖ͡°)

cool.faces // all the faces in one convenient array
[ '( .-. )',
  '( .o.)',
  '( ° ͜ ʖ °)',
  '( ⚆ _ ⚆ )',
  '( ͡° ͜ʖ ͡°)',
  '( ︶︿︶)',
  '( ﾟヮﾟ)',
  '(/)(°,,°)(/)',
  '(¬_¬)',
  '(¬‿¬)',
  '(°ロ°)☝',
  '(´・ω・)っ',
  '(ó ì_í)',
  '(ง ͠° ͟ل͜ ͡°)ง',
  '(ง ͡ʘ ͜ʖ ͡ʘ)ง',
  '(ง •̀_•́)ง',
  '(ง\'̀-\'́)ง',
  '(ಠ_ಠ)',
  '(ಥ_ಥ)',
  '(͡° ͜ʖ ͡°)',
  '(╯°□°）╯',
  '(ง°ل͜°)ง',
  '(｀◔ ω ◔´)',
  '(⌐■_■)',
  '(；一_一)',
  '(ʘᗩʘ\')',
  '(ʘ‿ʘ)',
  '(ಠ‿ಠ)',
  '(ಠ⌣ಠ)',
  '(ಥ﹏ಥ)',
  '(ᵔᴥᵔ)',
  '(•ω•)',
  '(⊙ω⊙)',
  '(◕‿◕)',
  '(•◡•)/',
  '(─‿‿─)',
  '(❍ᴥ❍ʋ)',
  '(☞ﾟ∀ﾟ)☞',
  '(っ◕‿◕)っ',
  '(ノಠ益ಠ)ノ',
  '(ノ・∀・)ノ',
  '(ﾉ◕ヮ◕)ﾉ',
  '(｡◕‿‿◕｡)',
  '(ง⌐□ل͜□)ง',
  '(づ｡◕‿‿◕｡)づ',
  '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄',
  '*<{:¬{D}}}',
  '=^.^=',
  't(-.-t)',
  '| (• ◡•)|',
  '~(˘▾˘~)',
  '¬_¬',
  '¯(°_o)/¯',
  '¯_(ツ)_/¯',
  '°Д°',
  '⚆ _ ⚆',
  '༼ ºººººل͟ººººº ༽',
  '༼ ºل͟º ༽',
  '༼ ºل͟º༼',
  '༼ ºل͟º༽',
  '◔ ⌣ ◔',
  '༼ つ ◕_◕ ༽つ',
  'ง ͠° ل͜ °)ง',
  'ᶘ ᵒᴥᵒᶅ',
  '༼ ͡■ل͜ ͡■༽',
  'ノ( º _ ºノ)',
  'ᕕ( ᐛ )ᕗ',
  'ノ( ゜-゜ノ)',
  '┌( ಠ_ಠ)┘',
  'ヽ( ͝° ͜ʖ͡°)ﾉ',
  'ヽ(`Д´)ﾉ',
  'ლ(´ڡ`ლ)',
  '╚(ಠ_ಠ)=┐',
  'ヾ(⌐■_■)ノ',
  '☜(⌒▽⌒)☞',
  'ლ(ಠ益ಠლ)',
  '〆(・∀・＠)',
  'ᕙ(⇀‸↼‶)ᕗ',
  'ლ(́◉◞౪◟◉‵ლ)',
  '☼.☼',
  'ب_ب',
  'ಠ_ಠ',
  'ರ_ರ',
  '◉_◉',
  '☉_☉',
  'ಠoಠ',
  'ಠ~ಠ',
  '͡° ͜ʖ ͡°',
  'ʕ´•ᴥ•`ʔ',
  'ʕ；•`ᴥ•´ʔ',
  '‎‎(ﾉಥ益ಥ）ﾉ',
  '≧☉_☉≦',
  'ヽ༼° ͟ل͜ ͡°༽ﾉ',
  'ʘ‿ʘ',
  'ಠ‿ಠ',
  'ಠ⌣ಠ',
  '⊙▃⊙',
  '⊙﹏⊙',
  '◔̯◔',
  '◕‿↼',
  '◕‿◕',
  '♥‿♥',
  'ᄽὁȍ ̪őὀᄿ',
  'ಠ╭╮ಠ',
  'ʕ•ᴥ•ʔ',
  'ʕㅇ호ㅇʔ',
  '٩◔̯◔۶',
  '๏̯͡๏﴿',
  '｡◕‿◕｡',
  'ʅʕ•ᴥ•ʔʃ',
  'ᔑ•ﺪ͟͠•ᔐ',
  '﴾͡๏̯͡๏﴿',
  'ɳ༼ຈل͜ຈ༽ɲ',
  '༼ʘ̚ل͜ʘ̚༽',
  'ᕙ༼ຈل͜ຈ༽ᕗ',
  'ヽ༼ຈل͜ຈ༽ง',
  'ヽ༼ຈل͜ຈ༽ﾉ',
  'ヽ༼Ὸل͜ຈ༽ﾉ',
  'ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ',
  'Ѱζ༼ᴼل͜ᴼ༽ᶘѰ',
  'ヽ༼ʘ̚ل͜ʘ̚༽ﾉ' ,
  "(¬º-°)¬",
  "( `·´ )",
  "ʕ◉.◉ʔ"]
cool.faceStream()
// create a readable stream of all the faces
```

## pedants

yes most of these use non-ascii unicode characters but 'unicode art' doesnt have the same ring as 'ascii art'
