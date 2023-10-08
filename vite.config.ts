import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'te-shared-web',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React'
        }
      },
      external: [
        "react", 
        "@chakra-ui/react", 
        "react-dom"
      ],
    }
  },
  plugins: [
    dts({ insertTypesEntry: true })
  ]
})