const RenJSConfig =  {
  'w': 800,
  'h': 600,
  'guiConfig': 'story/GUI.yaml',
  'storySetup': 'story/Setup.yaml',
  'storyConfig': 'story/Config.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'name': 'Tutorial',
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'splash': {
    'loadingScreen': 'assets/gui/loaderloaderbackground.png',
    'loadingBar': {
      'asset': 'assets/gui/loaderloading-bar.png',
      'position': {
        'x': 109,
        'y': 458
      },
      'size': {
        'w': 578,
        'h': 82
      }
    }
  },
  'fonts': 'assets/gui/fonts.css'
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
