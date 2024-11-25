function MusicInstrument(name, type) {
  return {
    name,
    type,

    showType: function() {
      return `This ${this.name} is a ${this.type} instrument`
    },

    play: function() {
      return `We are playing a tune on this ${this.name}`;
    },

  }
}

let violin = new MusicInstrument('violin', 'string');
console.log(violin.showType())
console.log(violin.play())
console.log(violin)



