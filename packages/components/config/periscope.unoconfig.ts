import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno'

export default {
    shortcuts: [
      { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
    ],
    presets: [
      presetUno(),
      presetAttributify(),
    ],
  }