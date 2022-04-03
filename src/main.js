import Phaser from './lib/phaser.js'

/* importando as cenas */
import Game from './scenes/Game.js'
import Start from './scenes/Start.js'
import Pause from './scenes/Pause.js'
import Menu from './scenes/Menu.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    scene: [Start, Game, Pause, Menu],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1000
            },
            debug: true
        }
    }
})