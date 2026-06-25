
    (function() {
      'use strict';

      // =============================================================
      // 1. 歌曲数据（可在此数组直接替换为自己的专辑与音乐）
      // =============================================================
      var songs = [
        { name: '3分29秒', artist: 'HITORIE', cover: '素材/3分29秒 .jpg', audio: '素材/3分29秒.mp3',
          lyricText: '作词: シノダ\n作曲: シノダ\n\n哀願しても懇願しても\n哀求也好、恳求也好\n変わらないや もう\n都是不会改变的吧\n踏み躙られるだけの花\n（作为）只能被人践踏的花\nあなたの声を\n我不会忘记的吧\n忘れはしないだろう\n你的声音\n風に吹かれて散り散りになって\n被风轻吹着 那样四散而去了\nその 昏昏たる水晶体には\n（在）那个 昏暗的水晶体上\n映らない未来\n映照不出未来\n未来\n未来\n哀願しても懇願しても\n哀求也好、恳求也好\n変わらないや もう\n都是不会改变的吧\n踏み躙られるだけの花\n（作为）只能被人践踏的花\n傍観してる造反してる\n既是旁观、既是造反\n見ない振りしている\n既是熟视无睹\nそんなあなたを僕は見ている\n我在看着那样的你\n安心しなよ\n放心吧\n僕達みんないつだって\n我们大家无论何时\nやることは同じさ\n做的都是一样的事情啊\n僕らの感情のどれ一つとしても\n无论是我们的哪一种感情\nその眼に映ることのないもの\n（都是）那双眼睛里映照不出的东西\nあなたのようになれは\n我不会像你那样\nしないんだよ\n过分亲切\nなろうとも\n即使是成为了\nそうしたいとも思わないんだよ\n也不想要那样去做\nこの混沌から真相までも\n（从）这个 混沌到真相\n全部全部下らない芝居\n全部都是无聊的戏剧\nもうわかりきってるなら\n如果你已经明白了的话\n臆病風に吹かれながら\n即使吹拂着怯懦的风\n想い馳せるだけの日々を\n也在回忆着的那些日子\n終わらせて\n让它结束吧\n哀願したよ散々した\n我哀求着你 显得很狼狈、\nそれでどうだった？\n那结果又怎样呢？\n意味の無いことの集合体だ\n是毫无意义的事情的集合体\n傍観してる造反してる\n既是旁观、既是造反\n見ない振りしている\n既是熟视无睹\nそんなあなたを僕は知っている\n这就是我所知的你\n愛憎 二転三転 グレーゾーン\n爱恨、二转三转、灰色地带\nどうかなっちゃいそう\n好像有点不对劲啊\n醜いでしょう？\n很丑陋对吧？\nそれは否定しないけど\n我并不否认这一点\n傍観者も共犯者\n既是旁观者、既是共犯者\n見ない振りしているあなたも\n既是熟视无睹\nまた それに等しく\n你也（和他们）是等同的\n安心しなよ\n放心吧\n僕達みんな終わるまで\n我们大家直到结束\nやることは同じさ\n做的都是一样的事情啊' },
        { name: '風、花', artist: 'HITORIE', cover: '素材/風、花.jpg', audio: '素材/風、花.mp3',
          lyricText: '作词: シノダ\n作曲: ゆーまお\n\n 透き通るよな思いだけが明日になれたらいいね\n期望我们的明天 仅有那透明澄澈的回忆就好\n そしたらきっと僕はずっとここで眠るだけさ\n这样的话 我便只需长眠于此吧\n 君はもう行くといいよ、丁度日が差し始めた\n你也应该出发了吧、恰巧遇上那太阳升起\n 忘れ物無いように、取りに帰っては来れないよ\n可不要忘记东西哦、不然可就没机会再回来了\n 君の視界に僕が映っただけでも\n若你视野内 能够映出我们的身影\n 奇跡のようだ\n那便是奇迹啊\n 透き通るよな思いだけが明日になること知った\n知晓了我们的明天 将是那透明澄澈的回忆\n そしたらきっと僕はもう君とは行けないから\n这样的话 我便不能再与你同行了吧\n さよなら風よ、花よ\n再见了 风啊、花啊\n 眠ることの無いストーリーよ\n还有那辗转难眠的故事\n 君のように優しくあれたらな\n能像你一样温柔就好了\n とか思ってしまうよ\n我有时会这样遐想\n 心の奥底でギュッと\n在内心深处紧抓住的\n 在り続けなきゃいけないもの\n是必须要继续存留下来的东西\n 今にも失くしそうな\n而如今它又将失去\n 僕を飛ばすかの様に吹いた\n刮起来的风仿佛是要把我吹走\n 悪戯めいた風が気まぐれに\n恶作剧般的风这样反复无常\n 咲かせた花は美し過ぎた\n绽放开的花却又过于美丽\n 瞼を貫いて瞳の奥で焦げ付いたまんま\n这份贯穿眼睑而于瞳孔深处烧焦的瞬间\n 消えないよ\n是不会消失的吧\n 透き通るよな思いだけが明日になるらしいね\n似乎要到来的我们的明天 会是那透明澄澈的回忆\n そしたらきっと僕はもう君とは行けないのさ\n这样的话 我必定不能再与你同行了吧\n さよなら風よ、花よ\n再见了 风啊、花啊\n もう交わること無いストーリーよ\n还有那了无交集的故事\n 君が僕に優しかったこと\n你对我是如此温柔\n 胸に抱いて眠るよ\n我会将其抱入心中沉眠' },
        { name: 'curved edge', artist: 'HITORIE', cover: '素材/curved edge.jpg', audio: '素材/curved edge.mp3',
          lyricText: '作词: シノダ\n作曲: シノダ\n\n味の無いドロップ　嗚呼ベロの裏でうずくまる\n食之无味的水果糖 蹲据在舌下\n今は何時で　そんでいつまでこうしてたらいいの\n现在几点了 打算一直这样到什么时候\nこんな静けさしかない夜\n这只剩寂静的夜晚\n這いずる腑抜けたしがないモンスター\n匍匐在地面卑微窝囊的野兽\n今に引き摺り込まれるだろうな\n此刻被强行卷入无法逃脱了吧\n誰も助けてくれないだろうな\n已经不会有谁来解救我了吧\nならいっそこのままで\n算了干脆就这样吧\n何億光年彼方へ\n就这样去往几亿光年外的彼岸吧\n想像だにしない未来へ\n向着无法预料的未来吧\n猟奇的なこの痛みで\n带着那诡异的疼痛吧\nほらbring it back to me　不自由な心\n喂 回到我身边吧 被束缚的心\nただならなくて　ままならなくて\n只是并未响彻 只是尚未响彻\n何かちょっと嫌な感じ\n好像有点讨厌的感觉呢\n君ならどうすんの　駄作と解っても\n是你的话会怎么做 即使知道是如此窘境\n消え去りたくない　壊されたくない\n不想就此消逝 不想就此被摧毁\nほら面倒臭いね\n啊真是麻烦死了\n帳消しにしちゃいたいね\n好想将一切一笔勾销\none two\n1 2\n誰もいない水槽　夢見るプランクトンの揺り籠\n无人居住的水槽 浮游生物睡梦的温床\nハナから人間性塗りかえようなんて\n彻头彻尾的重置人性之类的\n出来ゃしないの\n怎么可能做得到\nどうしても静か過ぎるこの夜に\n在这过于死寂的夜晚里\n文字を並べて銃を持たすんだ\n排列好文字后捡起那把枪\n誰か撃ち抜くわけじゃあるまいし\n并不是想要击毙谁\n開く夢などあるわけじゃないし\n更不是因为有了什么目标\nただ頭ん中で\n只是在脑海之中\n何億回も繰り返して\n数亿次循环反复\n想像でしかない舞台へ\n登上仅存于想象中的舞台\nゴミみたいなバンズ履いて\n穿着磨损至废品一般的VANS\n期待しないは承知の上\n意料之中的不抱期待\n常識なんて範囲外で\n常规什么的远在范围之外\n超ピーキーなハイが鳴いて\n心潮澎湃的欢呼围绕耳边\n三桁W コーン揺らして\n三位数的肆意狂笑和躁动\nまたプリング·ハンマリング繰り返して\n来回反复勾弦后锤弦\nまたプリング·ハンマリング繰り返して\n来回反复勾弦后锤弦\nまたプリング·ハンマリング繰り返して\n来回反复勾弦后锤弦\nまたプリング·ハンマリング繰り返して\n来回反复勾弦后锤弦\nbring it back to me　不自由な心\n回到我身边吧 被束缚的心\nbring it back to me　不自由な心\n回到我身边吧 被束缚的心\nほらdrilling　白昼に無慈悲なほど\n看啊 是谁如此狠心的击穿了这个白昼\n風穴開けて　瞼の裏まで\n永无止境的狂风 吹进眼底\nこんなクソみたいな現実見させられてもまだ尚\n被迫接受这垃圾一样的现实 但现在还不是放弃的时候\n僕ら不健全な瞬間に飢えて飢えて仕方無いのさ\n因那不健全的瞬间而无药可救饥渴着的我们\nやめられやしないね　もう戻れやしないね\n已经无法中途放弃 却也无法原路返回\nほら面倒臭いフレーズ　聴神経に突き刺され\n那么 就用这麻烦透顶的乐句 去刺穿听觉神经吧\none two\n1 2' },
        { name: 'NOTOK', artist: 'HITORIE', cover: '素材/NOTOK.jpg', audio: '素材/NOTOK.mp3',
          lyricText: '作曲: wowaka\n编曲: ヒトリエ\n作词: wowaka\n\n 戯言たちは風任せ\n就让那些戏言随风而去吧\n 息を呑んだ少女、夢任せ\n少女深吸一口气 将自己交由梦境\n 嗚呼、\n啊啊\n 終いにこの街の色も\n最终这片街道的色彩\n 誰も気付かず変わるのでしょう\n在不知不觉间 就已面目全非\n 振出しまで戻れどまだ\n纵是回到原点\n 息を止めることはできないな\n也依然无法停下呼吸\n 誰一人と視得ないのは\n之所以谁都无法看见\n 誰一人あたしじゃないから\n是因为谁都不是我啊\n 宵闇を切る鴉と\n乌鸦飞过苍茫暮色\n 朝に怯える声\n口中鸣啼 似在畏惧晨曦\n もう良いよ、って\n"已经足够了"\n 確かめたくて\n却想要对一对心中的答案\n あの娘を探してる\n于是寻找起她来\n その果てに視た答えを\n为这颗心送上\n この心にくれよ\n你在最后看到的答案吧\n それが誰かを\n纵使那会成为\n 傷つけたとしても\n谁人心中的伤\n それでも人は続く\n可人们依旧要活下去\n 呼吸をやめるまで\n直至呼吸停止为止\n その声を焦がし尽すまで\n直至喉咙嘶哑 声嘶力竭为止\n あの娘の夢が覚め\n直至她从梦中醒来\n 空が白むのなら\n晨曦划破黑暗为止\n この戯言だって良いだろう\n这些戏言 也已无妨\n 数秒で終わる世界を\n这转瞬就可结束的世界\n 何処までも続けたいんだ\n我想让它永远转动下去\n 正解不正解なんて\n无论对与错\n あたしの中にしかないわ\n都只存在于我的心中\n 戯言たちは風任せ\n就让那些戏言随风而去吧\n 嗚呼、\n啊啊\n 息を呑んだ少女、夢任せ\n少女深吸一口气 将自己交由梦境\n 嗚呼、\n啊啊\n 宵闇を切る鴉と\n乌鸦飞过苍茫暮色\n 朝に怯える声\n口中鸣啼 似在畏惧晨曦\n もう良いよ、って\n"已经足够了"\n 確かめたくて\n想要对一对心中的答案\n あの娘を探してる\n于是寻找起她来\n その果てに視た答えを\n为这颗心送上\n この心にくれよ\n你在最后看到的答案吧\n それが誰かを\n纵使那会成为\n 傷つけたとしても\n谁人心中的伤\n それでも人は続く\n可人们依旧要活下去\n 呼吸をやめるまで\n直至呼吸停止为止\n その声を焦がし尽すまで\n直至喉咙嘶哑 声嘶力竭为止\n あの娘の夢が覚め\n直至她从梦中醒来\n 空が白むのなら\n晨曦划破黑暗为止\n この戯言だって良いだろう\n这些戏言 也已无妨\n それでも人は続く\n可人们依旧要活下去\n 呼吸をやめるまで\n直至呼吸停止为止\n その声を焦がし尽すまで\n直至喉咙嘶哑 声嘶力竭为止\n あの娘の夢が覚め\n直至她从梦中醒来\n 空が白むのなら\n晨曦划破黑暗为止\n この戯言だって良いだろう\n这些戏言 也已无妨\n 数秒で終わる世界を\n这转瞬就可结束的世界\n 何処までも続けたいんだ\n我想让它永远转动下去\n 正解不正解なんて\n无论对与错\n あたしの中にしかないわ\n都只存在于我的心中\n あたしの中にしかないわ\n都只存在于我的心中' },
        { name: 'アンノウン・マザーグース', artist: 'HITORIE', cover: '素材/アンノウン・マザーグース .jpg', audio: '素材/アンノウン・マザーグース.mp3',
          lyricText: '编曲: wowaka\n作词: wowaka\n作曲: wowaka\n\nあたしが愛を語るのなら その眼には如何、映像る？\n若要由我来谈论爱的话、在那双眼中映出的又是何等景象？\n詞は有り余るばかり 無垢の音が流れてく\n言辞都是过剩多余 无垢的音色流动而去\nあなたが愛に塗れるまで その色は幻だ\n在你被爱涂满之前 那景色也不过是幻想\nひとりぼっち、音に呑まれれば 全世界共通の快楽さ\n一个人孤单地就此被音乐吞没 这是世界共通的快乐吧\nつまらない茫然に溺れる暮らし 誰もが彼をなぞる\n沉溺在无聊的茫然中生活着 谁都是这样效仿着他\n繰り返す使い回しの歌に また耳を塞いだ\n用循环往复随意切换的歌 再次将耳朵堵塞\nあなたが愛を語るのなら それを答とするの？\n若要由你来谈论爱的话 就要让那成为答案么？\n目をつぶったふりをしてるなら この曲で醒ましてくれ！\n若你闭上眼睛装作看不见的话、就在这曲中给我醒来！\n誰も知らぬ物語 思うばかり\n光是想着谁也不知道的故事\n壊れそうなくらいに 抱き締めて泣き踊った\n快要坏掉一般紧拥着哭泣着跳了舞\n見境無い感情論 許されるのならば\n无法分辨的感性论也能被允许的话\n泣き出すことすらできないまま 呑み込んでった\n就保持这连哭出来也办不到的样子 全都咽下去吧\n張り裂けてしまいそうな心があるってこと、\n抱有着快要碎裂掉的心脏的事情\n叫ばせて！\n让我大叫出来吧！\n世界があたしを拒んでも 今、愛の唄 歌わせてくれないかな\n即使世界将我拒绝 至少此刻、能否让我唱起爱的歌谣？\nもう一回 誰も知らないその想い\n再一次 将那谁也不知道的思念\nこの声に預けてみてもいいかな\n试着寄托于这声音中也可以吗\nあなたには僕が見えるか？\n在你眼中能够看见我吗？\nあなたには僕が見えるか？\n在你眼中能够看见我吗？\nガラクタばかり 投げつけられてきたその背中\n总是被投掷着无用杂物的那个背影\nそれでも好きと言えたなら\n即使那样也能说出喜欢的话\nそれでも好きを願えたら\n即使那样也能想要喜欢的话\nああ、あたしの全部に その意味はあると――\n啊啊、那我的一切 就都有了意义——\nねえ、愛を語るのなら 今その胸には誰がいる\n呐、若要谈论爱的话 此刻在那心里的是谁呢\nこころのはこを抉じ開けて さあ、生き写しのあなた見せて？\n撬开内心的箱子 来吧、让我看看生动的你？\nあたしが愛になれるのなら 今その色は何色だ\n若我能够成为爱的话 此刻那颜色又是什么颜色\n孤独なんて記号では収まらない 心臓を抱えて生きてきたんだ！\n抱着无法用孤独之类的符号定义的心脏 我正是这样活下来的啊！\nドッペルもどきが 其処いらに溢れた\n仿冒的分身从那处满溢\n挙句の果ての今日\n到头来变成了今天这样子\nライラ ライ ライ\nLAILA LAI LAI\n心失きそれを 生み出した奴等は\n生产出心灵缺失的那群家伙\n見切りをつけてもう\n已经放弃了也\nバイ ババイ バイ\nBYE BBYE BYE\n残されたあなたが この場所で今でも\n被留下来的你 即使此刻也在这个地方\n涙を堪えてるの\n忍耐着眼泪吗\n如何して、如何して\n为什么啊、为什么啊\nあたしは知ってるわ\n我是知道的啊\nこの場所はいつでも あなたに守られてきたってこと！\n这个地方一直以来都为你所守护着的事情！\n痛みなどあまりにも慣れてしまった\n痛楚什么的未免也过于习惯了\n何千回と巡らせ続けた 喜怒と哀楽\n数千回地往复持续的 喜怒和哀乐\n失えない喜びが この世界にあるならば\n若有不会失去的喜悦存在于这世上的话\n手放すことすら出来ない哀しみさえ あたしは\n那么我要将连放手都做不到的悲哀也\nこの心の中つまはじきにしてしまうのか？\n从这心中排除出去吗？\nそれは、いやだ！\n那样的、我不要啊！\nどうやって この世界を愛せるかな\n要怎样做、才能爱着这个世界呢？\nいつだって 転がり続けるんだろう\n明明一直以来都 不断地在跌倒吧\nねえ、いっそ\n呐、干脆\n誰も気附かないその想い\n将谁也没有察觉到的那思念\nこの唄で明かしてみようと思うんだよ\n用这首歌尽诉出来吧\nあなたなら何を願うか\n是你的话会祈愿什么呢？\nあなたなら何を望むか\n是你的话会期望什么呢？\n軋んだ心が 誰より今を生きているの\n挣扎的心 比谁都更加确实地活在当下吗\nあなたには僕が見えるか\n在你眼中能够看见我吗？\nあなたには僕が見えるか？\n在你眼中能够看见我吗？\nそれ、あたしの行く末を照らす灯なんだろう？\n那正是、照亮我前方路途的灯吧？\nねえ、あいをさけぶのなら\n呐、若要大声嘶喊出爱的话\nあたしはここにいるよ\n我就在这里哦\nことばがありあまれどなお、 このゆめはつづいてく\n言语都是过剩多余 这梦境也将持续下去\nあたしがあいをかたるのなら\n若要由我来谈论爱的话\nそのすべてはこのうただ\n那一切都已在这首歌中\nだれもしらないこのものがたり\n谁也不知道的这个故事\nまたくちずさんでしまったみたいだ\n好像又不小心哼唱出来了' },
        { name: 'オン・ザ・フロントライン', artist: 'HITORIE', cover: '素材/オン・ザ・フロントライン.jpg', audio: '素材/オン・ザ・フロントライン.mp3',
          lyricText: '作曲: ゆーまお\n编曲: ヒトリエ\n\n 数多の感情犠牲にして現在に至った\n走到这里 是牺牲了多少感情\n あなたに触れた指先も\n还有本已触碰到你的指尖\n 失っちゃいけない世界は此処だった\n不能失去的世界 其实就在此处\n だから僕は行くのだろう\n所以我才要前去吧\n その先へ\n往前方去\n 思えば遠くまで来たんだ\n想来居然走了这么远\n 幻を泳いで居たんだ\n曾一直在幻境中潜游\n ただ強く在れと願った\n只希望自己能更强些\n 正解無い世界、心ひとつだけじゃ\n如果仅凭一颗心 穿行在没有正确可言的世界\n 守れないものばかりに押し潰されるだけさ\n只会被无法守护的东西把自己压垮而已\n 僕が僕のままで居れば\n如果我还是那个我\n あなたをいつか失う\n总有一天会不再保有你\n 疼くことをやめない傷が\n一直疼痛的伤口\n 明日へと誘う\n带我向明天\n 取り返しようのない喪失というリザルト\n那名为丧失的结果无法改变\n 告げられたんだ無力さを\n此时才深知自己的无力\n 終わらせちゃいけない世界の色彩は\n不应断绝的世界之色彩\n 消えない後悔も焼き付ける、瞳の奥に\n和永远的遗憾一起被我看在眼里\n まだ強くなれ、と聞こえた\n我听见谁说 我还应该变强\n 正解無い世界、心ひとつだけを\n穿行在没有正确可言的世界\n 守るべきもの全てに捧げる為さ\n我也只有把我真心献给理应守护的一切\n 僕が僕のままで居れば\n如果我还是那个我\n あなたをいつか失う\n总有一天会不再保有你\n 疼くことをやめない傷は\n一直疼痛的伤口\n 涙じゃ消えないんだ\n眼泪是不能令其愈合的\n それくらいは知っている\n这点道理我还是了解的\n 僕が僕のままで居ても\n即使我还是那个我\n 許されるいつかを探している\n也还需等待被原谅的那一天\n 願いも望みも祈りさえも\n假使愿望期望祈祷\n 意味を為さないなら\n全都失去了意义的话\n 数多の感情犠牲にして現在に至った\n走到这里 是牺牲了多少感情\n あなたに触れた指先で\n那本已触碰到你的指尖\n 失っちゃいけない想いだけをなぞった\n只能拿来铭记不能失去的回忆\n そして僕は行くのだろう\n于是我即将要前去\n その先へ\n往前方去' },
        { name: 'ジャガーノート', artist: 'HITORIE', cover: '素材/ジャガーノート.jpg', audio: '素材/ジャガーノート.mp3',
          lyricText: '作词: シノダ\n作曲: シノダ\n\n ねぇ、何笑ってんの\n喂、你在笑着什么呢?\n 俺まだわかんないの\n我还仍然不知道啊\n 洒落臭い妄言と\n听起来不过是\n その場凌ぎにしか聞こえないの\n我还不懂的恢弘妄言和敷衍了事罢了\n まだラジオ聴いてんの\n还在听着收音机啊\n なに味な真似しちゃってくれてんの\n模仿着什么味道的\n I miss you, baby で泣いてんの\n＂I miss you baby＂在哭着呢\n 俺もまだそこに居ちゃってんの\n我也还是停留在那里啊\n アプリケーション、アプリケーション\napplication application\n 浅ましいぜ\n真肤浅啊\n 世界中が俺に跪け\n全世界都向我跪下吧\n アイムソーリー\nI\'m sorry\n キャーニュースピークジャパニーズ？\nCan you speak Japanese?\n 冷蔵庫の中から\n"我爱你喔"\n 愛してる、愛してるって聞こえる\n在冷藏库中听见了这样的声音\n エビバディ、ちゃんと仕事してる？\neverybody 有好好工作吗?\n 俺はしてないぜ\n我可没有喔\n だってギターしか弾けないし\n因为吉他以外的我通通不会啦\n 協調性、協調性だ\n奏起协调性吧\n 共感性、共感性だ\n掀起同理心吧\n そんなんもうベロベロバー\n真是的peroperopa——\n 名前も知らないような刑罰を\n不知名的刑罚\n 食らわされ続けてるみたいな日々を\n每天都像被折磨着一样\n なるべく悟られまいと過ごす\n尽量不让人察觉\n 口開けば倫理に見つかっちまう\n一开口就合乎伦理啦\n まだラジオ聴いてんの\n还在听着收音机啊\n なに味な真似しちゃってくれてんの\n模仿着什么味道的\n I miss you, baby で泣いてんの\nI miss you baby在哭着呢\n 俺もまだそこに居ちゃってんの\n我也还是停留在那里啊\n コミュニケーション、コミュニケーション\ncommunication communication\n 厚かましいぜ\n真是厚颜无耻啊\n 世界中が俺を踏み潰す\n全世界都将我践踏击溃\n 大嫌いなあいつらがやってくる\n最讨厌的那些家伙要来了\n アイムソーリー\nI\'m sorry\n キャーニュースピークジャパニーズ？\nCan you speak Japanese?\n 冷蔵庫の中から\n"我爱你喔"\n 愛してる、愛してるって聞こえる\n在冷藏库中听见了这样的声音\n エビバディ、ちゃんと仕事してる？\neverybody 有好好工作吗?\n 俺は忙しいぜ\n我可是忙着呢\n だってギター弾かなきゃいけないし\n因为不弹吉他是不行的啊\n 愛してる、愛してるって言わされる\n＂我爱你＂让我这样说出口吧\n 協調性、協調性だ\n奏起协调性吧\n 共感性、共感性だ\n掀起同理心吧\n そんなんもうベロベロベロベロバー\n真是的peroperopa——\n 滚动歌词贡献者：已过期i\n 翻译贡献者：Uka宝\n 02:43\n ジャガーノート- ヒトリエ\n 全部评论714' },
        { name: 'ポラリス', artist: 'HITORIE', cover: '素材/ポラリス.jpg', audio: '素材/ポラリス.mp3',
          lyricText: '作词: wowaka\n作曲: wowaka\n\n誰が止められるというの\n像是被谁阻止了一般\n心が叫んだ声を\n这心中的嘶喊声\nああ 今すぐに伝えなくっちゃ\n啊啊 如今不立刻传达出来不行啊\nいけない気がしたんだよ\n如此意识到\n世界はなぜだか知らん顔\n世界不知为何摆出了浑然不知的神情\n僕はいつも空回り\n我便只是一直在原地踏步\nああ 出会いの数は1つで良い。\n啊啊 相遇只要有一次便足够了\n君がそこにいさえすればいい\n只要你在那里就足够了\n何処に行くにも彷徨って\n不管去到何处都在彷徨着\n間違うばかりの日々だ\n尽是错误的日子\nああ 僕はうまくやれるかな\n啊啊 我能把一切都做好吗\nまた泣きそうになったよ\n好像又变得有点想哭了\n「きっとあなたは大丈夫」\n【你一定没有问题的】\n「とても強い人だから」\n【因为你是个很强大的人啊】\nその言葉の奥で笑う顔\n那句话语的深处展露的笑颜\nいつも救われていたの\n总是能够将我拯救\n何億通りの細胞で\n即使是上亿的细胞\n反応したあの日の君だって\n都在做出反应的那日的你\nこの胸に刻まれた痛みは\n铭刻在这心中的痛楚\n想像なんてしてましたか\n有想象过吗\nこれほど繰り返した感情で\n如此这般轮回往复的感情\n一体何を答えたらいい？\n究竟又该如何回应呢\nこれだけ積み重ねた年月で\n只是这样堆砌累加的岁月\n一体何を歌えばいい？\n究竟又该如何歌唱才好呢\n忘れられるはずもないけど\n虽然没可能会忘记\n君の声を聞かせてほしくて\n仅是想要听到你的声音\n泣きじゃくれる場所を見つけて\n找到了能够放声哭泣的地方\n叫んでしまいたいだけ\n仅仅是想纵情呼喊而已\nひとりきりでも続く生\n即便孤身一人也不断延续的生命\n夢の終わりを告げる声\n有个声音宣告了梦的终结\n誰も居ない道を行け\n向无人之径前行吧\n誰も止められやしないよ\n已经任谁也无法阻止了哦\nまた一歩足を踏み出して\n再向前迈进一步\nあなたはとても強い人\n你是足够强大的人\n誰も居ない道を行け\n向无人之径前行吧\n誰も居ない道を行け\n向无人之径前行吧\nどれだけ涙を流して\n无论流下多少泪水\n明けない夜を過ごしただろう\n也要度过这永无黎明的长夜吧\nその全ての夜に意味はある\n这一切的夜晚都有其意义\nそう信じて止まないんだよ\n无法克制的如此坚信\nきっとあなたは大丈夫\n你的话一定没问题的\n誰より一人を知ってる\n比谁都更明白孤独的你\nこの言葉の意味すら超えてさ\n就将那话语的意义尽数超越\nとても強い人だから\n因为是无比强大的人啊\n何千何万回繰り返した\n数千万次重复的\n自問自答の果てはどうだ\n那自问自答的结果又如何呢\n孤独だとか騙さだとか\n孤独也好欺瞒也罢\n私以外の誰もわかるはずがない\n除我以外谁都不可能明白\n掃き溜めのなく光る宝石に\n毫无保留的闪耀着的宝石\nその瞬きにうずくまって\n潜藏在那个瞬间\nでも一体私は誰なんだって\n但是说到底我究竟是谁啊\n呼べるほど弱くはなくて\n并不如说的那般弱小\n色褪せる誇りを知れたのは\n知晓了那已褪色的骄傲\n誰でもなくあなたのせいで\n不是旁的任何人 是你的错啊\n僕はどれだけ何を与えることが\n我会给你多少 给你什么\nできていたのでしょうか\n才能将其完成呢\nこの胸にこの歌一欠片の\n这心中的这首歌的微小碎片\n灯りの意味を今言うよ\n将其点亮的意义就在此宣告\n喜怒哀楽\n喜怒哀乐\n全てが僕の譲れない光だってこと\n全部都是我不会相让的 成为这光亮的东西\nどこにでも行けるはずだ\n应该是哪里都可以到达的\nその光に従って\n只要顺着那光明的指引\n何も言わずともきっと\n就算什么都不说 也一定\n君は知っているはずだろう\n你也一定是明白的吧\nその一歩足を踏み出した\n就踏出那样的一步吧\nあなたはとても強い人\n你是十分强大的人啊\n誰も居ない道を行け\n向无人之径前行吧\n誰も居ない道を行け\n向无人之径前行吧\n疑うことばかり覚えた\n意识到总是一些让人怀疑的事情\n僕らが立つ未来で\n在我们所到达的那未来\n声を枯らして\n想要声嘶力竭的\n叫びたい 叫びたいと\n呼喊 呼喊\n夢を歌うことすら忘れていたけれど\n就算忘记了咏唱梦想的歌谣\n今どうしようもなく\n如今无论如何\n伝えたい\n都想传达\n忘れられるはずもないだろう\n一定无法将其忘记吧\n君の声が今も聞こえる\n直到现在也能听到你的声音\n泣き笑い踊り歌う\n哭泣着 欢笑着 舞蹈着 歌唱着\n未来の向こう側まで行こう\n向未来 前进吧\nひとりきりのこの道も\n即使是孤身一人的这条道路\n覚めない夢の行く先も\n即使是这不会醒来的梦的前方\n誰も知らぬ明日へ行け\n向无人知晓的明日前行吧\n誰も止められやしないよ\n已经任谁也无法阻止了哦\nまた一歩足を踏み出して\n再向前迈进一步\nあなたはとても強いから\n你是十分强大的人啊\n誰も居ない道を行け\n向无人之径前行吧\n誰も居ない道を行け\n向无人之径前行吧' },
        { name: 'みにくいかたち', artist: 'HITORIE', cover: '素材/みにくいかたち.jpg', audio: '素材/みにくいかたち.mp3',
          lyricText: '作曲: シノダ\n编曲: ヒトリエ\n\n 君は冷たく、熱くて、雨曇り\n你是如此冰冷、如此炽热、简直就像雨云那般\n こんなのって教室で終えて来た筈でしょう\n可这一切 不是本应在教室里 早早落下帷幕吗\n 掛け違い\n阴差阳错\n 季節が僕らを追い越して、\n四季将你我抛在了身后\n たくらみは全てゼロになる\n一切计划 都归作了零\n 画面の中で君は笑っていた\n屏幕中的你 笑意不减\n I feel dysmorphia\n我似乎早已面目全非\n 言えない、言えない、言えない\n说不出口、说不出口、说不出口\n それはとても綺麗な言葉\n那字句如此炫目\n 嘘みたいに眩しくて\n却又如谎言般耀眼\n ああ、醜い、醜い\n啊啊、如此丑陋、如此丑陋\n 僕が声に出してしまえたら\n只要我说出口来\n 救われてもいいんだって。\n是否就得到了 获得救赎的资格\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n 僕は\n我将…\n I feel dysmorphia\n我似乎早已面目全非\n 言えない、言えない、言えない\n说不出口、说不出口、说不出口\n それはとても嫌いな言葉\n那些字句 是那么面目可憎\n 嘘みたいに卑しくて\n如同谎言般卑劣\n ああ、醜い、醜い\n啊啊、如此丑陋、如此丑陋\n 僕が声に出してしまったら\n倘若我竟能说出口来\n でも駄目なんでしょう？どうせ\n不过我也没有说出口的资格吧？反正\n 消えたんだとさ、ほらね。\n早就已经消失不见了 你看\n 今、犯行時刻23:58\n此刻正是作案时间 23:58\n 愛も恋も裏っ返しだ。\n爱与恋都彻底颠倒\n 僕が彷徨う森の方位磁石が回る\n我迷失在密林之中 指南针不停旋转\n 君に齧られた歯形だけが\n唯有你留下的齿痕\n あたかも傍に居るかのように\n让我感到 你似乎还在我身旁\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我\n ああ、醜い醜い醜い醜い醜い醜い僕は\n啊啊、如此丑陋 丑陋 丑陋 丑陋 丑陋 丑陋的我' },
        { name: 'ワンミーツハー', artist: 'HITORIE', cover: '素材/ワンミーツハー.jpg', audio: '素材/ワンミーツハー.mp3',
          lyricText: '作词: wowaka\n作曲: wowaka\n\n「ねえ！その心を貸してよ、\n「喂！把那颗心借给我吧、\n扉を開けてしまうから。」\n我会把大门打开的。」\n忘れてた理想に沿って\n顺着忘记的理想\nニヤリ笑う\n轻松地笑一笑\nソレを見たいんだよ\n我想看那样的你啊\n最近やたらと視界がぼやけるし、\n最近总感觉视野模糊、\nお決まりの暮らしを繰り返す\n反复着已决定的生活\n柄にもない台詞を覚えたけど\n尽管记着没品的台词\n声にゃならないな\n却不成声啊\n『最近どうだい？』\n『最近怎么样？』\n尋ねられてさ\n被询问啦\n不思議な気分になるけど\n尽管有点不可思议的感觉\nもうだいぶ強がってみたから\n但是已经在试着逞强了呢\nそれもありだろう\n也有那种情况吧\n私の裏側の私が\n我身体里的我\nくしゃくしゃの顔で言うんだ\n以纠结的表情说着\n『染まらない私をもっと昂ぶらせてみてほしいの』\n『好想试着让一尘不染的我更加高傲啊』\n「ねえ！その心を貸してよ、\n「喂！把那颗心借给我吧、\n扉を開けてしまうから。」\n我会把大门打开的。」\n忘れてた理想ってやつも、\n连忘记的理想那家伙也、\nつまりそれは私そのもの。\n就是说那就是我本身。\n『ねえ！その瞳を貸してよ、\n『喂！把那双眼借给我吧、\nあなたを見てあげるから。』\n我会看着你的。』\nひとりきりのつもりだって、\n"我打算一个人过"、\n揺れる\n动摇啊\n揺れる\n动摇啊\n私の心の臓。\n我的心脏。\n正解なんてない問題の羅列\n没有正解的问题罗列\n世界はくるり回る\n世界团团转\nこちらにとっちゃ正しい言葉が\n对这边来说没错的\nあちらじゃ間違ってら\n对那边来说是错的\n境界なんてない、裏と表の\n没有任何边界、里面与表面\nどちらでもあれる私の\n两面都是如此荒芜再次\n臨界点の今日をまた描いて\n描绘出我今天的临界点\n夢に、化けて出るんだ\n在梦中、变成鬼戏耍着我\n「私の裏側の私も知りやしない私探すの」\n「我身体里的我也在寻找着未知的我」\nイメージも虚ろなその像！\n连印象都那么空虚的影像！\nまどろみだす風景！\n开始打盹的风景！\n『あなたの声を貸してよ、\n『把你的声音借给我吧、\n心で歌ったげるわ。』\n我会用心为你歌唱的呀。』\n余計なお世話と\n多管闲事\n笑い飛ばすことができない私がいること\n有一笑了之都做不到的我存在着\nねえ、その心を貸しても\n喂、就算借给我那颗心\n決して変わることないでしょう？\n也绝对不会改变吧？\nひとりきりにはなれないって\n"怎么就成不了一个人啊"\n叫ぶ\n呼喊着\n叫ぶ\n呼喊着\n私の心の臓。\n我的心脏。\n境界なんて無いくらい\n没有任何边界\nそこにいない私に意味は無い\n对不在那里的我没有意义\n臨界なんて無い世界\n没有任何临界的世界\nそこにいたい私に意味は無い\n对想去那里的我没有意义\nああ、そうやって捻り込むんだね？\n啊啊、你是如此拧进去的呢\nでもそれにゃおそらく意味は無い。\n但是那恐怕没有意义。\nそうやって笑い飛ばすのかい？\n你是如此一笑而过的吗？\nでもそれにもおそらく意味は無い。\n但是这恐怕也没有意义。\n私の裏側の私\n我身体里的我\n当たり前のような面をしてそこにいたんだよ\n摆着一副仿佛理所当然的表情在那里哦\n「ねえ！その心を貸してよ！\n「喂！把那颗心借给我吧、\n扉を開けてしまうから。\n我会把大门打开的。\n忘れてた理想に沿ってニヤリ笑う私を見たいから。」\n顺着忘记的理想轻松地笑一笑我想看那样的我啊。」\n『ねえ！その眼を動かしてよ！\n『喂！转一转你的眼睛啊！\n扉を開けてしまえばさ、見たこともないアレをさ、\n只要打开大门啦、从未见过的那个啦、\n誰か、が笑うよ。』\n有谁、会去笑啊。』\n「『絵に描いたみたいな夢も\n「『若这美丽如画的梦\nその先で涙流す私も\n依然会使我流泪\n歌にしたいの！』」\n亦甘心让它化作我的歌声！』」' }
      ];


      // =============================================================
      // 1.5 MV 数据
      // =============================================================
      var mvs = [
        { num: 1, name: 'みにくいかたち',       url: 'https://www.youtube.com/watch?v=vRkMJoat_-8' },
        { num: 2, name: 'オン・ザ・フロントライン', url: 'https://www.youtube.com/watch?v=xBwmPob9flU' },
        { num: 3, name: 'イメージ',             url: 'https://www.youtube.com/watch?v=ANJaMcmWwUI' },
        { num: 4, name: 'ジャガーノート',       url: 'https://www.youtube.com/watch?v=qxP02kpjB30' },
        { num: 5, name: 'ポラリス',             url: 'https://www.youtube.com/watch?v=t8rjUuz8Ms0' },
        { num: 6, name: 'ネバーアンダースタンド', url: 'https://www.youtube.com/watch?v=yN_icTYbG0g' }
      ];

      // =============================================================
      // 2. DOM 引用
      // =============================================================
      var audio        = document.getElementById('audioPlayer');
      var page1        = document.getElementById('page1');
      var page2        = document.getElementById('page2');
      var page3        = document.getElementById('page3');

      // 碟片相关
      var vinylDisc    = document.getElementById('vinylDisc');
      var discCoverImg = document.getElementById('discCoverImg');
      var discSongName = document.getElementById('discSongName');
      var discArtist   = document.getElementById('discArtist');
      var discTime     = document.getElementById('discCurrentTime');
      var discDur      = document.getElementById('discDuration');
      var discFill     = document.getElementById('discFill');
      var discTrack    = document.getElementById('discTrack');
      var vinylIndex   = document.getElementById('vinylIndex');
      var vinylPrev    = document.getElementById('vinylPrev');
      var vinylNext    = document.getElementById('vinylNext');
      var lyricsContainer = document.getElementById('lyricsContainer');
      var lyricsContent   = document.getElementById('lyricsContent');
      var lyricsHint      = document.getElementById('lyricsHint');

      // 底部播放器
      var playBtn      = document.getElementById('playBtn');
      var playIcon     = document.getElementById('playIcon');
      var prevBtn      = document.getElementById('prevBtn');
      var nextBtn      = document.getElementById('nextBtn');
      var loopBtn      = document.getElementById('loopBtn');
      var loopIcon     = document.getElementById('loopIcon');
      var progressFill = document.getElementById('progressFill');
      var progressTrack= document.getElementById('progressTrack');
      var currentTimeEl= document.getElementById('currentTime');
      var durationEl   = document.getElementById('duration');
      var playerCover  = document.getElementById('playerCover').querySelector('img');
      var playerSongName = document.getElementById('playerSongName');
      var playerArtist = document.getElementById('playerArtist');
      var volumeFill   = document.getElementById('volumeFill');
      var volumeTrack  = document.getElementById('volumeTrack');
      var volIcon      = document.getElementById('volIcon');
      var likeBtn      = document.getElementById('likeBtn');
      var likeIcon     = document.getElementById('likeIcon');
      var songCount    = document.getElementById('songCount');

      // MV 鉴赏
      var cardDeck     = document.getElementById('cardDeck');
      var mvIndex      = document.getElementById('mvIndex');
      var mvCount      = document.getElementById('mvCount');
      var mvPrev       = document.getElementById('mvPrev');
      var mvNext       = document.getElementById('mvNext');
      var mvLikeBtn    = document.getElementById('mvLikeBtn');
      var mvLikeIcon   = document.getElementById('mvLikeIcon');
      var mvLikeText   = document.getElementById('mvLikeText');
      var page3Bg      = document.getElementById('page3Bg');

      // =============================================================
      // 3. 状态变量
      // =============================================================
      var currentIndex   = 0;
      var isPlaying      = false;
      var isSeeking      = false;
      var loopMode       = 0;       // 0=顺序, 1=单曲循环, 2=列表循环
      var isVolDragging  = false;
      var isProgDragging = false;
      var isDiscDragging = false;   // 碟片拖动
      var isLyricsView   = false;   // 是否显示歌词
      var likedSongs     = {};       // 点赞记录 { index: true }

      // MV 状态
      var mvCurrentIndex = 0;
      var mvLiked        = {};       // 点赞记录 { index: true }
      var cardPositions = [
        { x: -12, y: 8,  r: -2.5 },
        { x: 14,  y: -6, r: 1.8 },
        { x: -8,  y: 14, r: -1.2 },
        { x: 10,  y: -12,r: 0.6 },
        { x: -14, y: 6,  r: 2.2 },
        { x: 6,   y: -4, r: -0.8 }
      ];

      // 备用封面
      var fallbackCover = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#12183a" width="200" height="200"/><text x="100" y="105" text-anchor="middle" fill="#5BCDC6" font-size="40" font-family="sans-serif">♪</text></svg>');

      // =============================================================
      // 3.5 浮动字幕
      // =============================================================
      var floatTextLines = [
        '透き通るよな思いだけが明日になれたらいいね',
        'そしたらきっと僕はずっとここで眠るだけさ',
        'ねえ！その心を貸してよ、扉を開けてしまうから',
        'あたしが愛を語るのなら その眼には如何、映像る？',
        '詞は有り余るばかり 無垢の音が流れてく',
        'あなたが愛に塗れるまで その色は幻だ',
        'ひとりぼっち、音に呑まれれば 全世界共通の快楽さ',
        '世界があたしを拒んでも 今、愛の唄 歌わせてくれないかな',
        'もう一回 誰も知らないその想い この声に預けてみてもいいかな',
        'きっとあなたは大丈夫、とても強い人だから',
        'その言葉の奥で笑う顔 いつも救われていたの',
        'これほど繰り返した感情で 一体何を答えたらいい？',
        'これだけ積み重ねた年月で 一体何を歌えばいい？',
        '哀願しても懇願しても 変わらないや もう',
        '踏み躙られるだけの花 あなたの声を忘れはしないだろう',
        '風に吹かれて散り散りになって',
        'さよなら風よ、花よ 眠ることの無いストーリーよ',
        'bring it back to me 不自由な心',
        '数秒で終わる世界を 何処までも続けたいんだ',
        '正解不正解なんて あたしの中にしかないわ',
        'どうやって この世界を愛せるかな',
        'いつだって 転がり続けるんだろう',
        'さよなら風よ、花よ もう交わること無いストーリーよ',
        '誰も居ない道を行け 誰も止められやしないよ',
        'あなたはとても強い人 誰も居ない道を行け',
        '喜怒哀楽 全てが僕の譲れない光だってこと',
        '忘れられるはずもないだろう 君の声が今も聞こえる',
        '未来の向こう側まで行こう 誰も知らぬ明日へ行け'
      ];

      function initFloatTexts() {
        var containers = document.querySelectorAll('.float-texts');
        if (!containers.length) return;

        var count = 16;
        var minDist = 13;
        var maxAttempts = 80;

        for (var c = 0; c < containers.length; c++) {
          var container = containers[c];
          container.innerHTML = '';

          var positions = [];
          for (var k = 0; k < count; k++) {
            var placed = false;
            for (var a = 0; a < maxAttempts; a++) {
              var x = 3 + Math.random() * 70;
              var y = 5 + Math.random() * 85;
              var tooClose = false;
              for (var p = 0; p < positions.length; p++) {
                var dx = x - positions[p].x;
                var dy = y - positions[p].y;
                if (dx * dx + dy * dy < minDist * minDist) { tooClose = true; break; }
              }
              if (!tooClose) { positions.push({x:x, y:y}); placed = true; break; }
            }
            if (!placed) positions.push({x: 3 + Math.random() * 70, y: 5 + Math.random() * 85});
          }

          for (var k = 0; k < count; k++) {
            var el = document.createElement('div');
            el.className = 'ft-item';
            var line = floatTextLines[Math.floor(Math.random() * floatTextLines.length)];
            el.textContent = line;

            el.style.left = positions[k].x + '%';
            el.style.top = positions[k].y + '%';
            el.style.fontSize = (12 + Math.random() * 20) + 'px';
            el.style.animationDuration = (10 + Math.random() * 10) + 's';
            el.style.animationDelay = -(Math.random() * 15) + 's';

            container.appendChild(el);
          }
        }
      }

      // =============================================================
      // 4. 初始化
      // =============================================================
      function init() {
        initFloatTexts();
        loadHitorieBio();
        updateSongCount();
        initVinylDisc();
        loadSong(0, false);
        initMv();
        bindEvents();
        // 初始碟片进度
        updateVinylUI();
      }

      // -------- 读取 hitorie.txt --------
      function loadHitorieBio() {
        var bioEl = document.getElementById('bioContent');
        var bioHtml =
          '<p>ヒトリエ（HITORIE) 简介</p>' +
          '<p>Hitorie (日语:ヒトリエ) 是日本的摇滚乐队，由wowaka组建，成员包括wowaka (2011-2019年担任主唱与节奏吉他手)、イガラシ(ygarshy;贝斯手)、シノダ(shinoda;主音吉他手，2019年起担任现任主唱)和ゆ一まお(yumao;鼓手）。</p>' +
          '<p>其前身Hitori Atelier于2011年冬成立，2012年Shinoda加入后改名为现在的Hitorie。音乐类型为J-ROCK、摇滚、另类摇滚、流行摇滚、后摇滚、梦幻流行、J-POP。</p>';
        bioEl.innerHTML = bioHtml;
      }

      // -------- 碟片拖拽切歌初始化 --------
      function initVinylDisc() {
        var startX = 0;
        var isDragging = false;

        vinylDisc.addEventListener('mousedown', function(e) {
          isDragging = true;
          startX = e.clientX;
          isDiscDragging = false;
          vinylDisc.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', function(e) {
          if (!isDragging) return;
          var dx = e.clientX - startX;
          if (Math.abs(dx) > 30) {
            isDiscDragging = true;
          }
        });

        document.addEventListener('mouseup', function(e) {
          if (!isDragging) return;
          isDragging = false;
          vinylDisc.style.cursor = 'pointer';
          if (isDiscDragging) {
            var dx = e.clientX - startX;
            if (dx < -50) {
              nextSong();      // 向左滑 → 下一曲
            } else if (dx > 50) {
              prevSong();      // 向右滑 → 上一曲
            }
            isDiscDragging = false;
          } else {
            // 单击 → 切换歌词/碟片视图
            toggleLyrics();
          }
        });

        // 触屏支持
        var touchStartX = 0;
        var touchSwiping = false;
        vinylDisc.addEventListener('touchstart', function(e) {
          touchStartX = e.touches[0].clientX;
          touchSwiping = false;
        });
        vinylDisc.addEventListener('touchmove', function(e) {
          var dx = e.touches[0].clientX - touchStartX;
          if (Math.abs(dx) > 30) touchSwiping = true;
        });
        vinylDisc.addEventListener('touchend', function(e) {
          if (touchSwiping) {
            var dx = e.changedTouches[0].clientX - touchStartX;
            if (dx < -50) nextSong();
            else if (dx > 50) prevSong();
          } else {
            togglePlay();
          }
        });
      }

      // -------- 更新歌曲计数 --------
      function updateSongCount() {
        songCount.textContent = songs.length + ' 首歌曲';
      }

      // -------- MV 初始化：生成卡片 --------
      function initMv() {
        mvCount.textContent = mvs.length + ' 个MV';

        mvs.forEach(function(mv, i) {
          var card = document.createElement('div');
          card.className = 'card';
          card.dataset.index = i;

          var pos = cardPositions[i % cardPositions.length];
          card.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(' + pos.r + 'deg)';
          card.style.zIndex = i;

          var bg = document.createElement('div');
          bg.className = 'card-bg';
          bg.style.backgroundImage = 'url(素材/' + mv.num + '.avif)';
          bg.onerror = function() { this.style.backgroundImage = 'url(' + fallbackCover + ')'; };
          card.appendChild(bg);

          var badge = document.createElement('span');
          badge.className = 'card-badge';
          badge.textContent = '#' + (i + 1);
          card.appendChild(badge);

          var name = document.createElement('div');
          name.className = 'card-name';
          name.textContent = mv.name;
          card.appendChild(name);

          var openBtn = document.createElement('button');
          openBtn.className = 'card-open';
          openBtn.textContent = '▶ 打开MV';
          openBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            window.open(mvs[parseInt(this.parentElement.dataset.index)].url, '_blank');
          });
          card.appendChild(openBtn);

          card.addEventListener('click', function() {
            var idx = parseInt(this.dataset.index);
            if (idx === mvCurrentIndex) {
              window.open(mvs[idx].url, '_blank');
            } else {
              loadMv(idx);
            }
          });

          cardDeck.appendChild(card);
        });

        loadMv(0);
      }

      // -------- MV 卡片切换 --------
      function loadMv(index) {
        if (index < 0) index = mvs.length - 1;
        if (index >= mvs.length) index = 0;
        mvCurrentIndex = index;

        var cards = cardDeck.querySelectorAll('.card');
        cards.forEach(function(card, i) {
          var pos = cardPositions[i % cardPositions.length];
          var isActive = (i === mvCurrentIndex);
          card.classList.toggle('active', isActive);
          card.style.zIndex = isActive ? mvs.length : i;
          card.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(' + pos.r + 'deg) scale(' + (isActive ? 1.05 : 1) + ')';
        });

        mvIndex.textContent = (mvCurrentIndex + 1) + ' / ' + mvs.length;
        updateMvLikeUI();
      }

      function prevMv() { loadMv(mvCurrentIndex - 1); }
      function nextMv() { loadMv(mvCurrentIndex + 1); }

      // -------- MV 点赞 --------
      function toggleMvLike() {
        mvLiked[mvCurrentIndex] = !mvLiked[mvCurrentIndex];
        updateMvLikeUI();
      }
      function updateMvLikeUI() {
        var liked = !!mvLiked[mvCurrentIndex];
        mvLikeBtn.classList.toggle('liked', liked);
        mvLikeIcon.setAttribute('fill', liked ? '#ff3b5c' : 'none');
        mvLikeIcon.setAttribute('stroke', liked ? '#ff3b5c' : 'currentColor');
        mvLikeText.textContent = liked ? '已点赞' : '点赞';
        page3Bg.classList.toggle('liked', liked);

        // 同步更新卡片的 liked 样式
        var cards = cardDeck.querySelectorAll('.card');
        cards.forEach(function(card, i) {
          card.classList.toggle('liked', !!mvLiked[i]);
        });
      }

      // =============================================================
      // 5. 音频加载与播放
      // =============================================================
      function loadSong(index, autoPlay) {
        if (index < 0) index = songs.length - 1;
        if (index >= songs.length) index = 0;
        currentIndex = index;

        var song = songs[currentIndex];
        audio.src = song.audio;
        audio.load();

        // 更新底部播放器
        playerCover.src = song.cover;
        playerCover.alt = song.name;
        playerCover.onerror = function() { this.src = fallbackCover; };
        playerSongName.textContent = song.name;
        playerArtist.textContent = song.artist;

        // 更新碟片
        discCoverImg.src = song.cover;
        discCoverImg.alt = song.name;
        discCoverImg.onerror = function() { this.src = fallbackCover; };
        discSongName.textContent = song.name;
        discArtist.textContent = song.artist;

        // 重置进度
        progressFill.style.width = '0%';
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';
        discFill.style.width = '0%';
        discTime.textContent = '0:00';
        discDur.textContent = '0:00';

        // 更新索引
        vinylIndex.textContent = (currentIndex + 1) + ' / ' + songs.length;

        // 更新点赞状态
        updateLikeUI();

        // 切歌时关闭歌词视图，回到碟片
        if (isLyricsView) {
          isLyricsView = false;
          lyricsContainer.classList.remove('show');
          vinylDisc.style.opacity = '1';
          vinylDisc.style.pointerEvents = 'auto';
          lyricsHint.style.opacity = '1';
        }

        if (autoPlay) {
          audio.play().then(function() {
            isPlaying = true;
            updatePlayIcon();
            updateVinylPlayState();
          }).catch(function() {
            isPlaying = false;
            updatePlayIcon();
            updateVinylPlayState();
          });
        } else {
          isPlaying = false;
          updatePlayIcon();
          updateVinylPlayState();
        }
      }

      // -------- 碟片旋转状态 --------
      function updateVinylPlayState() {
        if (isPlaying) {
          vinylDisc.classList.add('playing');
          vinylDisc.classList.remove('paused');
        } else {
          vinylDisc.classList.add('paused');
          // 暂停时保持角度 (animation-play-state: paused 已在 CSS 处理)
        }
      }

      // -------- 更新碟片 UI（同步进度） --------
      function updateVinylUI() {
        // 由 timeupdate 事件驱动
      }

      // -------- 歌词切换 --------
      function toggleLyrics() {
        isLyricsView = !isLyricsView;
        if (isLyricsView) {
          // 显示歌词
          loadLyrics(currentIndex);
          lyricsContainer.classList.add('show');
          vinylDisc.style.opacity = '0';
          vinylDisc.style.pointerEvents = 'none';
          lyricsHint.style.opacity = '0';
        } else {
          // 隐藏歌词，恢复碟片
          lyricsContainer.classList.remove('show');
          vinylDisc.style.opacity = '1';
          vinylDisc.style.pointerEvents = 'auto';
          lyricsHint.style.opacity = '1';
        }
      }

      // -------- 点赞切换 --------
      function toggleLike() {
        likedSongs[currentIndex] = !likedSongs[currentIndex];
        updateLikeUI();
      }
      function updateLikeUI() {
        var liked = !!likedSongs[currentIndex];
        likeBtn.classList.toggle('liked', liked);
        if (liked) {
          likeIcon.setAttribute('fill', '#ff3b5c');
          likeIcon.setAttribute('stroke', '#ff3b5c');
        } else {
          likeIcon.setAttribute('fill', 'none');
          likeIcon.setAttribute('stroke', 'currentColor');
        }
        document.getElementById('page2Bg').classList.toggle('liked', liked);
      }

      // -------- 加载歌词 --------
      function loadLyrics(index) {
        var song = songs[index];
        if (song.lyricText) {
          renderLyrics(song.lyricText);
        } else if (song.lyric) {
          lyricsContent.innerHTML = '<p class="lyrics-loading">加载歌词中...</p>';
          try {
            fetch(song.lyric)
              .then(function(res) {
                if (!res.ok) throw new Error('fail');
                return res.text();
              })
              .then(function(text) {
                renderLyrics(text);
              })
              .catch(function() {
                lyricsContent.innerHTML = '<p class="lyrics-loading">歌词加载失败</p>';
              });
          } catch(e) {
            lyricsContent.innerHTML = '<p class="lyrics-loading">歌词加载失败</p>';
          }
        } else {
          lyricsContent.innerHTML = '<p class="lyrics-loading">暂无歌词</p>';
        }
      }

      // -------- 渲染歌词（按行分段） --------
      function renderLyrics(text) {
        var lines = text.split('\n');
        var html = '';
        lines.forEach(function(line) {
          line = line.trim();
          if (line) {
            html += '<p>' + escapeHtml(line) + '</p>';
          }
        });
        lyricsContent.innerHTML = html || '<p class="lyrics-loading">暂无歌词</p>';
      }

      // -------- 播放 / 暂停 --------
      function togglePlay() {
        if (audio.paused) {
          audio.play().then(function() {
            isPlaying = true;
            updatePlayIcon();
            updateVinylPlayState();
          }).catch(function() {});
        } else {
          audio.pause();
          isPlaying = false;
          updatePlayIcon();
          updateVinylPlayState();
        }
      }

      // -------- 更新播放按钮图标 --------
      function updatePlayIcon() {
        if (isPlaying) {
          playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
        } else {
          playIcon.innerHTML = '<polygon points="8 5 19 12 8 19 8 5"/>';
        }
      }

      // -------- 上一曲 / 下一曲 --------
      function prevSong() { loadSong(currentIndex - 1, true); }
      function nextSong() { loadSong(currentIndex + 1, true); }

      // =============================================================
      // 6. 循环模式
      // =============================================================
      function toggleLoop() {
        loopMode = (loopMode + 1) % 3;
        updateLoopUI();
      }
      function updateLoopUI() {
        loopBtn.classList.toggle('active-loop', loopMode > 0);
        if (loopMode === 0) {
          loopIcon.innerHTML = '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>';
          loopBtn.title = '顺序播放';
        } else if (loopMode === 1) {
          loopIcon.innerHTML = '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><text x="12" y="14" font-size="10" fill="currentColor" text-anchor="middle" font-weight="bold">1</text>';
          loopBtn.title = '单曲循环';
        } else {
          loopIcon.innerHTML = '<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/><text x="12" y="14" font-size="8" fill="currentColor" text-anchor="middle" font-weight="bold">⟳</text>';
          loopBtn.title = '列表循环';
        }
      }

      // -------- 简单转义 HTML --------
      function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      }

      // =============================================================
      // 7. 时间格式化
      // =============================================================
      function formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        var m = Math.floor(seconds / 60);
        var s = Math.floor(seconds % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
      }

      // =============================================================
      // 8. 事件绑定
      // =============================================================
      function bindEvents() {

        // 播放 / 暂停
        playBtn.addEventListener('click', togglePlay);

        // 上 / 下一曲（底部播放器）
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);

        // 碟片三角按钮
        vinylPrev.addEventListener('click', prevSong);
        vinylNext.addEventListener('click', nextSong);

        // MV 导航
        mvPrev.addEventListener('click', prevMv);
        mvNext.addEventListener('click', nextMv);
        mvLikeBtn.addEventListener('click', toggleMvLike);

        // 卡片滑动切歌
        (function() {
          var sx = 0, swiping = false;
          cardDeck.addEventListener('touchstart', function(e) {
            sx = e.touches[0].clientX;
            swiping = false;
          });
          cardDeck.addEventListener('touchmove', function(e) {
            if (Math.abs(e.touches[0].clientX - sx) > 20) swiping = true;
          });
          cardDeck.addEventListener('touchend', function(e) {
            if (!swiping) return;
            var dx = e.changedTouches[0].clientX - sx;
            if (dx < -50) nextMv();
            else if (dx > 50) prevMv();
          });
        })();

        // 点赞
        likeBtn.addEventListener('click', toggleLike);

        // 循环
        loopBtn.addEventListener('click', toggleLoop);

        // -------- 音量 --------
        function setVolume(clientX) {
          var rect = volumeTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          audio.volume = pct;
          volumeFill.style.width = (pct * 100) + '%';
          updateVolumeIcon(pct);
        }
        volumeTrack.addEventListener('mousedown', function(e) {
          isVolDragging = true;
          setVolume(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
          if (isVolDragging) setVolume(e.clientX);
        });
        document.addEventListener('mouseup', function() { isVolDragging = false; });
        volIcon.addEventListener('click', function() {
          if (audio.volume > 0) {
            audio.dataset.prevVolume = audio.volume;
            audio.volume = 0;
            volumeFill.style.width = '0%';
            updateVolumeIcon(0);
          } else {
            var prev = parseFloat(audio.dataset.prevVolume) || 0.8;
            audio.volume = prev;
            volumeFill.style.width = (prev * 100) + '%';
            updateVolumeIcon(prev);
          }
        });

        // -------- 底部进度条拖动 --------
        function setProgress(clientX) {
          var rect = progressTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          if (audio.duration) audio.currentTime = pct * audio.duration;
          progressFill.style.width = (pct * 100) + '%';
        }
        progressTrack.addEventListener('mousedown', function(e) {
          isProgDragging = true;
          setProgress(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
          if (isProgDragging) {
            isSeeking = true;
            setProgress(e.clientX);
          }
        });
        document.addEventListener('mouseup', function() {
          if (isProgDragging) {
            isProgDragging = false;
            setTimeout(function() { isSeeking = false; }, 100);
          }
        });

        // -------- 碟片进度条拖动 --------
        function setDiscProgress(clientX) {
          var rect = discTrack.getBoundingClientRect();
          var pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
          if (audio.duration) audio.currentTime = pct * audio.duration;
          discFill.style.width = (pct * 100) + '%';
        }
        discTrack.addEventListener('mousedown', function(e) {
          isSeeking = true;
          setDiscProgress(e.clientX);
        });
        document.addEventListener('mousemove', function(e) {
          if (isSeeking) {
            // 如果拖动的是底部进度条，碟片进度也会同步更新
            // 但如果拖的是碟片进度条，需要同步更新底部
          }
        });
        document.addEventListener('mouseup', function() {
          setTimeout(function() { isSeeking = false; }, 100);
        });

        // -------- 音频事件 --------
        audio.addEventListener('timeupdate', function() {
          if (!isSeeking && audio.duration) {
            var pct = (audio.currentTime / audio.duration) * 100;
            // 同步两个进度条
            progressFill.style.width = pct + '%';
            discFill.style.width = pct + '%';
            currentTimeEl.textContent = formatTime(audio.currentTime);
            discTime.textContent = formatTime(audio.currentTime);
          }
        });

        audio.addEventListener('loadedmetadata', function() {
          var d = formatTime(audio.duration);
          durationEl.textContent = d;
          discDur.textContent = d;
        });

        audio.addEventListener('ended', function() {
          if (loopMode === 1) {
            audio.currentTime = 0;
            audio.play().catch(function() {});
          } else if (loopMode === 2 || currentIndex < songs.length - 1) {
            if (loopMode === 2 && currentIndex >= songs.length - 1) {
              loadSong(0, true);
            } else {
              nextSong();
            }
          } else {
            isPlaying = false;
            updatePlayIcon();
            updateVinylPlayState();
          }
        });

        audio.addEventListener('play', function() {
          isPlaying = true;
          updatePlayIcon();
          updateVinylPlayState();
        });

        audio.addEventListener('pause', function() {
          isPlaying = false;
          updatePlayIcon();
          updateVinylPlayState();
        });

        // -------- 歌词容器点击切回碟片 --------
        lyricsContainer.addEventListener('click', function() {
          if (isLyricsView) toggleLyrics();
        });

        // 空格键
        document.addEventListener('keydown', function(e) {
          if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
          if (e.code === 'Space') {
            e.preventDefault();
            togglePlay();
          }
        });
      }

      // -------- 音量图标 --------
      function updateVolumeIcon(vol) {
        var paths;
        if (vol === 0) {
          paths = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"/><line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"/>';
        } else if (vol < 0.5) {
          paths = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>';
        } else {
          paths = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>';
        }
        volIcon.innerHTML = paths;
      }

      // =============================================================
      // 9. 页面切换
      // =============================================================
      window.switchToPage = function(num) {
        var pages = [null, page1, page2, page3];
        for (var i = 1; i <= 3; i++) {
          if (i === num) {
            pages[i].classList.remove('page-hidden');
            pages[i].classList.add('page-show');
          } else {
            pages[i].classList.remove('page-show');
            pages[i].classList.add('page-hidden');
          }
        }
        // 更新导航标签激活状态
        var allTabs = document.querySelectorAll('.nav-tab');
        allTabs.forEach(function(tab) {
          tab.classList.remove('nav-tab-active');
        });
        // 激活当前页对应的 tabs
        var activeTabs = document.querySelectorAll('#page' + num + ' .nav-tab');
        activeTabs.forEach(function(tab) {
          // 如果 tab 的 onclick 指向当前页，激活它
          if (tab.getAttribute('onclick') === "switchToPage(" + num + ")") {
            tab.classList.add('nav-tab-active');
          }
        });
        // 底部播放器仅在乐曲鉴赏页显示
        var showPlayer = (num === 2);
        document.getElementById('bottomPlayer').style.display = showPlayer ? 'flex' : 'none';
        document.getElementById('disclaimerFixed').style.display = showPlayer ? 'block' : 'none';
      };

      // =============================================================
      // 10. 启动
      // =============================================================
      init();
      document.getElementById('bottomPlayer').style.display = 'none';
      document.getElementById('disclaimerFixed').style.display = 'none';

    })();
  
