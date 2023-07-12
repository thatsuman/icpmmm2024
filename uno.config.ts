import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Rubik:400,600',
        serif: 'Overpass:400,500,600',
        mono: 'Fira Code',
      },
    }),
    presetIcons({
      collections: {
        iconoir: () =>
          import('@iconify-json/iconoir/icons.json').then(
            (i) => i.default as any
          ),
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
