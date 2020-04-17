const _messages = {
    tw: {
      message: {
        foreP1:'有天他對我說：沒有一個地方是苦的，也沒有一個地方是不苦的。',
        foreP2:'他深知世人感到痛苦，是因不夠深入。',
        foreP3:'只要夠深入痛苦，就不再以那些為苦。',
        foreP4:'苦苦是狂喜騷動不安的；苦苦是內斂自若寧靜的。',
        foreP5:'苦苦哭和笑都是同一個表情。',
        Accidental :'巧然的相遇皆是注定的重逢',
        unique :'淡泊或熱情的獨立苦苦',
        uniquetext: '苦苦每個款式皆推出淡泊的素面與熱情的花面，並在素面的內部選擇花樣，花面的內部選擇素樣，體現個體的複雜性，也象徵了苦苦萬物與我一體的品牌精神。',
        Beautiful:'美麗又流浪的旅行苦苦',
        Beautifultext: '苦苦是生命摸索與尋找的陪伴 ，每個手作成品的耐用度與精緻度都是苦苦極力注重和追求的。布料與皮革的精心搭配與設計，內外細節處理與反覆測試，讓每個穿梭在時間的旅人擁有更好的選擇。',
        Whispering :'悄悄說話的內在苦苦',
        Whisperingtext :'詩跨度了具象現實與抽象夢境，苦苦的詩句是創作者一段生活時間的流溢和感悟，描繪著某個說不清楚地特別的時刻。',
        formed :'苦苦從形與色來',
        formedtext :'布料的選擇與皮革手染的花色為苦苦精神的象徵，手作品布量有限，做完後皆無法再生產販售。皮革採用植鞣皮革做手工染色，每批染出來的花色皆不重複。',
        Requiring :'苦苦從反覆修行來',
        Requiringtext:'設計者兼製作者的堅持，從打版裁剪到不同材質面料的 處理，道道工序繁複且儼僅。一針一線的針距要求體現在所有的車縫線、拷克線或裝飾線上，成品耗時費力。',
        favor:'所有味道放進苦苦裡陪伴每次的霧中風景',
        }
    },
    de: {
      message: {
        foreP1:'Eines Tages sagte er zu mir: Kein Ort ist bitter und kein Ort ist nicht bitter.',
        foreP2:'Er weiß, dass die Welt leidet, weil sie nicht tief genug ist.',
        foreP3:'Solange Sie tief in Schmerzen versinken, nehmen Sie diese nicht mehr als Leiden wahr.',
        foreP4:'KUKU ist ekstatisch und unruhig, KU.KU. ist zurückhaltend und friedlich.',
        foreP5:' Weinen und Lachen sind der gleiche Ausdruck',
        Accidental :'Zufällige Begegnungen sind Wiedervereinigungen',
        unique : 'Selbst komponiert oder leidenschaftlich von einzigartigem KU.KU.',
        uniquetext: 'Jeder bittere Stil führt gleichgültige Ebenen und begeisterte Blumen ein und wählt Muster innerhalb der Ebenen. Das Innere der Blumen wählt Ebenen, die die Komplexität des Individuums widerspiegeln und auch den Markengeist aller Dinge und von mir symbolisieren',
        Beautiful:'Schön und obdachlos unterwegs',
        Beautifultext: 'KU.KU. ist die Begleitung der Erforschung und Suche des Lebens, und die Haltbarkeit und die Vorzüglichkeit jedes handgefertigten Produkts sind mühsame Bemühungen und Bemühungen. Das sorgfältige Zusammenpassen und Entwerfen von Stoff und Leder, die Verarbeitung von inneren und äußeren Details und das wiederholte Testen, damit jeder Reisende in der Zeit eine bessere Wahl hat。',
        Whispering :'Das innere KU.KU., leise zu sprechen',
        Whisperingtext :'Poesie umspannt konkrete Realität und abstrakte Träume, und KU.KUs Verse sind der Überfluss und die Wahrnehmung der Lebenszeit eines Schöpfers und zeigen einen Moment, der unklar ist.',
        formed :'KU.KU kommt von Form und Farbe',
        formedtext :'Die Wahl des Stoffes und die Farbe des handgefärbten Leders stellen das Symbol der Bitterkeit dar. Die Stoffmenge für handgemachte Arbeiten ist begrenzt. Das Leder wird mit pflanzlich gegerbtem Leder von Hand gefärbt, und die Farbe jeder Charge wird nicht wiederholt.',
        Requiring :'KU.KU kommt von unter wiederholter Übung',
        Requiringtext:'Designer und Hersteller bestehen darauf, dass die verschiedenen Verfahren vom Schneiden von Mustern bis zur Verarbeitung verschiedener Materialien und Stoffe kompliziert und unzuverlässig sind. Die Nadelsteigung eines Stichs spiegelt sich in allen Näh-, Kopier- oder Dekorationsfäden wider. Das fertige Produkt ist zeitaufwändig und mühsam.',
        Accidentalsub:'Einzigartiges handgefärbtes Leder macht Sie einzigartig',
        favor:'Der ganze Geschmack wird in die Bitterkeit gesteckt, um jede neblige Landschaft zu begleiten',
        }
    }
  }

  const i18n = new VueI18n({
    locale: 'tw', 
    messages:_messages,
  });
  const app = new Vue({i18n:i18n}).$mount('#wrap');
