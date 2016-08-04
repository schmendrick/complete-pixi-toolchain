/* this config file won't be transpiled so it's written in es5 */
/* jshint ignore:start */
/* eslint-disable */
var config = {
  server: {
     url: 'ws://46.28.201.98:10101/',
    // url: 'dummyserver',            // %ONLY_DEBUG_BUILD%
    debug: {                          // %ONLY_DEBUG_BUILD%
      user: 'devbbqplayer',           // %ONLY_DEBUG_BUILD%
      pwd: '1234',                    // %ONLY_DEBUG_BUILD%
      amount: 9876543,                // %ONLY_DEBUG_BUILD%
      demo: 0                         // %ONLY_DEBUG_BUILD%
    },                                // %ONLY_DEBUG_BUILD%
    gameId: '000501c0'
  },
  desktop: {
    requestFullscreen: false,
  },
  display: {
    width: 1065.0,
    height: 600.0,
    adjustment: {
      left: 0.29,
      right: 0.63,
      narrowScreenThreshold: 0.9,
      controlsOffset: -17.0,
      winlineNumbersOffset: -12.0
    }
  },
  assets: {
    path: './assets/',
    imagePath: './Resources/GambleClient/devbbq/images/',
    soundPath: './Resources/GambleClient/devbbq/sounds/',
    slotBg: 'slot_bg.jpg',
    validSymbolIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    preloadBg: 'load.jpg',
    gambleBg: 'gamble_bg.jpg',
    payTableBg: 'paytable_bg.jpg',
    helpBg: 'help_en.jpg',
    symbol: {
      width: 128.0,
      height: 128.0
    },
    sound: {
      formats: ['mp3', 'ogg'],
      deny: 'action_deny',
      congratulations: 'congratulations',
      csengo: 'csengo',
      csengoLong: 'csengo_long',
      csengoShort: 'csengo_short',
      melodies: ['melody1', 'melody2', 'melody3', 'melody4', 'melody5'],
      reelStop: 'reelstop',
      scatters: ['scatter_rovid1', 'scatter_rovid2', 'scatter_rovid3', 'scatter_rovid4', 'scatter_rovid5'],
      bigWins: ['win_big1', 'win_big2', 'win_big3'],
      smallWins: ['win_small1', 'win_small2', 'win_small3'],
      take: 'wpay_end',
      slideIn: 'lepes',   //was 'slidein' but that was not existing
      risk: 'risiko',
      waiting: 'gselect',
      cardFlip: 'kever2',
      gambleLost: 'gamble2lost',
      gambleWins: ['gamble2win1', 'gamble2win2', 'gamble2win3', 'gamble2win4', 'gamble2win5']
    }
  },
  language: {
    welcome: 'Welcome to Devil\'s Fire!',
    browserWarning: 'Please consider switching to Google Chrome for the best game experience.',
    disconnected: 'Connection lost, please try again later',
    waiting: 'Waiting...'
  },
  text: {
    style: {
      primary: {
        font: 'Bold 24px Roboto Mono',
        color: 0xffee00,
        align: 'left'
      },
      secondary: {
        font: 'Bold 24px Roboto Mono',
        color: 0xffffff,
        align: 'left'
      },
      message: {
        font: 'Bold 28px Open Sans',
        color: 0xffffff,
        align: 'center',
        multiline: true
      },
      lowBalance: {
        font: 'Bold 24px Roboto Mono',
        color: 0xff0000,
        align: 'left'
      },
      take: {
        font: 'Bold 24px Roboto Mono',
        color: 0x00ff00,
        align: 'left'
      }
    },
    dialog: {
      padding: 25.0,
      confirm: 'OK'
    },
    format: {
      currency: 'pts',
      decimalMark: ',',
      thousandsSeparator: '.'
    },
    status: {
      goodLuck: 'GOOD LUCK!',
      gameOver: 'Game Over',
      insufficientFunds: 'Not enough Credits',
      align: 'center',
      x: 435.0,
      y: 555.0
    },
    win: {
      label: 'win: ',
      countUpSpeed: 0.12,
      countDownSpeed: 0.08,
      align: 'center',
      x: 435.0,
      y: 555.0
    },
    credits: {
      label: '',
      countUpSpeed: 0.08,
      lineHeight: 30.0,
      align: 'center',
      x: 165.0,
      y: 555.0
    },
    bet: {
      label: 'bet: ',
      lineHeight: 30.0,
      align: 'center',
      x: 690.0,
      y: 555.0
    }
  },
  modes: {
    ag: {
    },
    gamble: {
      text: {
        style: {
          primary: {
            font: 'Bold 20px Roboto Mono',
            color: 0xffee00,
            align: 'left'
          },
          secondary: {
            font: 'Bold 20px Roboto Mono',
            color: 0xffffff,
            align: 'left'
          }
        },
        format: {
          currency: 'pts',
          decimalMark: ',',
          thousandsSeparator: '.'
        },
        stake: {
          label: 'Gamble Amount: ',
          align: 'center',
          lineHeight: 24.0,
          twoline: true,
          x: 177.0,
          y: 186.0
        },
        chance: {
          label: 'Gamble to win: ',
          align: 'center',
          lineHeight: 24.0,
          twoline: true,
          x: 691.0,
          y: 186.0
        }
      },
      timing: {
        // how long the gamble mode waits after the result animation is shown
        // before he restarts with the tiktak animation
        waitTimeAfterReveal: 2000
      },
      controls: {
        width: 160.0
      },
      select: {
        red: {
          x: 77.0,
          y: 331.0
        },
        black: {
          x: 577.0,
          y: 331.0
        },
        highlight: {
          offsetX: 7.0,
          offsetY: 10.0
        },
        button: {
          offset: -905.0,
          width: 220.0,
          height: 120.0
        }
      },
      cardHistory: {
        /*
        x: 301.0,
        y: 142.0,
        */
        x: 338.0,
        y: 193.0,
        gap: 6.0,
        countOfVisibleSuits: 6
      },
      cardFull: {
        x: 353.0,
        y: 275.0,
        fps: 25.0
      }
    },
    preload: {
      loadingBar: {
        fill: 0xffee99,
        innerGlow: 0xffaa22,
        height: 43.0,
        width: 686.0,
        x: 190.0,
        y: 520.0
      }
    },
    settings: {
      controls: {
        width: 160.0
      },
      amountSelector: {
        spacing: 15.0,
        itemLength: 8,
        style: {
          label: {
            font: 'Bold 36px Roboto Mono',
            color: 0xffffff,
            align: 'center'
          },
          items: {
            font: 'Bold 26px Roboto Mono',
            color: 0xffffff,
            align: 'center'
          }
        },
        description: 'Choose your bet!',
        format: {
          currency: '',
          decimalMark: ',',
          thousandsSeparator: '.'
        }
      },
      paytable: {
        style: {
          primary: {
            font: 'Bold 20px Roboto Mono',
            color: 0xffee00,
            align: 'left'
          },
          secondary: {
            font: 'Bold 20px Roboto Mono',
            color: 0xffffff,
            align: 'right'
          }
        },
        format: {
          currency: '',
          decimalMark: ',',
          thousandsSeparator: '.'
        },
        setup: {
          lineHeight: 24.0,
          blockWidth : 12
        },
        symbols: [
          {
            id: '5',  // melon
            x: 90.0,
            y: 200.0
          },
          {
            id: '8',  // plum
            x: 85.0,
            y: 337.0
          },
          {
            id: '3',  // lemon
            x: 141.0,
            y: 476.0
          },
          {
            id: '7',  // scatter
            x: 375.0,
            y: 291.0
          },
          {
            id: '4',  // cherry
            x: 375.0,
            y: 476.0
          },
          {
            id: '1',  // seven
            x: 660.0,
            y: 200.0
          },
          {
            id: '2',  // grape
            x: 660.0,
            y: 337.0
          },
          {
            id: '6',  // orange
            x: 604.0,
            y: 476.0
          }
        ]
      },
      text: {
        style: {
          primary: {
            font: 'Bold 18px Roboto Mono',
            color: 0xffee00,  //yellow
            align: 'left'
          },
          secondary: {
            font: 'Bold 18px Roboto Mono',
            color: 0xffffff,
            align: 'right'
          }
        },
        setup: [
          { //melon
            align: 'left',
            lineHeight: 31.0,
            x: 38.0,
            y: 120.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 8000 },
              { label: '4x', amount: 2000 },
              { label: '3x', amount: 500 },
            ]
          },
          { //plum
            align: 'left',
            lineHeight: 24.0,
            x: 33.0,
            y: 280.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 3000 },
              { label: '4x', amount: 750 },
              { label: '3x', amount: 250 },
            ]
          },
          { //lemon
            align: 'left',
            lineHeight: 24.0,
            x: 64.0,
            y: 440.0,
            blockWidth : 11,
            entries: [
              { label: '5x', amount: 1500 },
              { label: '4x', amount: 500 },
              { label: '3x', amount: 100 },
            ]
          },
          { //star
            align: 'left',
            lineHeight: 24.0,
            x: 327.0,
            y: 228.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 2000 },
              { label: '4x', amount: 400 },
              { label: '3x', amount: 100 },
            ]
          },
          { //cherry
            align: 'left',
            lineHeight: 20.0,
            x: 324.0,
            y: 440.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 1000 },
              { label: '4x', amount: 500 },
              { label: '3x', amount: 100 },
            ]
          },
          { //seven
            align: 'left',
            lineHeight: 24.0,
            x: 630.0,
            y: 135.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 50000 },
              { label: '4x', amount: 1000 },
              { label: '3x', amount: 1000 },
            ]
          },
          { //grape
            align: 'left',
            lineHeight: 24.0,
            x: 630.0,
            y: 282.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 5000 },
              { label: '4x', amount: 2000 },
              { label: '3x', amount: 500 },
            ]
          },
          { //orange
            align: 'left',
            lineHeight: 24.0,
            x: 580.0,
            y: 440.0,
            blockWidth : 12,
            entries: [
              { label: '5x', amount: 2000 },
              { label: '4x', amount: 750 },
              { label: '3x', amount: 250 },
            ]
          },
        ],
        format: {
          currency: '',
          decimalMark: ',',
          thousandsSeparator: '.'
        }
      }
    },
    slot: {
      text: {
        style: {
          font: 'Bold 32px Roboto Mono',
          color: 0xffffff,
          align: 'center',
          stroke: 0xdd0000,
          strokeThickness: 4
        },
        format: {
          currency: 'pts',
          decimalMark: ',',
          thousandsSeparator: '.'
        }
      },
      autoPlay: {
        delay: 600,
        enabled: true
      },
      controls: {
        width: 160.0,
        // how long do you press a control until sth is activated (e.g.: autoplay)
        minHoldingTime: 1200
      },
      winlines: {
        regular: {
          lineWidth: 5.0,
          lineColor: 0xffffb6,
          fadedColor: 0xB5B585,
          //wie lange er wartet bevor er wechselt BEIM ERSTEN ZAEHLEN (1/symbol.fps*CountOfFramesInSprite [+loopRepeatDelay] would be the duration in secs)
          delay: 1733 //(800 fuer normale, 17433 fuer teufel)
        },
        scatter: {
          lineWidth: 5.0,
          lineColor: 0xff9900,
          delay: 1300
        },
        numbers: {
          margin: 5.0,
          positions: [310.0, 190.0, 430.0, 140.0, 480.0]
        },
        animateSelectedOnly: true,
        fadeNonSelected: true
      },
      symbol: {
        width: 128.0,
        height: 128.0,
        fps: 15.0         // animation speed of the winning animation of the symbol
      },
      scatter: {
        id: '7',
        minCount: '3'
      },
      reels: {
        x: 99.0,
        y: 140.0,
        gap: 7.0,
        count: 5,
        countOfVisibleSymbols: 3,
        countOfHiddenSymbolsAbove: 1,
        countOfHiddenSymbolsBelow: 1
      },
      throbber: {
        offsetX: -18.0,
        offsetY: 37.0
      },
      winSounds: {
        /* sequence ids refer to media.SoundType */
        regular: {
          sequence: ['soundType.csengoShort', 'soundType.bigWin'] //TODO: @MF: if this is only a single one, the win animation will stop
        },
        scatter: {
          sequence: ['soundType.csengoShort', 'soundType.smallWin']
        },
        high: {
          reelCountThreshold: 4,
          sequence: ['soundType.csengo', 'soundType.bigWin']
        },
        huge: {
          reelCountThreshold: 5,  // never hit: 3 reel game
          sequence: ['soundType.csengoLong', 'soundType.congratulations', 'soundType.bigWin']
        }
      },
      timing: { // devbbq timing of how fast the symbols pass by & how long that takes alltogether
        speed: {
          correctionFactor: 1.08,
          symbolsPerSecond: 16.2
        },
        windup: {
          distance: -37.0,
          duration: 0.08,
          delay: 0.06
        },
        overshoot: {
          distance: 35.0,
          duration: 0.15
        },
        speedup: {
          duration: 0.4,
          timeScale: 0.65
        },
        slowdown: {
          distance: 40.0,
          timeScale: 0.65
        }
      }
    }
  }
};
/* eslint-enable */
/* jshint ignore:end */
